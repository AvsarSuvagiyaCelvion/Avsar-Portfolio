import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { services } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

export default function Services() {
  const titleRef = useScrollReveal();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="services-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="What I Offer"
            title="My"
            highlight="Services"
            subtitle="From concept to deployment, I provide end-to-end web development services."
          />
        </div>

        {/* Services Accordion List */}
        <div className="services-list-container mt-2">
          {services.map((service, i) => {
            const isOpen = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                className="service-row-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Row Header */}
                <div
                  className={`service-row-header ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleExpand(service.id)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <div className="service-row-left">
                    <span className="service-row-number">0{service.id}</span>
                    <h3 className="service-row-title">{service.title}</h3>
                  </div>

                  <div className="service-row-right">
                    <span className="service-row-tagline d-none d-md-inline-block">
                      {service.features[0]} &amp; {service.features[1]}
                    </span>
                    <div className="service-row-arrow">
                      <i className={`bi bi-arrow-right`}></i>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="service-row-content-wrap"
                    >
                      <div className="service-row-body">
                        <p className="service-row-desc">{service.description}</p>
                        
                        <div className="service-row-features-grid mt-3">
                          <h4 className="features-label">Core Deliverables:</h4>
                          <ul className="service-row-features-list">
                            {service.features.map(f => (
                              <li key={f} className="service-row-feature-item">
                                <i className="bi bi-shield-check"></i>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Flat CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="services-cta mt-5"
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-8 text-start">
              <h3 className="cta-title">Ready to build something amazing?</h3>
              <p className="cta-desc">Let's turn your vision into a high-quality, production-ready web product.</p>
            </div>
            <div className="col-lg-4 text-lg-end text-start">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="bi bi-rocket-takeoff-fill"></i> Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
