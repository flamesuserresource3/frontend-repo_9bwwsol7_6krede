import { useEffect, useMemo, useState } from 'react';

const TARGET_ISO = '2025-12-10T23:59:00';

function useCountdown(targetIso) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, ended: diff === 0 };
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[#D82B2B] text-[#FFF6ED] px-3 sm:px-4 py-2 sm:py-3 shadow-md min-w-[64px]">
      <div className="text-xl sm:text-2xl font-bold tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="text-[10px] sm:text-xs opacity-90">{label}</div>
    </div>
  );
}

export default function HeroTitle() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_ISO);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1E1E1E]">
          Il COUPON del mese è arrivato!
        </h1>
        <p className="mt-2 text-[#1E1E1E]/80 text-base sm:text-lg">
          Valido fino al 10 Dicembre 2025. Affrettati a riscattarlo prima che scada!
        </p>
      </div>

      <div aria-label="Conteggio alla scadenza" className="flex items-center gap-2 sm:gap-3">
        <TimeBox label="Giorni" value={days} />
        <span className="text-[#1E1E1E]/70 font-semibold">:</span>
        <TimeBox label="Ore" value={hours} />
        <span className="text-[#1E1E1E]/70 font-semibold">:</span>
        <TimeBox label="Min" value={minutes} />
        <span className="text-[#1E1E1E]/70 font-semibold">:</span>
        <TimeBox label="Sec" value={seconds} />
      </div>
    </div>
  );
}
