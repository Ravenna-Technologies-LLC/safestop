import Link from "next/link";
import { ArrowRight, BellRinging, CheckCircle, ClockCounterClockwise, Heart, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { AppStoreButton } from "@/components/app-store-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PhonePreview } from "@/components/phone-preview";

const steps = [
  { number: "01", title: "Check in", text: "Add each child when you start a drive to begin your safety routine.", icon: UsersThree, color: "bg-[#e3f4f0] text-[#25877c]" },
  { number: "02", title: "Stay alert", text: "Get a back seat reminder if a trip stops before child checkout.", icon: BellRinging, color: "bg-[#e4f0f7] text-[#277492]" },
  { number: "03", title: "Share safely", text: "Keep trusted partners in the loop.", icon: ShieldCheck, color: "bg-[#e7edf8] text-[#426f9a]" },
  { number: "04", title: "Check out", text: "End every trip with clear confirmation.", icon: CheckCircle, color: "bg-[#e5f5e8] text-[#38835a]" },
];

const faqs = [
  {
    question: "What is a child car safety app?",
    answer: "A child car safety app helps parents and caregivers build a consistent check-in and checkout routine for every drive. SafeStop adds trip alerts, trusted partner notifications, and history so child passengers are less likely to be overlooked.",
  },
  {
    question: "Can SafeStop help prevent a child from being left in a hot car?",
    answer: "SafeStop is designed to help reduce the risk by reminding caregivers when a drive stops before every child is checked out. It supports attentive caregiving but does not replace physically checking the vehicle after every trip.",
  },
  {
    question: "Does SafeStop work for babysitters and carpools?",
    answer: "Yes. Parents can use SafeStop with trusted partners, including babysitters, relatives, carpool drivers, and other caregivers, to create a shared child car safety routine.",
  },
  {
    question: "Are SafeStop safety features free?",
    answer: "Yes. Core child safety features remain free. The optional Premium plan removes ads and unlocks extended trip history.",
  },
  {
    question: "How can parents protect kids in cars during summer?",
    answer: "Use a consistent routine on every trip: check children in, avoid relying on memory alone, respond to back seat alerts, involve a trusted partner, and physically inspect every seat before locking the vehicle. SafeStop helps families maintain that routine during summer and throughout the year.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://safestop.global/#app",
      name: "SafeStop",
      url: "https://safestop.global",
      applicationCategory: "SafetyApplication",
      applicationSubCategory: "Child Car Safety",
      operatingSystem: "iOS",
      description: "An iOS child car safety app with back seat reminders, caregiver alerts, trusted partner notifications, and child checkout confirmation.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: "Ravenna Technologies LLC", url: "https://safestop.global" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="hero-glow noise relative min-h-[760px] overflow-hidden pb-24 pt-32 sm:pt-36 lg:min-h-[820px] lg:pb-28 lg:pt-44">
        <Header />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 lg:px-10">
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cce8e2] bg-white/75 px-3.5 py-2 text-xs font-bold text-[#31766e] shadow-sm backdrop-blur">
              <Heart size={15} weight="fill" /> Built for the people you love most
            </div>
            <h1 className="text-[3.35rem] font-bold leading-[0.96] tracking-[-0.065em] text-ink sm:text-[4.4rem] lg:text-[5.3rem]">
              Never forget<br className="hidden sm:block" /> who&apos;s in the car.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-7 text-[#536d7f] sm:text-lg lg:mx-0 lg:text-xl lg:leading-8">
              SafeStop is an iOS child car safety app that helps parents and caregivers check children in and out, receive back seat reminders, notify trusted partners, and keep trip history for peace of mind.
            </p>
            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <AppStoreButton />
              <div className="flex items-center gap-4 text-sm font-semibold text-[#536d7f]">
                <Link href="/privacy" className="hover:text-ink">Privacy</Link><span className="h-1 w-1 rounded-full bg-[#9bb0bb]" />
                <Link href="/terms" className="hover:text-ink">Terms</Link>
              </div>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-[#718795] lg:justify-start">
              <ShieldCheck size={15} weight="fill" className="text-teal" /> Core safety features are always free
            </p>
          </div>
          <div className="relative z-10 px-7 pt-3 sm:px-14 lg:px-6"><PhonePreview /></div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Simple by design</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">How SafeStop works</h2>
            <p className="mt-5 text-lg leading-8 text-[#607787]">Four simple moments create a shared child car safety routine and help reduce the risk of a child being left in a parked vehicle.</p>
          </div>
          <div className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden border-t border-dashed border-[#bcd8d4] lg:block" />
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="relative rounded-[1.75rem] border border-[#e1eeeb] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.color}`}><Icon size={27} weight="fill" /></div>
                  <p className="mt-7 text-xs font-bold tracking-[0.16em] text-[#8ba0ac]">{step.number}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#607787]">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfa] py-24 sm:py-32" aria-labelledby="hot-car-safety-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Summer child car safety, explained</p>
              <h2 id="hot-car-safety-heading" className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-ink sm:text-5xl">A smarter routine to help prevent hot car tragedies.</h2>
              <p className="mt-6 text-base leading-7 text-[#607787]">A forgotten change in routine can happen to any caregiver, especially during busy summer schedules. SafeStop creates an extra layer of awareness with child check-in, trip-stop alerts, trusted partner notifications, and checkout confirmation to help protect children from hot cars.</p>
              <p className="mt-4 text-sm leading-6 text-[#718795]">SafeStop supports attentive caregiving. Always physically check the entire vehicle after every trip.</p>
            </div>
            <div className="grid gap-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-[#e0ece9] bg-white p-6 shadow-card">
                  <h3 className="text-lg font-bold tracking-[-0.025em] text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#607787]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="for-every-family" className="bg-[#f2f9f7] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative min-h-[410px] overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-[#d8f1eb] via-[#e7f5f5] to-[#dcebf4] p-7 sm:p-10">
            <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full border-[40px] border-white/30" />
            <div className="relative z-10 grid h-full grid-cols-2 gap-4">
              {[
                ["Parents", "The everyday school run", "bg-white"],
                ["Carpools", "Shared rides, shared clarity", "bg-[#176b87] text-white"],
                ["Babysitters", "Confidence for handoffs", "bg-[#2d9b91] text-white"],
                ["Caregivers", "A routine everyone can follow", "bg-white"],
              ].map(([title, text, style], index) => (
                <div key={title} className={`flex min-h-36 flex-col justify-end rounded-[1.6rem] p-5 shadow-card ${style} ${index % 2 ? "translate-y-5" : ""}`}>
                  <span className={`mb-auto flex h-9 w-9 items-center justify-center rounded-full ${style === "bg-white" ? "bg-[#e3f4f0] text-teal" : "bg-white/15 text-white"}`}><UsersThree size={19} weight="fill" /></span>
                  <h3 className="font-bold tracking-[-0.02em]">{title}</h3><p className={`mt-1 text-xs leading-5 ${style === "bg-white" ? "text-[#68808f]" : "text-white/70"}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Made for real life</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-ink sm:text-5xl">Built for every person behind the wheel.</h2>
            <p className="mt-6 text-lg leading-8 text-[#607787]">Parents, carpools, babysitters, and caregivers all get one clear routine—without complicated setup or second guessing.</p>
            <a href="#APP_STORE_LINK_HERE" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-ink">See how SafeStop fits your family <ArrowRight size={16} weight="bold" /></a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-ink lg:grid-cols-2">
            <div className="p-8 sm:p-14 lg:p-16">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#57d4b4]/15 text-[#67e1c0]"><ShieldCheck size={26} weight="fill" /></span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#67e1c0]">Safety comes first</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-white sm:text-5xl">The essentials stay free. Always.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/65">Checking in, safety alerts, partner sharing, and checkout confirmation remain free—because peace of mind shouldn&apos;t be behind a paywall.</p>
            </div>
            <div className="relative bg-gradient-to-br from-[#1e7791] to-[#2b9a8e] p-8 sm:p-14 lg:p-16">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white"><ClockCounterClockwise size={26} weight="fill" /></span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/65">SafeStop Premium</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-white sm:text-5xl">More history. Zero ads.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70">Premium removes ads and unlocks extended trip history for families who want a little more context.</p>
              <div className="mt-7 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">Optional, never required</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
        <div className="noise mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#dff4ef] px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.055em] text-ink sm:text-6xl">Every trip, accounted for.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#536d7f]">Build a safer driving routine with the people you trust.</p>
          <AppStoreButton className="mt-8" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
