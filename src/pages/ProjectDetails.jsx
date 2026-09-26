import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import {
  getProjectBySlug,
  getAdjacentProjects,
} from '../data/projects';
import Button from '../components/Button';

const SectionBlock = ({ title, children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay }}
    className="glass rounded-2xl p-6 md:p-8"
  >
    <h2 className="font-display text-xl md:text-2xl font-semibold text-white mb-4">
      {title}
    </h2>
    <div className="text-gray-400 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </motion.section>
);

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const techList = project.technologies || project.tech || [];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link to="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-gray-300">{project.name}</span>
        </motion.nav>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-10"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {project.name}
          </h1>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {techList.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/[0.08] rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Hero image / gradient preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`relative rounded-2xl overflow-hidden border border-white/[0.08] mb-12 h-56 sm:h-72 md:h-96 bg-gradient-to-br ${project.gradient}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl md:text-8xl font-bold text-white/15 select-none">
                  {project.name.charAt(0)}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs text-white/30">
                  Add a screenshot via <code className="text-white/40">image</code> in{' '}
                  <code className="text-white/40">src/data/projects.js</code>
                </p>
              </div>
            </>
          )}
        </motion.div>

        {/* Content sections */}
        <div className="space-y-6 max-w-3xl mx-auto mb-14">
          <SectionBlock title="About the Project" delay={0}>
            <p>{project.longDescription}</p>
          </SectionBlock>

          <SectionBlock title="The Problem" delay={0.05}>
            <p>{project.problem}</p>
          </SectionBlock>

          <SectionBlock title="The Solution" delay={0.05}>
            <p>{project.solution}</p>
          </SectionBlock>

          <SectionBlock title="Key Features" delay={0.05}>
            <ul className="grid sm:grid-cols-2 gap-3 mt-1">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-light mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Technology Stack" delay={0.05}>
            <div className="flex flex-wrap gap-2 mt-1">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium text-gray-200 bg-accent/10 border border-accent/20 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SectionBlock>

          {(project.additionalImages?.length > 0 || true) && (
            <SectionBlock title="Project Screenshots" delay={0.05}>
              {project.additionalImages?.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  {project.additionalImages.map((src, i) => (
                    <div
                      key={src + i}
                      className="rounded-xl overflow-hidden border border-white/[0.08] aspect-video bg-dark-800"
                    >
                      <img
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  No extra screenshots yet. Add paths to{' '}
                  <code className="text-gray-400">additionalImages</code> in the project
                  data file when ready.
                </p>
              )}
            </SectionBlock>
          )}

          <SectionBlock title="Result / Outcome" delay={0.05}>
            <p>{project.outcome}</p>
          </SectionBlock>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : null}
          <Button href="/#contact">Start a Project</Button>
        </motion.div>

        {/* Prev / Next */}
        <div className="border-t border-white/[0.06] pt-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="group flex-1 glass glass-hover rounded-xl p-5 flex items-center gap-3"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">Previous Project</p>
                  <p className="font-medium text-white truncate">{prev.name}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className="group flex-1 glass glass-hover rounded-xl p-5 flex items-center justify-end gap-3"
              >
                <div className="text-right min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">Next Project</p>
                  <p className="font-medium text-white truncate">{next.name}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
