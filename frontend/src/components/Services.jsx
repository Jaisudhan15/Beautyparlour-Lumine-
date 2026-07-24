import { motion } from 'framer-motion';

const servicesData = [
  { 
    id: 1, 
    title: 'Signature Microblading', 
    price: 'from $450', 
    desc: 'Flawless, natural hair strokes to frame your face perfectly.',
    image: 'https://plus.unsplash.com/premium_photo-1718626727165-3d2062bb8b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWljcm9ibGFkaW5nfGVufDB8fDB8fHww'
  },
  { 
    id: 2, 
    title: 'Velvet Lip Blush', 
    price: 'from $500', 
    desc: 'A soft, youthful tint that restores color and definition to your lips.',
    image: 'https://media.istockphoto.com/id/2172759257/photo/permanent-sexy-womans-lips-tattoo-close-up-lipstick-effect-make-up-the-lips-after-a-tattoo.jpg?s=612x612&w=0&k=20&c=JcRGEIcjPu45uNfNfpwdOWBV-JUJHeDj7JLGCFDU2e8='
  },
  { 
    id: 3, 
    title: 'Powder Ombré Brows', 
    price: 'from $475', 
    desc: 'A soft, shaded brow pencil look for a defined, makeup-ready finish.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 4, 
    title: 'Classic Eyeliner', 
    price: 'from $350', 
    desc: 'Enhance your lash line with a subtle, smudge-proof enhancement.',
    image: 'https://images.unsplash.com/photo-1771621089868-47780cb7dfb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzaWMlMjBleWVsaW5lcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  { 
    id: 5, 
    title: 'Color Correction', 
    price: 'from $300', 
    desc: 'Expert neutralization and reshaping of previous permanent makeup.',
    image: 'https://media.istockphoto.com/id/639052580/photo/portrait-woman-with-problem-and-clear-skin-studio-shot.webp?a=1&b=1&s=612x612&w=0&k=20&c=gYS1CvV-YDRoQjTkfcRSWMoH_t6DdWUdIhQJnptuTBQ='
  },
  { 
    id: 6, 
    title: 'Saline Tattoo Removal', 
    price: 'from $250', 
    desc: 'A safe, natural method to lighten or remove unwanted pigment.',
    image: 'https://images.unsplash.com/photo-1551945329-249a18a5ea8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhY2UlMjBwaWdtZW50JTIwcmVtb3ZhbHxlbnwwfHwwfHx8MA%3D%3D'
  }
];

const Services = () => {
  // Stagger animation setup
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-rosegold mx-auto mb-6 origin-center"
          ></motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              className="flex flex-col bg-luxuryWhite rounded-2xl border border-nude/40 overflow-hidden hover:border-rosegold/50 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 cursor-pointer group"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="font-playfair text-2xl text-gray-800 mb-2 group-hover:text-rosegold transition-colors">
                  {service.title}
                </h3>
                <p className="font-poppins text-rosegold font-medium mb-4">
                  {service.price}
                </p>
                <p className="font-poppins text-gray-500 mb-8 flex-grow">
                  {service.desc}
                </p>
                
                {/* Book Now Button aligned to bottom */}
                <button 
                  onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                  className="self-start font-poppins text-sm uppercase tracking-wider text-gray-800 border-b border-gray-800 pb-1 group-hover:text-rosegold group-hover:border-rosegold transition-colors mt-auto"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;