import HeroTitle from './components/HeroTitle.jsx';
import HeroCTA from './components/HeroCTA.jsx';
import HeroImage from './components/HeroImage.jsx';
import HowItWorks from './components/HowItWorks.jsx';

export default function App() {
  // NOTE: The Canva link provided is not a direct image URL. If you have a direct PNG/JPG/WebP URL,
  // replace below. The component will gracefully fallback if loading fails.
  const canvaEditLink = 'https://www.canva.com/design/DAG30ok-Wz0/7Y50iS3ptKSJ3srG2bh1BQ/edit?utm_content=DAG30ok-Wz0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';

  return (
    <div className="min-h-screen bg-[#D82B2B]">
      <header className="max-w-6xl mx-auto px-4 pt-10 sm:pt-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <HeroTitle />
            <HeroCTA />
          </div>
          <div className="order-1 md:order-2">
            <HeroImage imageUrl={canvaEditLink} />
          </div>
        </div>
      </header>

      <main className="bg-white/0">
        <HowItWorks />
      </main>

      <footer className="py-10 text-center text-[#FFF6ED]/90">
        <p className="text-sm">© {new Date().getFullYear()} MiaoBau — Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
