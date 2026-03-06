import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { storage } from '../lib/storage';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const settings = storage.getSettings();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Global Partners', path: '/partners' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://blogpfthumb-phinf.pstatic.net/MjAyNjAzMDVfMTMg/MDAxNzcyNjkzMjU3Mzk2.eYiWtmrb7k9MWnFU2cJVlR2ShoP3f0hbAcf-mTzBV08g.A8H7puUFY0dtZMXSUXzV38RoVASMWnylQTRD_bMLFpkg.PNG/sb_gartex_symbol.png/sb%2Bgartex%2Bsymbol.png?type=w161" 
                alt="SB Gartex Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white group-hover:text-turquoise-400 transition-colors">
                {settings.companyName.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-turquoise-500 uppercase">
                OEM/ODM Vendor
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-turquoise-500 ${
                  location.pathname === link.path ? 'text-turquoise-500' : 'text-gray-300'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/admin" 
              className="px-4 py-2 border border-turquoise-500/30 text-turquoise-500 text-xs font-bold uppercase tracking-wider hover:bg-turquoise-500 hover:text-navy-900 transition-all rounded-sm"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-turquoise-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium tracking-wide ${
                    location.pathname === link.path ? 'text-turquoise-500' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex gap-6">
                <Link 
                  to="/admin"
                  className="text-gray-400 hover:text-turquoise-500 flex items-center gap-2"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Admin Dashboard</span>
                </Link>
              </div>
              <div className="pt-4 flex gap-6">
                <a href={settings.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-turquoise-500">
                  <Instagram size={24} />
                </a>
                <a href={settings.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-turquoise-500">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
