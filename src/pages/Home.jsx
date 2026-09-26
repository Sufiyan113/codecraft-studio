import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyWorkWithMe from '../sections/WhyWorkWithMe';
import Projects from '../sections/Projects';
import Pricing from '../sections/Pricing';
import Process from '../sections/Process';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyWorkWithMe />
      <Projects />
      <Pricing />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
};

export default Home;
