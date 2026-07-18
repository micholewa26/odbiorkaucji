import LegalLayout from "./LegalLayout";
import { site } from "../data/content";

export default function Privacy() {
  return (
    <LegalLayout title="Polityka prywatności">
      <section>
        <h2>1. Informacje ogólne</h2>
        <p>
          Niniejsza polityka dotyczy serwisu internetowego dostępnego pod adresem{" "}
          {site.domain} (dalej: „Serwis"). Operatorem Serwisu i administratorem danych
          osobowych zbieranych za jego pośrednictwem jest operator Serwisu, z którym
          kontakt możliwy jest pod adresem e-mail: {site.email}.
        </p>
      </section>

      <section>
        <h2>2. Jakie dane zbieramy</h2>
        <p>Serwis zbiera wyłącznie dane podane dobrowolnie w formularzu zgłoszeniowym:</p>
        <ul>
          <li>imię,</li>
          <li>adres e-mail,</li>
          <li>numer telefonu,</li>
          <li>dzielnicę / okolicę,</li>
          <li>informacje podane w polu „Uwagi".</li>
        </ul>
        <p>
          Serwis nie wymaga zakładania konta ani logowania. Nie zbieramy danych
          szczególnych kategorii.
        </p>
      </section>

      <section>
        <h2>3. Cel i podstawa przetwarzania</h2>
        <p>
          Dane z formularza przetwarzamy wyłącznie w celu kontaktu zwrotnego i obsługi
          zgłoszenia odbioru opakowań kaucyjnych (podstawa: art. 6 ust. 1 lit. a i b
          RODO — zgoda oraz działania zmierzające do zawarcia umowy). Podanie danych
          jest dobrowolne, ale konieczne do obsługi zgłoszenia.
        </p>
      </section>

      <section>
        <h2>4. Jak długo przechowujemy dane</h2>
        <p>
          Dane przechowujemy przez okres niezbędny do obsługi zgłoszenia, nie dłużej niż
          12 miesięcy od jego przesłania, chyba że wcześniej cofniesz zgodę.
        </p>
      </section>

      <section>
        <h2>5. Odbiorcy danych</h2>
        <p>
          Dane z formularza trafiają bezpośrednio na serwer operatora Serwisu
          (hosting home.pl S.A.) i na skrzynkę e-mail operatora. Dane nie są
          sprzedawane ani udostępniane innym podmiotom w celach marketingowych.
        </p>
      </section>

      <section>
        <h2>6. Twoje prawa</h2>
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
          przetwarzania, przenoszenia oraz cofnięcia zgody w dowolnym momencie — wystarczy
          wiadomość na {site.email}. Przysługuje Ci też skarga do Prezesa Urzędu Ochrony
          Danych Osobowych.
        </p>
      </section>

      <section>
        <h2>7. Pliki cookies</h2>
        <p>
          Serwis nie używa plików cookies ani narzędzi analitycznych wymagających zgody.
          Jeżeli to się zmieni, polityka zostanie zaktualizowana, a stosowna zgoda —
          odebrana przed uruchomieniem takich narzędzi.
        </p>
      </section>

      <section>
        <h2>8. Zmiany polityki</h2>
        <p>
          Polityka może być aktualizowana wraz z rozwojem Serwisu. Aktualna wersja jest
          zawsze dostępna pod adresem {site.domain}.
        </p>
      </section>
    </LegalLayout>
  );
}
