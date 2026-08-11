import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const nameVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.2,
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [personalInfo.title, 'Shopify Expert', 'React / Node.js Developer', 'MERN Stack Specialist'];
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setDisplayed(currentRole.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex > 0) {
        setDisplayed(currentRole.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex(r => (r + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const nameLetters = Array.from("Avsar Suvagiya");

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-content-center py-4 py-lg-5">
          
          {/* Main Massive Title Block */}
          <div className="col-12 text-center text-lg-start">
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)} className="d-flex justify-content-center justify-content-lg-start mb-3">
              <span className="hero-badge" data-cursor="hover">
                <span className="badge-dot"></span>
                Available for freelance &amp; custom contract roles
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="hero-title d-flex flex-wrap justify-content-center justify-content-lg-start"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={letterVariants} className="me-2">Hi,</motion.span>
              <motion.span variants={letterVariants} className="me-3">I'm</motion.span>
              <span className="gradient-text hero-name">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div {...fadeUp(0.65)} className="hero-role-wrapper">
              <span className="hero-role-prefix">I am a </span>
              <span className="gradient-text hero-role-typing">
                {displayed || '\u00A0'}
                <span className="tw-cursor">|</span>
              </span>
            </motion.div>
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
                <motion.p {...fadeUp(0.75)} className="hero-subtitle mx-auto mx-lg-0">
                  {personalInfo.subtitle}
                </motion.p>

                <motion.div {...fadeUp(0.85)} className="hero-cta d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
                  <MagneticButton>
                    <button className="btn-primary-custom" onClick={() => scrollTo('projects')} data-cursor="hover">
                      <i className="bi bi-grid-3x3-gap-fill"></i> View My Work
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button className="btn-outline-custom" onClick={() => scrollTo('contact')} data-cursor="hover">
                      <i className="bi bi-envelope-fill"></i> Let's Talk
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <a className="btn-outline-custom" href="/resume.pdf" download="Avsar_Resume.pdf" data-cursor="hover">
                      <i className="bi bi-download"></i> CV
                    </a>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right Column: Tech tags and Stats */}
              <div className="col-lg-5 ps-lg-5 border-start-desktop text-center text-lg-start mt-4 mt-lg-0">
                <motion.div {...fadeUp(0.8)} className="hero-right-panel">
                  <h4 className="hero-panel-title">Core Technologies</h4>
                  <div className="hero-tech-stack mt-3 mb-4">
                    {['React', 'Node.js', 'PHP', 'MySQL', 'Shopify', 'MongoDB'].map(tech => (
                      <span key={tech} className="tech-tag" data-cursor="hover">{tech}</span>
                    ))}
                  </div>

                  <div className="section-divider-line my-4 d-lg-none"></div>

                  <div className="hero-stats">
                    {[
                      { value: '1', label: 'Year Experience' },
                      { value: '5+', label: 'Projects Completed' },
                      { value: '2+', label: 'Happy Clients' },
                    ].map(stat => (
                      <div key={stat.label} className="hero-stat" data-cursor="hover">
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
