import { useState } from 'react';

function getBackendUrl() {
  const base = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '') || '';
  return `${base}/coupon`;
}

export default function HeroCTA() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(getBackendUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error(`Errore ${res.status}`);
      }

      const cd = res.headers.get('Content-Disposition');
      let filename = 'coupon.png';
      if (cd) {
        const match = cd.match(/filename\*=UTF-8''([^;\n\r]+)/) || cd.match(/filename="?([^";\n\r]+)"?/);
        if (match && match[1]) filename = decodeURIComponent(match[1]);
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError('Qualcosa è andato storto. Riprova.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        className="inline-flex items-center justify-center rounded-lg bg-[#1E1E1E] text-[#FFF6ED] px-5 py-3 font-semibold shadow-lg hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E1E1E] ring-offset-[#FFF6ED] disabled:opacity-70"
      >
        {loading ? 'Generazione in corso…' : 'Scarica il tuo coupon'}
      </button>
      {error && <span role="alert" className="text-sm text-[#1E1E1E]/80">{error}</span>}
    </div>
  );
}
