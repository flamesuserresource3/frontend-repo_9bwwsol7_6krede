import { Download } from 'lucide-react';
import { useCallback } from 'react';

export default function HeroCTA() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    // This is a placeholder interaction; backend integration can replace this later
    alert('Il tuo MIAOCOUPON personale verrà generato nella prossima schermata.');
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex justify-center">
        <a
          href="#"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1E1E] text-white shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E1E1E]"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
        >
          <Download className="w-5 h-5" />
          <span>🔖 SCARICA IL TUO COUPON PERSONALE</span>
        </a>
      </div>

      <p
        className="text-center text-[#1E1E1E]/80 text-sm"
        style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}
      >
        Promo riservata esclusivamente agli iscritti al canale WhatsApp MiaoBau.<br className="hidden sm:block" />
        Non condividere questo link 💬
      </p>
    </div>
  );
}
