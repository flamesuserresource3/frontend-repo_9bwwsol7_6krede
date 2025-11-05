import { Download } from 'lucide-react';
import { useCallback, useState } from 'react';

export default function HeroCTA() {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/coupon`, { method: 'POST' });
      if (!res.ok) throw new Error('Errore durante la generazione del coupon');
      const blob = await res.blob();

      // Try to extract filename from header
      const cd = res.headers.get('Content-Disposition') || '';
      const match = cd.match(/filename=([^;]+)/i);
      const filename = match ? match[1] : 'miabaucoupon.png';

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Spiacenti, non siamo riusciti a generare il coupon. Riprova tra poco.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className="space-y-3">
      <div className="flex justify-center">
        <a
          href="#"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1E1E] text-white shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E1E1E] disabled:opacity-60"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
          aria-busy={loading}
        >
          <Download className="w-5 h-5" />
          <span>{loading ? 'Generazione in corso…' : 'SCARICA IL TUO COUPON'}</span>
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
