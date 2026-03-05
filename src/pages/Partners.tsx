import { motion } from 'motion/react';
import { storage } from '../lib/storage';

export default function Partners() {
  const partners = storage.getPartners();

  return (
    <div className="pt-20">
      <div className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Global Partners
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are proud to manufacture for some of the world's leading fashion brands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-lg flex items-center justify-center aspect-[3/2] hover:shadow-xl hover:shadow-turquoise-500/10 transition-all group"
            >
              <img 
                src={partner.logoUrl} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
