import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  badge,
  align = 'center',
  className = '' 
}) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  
  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-gray-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
