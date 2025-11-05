import { useEffect, useMemo, useState } from 'react';

function useCountdown(targetDateISO) {
  const target = useMemo(() => new Date(targetDateISO).getTime(), [targetDateISO]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isExpired: diff <= 0 };
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-3 bg-white rounded-xl shadow-sm ring-1 ring-black/5 min-w-[72px]">
      <div
        className="text-3xl sm:text-4xl font-extrabold text-[#D82B2B] tabular-nums"
        style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div
        className="mt-1 text-xs uppercase tracking-wide text-[#1E1E1E]/70"
        style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  // Set deadline: 10 December 2025 23:59 local time
  const deadline = '2025-12-10T23:59:00';
  const { days, hours, minutes, seconds, isExpired } = useCountdown(deadline);

  return (
    <section className="w-full bg-[#FFF6ED] py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-[#1E1E1E]"
            style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
          >
            ⏳ Affrettati! La tua promo scade presto!
          </h2>
          <p
            className="mt-4 text-[#1E1E1E]/90 text-base sm:text-lg"
            style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
          >
            Hai ancora poco tempo per approfittare del MIAOCOUPON di questo mese 🐾<br className="hidden sm:block" />
            Dopo la data indicata, l’offerta cambierà — e non sarà più disponibile.
          </p>
        </header>

        <div className="mt-10">
          <p
            className="text-center text-[#1E1E1E] text-base sm:text-lg"
            style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
          >
            ⏱ La promo termina tra:
          </p>

          <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
            <TimeBox value={days} label="giorni" />
            <span className="text-[#D82B2B] font-extrabold" aria-hidden>
              :
            </span>
            <TimeBox value={hours} label="ore" />
            <span className="text-[#D82B2B] font-extrabold" aria-hidden>
              :
            </span>
            <TimeBox value={minutes} label="min" />
            <span className="text-[#D82B2B] font-extrabold" aria-hidden>
              :
            </span>
            <TimeBox value={seconds} label="sec" />
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="#whatsapp"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#1E1E1E] ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow"
              style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
            >
              💚 TORNA AL CANALE WHATSAPP MIAO BAU
            </a>
            <p
              className="text-xs text-[#1E1E1E]/70 text-center max-w-xl"
              style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
            >
              🕒 Offerta valida solo fino a esaurimento scorte o alla data indicata. Promozione non cumulabile con altre in corso.
            </p>
          </div>
        </div>

        {/* Optional embed block: keep space around it to breathe */}
        {/* If you prefer an external embed from tickcounter.com or countingdownto.com, replace the timer above with the iframe below. */}
        {/* <div className="mt-10 bg-white rounded-2xl ring-1 ring-black/5 shadow-sm overflow-hidden">
          <iframe
            title="Countdown"
            src="https://countingdownto.com/?date=2025-12-10T23:59:00&bg=FFF6ED&fg=1E1E1E&accent=D82B2B"
            className="w-full h-[260px]"
          />
        </div> */}
      </div>
    </section>
  );
}
