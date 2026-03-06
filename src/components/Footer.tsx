import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, ShoppingBag } from 'lucide-react';
import { storage } from '../lib/storage';

export default function Footer() {
  const settings = storage.getSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src="https://blogpfthumb-phinf.pstatic.net/MjAyNjAzMDVfMTMg/MDAxNzcyNjkzMjU3Mzk2.eYiWtmrb7k9MWnFU2cJVlR2ShoP3f0hbAcf-mTzBV08g.A8H7puUFY0dtZMXSUXzV38RoVASMWnylQTRD_bMLFpkg.PNG/sb_gartex_symbol.png/sb%2Bgartex%2Bsymbol.png?type=w161" 
                  alt="SB Gartex Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                {settings.companyName.toUpperCase()}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {settings.slogan}. Delivering excellence in garment manufacturing with global standards.
            </p>
            <div className="flex gap-4">
              <a 
                href={settings.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-turquoise-500 hover:text-navy-900 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={settings.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-turquoise-500 hover:text-navy-900 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Global Partners', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-turquoise-500 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-turquoise-500 shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed max-w-xs">{settings.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-turquoise-500 shrink-0" size={18} />
                <a href={`mailto:${settings.email}`} className="text-gray-400 hover:text-turquoise-500 text-sm transition-colors">
                  {settings.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {settings.companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-turquoise-500 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-turquoise-500 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
