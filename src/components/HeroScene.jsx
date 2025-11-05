import Spline from '@splinetool/react-spline';

export default function HeroScene() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
      <Spline
        scene="https://prod.spline.design/4TrRyLcIHhcItjnk/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradient overlay for readability; does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFF6ED]/60 via-transparent to-transparent" />
    </div>
  );
}
