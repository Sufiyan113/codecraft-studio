import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-accent-light" />
      </div>
      
      <h3 className="font-display text-xl font-semibold text-white mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Starting from</span>
          <p className="text-lg font-semibold text-accent-light">{service.price}</p>
        </div>
        <a 
          href="#contact" 
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
