import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Preview Area */}
      <div className={`relative h-48 md:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl md:text-5xl font-bold text-white/20 select-none">
                {project.name.charAt(0)}
              </span>
            </div>
          </>
        )}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5 blur-xl" />

        <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {(project.technologies || project.tech || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/[0.08] rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-xl transition-colors"
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-300 glass glass-hover rounded-xl"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
