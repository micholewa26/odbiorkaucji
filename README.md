# OdbiórKaucji.pl

Landing walidacyjny usługi odbioru opakowań kaucyjnych spod drzwi (Warszawa).
Stack: Vite + React + TypeScript + Tailwind. Hosting: GitHub Pages + domena
`odbiorkaucji.pl`.

## Uruchomienie lokalne

```
npm install
npm run dev      # http://localhost:5173
npm run build    # produkcyjny build do dist/
```

## Przed startem kampanii — checklista

1. **Formularz (Formspree)** — załóż darmowe konto na https://formspree.io
   (konto na vectorbaltic@gmail.com), utwórz formularz i skopiuj jego ID.
   Podmień `TWOJ_ID` w `src/data/content.ts` (stała `FORM_ENDPOINT`).
   Zgłoszenia będą przychodzić na maila i zapisywać się w tabeli w panelu
   Formspree (darmowy plan: 50 zgłoszeń/mies.).
2. **Repozytorium GitHub** — utwórz repo i wypchnij kod:
   ```
   git remote add origin https://github.com/<user>/odbiorkaucji.git
   git push -u origin main
   ```
   W ustawieniach repo: Settings → Pages → Source: **GitHub Actions**.
   Workflow `.github/workflows/deploy.yml` buduje i publikuje przy każdym
   pushu na `main`.
3. **Domena** — po zakupie `odbiorkaucji.pl`:
   - u rejestratora dodaj rekordy A dla `odbiorkaucji.pl` na IP GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     oraz CNAME `www` → `<user>.github.io`,
   - w Settings → Pages wpisz custom domain `odbiorkaucji.pl` i włącz
     „Enforce HTTPS" (plik `public/CNAME` już jest w repo).
4. **Treści** — wszystkie teksty i stawki są w `src/data/content.ts`
   (m.in. opłata serwisowa `serviceFee: 0.12` — do zmiany w jednym miejscu;
   pamiętaj wtedy też o tekstach w `rates.feeNote` i FAQ).
5. **Mail kontaktowy** — na stronie i w dokumentach widnieje
   `kontakt@odbiorkaucji.pl`; skonfiguruj skrzynkę/przekierowanie u
   rejestratora domeny albo podmień adres w `src/data/content.ts`.

## Podstrony

- `/#/regulamin` — regulamin serwisu
- `/#/polityka-prywatnosci` — polityka prywatności (linkowana też przy
  checkboksie zgody w formularzu — tego linku wymaga Facebook Ads)
