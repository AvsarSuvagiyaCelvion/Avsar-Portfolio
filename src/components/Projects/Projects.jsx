import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const titleRef = useScrollReveal();

  return (
    <section id="projects" className="projects-section">
      <div className="orb projects-orb-1"></div>
      <div className="orb projects-orb-2"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="My Work"
            title="Featured"
            highlight="Projects"
            subtitle="A selection of projects that showcase my skills across different domains."
          />
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`project-card glass ${i === 0 ? 'project-featured' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top gradient banner */}
              <div className="project-banner" style={{ background: project.gradient }}>
                <div className="project-icon-wrap">
                  <i className={`bi ${project.icon}`}></i>
                </div>
                {i === 0 && <span className="featured-badge">Featured</span>}
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Feature pills */}
                <div className="project-features">
                  {project.features.map(f => (
                    <span key={f} className="feature-pill">
                      <i className="bi bi-check2-circle"></i> {f}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="project-tags mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links mt-4">
                  <a
                    href={project.live}
                    className="btn-primary-custom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn-outline-custom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i> Code
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <AnimatePresence>
                {hovered === project.id && (
                  <motion.div
                    className="project-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ background: project.gradient }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
