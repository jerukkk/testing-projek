import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import FeaturedArticles from '@/app/components/FeaturedArticles';
import WelcomingRemarks from '@/app/components/WelcomingRemarks';
import AboutSection from '@/app/components/AboutSection';
import Footer from '@/app/components/Footer';
import MobileNav from '@/app/components/MobileNav';

export default function Home() {
  return (
    <main className="bg-mun-cream min-h-screen font-sans">
      <Navbar />
      <Hero />
      {/* World Review Background - wraps all sections after Hero */}
      <section className="relative bg-mun-cream">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/World Review.svg"
            alt=""
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 space-y-20 md:space-y-24 pt-8 pb-20">
          <FeaturedArticles />
          <WelcomingRemarks />
          <AboutSection />
        </div>
        {/* Tongkonan decoration - attached to footer */}
        <div className="relative w-full">
          <img
            src="/Group 169 (1).svg"
            alt=""
            className="w-full h-auto block"
          />
        </div>
        <Footer />
      </section>
      <MobileNav />
    </main>
  );
}
