import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { faqs } from '../data/faqs';

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/[0.04] pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about working together."
        />

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
