import Link from "next/link";
import {
  BellRinging,
  CheckCircle,
  ClockCounterClockwise,
  Eye,
  Handshake,
  ShieldCheck,
  UserCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { AppStoreButton } from "@/components/app-store-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneFrame, PhonePreview } from "@/components/phone-preview";

const steps = [
  {
    number: "01",
    title: "Check in",
    text: "Select each child before the drive so responsibility is clear from the start.",
    icon: UsersThree,
    color: "bg-[#e3f4f0] text-[#25877c]",
  },
  {
    number: "02",
    title: "Stay aware",
    text: "Receive a back seat reminder when a trip stops before checkout is confirmed.",
    icon: BellRinging,
    color: "bg-[#e4f0f7] text-[#277492]",
  },
  {
    number: "03",
    title: "Share responsibility",
    text: "Trusted partner notifications keep parents and caregivers informed during handoffs.",
    icon: Handshake,
    color: "bg-[#e7edf8] text-[#426f9a]",
  },
  {
    number: "04",
    title: "Confirm checkout",
    text: "Complete the ride with child drop-off confirmation and a record in trip history.",
    icon: CheckCircle,
    color: "bg-[#e5f5e8] text-[#38835a]",
  },
];

const faqs = [
  {
    question: "What does SafeStop do?",
    answer: "SafeStop helps adult caregivers coordinate child transportation. Check-in, reminders, trusted partner notifications, checkout confirmation, and trip history create a shared record of who is responsible for each ride.",
  },
  {
    question: "Is SafeStop a child car safety app or a safety device?",
    answer: "SafeStop is a caregiver-awareness and child transportation coordination app. It is not a safety device, child monitoring device, emergency service, or substitute for active adult supervision.",
  },
  {
    question: "How does child drop-off confirmation work?",
    answer: "At the end of a trip, the driver checks each child out and can save a checkout photo. SafeStop records the confirmation in trip history and can notify trusted partners selected by the account owner.",
  },
  {
    question: "Can babysitters and carpool drivers use SafeStop?",
    answer: "Yes. Parents can coordinate with spouses, babysitters, grandparents, caregivers, and carpool drivers. Shared trip status supports babysitter child pickup verification, carpool child safety routines, and clearer handoffs.",
  },
  {
    question: "Is SafeStop a hot car prevention app?",
    answer: "SafeStop does not guarantee prevention or protection. Its back seat reminder app features are intended to encourage caregiver awareness and accountability, including routines that may help adults remember to check vehicles after every trip.",
  },
  {
    question: "Can SafeStop prevent children being left in vehicles?",
    answer: "No technology can guarantee that outcome. SafeStop provides reminders, shared visibility, and checkout confirmation to support attentive caregivers, who remain solely responsible for child transportation, supervision, and wellbeing.",
  },
  {
    question: "Which SafeStop features are free?",
    answer: "Core features are always free, including check-in, reminders, trusted partner notifications, and checkout confirmation. Premium only removes ads and extends trip history; safety-related awareness features are never paywalled.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://safestop.global/#website",
      name: "SafeStop",
      url: "https://safestop.global",
      description: "Caregiver accountability and child transportation coordination for every ride.",
      publisher: { "@id": "https://safestop.global/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://safestop.global/#organization",
      name: "Ravenna Technologies LLC",
      url: "https://safestop.global",
      logo: "https://safestop.global/app-icon.jpeg",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://safestop.global/#app",
      name: "SafeStop",
      url: "https://safestop.global",
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Caregiver coordination and child transportation accountability",
      operatingSystem: "iOS",
      description: "SafeStop helps adults coordinate child transportation with check-ins, reminders, trusted partner notifications, checkout confirmation, and trip history.",
      featureList: [
        "Child check-in",
        "Back seat reminders",
        "Trusted partner notifications",
        "Child checkout confirmation",
        "Trip history",
      ],
      screenshot: [
        "https://safestop.global/safestop-check-in.webp",
        "https://safestop.global/safestop-active-trip.webp",
        "https://safestop.global/safestop-tracking.webp",
        "https://safestop.global/safestop-trip-complete.webp",
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": "https://safestop.global/#organization" },
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

      <section className="hero-glow noise relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:min-h-[840px] lg:pb-28 lg:pt-44">
        <Header />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 lg:px-10">
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cce8e2] bg-white/80 px-3.5 py-2 text-xs font-bold text-[#31766e] shadow-sm backdrop-blur">
              <Handshake size={15} weight="fill" /> Shared responsibility. Clear handoffs.
            </div>
            <h1 className="text-[3.25rem] font-bold leading-[0.96] tracking-[-0.065em] text-ink sm:text-[4.5rem] lg:text-[5.35rem]">
              Every trip.<br />Accounted for.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-[#536d7f] sm:text-lg lg:mx-0 lg:text-xl lg:leading-8">
              SafeStop helps parents, spouses, babysitters, grandparents, caregivers, and carpool drivers share responsibility for every ride through check-in, reminders, partner notifications, checkout confirmation, and trip history.
            </p>
            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <AppStoreButton />
              <div className="flex items-center gap-4 text-sm font-semibold text-[#536d7f]">
                <Link href="/privacy" className="hover:text-ink">Privacy</Link>
                <span className="h-1 w-1 rounded-full bg-[#9bb0bb]" />
                <Link href="/terms" className="hover:text-ink">Terms</Link>
              </div>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#58717f] lg:justify-start">
              <ShieldCheck size={16} weight="fill" className="text-teal" /> Core features are always free
            </p>
            <div className="mx-auto mt-7 grid max-w-lg grid-cols-3 border-t border-[#dce9e6] pt-5 text-center lg:mx-0">
              {[
                ["Check in", "Start clear"],
                ["Stay connected", "Share status"],
                ["Check out", "Confirm arrival"],
              ].map(([label, detail]) => (
                <div key={label} className="px-2 first:border-r last:border-l first:border-[#dce9e6] last:border-[#dce9e6]">
                  <p className="text-xs font-bold text-ink sm:text-sm">{label}</p>
                  <p className="mt-1 text-[10px] text-[#7a8e99] sm:text-xs">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 px-7 pt-2 sm:px-14 lg:px-6"><PhonePreview /></div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">A shared routine</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">How SafeStop works</h2>
            <p className="mt-5 text-lg leading-8 text-[#607787]">Four clear steps support caregiver accountability from pickup to confirmed drop-off.</p>
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

      <section className="overflow-hidden bg-ink py-24 sm:py-32" aria-labelledby="trust-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#67e1c0]">Caregiver accountability</p>
            <h2 id="trust-heading" className="mt-4 text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">Trust, But Verify</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">SafeStop helps families coordinate child transportation responsibilities and maintain accountability between parents, spouses, babysitters, grandparents, caregivers, and carpools.</p>
            <div className="mt-8 space-y-5">
              {[
                [Eye, "See who is driving and which children are checked in."],
                [UserCheck, "Use trusted partner notifications to keep handoffs visible."],
                [CheckCircle, "Confirm child drop-off or pickup with a checkout record."],
                [ClockCounterClockwise, "Review trip history when a family needs context."],
              ].map(([Icon, text]) => (
                <div key={text as string} className="flex items-start gap-4 text-white/80">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#67e1c0]"><Icon size={19} weight="fill" /></span>
                  <p className="pt-1 text-sm leading-6">{text as string}</p>
                </div>
              ))}
            </div>
            <p className="mt-9 border-t border-white/10 pt-6 text-xs leading-5 text-white/45">SafeStop encourages caregiver awareness. It is not a safety device, monitoring device, emergency response service, or substitute for active adult supervision.</p>
          </div>
          <div className="relative min-h-[620px] sm:min-h-[720px]">
            <IPhoneFrame
              src="/safestop-tracking.webp"
              alt="SafeStop trusted partner view showing an active drive, children, and trip status"
              className="absolute left-0 top-0 w-[68%] -rotate-3"
            />
            <IPhoneFrame
              src="/safestop-trip-complete.webp"
              alt="SafeStop trip complete screen confirming children and partner notification"
              className="absolute bottom-0 right-0 w-[64%] rotate-3"
            />
          </div>
        </div>
      </section>

      <section id="for-every-family" className="bg-[#f3f9f7] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_0.88fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">One routine, many caregivers</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.05em] text-ink sm:text-5xl">Clear responsibility for everyone behind the wheel.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#607787]">From a parent’s morning drop-off to babysitter child pickup verification or a shared carpool, SafeStop gives each adult the same child transportation safety routine.</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                ["Parents & spouses", "Share ride status without chasing texts."],
                ["Babysitters", "Confirm pickup and checkout in one place."],
                ["Grandparents", "Follow a simple, repeatable handoff routine."],
                ["Carpools & caregivers", "Keep carpool child safety responsibilities visible."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-[#dceae7] bg-white p-5 shadow-card">
                  <h3 className="font-bold tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#667d8b]">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <IPhoneFrame
            src="/safestop-active-trip.webp"
            alt="SafeStop active trip screen showing driver, trip duration, and checked-in children"
          />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-ink lg:grid-cols-2">
            <div className="p-8 sm:p-14 lg:p-16">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#57d4b4]/15 text-[#67e1c0]"><ShieldCheck size={26} weight="fill" /></span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#67e1c0]">Always included</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-white sm:text-5xl">Core features are always free.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/65">Check-in, reminders, trusted partner notifications, and checkout confirmation stay free. Safety-related awareness features are never paywalled.</p>
            </div>
            <div className="relative bg-gradient-to-br from-[#1e7791] to-[#2b9a8e] p-8 sm:p-14 lg:p-16">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white"><ClockCounterClockwise size={26} weight="fill" /></span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/65">SafeStop Premium</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-white sm:text-5xl">Fewer ads. More history.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70">Premium only removes ads and extends trip history. It never changes access to core awareness and accountability features.</p>
              <div className="mt-7 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">Optional, never required</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6faf9] py-24 sm:py-32" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Straight answers</p>
            <h2 id="faq-heading" className="mt-4 text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">SafeStop FAQ</h2>
            <p className="mt-5 text-lg leading-8 text-[#607787]">What families and caregivers should know before using SafeStop.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[1.5rem] border border-[#e0ece9] bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold tracking-[-0.025em] text-ink">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[#607787]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="noise mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#dff4ef] px-6 py-16 text-center sm:px-12 sm:py-20">
          <CheckCircle size={34} weight="fill" className="mx-auto text-teal" />
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.055em] text-ink sm:text-6xl">Every ride has a handoff. Make it clear.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#536d7f]">Give every parent and caregiver one shared routine for check-in, communication, and confirmed checkout.</p>
          <AppStoreButton className="mt-8" />
          <p className="mt-5 text-xs text-[#6f8592]">For adult caregivers · Core features always free</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
