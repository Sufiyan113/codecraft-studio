import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { processSteps } from '../data/process';

const Process = () => {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="Process"
          title="How It Works"
          subtitle="A simple, transparent process from idea to launch."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center mb-5 shadow-card">
                  <span className="font-display text-lg font-bold text-gradient-accent">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
