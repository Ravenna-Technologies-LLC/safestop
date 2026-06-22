import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#486476] sm:flex" aria-label="Primary navigation">
          <Link href="/#how-it-works" className="transition-colors hover:text-ink">How it works</Link>
          <Link href="/#for-every-family" className="transition-colors hover:text-ink">Who it&apos;s for</Link>
          <Link href="/contact" className="transition-colors hover:text-ink">Contact</Link>
          <Link href="#APP_STORE_LINK_HERE" className="rounded-full bg-ink px-5 py-2.5 text-white transition hover:bg-[#123955]">Get the app</Link>
        </nav>
        <Link href="#APP_STORE_LINK_HERE" className="rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white sm:hidden">Get the app</Link>
      </div>
    </header>
  );
}
