import { motion } from 'framer-motion';

const AboutArtist = () => {
  return (
    <section className="py-24 bg-luxuryWhite overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image & Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Master Artist" 
              className="rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full max-w-md mx-auto"
            />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-white p-4 rounded-2xl shadow-xl border border-nude flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-rosegold text-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-playfair font-bold text-gray-900">Certified</p>
                <p className="font-poppins text-xs text-gray-500">Master Artist</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6">
              Meet the Artist Behind the Arch
            </h2>
            <div className="w-16 h-1 bg-rosegold mb-8"></div>
            
            <p className="font-poppins text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in the beauty industry, I specialize in hyper-realistic permanent makeup. My philosophy is simple: enhance your natural beauty, rather than mask it.
            </p>
            <p className="font-poppins text-gray-600 mb-10 leading-relaxed">
              Every face is a unique canvas. I take the time to map, design, and custom-blend pigments that perfectly complement your skin tone and facial structure, ensuring a flawless, effortless look every time you wake up.
            </p>

            <img 
              src="/assets/signature.png" 
              alt="Artist Signature" 
              className="h-16 opacity-60 mb-8" 
            /> {/* Optional: Add a script-font signature image here for a premium touch */}

            <button 
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
              className="border border-rosegold text-rosegold font-poppins px-8 py-3 rounded-full hover:bg-rosegold hover:text-white transition-all duration-300"
            >
              Book a Consultation
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutArtist;