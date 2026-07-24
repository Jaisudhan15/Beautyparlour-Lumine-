import { motion } from 'framer-motion';

const Hero = () => {
  // We split the title into two parts so we can color them differently
  const line1 = ["Enhance", "Your"];
  const line2 = ["Natural", "Beauty"];
  
  const videoUrl = "/Makeup.mp4";

  // Slide-up reveal animation (The Mask)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- Background Video Layer --- */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 transition-opacity duration-1000" 
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-nude/40 to-luxuryWhite mix-blend-multiply"></div>
      </div>
      {/* ------------------------------- */}

      {/* --- Content Layer --- */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
        
        {/* Animated Title Container */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-4 flex flex-col items-center justify-center gap-y-2 md:gap-y-4"
        >
          {/* First Line (White Text) */}
          <div className="flex space-x-4 overflow-hidden">
            {line1.map((word, index) => (
              <div key={index} className="overflow-hidden">
                <motion.span
                  variants={child}
                  className="inline-block font-playfair text-5xl md:text-7xl lg:text-8xl text-luxuryWhite font-semibold drop-shadow-lg"
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Second Line (Rose Gold Gradient with Continuous Shimmer) */}
          <div className="flex space-x-4 overflow-hidden pb-4">
            {line2.map((word, index) => (
              <div key={index} className="overflow-hidden">
                <motion.span
                  variants={child}
                  className="inline-block font-playfair text-5xl md:text-7xl lg:text-8xl font-semibold drop-shadow-lg"
                >
                  {/* The actual shimmer gradient effect */}
                  <motion.span
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-rosegold via-nude to-rosegold bg-[length:200%_auto] bg-clip-text text-transparent inline-block pb-2"
                  >
                    {word}
                  </motion.span>
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Elegant Subtitle Fade-Up */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="font-poppins text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md font-light tracking-wide"
        >
          Premium permanent makeup services tailored to your unique features.
        </motion.p>

        {/* Glowing Button Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <button 
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} 
            className="bg-rosegold text-white font-poppins px-10 py-4 rounded-full tracking-wider uppercase text-sm hover:bg-white hover:text-rosegold transition-all duration-500 shadow-[0_0_20px_rgba(183,110,121,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Book Appointment
          </button>
        </motion.div>

      </div>

      {/* --- Aesthetic Scroll Down Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="font-poppins text-[10px] tracking-[0.3em] uppercase text-white/40 select-none">
          Scroll
        </span>
        
        {/* The Animated Mouse/Capsule */}
        <div className="w-[22px] h-[38px] rounded-full border border-white/20 flex justify-center p-1.5">
          {/* The Moving Dot */}
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-1 bg-rosegold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;