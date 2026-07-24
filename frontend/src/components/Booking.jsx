import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: 'Signature Microblading', date: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Points to your local Flask backend
      await axios.post('http://localhost:5000/api/book', formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: 'Signature Microblading', date: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  // Input animation variants
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-white to-blush/10 relative flex justify-center items-center">
      
      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(183,110,121,0.15)] flex flex-col md:flex-row border border-nude/30"
        >
          
          {/* Left Side: Brand Image & Text */}
          <div className="md:w-5/12 relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Studio" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <h3 className="font-playfair text-3xl mb-3">Reserve Your Time</h3>
              <p className="font-poppins text-white/80 font-light text-sm leading-relaxed">
                Step into a world of tailored beauty. Secure your consultation or appointment with our master artists today.
              </p>
            </div>
          </div>

          {/* Right Side: The Aesthetic Form */}
          <div className="md:w-7/12 p-10 md:p-16 relative bg-white">
            <div className="mb-10 text-center md:text-left">
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-2">Book an Appointment</h2>
              <p className="font-poppins text-gray-500 text-sm">Fill out the details below and we will confirm shortly.</p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                // --- Success State Animation ---
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl text-gray-900 mb-2">Request Received</h3>
                  <p className="font-poppins text-gray-500">Thank you! Please check your email for confirmation.</p>
                </motion.div>
              ) : (
                // --- Form Inputs ---
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Name Input */}
                    <motion.div variants={inputVariants} className="relative">
                      <input type="text" id="name" required placeholder=" "
                        className="peer w-full bg-gray-50/50 border border-nude rounded-xl px-5 py-4 font-poppins text-sm text-gray-900 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all duration-300 placeholder-transparent"
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      />
                      <label htmlFor="name" className="absolute left-5 top-4 text-gray-400 font-poppins text-sm transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-rosegold peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:text-gray-500 bg-white px-1 pointer-events-none">
                        Full Name
                      </label>
                    </motion.div>

                    {/* Phone Input */}
                    <motion.div variants={inputVariants} className="relative">
                      <input type="tel" id="phone" required placeholder=" "
                        className="peer w-full bg-gray-50/50 border border-nude rounded-xl px-5 py-4 font-poppins text-sm text-gray-900 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all duration-300 placeholder-transparent"
                        value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                      />
                      <label htmlFor="phone" className="absolute left-5 top-4 text-gray-400 font-poppins text-sm transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-rosegold peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:text-gray-500 bg-white px-1 pointer-events-none">
                        Phone Number
                      </label>
                    </motion.div>

                  </div>

                  {/* Email Input */}
                  <motion.div variants={inputVariants} className="relative">
                    <input type="email" id="email" required placeholder=" "
                      className="peer w-full bg-gray-50/50 border border-nude rounded-xl px-5 py-4 font-poppins text-sm text-gray-900 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all duration-300 placeholder-transparent"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                    <label htmlFor="email" className="absolute left-5 top-4 text-gray-400 font-poppins text-sm transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-rosegold peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:text-gray-500 bg-white px-1 pointer-events-none">
                      Email Address
                    </label>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Dropdown */}
                    <motion.div variants={inputVariants} className="relative">
                      <select id="service" required
                        className="w-full bg-gray-50/50 border border-nude rounded-xl px-5 py-4 font-poppins text-sm text-gray-900 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all duration-300 appearance-none"
                        value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="Signature Microblading">Signature Microblading</option>
                        <option value="Velvet Lip Blush">Velvet Lip Blush</option>
                        <option value="Powder Ombré Brows">Powder Ombré Brows</option>
                        <option value="Classic Eyeliner">Classic Eyeliner</option>
                        <option value="Consultation">Free Consultation</option>
                      </select>
                      {/* Custom Dropdown Arrow */}
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-rosegold">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </motion.div>

                    {/* Date Picker */}
                    <motion.div variants={inputVariants} className="relative">
                      <input type="date" id="date" required
                        className="w-full bg-gray-50/50 border border-nude rounded-xl px-5 py-4 font-poppins text-sm text-gray-500 focus:outline-none focus:border-rosegold focus:ring-1 focus:ring-rosegold transition-all duration-300"
                        value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} 
                      />
                    </motion.div>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm font-poppins text-center">
                      Something went wrong. Please try again or contact us via WhatsApp.
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <motion.div variants={inputVariants} className="pt-4">
                    <button type="submit" disabled={status === 'sending'}
                      className="w-full bg-gray-900 text-white font-poppins py-4 rounded-xl tracking-wider uppercase text-sm hover:bg-rosegold transition-colors duration-500 hover:shadow-glow disabled:opacity-70 flex justify-center items-center gap-3"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Confirm Reservation'}
                    </button>
                  </motion.div>

                </motion.form>
              )}
            </AnimatePresence>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;