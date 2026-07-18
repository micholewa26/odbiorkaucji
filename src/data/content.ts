// Cała treść strony w jednym miejscu — edytuj tu, nie w komponentach.

export const site = {
  name: "OdbiórKaucji.pl",
  domain: "odbiorkaucji.pl",
  email: "kontakt@odbiorkaucji.pl",
  city: "Warszawa",
};

// Endpoint formularza — własny skrypt PHP na hostingu home.pl, serwowany
// z technicznego adresu serwera (ma gotowy SSL, bez konfiguracji subdomeny).
// Źródło w server/send.php. Zgłoszenia idą mailem na skrzynkę operatora
// i dopisują się do CSV na serwerze.
export const FORM_ENDPOINT =
  "https://serwer2626989.hosting-home.pl/api_odbiorkaucji/send.php";

// Parametry rozliczenia — do kalkulatora i sekcji stawek.
export const pricing = {
  deposit: 0.5, // kaucja za butelkę PET do 3 l i puszkę do 1 l
  serviceFee: 0.12, // nasza opłata serwisowa za opakowanie
  minItems: 80, // minimalna liczba opakowań w kalkulatorze
  stepItems: 10, // krok kalkulatora
  maxItems: 1000,
};

// Filmy + zdjęcia (public/media/).
export const media = {
  handover: {
    video: "media/oddanie.mp4",
    poster: "media/oddanie.jpg",
    caption: "Kurier odbiera worek spod drzwi",
  },
  payout: {
    video: "media/wyplata.mp4",
    poster: "media/wyplata.jpg",
    caption: "Kaucja ląduje na koncie",
  },
};

export const hero = {
  badge: "Nowość w Warszawie",
  title: "Kaucja wraca na Twoje konto. Butelki zabieramy spod drzwi.",
  subtitle:
    "Pakujesz butelki i puszki do worka, zgłaszasz odbiór, a resztą zajmujemy się my: kurier, liczenie opakowań i wypłata kaucji. Bez sklepu, bez kolejek, bez recyklomatu.",
  cta: "Zgłoś odbiór",
  ctaSecondary: "Zobacz, jak to działa",
};

export const steps = {
  eyebrow: "Jak to działa",
  title: "Cztery kroki i kaucja jest Twoja",
  items: [
    {
      title: "Pakujesz worek",
      body: "Butelki plastikowe i puszki wrzucasz do zwykłego worka 60–240 l. Nie musisz niczego liczyć ani skanować.",
    },
    {
      title: "Zgłaszasz odbiór",
      body: "W formularzu podajesz adres i szacunkową liczbę opakowań. Zgłoszenie jest darmowe i niezobowiązujące.",
    },
    {
      title: "Kurier zabiera worki",
      body: "Odbieramy spod drzwi mieszkania, domu, biura albo lokalu — w umówionym oknie czasowym.",
    },
    {
      title: "Wypłacamy kaucję",
      body: "Liczymy i weryfikujemy opakowania, a należna kaucja pomniejszona o opłatę serwisową trafia przelewem na Twoje konto.",
    },
  ],
};

export const rates = {
  eyebrow: "Stawki",
  title: "Ile odzyskasz?",
  subtitle:
    "Stawki kaucji wynikają z ustawy — oddajemy je w całości, potrącamy tylko opłatę serwisową za obsługę.",
  items: [
    { label: "Butelka plastikowa do 3 l", value: "0,50 zł" },
    { label: "Puszka metalowa do 1 l", value: "0,50 zł" },
  ],
  feeNote: "Opłata serwisowa: 0,12 zł za opakowanie — naliczana dopiero po odbiorze.",
  glassNote: "Na start odbieramy tylko plastik i puszki — butelek szklanych na razie nie przyjmujemy.",
};

export const compare = {
  eyebrow: "Porównanie",
  title: "Sklep i recyklomat kontra odbiór spod drzwi",
  classic: {
    heading: "Zwrot w sklepie",
    points: [
      "Dźwigasz worki do sklepu lub recyklomatu",
      "Automat bywa pełny albo zepsuty",
      "Wrzucasz opakowania pojedynczo",
      "Dostajesz bon do wykorzystania w sklepie",
      "Bon ma krótki termin ważności",
    ],
  },
  ours: {
    heading: "OdbiórKaucji.pl",
    points: [
      "Kurier przyjeżdża pod Twoje drzwi",
      "Termin wybierasz sam — bez kolejek",
      "Wszystko w jednym worku, my liczymy",
      "Gotówka przelewem na Twoje konto",
      "Rozliczenie dostajesz na maila",
    ],
  },
};

