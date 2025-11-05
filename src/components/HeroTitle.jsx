export default function HeroTitle() {
  return (
    <div className="text-center space-y-4">
      <h1
        className="text-[#1E1E1E] tracking-tight"
        style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
      >
        <span className="block text-2xl sm:text-3xl">🐾 SOLO PER CHI È NEL CANALE WHATSAPP 🐾</span>
        <span className="block text-4xl sm:text-5xl md:text-6xl mt-1 font-extrabold">
          🎁 Il MIAOCOUPON del mese è arrivato!
        </span>
      </h1>

      <p
        className="text-[#1E1E1E]/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
      >
        Ottieni il tuo sconto o omaggio esclusivo valido fino al 10 novembre 2025!<br className="hidden sm:block" />
        Mostralo in cassa nel tuo punto vendita MiaoBau preferito e approfittane prima che scada.
      </p>
    </div>
  );
}
