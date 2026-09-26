import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Clients Say"
          subtitle="Placeholder testimonials — replace these with real client feedback when available."
        />

        {/* Demo notice */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded-full">
            Demo content — replace with real testimonials
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-white/5" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{t.content}"
              </p>
              
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
