import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const highlights = [
  { icon: 'bi-code-slash',          label: 'Clean Code',    value: '5+ yrs',  color: '#6c63ff' },
  { icon: 'bi-lightning-charge-fill', label: 'Fast Delivery', value: 'Always',  color: '#00d4ff' },
  { icon: 'bi-shield-check-fill',   label: 'Reliable',      value: '100%',    color: '#ff6b9d' },
  { icon: 'bi-headset',             label: '24/7 Support',  value: 'Always',  color: '#ffd166' },
];

const infoItems = [
  { icon: 'bi-person-fill',    label: 'Name',     value: personalInfo.name },
  { icon: 'bi-envelope-fill',  label: 'Email',    value: personalInfo.email },
  { icon: 'bi-geo-alt-fill',   label: 'Location', value: personalInfo.location },
  { icon: 'bi-telephone-fill', label: 'Phone',    value: personalInfo.phone },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="orb about-orb-1"></div>
      <div className="orb about-orb-2"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <SectionTitle
          eyebrow="Who I Am"
          title="About"
          highlight="Me"
          subtitle="Passionate developer dedicated to crafting exceptional digital experiences."
        />

        {/* Bio + Info row */}
        <div ref={ref} className="reveal">
          <div className="row g-5 align-items-start mb-5">
            {/* Bio */}
            <div className="col-lg-7">
              <div className="about-bio-card glass">
                <h3 className="about-greeting">
                  Full Stack Developer &amp;{' '}
                  <span className="gradient-text">Creative Problem Solver</span>
                </h3>
                <p className="about-bio">{personalInfo.bio}</p>
                <p className="about-bio mb-0">{personalInfo.bioExtra}</p>

                <div className="about-socials mt-4">
                  {Object.entries(personalInfo.socials).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={key}
                    >
                      <i className={`bi bi-${key}`}></i>
                    </a>
                  ))}
                </div>

                <div className="mt-4">
                  <a href={personalInfo.resume} className="btn-primary-custom" download>
                    <i className="bi bi-download"></i> Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Info grid */}
            <div className="col-lg-5">
              <div className="about-info-card glass">
                <h4 className="info-card-title">Personal Info</h4>
                <div className="about-info-grid">
                  {infoItems.map(item => (
                    <div key={item.label} className="info-row">
                      <span className="info-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </span>
                      <div>
                        <small>{item.label}</small>
                        <strong>{item.value}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="avail-tag mt-4">
                  <span className="avail-dot"></span>
                  Currently available for new projects
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="row g-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="col-sm-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="highlight-card glass">
                  <div
                    className="highlight-icon"
                    style={{ background: `${h.color}18`, border: `1px solid ${h.color}33` }}
                  >
                    <i className={`bi ${h.icon}`} style={{ color: h.color }}></i>
                  </div>
                  <div>
                    <strong>{h.value}</strong>
                    <span>{h.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
