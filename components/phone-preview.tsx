import { Bell, CarProfile, Check, MapPin, UserCircle } from "@phosphor-icons/react/dist/ssr";

export function PhonePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[370px]">
      <div className="absolute -left-14 top-24 h-44 w-44 rounded-full bg-[#8ee2cf]/30 blur-3xl" />
      <div className="absolute -right-10 bottom-16 h-52 w-52 rounded-full bg-[#8bc4df]/30 blur-3xl" />
      <div className="relative rotate-[2deg] rounded-[3.2rem] border-[8px] border-[#0a263d] bg-white p-2 shadow-[0_40px_90px_rgba(9,36,60,0.22)]">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#f2faf8]">
          <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-[#0a263d]" />
          <div className="px-5 pb-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#6a8190]">Tuesday, 8:42 AM</p>
                <h3 className="mt-1 text-xl font-bold tracking-[-0.04em] text-ink">Ready to drive?</h3>
              </div>
              <div className="rounded-full bg-white p-2 shadow-sm"><Bell size={18} className="text-blue" /></div>
            </div>

            <div className="mt-5 rounded-[1.6rem] bg-gradient-to-br from-[#166e88] to-[#278e88] p-5 text-white shadow-lg shadow-[#176b87]/20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Current trip</span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold">ACTIVE</span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="rounded-2xl bg-white/15 p-3"><CarProfile size={26} weight="fill" /></div>
                <div><p className="text-lg font-bold">2 checked in</p><p className="text-xs text-white/70">Started 8:35 AM</p></div>
              </div>
            </div>

            <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-[0.13em] text-[#718795]">Passengers</p>
            <div className="space-y-2.5">
              {[
                ["Milo", "Car seat · Rear left", "#DDF2F0"],
                ["Sophie", "Booster · Rear right", "#E6EEF8"],
              ].map(([name, detail, color]) => (
                <div key={name} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_5px_18px_rgba(20,75,87,0.06)]">
                  <div className="rounded-full p-2" style={{ backgroundColor: color }}><UserCircle size={23} weight="fill" className="text-blue" /></div>
                  <div className="min-w-0 flex-1"><p className="text-sm font-bold text-ink">{name}</p><p className="text-[11px] text-[#718795]">{detail}</p></div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dff5e9] text-[#248461]"><Check size={13} weight="bold" /></span>
                </div>
              ))}
            </div>
            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-3.5 text-sm font-bold text-white" type="button">
              <MapPin size={17} weight="fill" /> End trip &amp; check out
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -left-8 bottom-16 hidden items-center gap-3 rounded-2xl border border-white bg-white/90 p-3.5 shadow-card backdrop-blur sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff5e9] text-[#248461]"><Check size={19} weight="bold" /></span>
        <div><p className="text-xs font-bold text-ink">Partner notified</p><p className="text-[10px] text-[#718795]">Everything&apos;s accounted for</p></div>
      </div>
    </div>
  );
}
