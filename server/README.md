# Backend formularza — wdrożenie (home.pl)

Zgłoszenia z formularza lecą POST-em na
`https://serwer2626989.hosting-home.pl/api_odbiorkaucji/send.php`
(techniczny adres serwera — ma gotowy SSL od home.pl, więc żadna subdomena
nie jest potrzebna). Skrypt zapisuje każde zgłoszenie do
`data/zgloszenia.csv` (tabela otwierana w Excelu) i wysyła maila na
**odbior.kaucji@outlook.com**.

## Serwer

Hosting home.pl: `serwer2626989.hosting-home.pl`, konto FTP `kaucjaformularz`
(dostęp do całego serwera), PHP 8.5.

## Wdrożenie

Upload: `powershell -ExecutionPolicy Bypass -File server\deploy.ps1`
(host i login są domyślne; hasło podajesz przy uruchomieniu). Skrypt tworzy
`/api_odbiorkaucji` i wgrywa `send.php` + `data/.htaccess`.

Test: wyślij zgłoszenie ze strony — powinno przyjść na outlooka (sprawdź
też SPAM) i pojawić się w `data/zgloszenia.csv`.

## Uwagi

- Skrypt przyjmuje żądania tylko z `https://odbiorkaucji.pl` (CORS) — testy
  z localhosta nie przejdą; do testów dev dopisz tymczasowo
  `http://localhost:5173` do `ALLOWED_ORIGINS`.
- Limit antyspamowy: 5 zgłoszeń/h z jednego IP + honeypot.
- Maile na Outlooka z hostingów współdzielonych lubią wpadać do SPAM-u.
  Jeśli tak będzie: w panelu home.pl załóż skrzynkę
  `formularz@odbiorkaucji.pl` i sprawdź, czy DNS domeny ma rekord SPF home.pl
  (`v=spf1 include:_spf.home.pl ~all` — przy DNS na home.pl zwykle jest
  automatycznie). CSV i tak zbiera wszystko niezależnie od maila.
- Pobranie tabeli: WebFTP → `data/zgloszenia.csv` (z przeglądarki się nie da —
  celowo zablokowane).
