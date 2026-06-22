import Image from "next/image";

export function IPhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[350px] ${className}`}>
      <span className="absolute -left-[9px] top-28 h-16 w-1.5 rounded-l-full bg-[#173343]" aria-hidden="true" />
      <span className="absolute -right-[9px] top-36 h-24 w-1.5 rounded-r-full bg-[#173343]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[3rem] border-[7px] border-[#071b27] bg-[#071b27] p-1 shadow-[0_36px_90px_rgba(4,28,40,0.28)]">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1565}
          quality={72}
          sizes="(max-width: 640px) 76vw, (max-width: 1024px) 340px, 350px"
          priority={priority}
          className="h-auto w-full rounded-[2.45rem]"
        />
      </div>
    </div>
  );
}

export function PhonePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[410px]">
      <div className="absolute -left-10 top-20 h-52 w-52 rounded-full bg-[#58e1c5]/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-8 bottom-16 h-52 w-52 rounded-full bg-[#77bce0]/25 blur-3xl" aria-hidden="true" />
      <IPhoneFrame
        src="/safestop-check-in.webp"
        alt="SafeStop check-in screen for selecting children before a drive"
        priority
        className="relative rotate-[2deg]"
      />
      <div className="absolute -left-3 bottom-24 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:block">
        <p className="text-xs font-bold text-ink">Ready for the handoff</p>
        <p className="mt-0.5 text-[10px] text-[#718795]">Children selected · partners in the loop</p>
      </div>
    </div>
  );
}
