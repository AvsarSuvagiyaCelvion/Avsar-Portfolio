import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const titleRef = useScrollReveal();

  const categories = ['All', 'Full Stack', 'React', 'Shopify'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="My Work"
            title="Featured"
            highlight="Projects"
            subtitle="A selection of projects that showcase my skills across different domains."
          />
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="project-card glass"
              >
                {/* Top gradient banner */}
                <div className="project-banner" style={{ background: project.gradient }}>
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
                      <a
                        href={project.live}
                        className="btn-primary-custom"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-box-arrow-up-right"></i> Live Demo
                      </a>
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
    </section>
  );
}
