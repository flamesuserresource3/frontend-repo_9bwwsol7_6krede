import { useState } from 'react';

export default function HeroImage({ imageUrl }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl bg-[#D82B2B]">
      {!failed && imageUrl ? (
        <img
          src={imageUrl}
          alt="Cane e gatto curiosi accanto a un pacchetto MiaoBau"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#D82B2B] to-[#a51f1f]">
          <div className="text-center text-[#FFF6ED] px-6">
            <div className="text-5xl mb-2">🐶🐱</div>
            <p className="font-semibold">Immagine non disponibile</p>
            <p className="text-sm opacity-90">Carica un asset oppure fornisci un URL diretto a un file immagine.</p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
    </div>
  );
}
