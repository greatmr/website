import { notFound } from "next/navigation";
import { BookShell } from "@/components/book/BookShell";
import { HomeSpread } from "@/components/spreads/HomeSpread";
import { LogoSpread } from "@/components/spreads/LogoSpread";
import { AboutSpread } from "@/components/spreads/AboutSpread";
import { MoodSpread } from "@/components/spreads/MoodSpread";
import { ContactSpread } from "@/components/spreads/ContactSpread";
import { SPREADS } from "@/lib/spreads";

export function generateStaticParams() {
  const sided = SPREADS.flatMap((s, i) =>
    i === 0 ? [] : [{ slug: [s.id] }, { slug: [s.id, "right"] }],
  );
  return [{ slug: [] }, ...sided];
}

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function HomePage({ params }: PageProps) {
  const { slug } = await params;
  const id = slug?.[0] ?? "portfolio";
  const sideSeg = slug?.[1];

  if (!SPREADS.some((s) => s.id === id)) notFound();
  if (sideSeg && sideSeg !== "right") notFound();

  const spreads = [
    { id: "portfolio", label: "Portfolio", node: <LogoSpread /> },
    { id: "home", label: "Home", node: <HomeSpread /> },
    { id: "about", label: "About", node: <AboutSpread /> },
    { id: "more", label: "More about", node: <MoodSpread /> },
    { id: "contact", label: "Contact", node: <ContactSpread /> },
  ];

  return <BookShell spreads={spreads} initialSpreadId={id} />;
}
