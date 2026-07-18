<?php
/**
 * Prosty podgląd ruchu z data/ruch.csv (licznik z hit.php).
 * Dostęp tylko z kluczem: stats.php?key=...
 */

const KEY = 'PNgoQyLTfeYn7F6TpbqNMagcJfaNje7fo9AorAKz';
const CSV = __DIR__ . '/data/ruch.csv';

if (!hash_equals(KEY, (string) ($_GET['key'] ?? ''))) {
    http_response_code(403);
    exit('Brak dostępu');
}

header('Content-Type: text/html; charset=utf-8');

$rows = [];
if (is_file(CSV)) {
    $fh = fopen(CSV, 'rb');
    while (($r = fgetcsv($fh, 0, ';')) !== false) {
        if (count($r) >= 2) {
            $rows[] = $r;
        }
    }
    fclose($fh);
}

$total = count($rows);
$byDay = [];
$byRef = [];
foreach ($rows as $r) {
    $day = substr($r[0], 0, 10);
    $byDay[$day] = ($byDay[$day] ?? 0) + 1;
    $ref = trim($r[2] ?? '');
    if ($ref === '') {
        $ref = '(wejście bezpośrednie)';
    } else {
        $host = parse_url($ref, PHP_URL_HOST) ?: $ref;
        $ref = preg_replace('/^www\./', '', $host);
    }
    $byRef[$ref] = ($byRef[$ref] ?? 0) + 1;
}
krsort($byDay);
arsort($byRef);
$byDay = array_slice($byDay, 0, 60, true);
$byRef = array_slice($byRef, 0, 20, true);

$e = fn ($s) => htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
?>
<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Ruch — odbiorkaucji.pl</title>
<style>
  body { font-family: system-ui, sans-serif; background: #0b1512; color: #eee; margin: 2rem; }
  h1 { font-size: 1.3rem; } h2 { font-size: 1rem; margin-top: 2rem; color: #7fdbb0; }
  table { border-collapse: collapse; min-width: 320px; }
  td, th { padding: .35rem .8rem; border-bottom: 1px solid #23352d; text-align: left; }
  td:last-child { text-align: right; font-variant-numeric: tabular-nums; }
  .big { font-size: 2.2rem; color: #2fd98a; font-weight: 700; }
</style>
</head>
<body>
<h1>Ruch — odbiorkaucji.pl</h1>
<p>Łącznie odsłon: <span class="big"><?= $total ?></span></p>

<h2>Odsłony wg dnia</h2>
<table>
<tr><th>Dzień</th><th>Odsłony</th></tr>
<?php foreach ($byDay as $day => $n): ?>
<tr><td><?= $e($day) ?></td><td><?= $n ?></td></tr>
<?php endforeach; ?>
</table>

<h2>Źródła (top 20)</h2>
<table>
<tr><th>Źródło</th><th>Odsłony</th></tr>
<?php foreach ($byRef as $ref => $n): ?>
<tr><td><?= $e($ref) ?></td><td><?= $n ?></td></tr>
<?php endforeach; ?>
</table>
</body>
</html>
