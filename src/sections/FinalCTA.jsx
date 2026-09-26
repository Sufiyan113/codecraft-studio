import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-cyan-accent/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto border border-white/[0.08]"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
            Let's turn your idea into something people want to use.
          </p>
          <Button href="#contact" className="!px-8 !py-4 !text-base">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
