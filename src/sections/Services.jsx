import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="Services"
          title="What I Can Build For You"
          subtitle="From simple landing pages to full web applications — tailored solutions for your needs."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
