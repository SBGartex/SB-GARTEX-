import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { storage } from '../lib/storage';

export default function Home() {
  const settings = storage.getSettings();
  const partners = storage.getPartners().slice(0, 4);
  const portfolio = storage.getPortfolio().slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={settings.heroImage} 
            alt="Textile Factory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-turquoise-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
              {settings.companyName}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Precision in Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Stitch & Seam
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              {settings.slogan}. We bring your fashion concepts to life with world-class OEM/ODM manufacturing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-turquoise-500 text-navy-900 font-bold rounded-sm hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/portfolio" 
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-turquoise-500 mb-8" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                SB Gartex is a premier clothing manufacturer dedicated to quality, innovation, and sustainability. With state-of-the-art facilities and a skilled workforce, we partner with global brands to deliver exceptional garments.
              </p>
              <Link to="/about" className="text-turquoise-500 font-medium hover:text-white transition-colors inline-flex items-center gap-2">
                Learn more about our journey <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-turquoise-500/20 rounded-lg translate-x-4 translate-y-4" />
              <img 
                src={settings.aboutImage} 
                alt="Factory Floor" 
                className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Work</h2>
              <div className="w-20 h-1 bg-turquoise-500" />
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-turquoise-500 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-turquoise-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-turquoise-500 font-medium">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16 bg-navy-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Trusted by Global Brands</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <img 
                key={partner.id} 
                src={partner.logoUrl} 
                alt={partner.name} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
