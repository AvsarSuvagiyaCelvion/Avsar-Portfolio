import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { services } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

export default function Services() {
  const titleRef = useScrollReveal();

  return (
    <section id="services" className="services-section">
      <div className="orb services-orb-1"></div>
      <div className="orb services-orb-2"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="What I Offer"
            title="My"
            highlight="Services"
            subtitle="From concept to deployment, I provide end-to-end web development services."
          />
        </div>

        <div className="row g-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="col-md-6 col-xl-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-card glass h-100">
                {/* Number */}
                <span className="service-number">0{service.id}</span>

                {/* Icon */}
                <div
                  className="service-icon-wrap"
                  style={{
                    background: `${service.color}18`,
                    border: `1px solid ${service.color}33`,
                  }}
                >
                  <i className={`bi ${service.icon}`} style={{ color: service.color }}></i>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-features">
                  {service.features.map(f => (
                    <li key={f}>
                      <i className="bi bi-arrow-right-short" style={{ color: service.color }}></i>
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className="service-bottom-bar"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="services-cta glass mt-5"
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h3>Ready to build something amazing?</h3>
              <p>Let's turn your vision into a high-quality, production-ready web product.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="bi bi-rocket-takeoff-fill"></i>
                Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
