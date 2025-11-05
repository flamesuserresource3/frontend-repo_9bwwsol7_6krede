export default function HowItWorks() {
  const steps = [
    {
      icon: '🔖',
      title: '1️⃣ Scarica il tuo coupon',
      desc: 'Tocca il pulsante qui sopra per ricevere il tuo codice personale.',
      tone: 'beige',
    },
    {
      icon: '🏪',
      title: '2️⃣ Mostralo in cassa',
      desc: 'Fai vedere il codice al tuo punto vendita MiaoBau preferito al momento del pagamento.',
      tone: 'red',
    },
    {
      icon: '🎁',
      title: '3️⃣ Ricevi il tuo vantaggio',
      desc: 'Ottieni subito lo sconto o l’omaggio esclusivo riservato a chi segue il canale WhatsApp!',
      tone: 'beige',
    },
  ];

  const toneClasses = (tone) =>
    tone === 'red'
      ? 'bg-rose-100 text-rose-700 ring-rose-200'
      : 'bg-amber-50 text-amber-700 ring-amber-200';

  return (
    <section className="w-full bg-[#FFF6ED] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-8 sm:mb-10">
          <h2
            className="text-xl sm:text-2xl md:text-3xl text-[#1E1E1E]"
            style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
          >
            ✨ Come funziona la promo esclusiva WhatsApp
          </h2>
          <p
            className="mt-3 text-[#1E1E1E]/80 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
          >
            È semplicissimo! Segui questi 3 passaggi e approfitta del tuo vantaggio riservato 🎁
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="h-full rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 p-5 text-center flex flex-col items-center justify-start"
            >
              <div
                className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full ring-1 ${toneClasses(
                  s.tone
                )}`}
                aria-hidden="true"
              >
                <span className="text-2xl" role="img" aria-label={s.title}>
                  {s.icon}
                </span>
              </div>
              <h3
                className="text-[#1E1E1E] text-lg font-semibold"
                style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-[#1E1E1E]/80 text-sm leading-relaxed"
                style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
