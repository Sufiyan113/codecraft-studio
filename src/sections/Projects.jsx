import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, techFilters } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => {
        const techs = [...(p.tech || []), ...(p.technologies || [])];
        return (
          techs.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase())) ||
          p.category?.toLowerCase() === activeFilter.toLowerCase()
        );
      });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          badge="Portfolio"
          title="Recent Work"
          subtitle="A selection of projects I've built — from IoT dashboards to SaaS platforms."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-glow'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No projects match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
