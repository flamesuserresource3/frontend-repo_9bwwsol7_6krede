export default function HowItWorks() {
  const steps = [
    {
      title: 'Ottieni il codice',
      desc: 'Clicca su “Scarica il tuo coupon” per generare il tuo codice unico.',
    },
    {
      title: 'Aggiungi al carrello',
      desc: 'Scegli i tuoi prodotti MiaoBau preferiti e procedi al checkout.',
    },
    {
      title: 'Applica lo sconto',
      desc: 'Inserisci il codice al momento del pagamento e goditi il risparmio!',
    },
  ];

  return (
    <section aria-labelledby="come-funziona" className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="come-funziona" className="text-2xl sm:text-3xl font-bold text-[#1E1E1E] mb-6">
          Come funziona
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={
                'rounded-2xl p-5 sm:p-6 shadow-md ' +
                (i % 2 === 0 ? 'bg-[#FFF6ED] text-[#1E1E1E]' : 'bg-[#D82B2B] text-[#FFF6ED]')
              }
            >
              <div className="text-sm opacity-80 mb-1">Passo {i + 1}</div>
              <div className="text-lg font-semibold mb-2">{s.title}</div>
              <p className="text-sm leading-relaxed opacity-95">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
