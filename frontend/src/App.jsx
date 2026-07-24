import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

// Components
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import AboutArtist from './components/AboutArtist';
import Testimonials from './components/Testimonials'; // Make sure your file is renamed to this!
import InstagramFeed from './components/InstagramFeed';
import Booking from './components/Booking';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Stop scrolling while loader is active
    if (loading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => lenis.destroy();
  }, [loading]);

  return (
    <div className="bg-luxuryWhite min-h-screen text-gray-900 selection:bg-rosegold selection:text-white">
      {loading && <Loader setLoading={setLoading} />}
      
      <CustomCursor />
      <Navbar />
      
      {/* Page Content */}
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <Hero />
        <div id="services"><Services /></div>
        <div id="transformations"><BeforeAfter /></div>
        <div id="artist"><AboutArtist /></div>
        <Testimonials />
        <InstagramFeed />
        <div id="booking"><Booking /></div>
        <Footer />
        
      </main>

      <WhatsAppFloat />
    </div>
  );
}

export default App;