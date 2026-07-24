


import { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-24 bg-blush/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4"
          >
            Transformations
          </motion.h2>
          <p className="font-poppins text-gray-600">Swipe to see the healed results.</p>
        </div>

        {/* Interactive Slider Container */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group">
          
          {/* --- The Text Indicators --- */}
          <div className="absolute top-6 left-6 z-30 pointer-events-none transition-opacity duration-300">
            <span className="bg-black/50 text-white backdrop-blur-md px-5 py-2 rounded-full font-poppins text-xs md:text-sm tracking-[0.2em] uppercase shadow-lg border border-white/20">
              Before
            </span>
          </div>
          
          <div className="absolute top-6 right-6 z-30 pointer-events-none transition-opacity duration-300">
            <span className="bg-rosegold/80 text-white backdrop-blur-md px-5 py-2 rounded-full font-poppins text-xs md:text-sm tracking-[0.2em] uppercase shadow-lg border border-white/20">
              After
            </span>
          </div>
          {/* --------------------------- */}

          {/* Before Image (Background) */}
          <img 
            src="https://images.unsplash.com/photo-1586761975539-508cfbb6db13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbWUlMjB3b21lbiUyMHdpdGglMjBhbmQlMjB3aXRob3V0JTIwbWFrZXVwfGVufDB8fDB8fHww" 
            alt="Before permanent makeup" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* After Image (Foreground with Clip Path) */}
          <div 
            className="absolute inset-0 z-10 w-full h-full pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtZSUyMHdvbWVuJTIwd2l0aCUyMGFuZCUyMHdpdGhvdXQlMjBtYWtldXB8ZW58MHx8MHx8fDA%3D" 
              alt="After permanent makeup" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125" 
            />
          </div>

          {/* Center Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-rosegold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>

          {/* Invisible Range Input for smooth dragging and accessibility */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={(e) => setSliderPosition(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
          />
        </div>
        
      </div>
    </section>
  );
};

export default BeforeAfter;