export const business = {
  eyebrow: "Dla firm",
  title: "Restauracje, biura, hotele, wspólnoty",
  subtitle:
    "Puste opakowania nie muszą zalegać na zapleczu. Ustalamy cykliczne odbiory i przejmujemy cały proces rozliczenia kaucji.",
  points: [
    "Stały harmonogram odbiorów dopasowany do lokalu",
    "Zero angażowania pracowników w zwroty",
    "Zbiorcze rozliczenie i dokumentacja dla księgowości",
    "Wsparcie ewidencji odpadów i raportowania",
  ],
  cta: "Zapytaj o ofertę dla firmy",
};

export const faq = {
  eyebrow: "FAQ",
  title: "Częste pytania",
  items: [
    {
      q: "Ile to kosztuje?",
      a: "Zgłoszenie odbioru jest darmowe. Po przeliczeniu opakowań potrącamy opłatę serwisową 0,12 zł od sztuki — resztę kaucji wypłacamy na Twoje konto. Jeśli nie odbierzemy worków, nie płacisz nic.",
    },
    {
      q: "Jakie opakowania mogę oddać?",
      a: "Butelki plastikowe do 3 l i puszki metalowe do 1 l objęte systemem kaucyjnym. Butelek szklanych na razie nie przyjmujemy. Ważne: opakowań nie zgniataj — etykieta i kod kreskowy muszą być czytelne.",
    },
    {
      q: "Czy muszę liczyć albo skanować butelki?",
      a: "Nie. Wystarczy, że zapakujesz je do szczelnie zawiązanego worka. Liczeniem i weryfikacją zajmujemy się po odbiorze, a wynik rozliczenia dostajesz na maila.",
    },
    {
      q: "Kiedy dostanę pieniądze?",
      a: "Standardowo przelew wychodzi do kilku dni roboczych po przeliczeniu opakowań. W potwierdzeniu rozliczenia zobaczysz dokładną liczbę przyjętych sztuk i kwotę.",
    },
    {
      q: "Gdzie działacie?",
      a: "Startujemy w Warszawie i najbliższych okolicach. Zostaw adres w formularzu — jeśli Twoja dzielnica nie jest jeszcze obsługiwana, damy Ci znać, gdy dojedziemy.",
    },
    {
      q: "Ile opakowań minimum?",
      a: "Przyjmujemy zgłoszenia od 80 opakowań — to mniej więcej jeden pełny worek 60 l. Im więcej zgłosisz Ty i Twoi sąsiedzi, tym szybciej kurier pojawi się w okolicy.",
    },
  ],
};

export const form = {
  eyebrow: "Zgłoszenie",
  title: "Zgłoś pierwszy odbiór",
  subtitle:
    "Zostaw kontakt i powiedz nam, ile masz worków. Odezwiemy się, żeby umówić termin — zgłoszenie jest darmowe i do niczego nie zobowiązuje.",
  submit: "Wyślij zgłoszenie",
  success:
    "Dzięki! Zgłoszenie dotarło. Odezwiemy się mailem lub telefonicznie, żeby umówić odbiór.",
  error:
    "Nie udało się wysłać zgłoszenia. Spróbuj ponownie albo napisz na " + site.email + ".",
  consent:
    "Wyrażam zgodę na przetwarzanie podanych danych w celu kontaktu i obsługi zgłoszenia odbioru. Szczegóły w Polityce prywatności.",
  districts: [
    "Bemowo",
    "Białołęka",
    "Bielany",
    "Mokotów",
    "Ochota",
    "Praga-Południe",
    "Praga-Północ",
    "Rembertów",
    "Śródmieście",
    "Targówek",
    "Ursus",
    "Ursynów",
    "Wawer",
    "Wesoła",
    "Wilanów",
    "Włochy",
    "Wola",
    "Żoliborz",
    "Okolice Warszawy",
  ],
};
