import FontLoader from './components/FontLoader';
import HeroTitle from './components/HeroTitle';
import HeroCTA from './components/HeroCTA';
import HowItWorks from './components/HowItWorks';
import HeroScene from './components/HeroScene';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#D82B2B] flex flex-col items-center justify-start p-4 sm:p-6">
      <FontLoader />

      {/* Decorative accent blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-8 -left-8 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#FFF6ED]/30 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#FFF6ED]/20 blur-3xl" />
      </div>

      <main className="relative w-full max-w-5xl">
        <section className="bg-white rounded-3xl shadow-2xl/20 shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-6 sm:p-10">
            <div className="flex flex-col justify-center">
              <HeroTitle />
              <div className="mt-6">
                <HeroCTA />
              </div>
            </div>
            <div className="flex items-center">
              <HeroScene />
            </div>
          </div>

          {/* Cream accent footer bar */}
          <div className="h-3 bg-[#FFF6ED]" />
        </section>
      </main>

      {/* Section 2: How it works */}
      <div className="w-full mt-8">
        <HowItWorks />
      </div>

      {/* Section 4: Countdown / Scadenza */}
      <div className="w-full">
        <Countdown />
      </div>
    </div>
  );
}

export default App;
