import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="SafeStop home">
      <span className="relative h-10 w-10 overflow-hidden rounded-[13px] bg-ink shadow-md shadow-[#00d9cf]/15 transition-transform group-hover:-rotate-3">
        <Image src="/app-icon.jpeg" alt="" fill sizes="40px" className="object-cover" priority />
      </span>
      <span className="text-[19px] font-bold tracking-[-0.04em] text-ink">SafeStop</span>
    </Link>
  );
}
