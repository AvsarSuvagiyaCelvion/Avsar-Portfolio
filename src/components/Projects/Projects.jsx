import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../data/portfolioData';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'React', 'Shopify'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTitle
            eyebrow="My Work"
            title="Featured"
            highlight="Projects"
            subtitle="A selection of projects that showcase my skills across different domains."
          />
        </motion.div>

        {/* Category Filters */}
        <div className="portfolio-filters d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map(cat => (
            <MagneticButton key={cat}>
              <button
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
              >
                {cat}
              </button>
            </MagneticButton>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 60, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 40 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="project-card"
                data-cursor="view"
                data-cursor-text="VIEW"
              >
                {/* Top gradient banner */}
                <div className="project-banner">
                  <div className="project-icon-wrap">
                    <i className={`bi ${project.icon}`}></i>
                  </div>
                  {i === 0 && activeCategory === 'All' && <span className="featured-badge">Featured</span>}
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
                    {project.live && project.live !== '#' ? (
                      <MagneticButton>
                        <a
                          href={project.live}
                          className="btn-primary-custom"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                        >
                          <i className="bi bi-box-arrow-up-right"></i> Live Demo
                        </a>
                      </MagneticButton>
                    ) : (
                      <span className="btn-primary-custom" style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                        <i className="bi bi-box-arrow-up-right"></i> Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
