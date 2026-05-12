import { BookShell } from "@/components/book/BookShell";
import { HomeSpread } from "@/components/spreads/HomeSpread";
import { LogoSpread } from "@/components/spreads/LogoSpread";
import { AboutSpread } from "@/components/spreads/AboutSpread";
import { MoodSpread } from "@/components/spreads/MoodSpread";
import { ContactSpread } from "@/components/spreads/ContactSpread";

export default function HomePage() {
  const spreads = [
    { id: "portfolio", label: "Portfolio", node: <LogoSpread /> },
    { id: "home", label: "Home", node: <HomeSpread /> },
    { id: "about", label: "About", node: <AboutSpread /> },
    { id: "more", label: "More about", node: <MoodSpread /> },
    { id: "contact", label: "Contact", node: <ContactSpread /> },
  ];

  return <BookShell spreads={spreads} />;
}
