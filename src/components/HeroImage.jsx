export default function HeroImage() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
      <img
        src="https://images.unsplash.com/photo-1576511454251-3f2f0c78c54c?q=80&w=1600&auto=format&fit=crop"
        alt="Cane e gatto curiosi vicino a un pacchetto regalo MiaoBau"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFF6ED]/70 via-transparent to-transparent" />
    </div>
  );
}
