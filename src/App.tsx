import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Rates from "./components/Rates";
import Payout from "./components/Payout";
import Compare from "./components/Compare";
import Business from "./components/Business";
import Faq from "./components/Faq";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Minimal hash router: "#/..." renders a legal subpage, anything else the
// landing (plain "#sekcja" hashes keep working as scroll anchors).
function useRoute() {
  const [route, setRoute] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash);
      if (window.location.hash.startsWith("#/")) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();

  if (route === "#/polityka-prywatnosci") return <Privacy />;
  if (route === "#/regulamin") return <Terms />;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Rates />
        <Payout />
        <Compare />
        <Business />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
