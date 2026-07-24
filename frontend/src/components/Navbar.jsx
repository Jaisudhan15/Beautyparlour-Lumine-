import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Transformations', id: 'transformations' },
    { name: 'The Artist', id: 'artist' },
    { name: 'Booking', id: 'booking' },
  ];

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation Variants
  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } },
    opened: { x: 0, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.5 }
    })
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-rosegold z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className={`fixed top-0 w-full z-[80] transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <motion.h1 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-playfair text-2xl font-bold tracking-widest cursor-pointer transition-colors duration-500 ${
              scrolled || isOpen ? 'text-gray-900' : 'text-white'
            }`}
          >
            LUMINA
          </motion.h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-poppins text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? 'text-gray-600 hover:text-rosegold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('booking')}
              className="bg-rosegold text-white font-poppins text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-gray-900 transition-all duration-500 shadow-glow"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-[90] relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`w-8 h-[2px] block transition-colors duration-500 ${
                isOpen || scrolled ? 'bg-gray-900' : 'bg-white'
              }`}
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-8 h-[2px] block transition-colors duration-500 ${
                scrolled ? 'bg-gray-900' : 'bg-white'
              }`}
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className={`w-8 h-[2px] block transition-colors duration-500 ${
                isOpen || scrolled ? 'bg-gray-900' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 bg-nude z-[70] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => scrollTo(link.id)}
                  className="font-playfair text-4xl text-gray-900 hover:text-rosegold transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                variants={linkVariants}
                custom={navLinks.length}
                onClick={() => scrollTo('booking')}
                className="mt-4 bg-gray-900 text-white font-poppins uppercase tracking-widest px-10 py-4 rounded-full"
              >
                Book Appointment
              </motion.button>
            </div>

            {/* Decorative Background Text */}
            <div className="absolute bottom-10 text-gray-900/10 font-playfair text-8xl font-bold select-none pointer-events-none">
              Beauty
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;