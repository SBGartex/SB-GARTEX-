import { motion } from 'motion/react';
import { storage } from '../lib/storage';

export default function About() {
  const settings = storage.getSettings();

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future of fashion manufacturing with precision, integrity, and innovation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="prose prose-invert prose-lg text-gray-300">
              <p>
                Founded with a vision to revolutionize the garment manufacturing industry, SB Gartex has grown from a modest workshop into a global OEM/ODM powerhouse. Our journey is defined by a relentless pursuit of quality and a deep understanding of the fashion ecosystem.
              </p>
              <p>
                We specialize in high-quality apparel, ranging from casual wear to technical outerwear. Our facilities in Vietnam are equipped with cutting-edge technology, ensuring that every stitch meets international standards.
              </p>
              <h3 className="text-turquoise-500 font-bold text-xl mt-8 mb-4">Our Vision</h3>
              <p>
                To be the most trusted partner for global fashion brands, known for our ethical practices, sustainable manufacturing, and impeccable quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <img 
              src={settings.aboutImage} 
              alt="Factory" 
              className="w-full rounded-lg shadow-xl"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-800 p-6 rounded-lg text-center">
                <span className="block text-4xl font-bold text-turquoise-500 mb-2">10+</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="bg-navy-800 p-6 rounded-lg text-center">
                <span className="block text-4xl font-bold text-turquoise-500 mb-2">50+</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Global Partners</span>
              </div>
              <div className="bg-navy-800 p-6 rounded-lg text-center">
                <span className="block text-4xl font-bold text-turquoise-500 mb-2">1M+</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Units / Year</span>
              </div>
              <div className="bg-navy-800 p-6 rounded-lg text-center">
                <span className="block text-4xl font-bold text-turquoise-500 mb-2">100%</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Quality Check</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
