# Backend formularza — instrukcja wdrożenia (home.pl)

Zgłoszenia z formularza lecą POST-em na `https://api.odbiorkaucji.pl/send.php`.
Skrypt zapisuje każde zgłoszenie do `data/zgloszenia.csv` (tabela otwierana
w Excelu) i wysyła maila na **odbior.kaucji@outlook.com**.

## Kroki w panelu home.pl (~5 minut)

1. **Subdomena**: Usługi WWW → Subdomeny → dodaj `api` dla `odbiorkaucji.pl`,
   wskaż katalog np. `/api_odbiorkaucji`.
2. **Upload**: przez WebFTP (albo FTP) wgraj do tego katalogu:
   - `send.php`
   - katalog `data/` z plikiem `.htaccess` (blokuje publiczny dostęp do CSV)
3. **PHP**: upewnij się, że subdomena ma PHP w wersji 8.x (domyślne na home.pl).
4. **SSL**: włącz darmowy certyfikat dla subdomeny (Let's Encrypt w panelu),
   inaczej przeglądarka zablokuje request z HTTPS-owej strony.
5. **Test**: wejdź na stronę, wyślij testowe zgłoszenie. Powinno przyjść na
   outlooka (sprawdź też SPAM) i pojawić się w `data/zgloszenia.csv`.

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
