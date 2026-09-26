import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { pricingPlans } from '../data/pricing';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Starting prices for common project types. Final cost depends on your specific requirements."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-2xl p-6 md:p-8 flex flex-col ${
                plan.popular 
                  ? 'border-accent/40 shadow-glow ring-1 ring-accent/20' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-semibold bg-accent text-white rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-accent-light mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All prices are starting estimates. Final pricing is based on project scope and requirements.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
