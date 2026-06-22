import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const highlights = [
  { icon: 'bi-code-slash', label: 'Clean Code', value: '5+ yrs' },
  { icon: 'bi-lightning-charge-fill', label: 'Fast Delivery', value: 'Always' },
  { icon: 'bi-shield-check-fill', label: 'Reliable', value: '100%' },
  { icon: 'bi-headset', label: 'Support', value: '24/7' },
];

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="orb about-orb-1"></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <SectionTitle
          eyebrow="Who I Am"
          title="About"
          highlight="Me"
          subtitle="Passionate developer dedicated to crafting exceptional digital experiences."
        />

        <div className="row align-items-center g-5">
          {/* Left – Visual */}
          <div className="col-lg-5">
            <div ref={leftRef} className="reveal-left about-visual">
              <div className="about-img-frame glass">
                <svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" className="about-avatar-svg">
                  <defs>
                    <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="360" fill="url(#aboutGrad)" />
                  <circle cx="150" cy="120" r="60" fill="rgba(255,255,255,0.9)" />
                  <ellipse cx="150" cy="300" rx="100" ry="80" fill="rgba(255,255,255,0.85)" />
                  <text x="50%" y="52%" textAnchor="middle" fill="rgba(108,99,255,0.7)" fontSize="80" fontWeight="bold">AD</text>
                </svg>

                {/* Experience badge */}
                <div className="exp-badge glass">
                  <strong>5+</strong>
                  <span>Years Experience</span>
                </div>
              </div>

              {/* Highlight cards */}
              <div className="about-highlights">
                {highlights.map(h => (
                  <div key={h.label} className="highlight-card glass">
                    <i className={`bi ${h.icon}`} style={{ color: 'var(--color-primary)' }}></i>
                    <div>
                      <strong>{h.value}</strong>
                      <span>{h.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div className="col-lg-7">
            <div ref={rightRef} className="reveal-right about-content">
              <h3 className="about-greeting">
                Full Stack Developer &amp; <span className="gradient-text">Creative Problem Solver</span>
              </h3>

              <p className="about-bio">{personalInfo.bio}</p>
              <p className="about-bio">{personalInfo.bioExtra}</p>

              {/* Info grid */}
              <div className="about-info-grid">
                {[
                  { icon: 'bi-person-fill', label: 'Name', value: personalInfo.name },
                  { icon: 'bi-envelope-fill', label: 'Email', value: personalInfo.email },
                  { icon: 'bi-geo-alt-fill', label: 'Location', value: personalInfo.location },
                  { icon: 'bi-telephone-fill', label: 'Phone', value: personalInfo.phone },
                ].map(item => (
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

              {/* Socials */}
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

              <div className="mt-4 d-flex gap-3 flex-wrap">
                <a href={personalInfo.resume} className="btn-primary-custom" download>
                  <i className="bi bi-download"></i> Download Resume
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
