import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-luxuryWhite"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="font-playfair text-5xl md:text-6xl text-gray-900 tracking-widest mb-2">
          LUMINA
        </h1>
        <p className="font-poppins text-rosegold tracking-[0.3em] text-sm uppercase">
          Permanent Makeup
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;