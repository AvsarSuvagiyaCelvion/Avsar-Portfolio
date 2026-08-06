import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
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
      <div className="orb hero-orb-1"></div>
      <div className="orb hero-orb-2"></div>
      <div className="orb hero-orb-3"></div>
      <div className="hero-grid-overlay"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center align-items-center min-vh-100 py-5">
          <div className="col-lg-9 col-xl-8 text-center">

            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)} className="d-flex justify-content-center mb-4">
              <span className="hero-badge">
                <span className="badge-dot"></span>
                Available for freelance &amp; custom contract roles
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 {...fadeUp(0.25)} className="hero-title">
              Hi, I'm{' '} <br />
              <span className="gradient-text typewriter-name">{displayed}<span className="tw-cursor">|</span></span>
              <br />
              <span className="hero-role">{personalInfo.title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.4)} className="hero-subtitle mx-auto">
              {personalInfo.subtitle}
            </motion.p>

            {/* Tech stack */}
            <motion.div {...fadeUp(0.55)} className="hero-tech-stack justify-content-center mb-5">
              {techStack.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.7)} className="hero-cta d-flex flex-wrap gap-3 justify-content-center">
              <button className="btn-primary-custom" onClick={() => scrollTo('projects')}>
                <i className="bi bi-grid-3x3-gap-fill"></i>
                View My Work
              </button>
              <button className="btn-outline-custom" onClick={() => scrollTo('contact')}>
                <i className="bi bi-envelope-fill"></i>
                Let's Talk
              </button>
              <a className="btn-outline-custom" href="/resume.pdf" download="Avsar_Resume.pdf">
                <i className="bi bi-download"></i>
                Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.85)} className="hero-stats mt-5 justify-content-center">
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
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        
      </div>
    </section>
  );
}
