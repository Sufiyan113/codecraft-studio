import { motion } from 'framer-motion';
import { MapPin, GraduationCap, User } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/config';
import { skills } from '../data/skills';

const About = () => {
  const { personal } = siteConfig;

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="About"
          title="Building Digital Experiences With Code."
          subtitle="A bit about who I am and what I bring to every project."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 text-center">
              {/* Profile image placeholder */}
              <div className="w-32 h-32 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent/30 to-cyan-accent/20 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Replace this with your photo: put image in /public/profile.jpg and use <img src="/profile.jpg" alt="..." className="w-full h-full object-cover" /> */}
                <User className="w-16 h-16 text-white/30" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-white mb-1">
                {personal.name}
              </h3>
              <p className="text-accent-light text-sm mb-4">{personal.role}</p>
              
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {personal.location}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-left">{personal.education}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {personal.bio}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I focus on clean code, thoughtful design, and clear communication. 
              Whether you need a simple landing page or a full web application, 
              I'll work with you to deliver something that looks professional and works reliably.
            </p>

            <h4 className="font-semibold text-white mb-4">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-lg hover:border-accent/30 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
