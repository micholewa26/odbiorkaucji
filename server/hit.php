<?php
/**
 * Licznik wejść — odbiorkaucji.pl. Bez cookies i bez zapisu IP (zero danych
 * osobowych). Frontend strzela tu beaconem przy wejściu na stronę.
 * Zapis do data/ruch.csv, podgląd w stats.php.
 */

const ALLOWED_ORIGINS = [
    'https://odbiorkaucji.pl',
    'https://www.odbiorkaucji.pl',
];
const DATA_DIR = __DIR__ . '/data';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    exit;
}

$path = mb_substr(trim((string) ($_POST['p'] ?? '')), 0, 200);
$ref  = mb_substr(trim((string) ($_POST['r'] ?? '')), 0, 300);
if ($path === '') {
    http_response_code(422);
    exit;
}

if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}
$fh = fopen(DATA_DIR . '/ruch.csv', 'ab');
if ($fh) {
    fputcsv($fh, [date('Y-m-d H:i:s'), $path, $ref], ';');
    fclose($fh);
}
http_response_code(204);
