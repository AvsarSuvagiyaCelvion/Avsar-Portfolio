import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const techStack = ['React', 'Node.js', 'PHP', 'MySQL', 'Shopify', 'MongoDB'];

export default function Hero() {
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fullName = personalInfo.name;
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 120;
    const timeout = setTimeout(() => {
      if (!deleting && index < fullName.length) {
        setDisplayed(fullName.slice(0, index + 1));
        setIndex(i => i + 1);
      } else if (!deleting && index === fullName.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && index > 0) {
        setDisplayed(fullName.slice(0, index - 1));
        setIndex(i => i - 1);
      } else {
        setDeleting(false);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, deleting, fullName]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-overlay"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row min-vh-100 align-content-center py-5">
          
          {/* Main Massive Title Block */}
          <div className="col-12 text-center text-lg-start">
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)} className="d-flex justify-content-center justify-content-lg-start mb-3">
              <span className="hero-badge">
                <span className="badge-dot"></span>
                Available for freelance &amp; custom contract roles
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 {...fadeUp(0.2)} className="hero-title">
              Hi, I'm{' '}<br />
              <span className="gradient-text typewriter-name">{displayed}<span className="tw-cursor">|</span></span>
              <br />
              <span className="hero-role">{personalInfo.title}</span>
            </motion.h1>
          </div>

          {/* Divider Line */}
          <div className="col-12 my-4">
            <div className="section-divider-line"></div>
          </div>

          {/* Split Content Row */}
          <div className="col-12 mt-2">
            <div className="row g-4 align-items-start">
              
              {/* Left Column: Intro Bio & CTAs */}
              <div className="col-lg-7 pe-lg-5 text-center text-lg-start">
                <motion.p {...fadeUp(0.35)} className="hero-subtitle mx-auto mx-lg-0">
                  {personalInfo.subtitle}
                </motion.p>

                <motion.div {...fadeUp(0.45)} className="hero-cta d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
                  <button className="btn-primary-custom" onClick={() => scrollTo('projects')}>
                    <i className="bi bi-grid-3x3-gap-fill"></i> View My Work
                  </button>
                  <button className="btn-outline-custom" onClick={() => scrollTo('contact')}>
                    <i className="bi bi-envelope-fill"></i> Let's Talk
                  </button>
                  <a className="btn-outline-custom" href="/resume.pdf" download="Avsar_Resume.pdf">
                    <i className="bi bi-download"></i> CV
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Tech tags and Stats */}
              <div className="col-lg-5 ps-lg-5 border-start-desktop text-center text-lg-start mt-4 mt-lg-0">
                <motion.div {...fadeUp(0.4)} className="hero-right-panel">
                  <h4 className="hero-panel-title">Core Technologies</h4>
                  <div className="hero-tech-stack mt-3 mb-4">
                    {techStack.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="section-divider-line my-4 d-lg-none"></div>

                  <div className="hero-stats">
                    {[
                      { value: '1', label: 'Year Experience' },
                      { value: '5+', label: 'Projects Completed' },
                      { value: '2+', label: 'Happy Clients' },
                    ].map(stat => (
                      <div key={stat.label} className="hero-stat">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
