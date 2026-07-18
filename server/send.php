<?php
/**
 * Endpoint formularza odbiorkaucji.pl — hosting home.pl.
 * Wgraj do katalogu subdomeny api.odbiorkaucji.pl razem z katalogiem data/
 * (z plikiem .htaccess blokującym dostęp z zewnątrz).
 *
 * Robi trzy rzeczy: walidacja + antyspam, dopisanie zgłoszenia do CSV,
 * mail na skrzynkę operatora.
 */

const MAIL_TO = 'odbior.kaucji@outlook.com';
const MAIL_FROM = 'formularz@odbiorkaucji.pl';
const ALLOWED_ORIGINS = [
    'https://odbiorkaucji.pl',
    'https://www.odbiorkaucji.pl',
];
const RATE_LIMIT = 5;        // zgłoszeń…
const RATE_WINDOW = 3600;    // …na godzinę z jednego IP
const DATA_DIR = __DIR__ . '/data';

// --- CORS ---------------------------------------------------------------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Accept, Content-Type');
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

// --- Antyspam: honeypot -------------------------------------------------
if (!empty($_POST['firma_www'])) {
    // Bot wypełnił ukryte pole — udajemy sukces, nic nie zapisujemy.
    echo json_encode(['ok' => true]);
    exit;
}

// --- Rate limit per IP --------------------------------------------------
if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = DATA_DIR . '/rate_' . md5($ip) . '.txt';
$now = time();
$hits = [];
if (is_file($rateFile)) {
    $hits = array_filter(
        array_map('intval', file($rateFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES)),
        fn ($t) => $t > $now - RATE_WINDOW
    );
}
if (count($hits) >= RATE_LIMIT) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'rate']);
    exit;
}
$hits[] = $now;
file_put_contents($rateFile, implode("\n", $hits), LOCK_EX);

// --- Walidacja ----------------------------------------------------------
$field = fn (string $k) => trim((string) ($_POST[$k] ?? ''));

$imie      = mb_substr($field('imie'), 0, 100);
$telefon   = mb_substr($field('telefon'), 0, 30);
$email     = mb_substr($field('email'), 0, 200);
$adres     = mb_substr($field('adres'), 0, 200);
$dzielnica = mb_substr($field('dzielnica'), 0, 50);
$opakowania = (int) $field('liczba_opakowan');
$typ       = mb_substr($field('typ_klienta'), 0, 20);
$uwagi     = mb_substr($field('uwagi'), 0, 1000);
$zgoda     = $field('zgoda');

if ($imie === '' || $telefon === '' || $adres === '' || $dzielnica === ''
    || $opakowania < 80 || $zgoda !== 'tak'
    || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation']);
    exit;
}

// --- Zapis do CSV (tabela zgłoszeń) ------------------------------------
$csvFile = DATA_DIR . '/zgloszenia.csv';
$isNew = !is_file($csvFile);
$fh = fopen($csvFile, 'ab');
if ($fh) {
    if ($isNew) {
        // BOM, żeby Excel poprawnie otwierał UTF-8.
        fwrite($fh, "\xEF\xBB\xBF");
        fputcsv($fh, ['data', 'imie', 'telefon', 'email', 'adres', 'dzielnica', 'liczba_opakowan', 'typ_klienta', 'uwagi', 'ip'], ';');
    }
    fputcsv($fh, [date('Y-m-d H:i:s'), $imie, $telefon, $email, $adres, $dzielnica, $opakowania, $typ, $uwagi, $ip], ';');
    fclose($fh);
}

// --- Mail do operatora --------------------------------------------------
$body = "Nowe zgłoszenie odbioru — odbiorkaucji.pl\n\n"
    . "Imię:             $imie\n"
    . "Telefon:          $telefon\n"
    . "E-mail:           $email\n"
    . "Adres:            $adres\n"
    . "Dzielnica:        $dzielnica\n"
    . "Liczba opakowań:  ~$opakowania\n"
    . "Typ klienta:      $typ\n"
    . "Uwagi:            $uwagi\n\n"
    . "Data: " . date('Y-m-d H:i:s') . "\nIP: $ip\n";

$subject = '=?UTF-8?B?' . base64_encode("Zgłoszenie odbioru: $dzielnica (~$opakowania opak.)") . '?=';
$headers = 'From: ' . MAIL_FROM . "\r\n"
    . 'Reply-To: ' . $email . "\r\n"
    . "MIME-Version: 1.0\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: 8bit";

$sent = mail(MAIL_TO, $subject, $body, $headers);

// Zgłoszenie jest już w CSV, więc nawet przy problemie z mailem zwracamy OK.
echo json_encode(['ok' => true, 'mail' => (bool) $sent]);
