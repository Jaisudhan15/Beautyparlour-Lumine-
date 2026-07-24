import { motion } from 'framer-motion';

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-5xl mb-6 tracking-tighter">LUMINA</h2>
            <p className="font-poppins text-white/40 text-sm tracking-widest uppercase mb-8">
              Artistry in every stroke.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                <a key={social} href="#" className="text-xs font-poppins tracking-[0.2em] uppercase text-white/60 hover:text-rosegold transition-colors duration-300">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <h4 className="font-playfair text-xl mb-4 text-nude">Join the Private List</h4>
            <p className="font-poppins text-xs text-white/40 mb-6 leading-relaxed">
              Receive exclusive beauty tips and early access to booking dates.
            </p>
            <div className="relative flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 py-3 font-poppins text-sm focus:outline-none focus:border-rosegold transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-rosegold font-poppins text-xs uppercase tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16 mb-24">
          <div>
            <h5 className="font-poppins text-[10px] tracking-[0.3em] uppercase text-rosegold mb-8">Navigation</h5>
            <ul className="space-y-4 font-playfair text-lg text-white/70">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo('transformations')} className="hover:text-white transition-colors">Portfoilo</button></li>
              <li><button onClick={() => scrollTo('artist')} className="hover:text-white transition-colors">The Artist</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-poppins text-[10px] tracking-[0.3em] uppercase text-rosegold mb-8">Studio</h5>
            <ul className="space-y-4 font-playfair text-lg text-white/70">
              <li><button onClick={() => scrollTo('booking')} className="hover:text-white transition-colors">Booking</button></li>
              <li><button className="hover:text-white transition-colors">Policies</button></li>
              <li><button className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="font-poppins text-[10px] tracking-[0.3em] uppercase text-rosegold mb-8">Location</h5>
            <p className="font-playfair text-2xl text-white/80 leading-snug">
              123 Luxury Avenue<br/>Beverly Hills, CA 90210
            </p>
            <p className="mt-4 font-poppins text-sm text-white/40">Open Mon — Sat | 10am — 7pm</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="font-poppins text-[10px] tracking-widest text-white/20 uppercase">
            &copy; {new Date().getFullYear()} Lumina Studio. Designed for Excellence.
          </p>
          
          {/* Elegant Back to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 focus:outline-none"
          >
            <span className="font-poppins text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-rosegold transition-colors">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rosegold transition-colors">
              <svg className="w-4 h-4 text-white group-hover:text-rosegold transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7 7 7M12 3v18" />
              </svg>
            </div>
          </button>
        </div>

      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-7xl h-96 bg-rosegold/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;