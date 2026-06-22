import { AppleLogo } from "@phosphor-icons/react/dist/ssr";

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#APP_STORE_LINK_HERE"
      className={`inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3.5 text-left text-white shadow-lg shadow-[#09243c]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#123955] ${className}`}
      aria-label="Download SafeStop on the App Store"
    >
      <AppleLogo size={29} weight="fill" aria-hidden="true" />
      <span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] opacity-80">Download on the</span>
        <span className="block text-[18px] font-semibold leading-5 tracking-[-0.02em]">App Store</span>
      </span>
    </a>
  );
}
