import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);
  const href = siteConfig.contact.whatsapp;

  if (!href) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 md:bottom-8 md:left-8">
      {/* Keep clear of BackToTop (bottom-right) */}
      <div className="relative">
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 text-xs font-medium text-white bg-dark-800 border border-white/10 rounded-lg shadow-lg pointer-events-none hidden sm:block"
          >
            Chat on WhatsApp
          </motion.span>
        )}
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-900/40 ring-4 ring-[#25D366]/20"
        >
          <MessageCircle className="w-7 h-7" fill="currentColor" strokeWidth={1.5} />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
