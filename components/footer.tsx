import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[#dfece9] bg-[#f7fbfa]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-[#526b79]">SafeStop Global · Ravenna Technologies LLC</p>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-[#536d7f]" aria-label="Footer navigation">
          <Link href="/privacy" className="hover:text-ink">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink">Terms of Service</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
