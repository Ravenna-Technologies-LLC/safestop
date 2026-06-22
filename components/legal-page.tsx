import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: ReactNode }) {
  return (
    <main>
      <section className="hero-glow noise relative border-b border-[#e1eeeb] pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Header />
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-[-0.06em] text-ink sm:text-7xl">{title}</h1>
          <p className="mt-5 text-sm font-medium text-[#718795]">Last updated: {updated}</p>
        </div>
      </section>
      <article className="legal mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">{children}</article>
      <Footer />
    </main>
  );
}
