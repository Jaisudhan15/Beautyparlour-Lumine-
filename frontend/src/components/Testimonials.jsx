import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "I was nervous, but the result is absolutely flawless. They look so natural, and I save 20 minutes every morning!",
    service: "Signature Microblading"
  },
  {
    id: 2,
    name: "Emily Chen",
    text: "The lip blush completely transformed my confidence. The color is matched perfectly. The studio felt like a high-end spa.",
    service: "Velvet Lip Blush"
  },
  {
    id: 3,
    name: "Amanda Rivera",
    text: "Best decision I've ever made. The powder brows healed beautifully. The healing process was exactly as explained.",
    service: "Powder Ombré Brows"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section ref={ref} className="relative py-24 overflow-hidden min-h-[600px] flex items-center justify-center">
      
      {/* --- STATIC BACKGROUND LAYER --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // This is the magic line that keeps the image static while you scroll
          backgroundImage: `url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundAttachment: 'fixed' 
        }}
      >
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gray-900/70 backdrop-brightness-50"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="font-poppins text-rosegold text-xs tracking-[0.3em] uppercase mb-3">Words from our clients</p>
            <h2 className="font-playfair text-4xl text-white tracking-wide">The Lumina Experience</h2>
          </motion.div>

          <div className="hidden md:flex gap-4">
            <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden relative">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full shrink-0 px-2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[2rem] shadow-2xl flex flex-col min-h-[300px]">
                  <div className="text-rosegold mb-6 flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="font-playfair text-xl md:text-3xl text-white mb-8 leading-relaxed font-light italic">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-poppins text-white tracking-[0.1em] text-sm uppercase font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="font-poppins text-xs text-rosegold mt-1 tracking-wider uppercase">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className="py-2">
              <div className={`h-[2px] rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-rosegold w-12' : 'bg-white/20 w-6'}`} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;