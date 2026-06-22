import type { Metadata } from "next";
import { EnvelopeSimple, Lifebuoy, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: { absolute: "Contact SafeStop | Child Car Safety App Support" },
  description: "Contact SafeStop for support, questions, privacy requests, and child car safety app assistance.",
  alternates: { canonical: "https://safestop.global/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero-glow noise relative border-b border-[#e1eeeb] pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Header />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f756e]">Support and partnerships</p>
          <h1 className="mt-4 text-5xl font-bold tracking-[-0.06em] text-ink sm:text-7xl">Contact SafeStop</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526b79]">Have a question, need support, or want to reach the SafeStop team? Send us a message and we’ll get back to you as soon as possible.</p>
        </div>
      </section>

      <section className="bg-[#f7fbfa] py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <aside className="rounded-[2rem] bg-ink p-7 text-white sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#67e1c0]"><EnvelopeSimple size={26} weight="fill" /></span>
            <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em]">Email SafeStop</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">For app support, privacy requests, partnerships, or general questions.</p>
            <a
              href="mailto:yehuda@safestop.global"
              className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-ink transition hover:bg-[#eaf5f2] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#67e1c0]"
            >
              yehuda@safestop.global
            </a>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-7 text-sm text-white/70">
              <p className="flex items-center gap-3"><Lifebuoy size={19} className="text-[#67e1c0]" /> Product and account support</p>
              <p className="flex items-center gap-3"><UsersThree size={19} className="text-[#67e1c0]" /> Partners and Apple reviewers</p>
            </div>
          </aside>

          <div>
            <h2 className="mb-5 text-2xl font-bold tracking-[-0.03em] text-ink">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
