import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { storage } from '../lib/storage';
import { useState } from 'react';

export default function Contact() {
  const settings = storage.getSettings();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mykngkwq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch to discuss your manufacturing needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center text-turquoise-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-400 leading-relaxed">{settings.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center text-turquoise-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <a href={`mailto:${settings.email}`} className="text-gray-400 hover:text-turquoise-500 transition-colors">
                    {settings.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center text-turquoise-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Call Us</h3>
                  <p className="text-gray-400">+84 123 456 789 (Office)</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-navy-800 rounded-lg overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.696976694726!2d105.7812!3d21.0048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzE3LjMiTiAxMDXCsDQ2JzUyLjMiRQ!5e0!3m2!1sen!2s!4v1635789000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-navy-800 p-8 rounded-xl border border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm underline hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-turquoise-500 text-navy-900 font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
