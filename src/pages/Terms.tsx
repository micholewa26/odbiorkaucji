import LegalLayout from "./LegalLayout";
import { site } from "../data/content";

export default function Terms() {
  return (
    <LegalLayout title="Regulamin serwisu">
      <section>
        <h2>§1. Postanowienia ogólne</h2>
        <ol>
          <li>
            Niniejszy regulamin określa zasady korzystania z serwisu internetowego
            dostępnego pod adresem {site.domain} (dalej: „Serwis").
          </li>
          <li>
            Serwis służy do zgłaszania zainteresowania usługą odbioru opakowań objętych
            systemem kaucyjnym z lokalizacji wskazanej przez zgłaszającego (dalej:
            „Usługa").
          </li>
          <li>
            Usługa znajduje się w fazie pilotażowej i jest uruchamiana etapami na
            wybranych obszarach {`m.st. Warszawy`} i okolic.
          </li>
        </ol>
      </section>

      <section>
        <h2>§2. Zgłoszenia</h2>
        <ol>
          <li>Przesłanie zgłoszenia przez formularz jest bezpłatne i niezobowiązujące.</li>
          <li>
            Zgłoszenie nie stanowi zawarcia umowy — jest zaproszeniem do kontaktu w celu
            ustalenia warunków i terminu odbioru.
          </li>
          <li>
            Operator Serwisu zastrzega sobie prawo do odmowy realizacji odbioru bez
            podania przyczyny, w szczególności poza obsługiwanym obszarem lub przy braku
            dostępności kurierów.
          </li>
          <li>Zgłoszenie można wycofać w każdej chwili wiadomością na {site.email}.</li>
        </ol>
      </section>

      <section>
        <h2>§3. Zasady odbioru i rozliczenia</h2>
        <ol>
          <li>
            Odbiorowi podlegają wyłącznie opakowania objęte systemem kaucyjnym, spakowane
            w szczelnie zawiązane worki. Opakowania nie mogą być zgniecione w sposób
            uniemożliwiający odczyt kodu kreskowego.
          </li>
          <li>
            Liczba i rodzaj opakowań są weryfikowane po odbiorze. Podstawą rozliczenia
            jest liczba opakowań faktycznie przyjętych i pozytywnie zweryfikowanych.
          </li>
          <li>
            Kwota do wypłaty stanowi sumę kaucji za przyjęte opakowania pomniejszoną o
            opłatę serwisową, której aktualna wysokość jest podana w Serwisie w chwili
            zgłoszenia.
          </li>
          <li>
            Opakowania odrzucone podczas weryfikacji (nieobjęte systemem, uszkodzone,
            nieczytelne) nie podlegają zwrotowi kaucji i mogą zostać przekazane do
            recyklingu.
          </li>
        </ol>
      </section>

      <section>
        <h2>§4. Odpowiedzialność</h2>
        <ol>
          <li>
            Operator dokłada starań, aby Serwis działał poprawnie, jednak nie gwarantuje
            jego nieprzerwanej dostępności.
          </li>
          <li>
            Operator nie ponosi odpowiedzialności za treść danych podanych w formularzu
            przez zgłaszającego.
          </li>
          <li>
            Terminy odbioru i wypłaty mają charakter orientacyjny i mogą ulec zmianie z
            przyczyn operacyjnych.
          </li>
        </ol>
      </section>

      <section>
        <h2>§5. Reklamacje</h2>
        <ol>
          <li>
            Reklamacje dotyczące Usługi można składać na adres {site.email}. Odpowiadamy w
            terminie 14 dni.
          </li>
        </ol>
      </section>

      <section>
        <h2>§6. Postanowienia końcowe</h2>
        <ol>
          <li>
            Operator może zmienić regulamin. Zmiany obowiązują od chwili opublikowania w
            Serwisie i nie dotyczą zgłoszeń przesłanych przed zmianą.
          </li>
          <li>W sprawach nieuregulowanych stosuje się przepisy prawa polskiego.</li>
        </ol>
      </section>
    </LegalLayout>
  );
}
