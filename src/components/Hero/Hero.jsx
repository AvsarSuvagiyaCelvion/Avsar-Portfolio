import { motion } from 'framer-motion';
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

  return (
    <section id="home" className="hero-section">
      {/* Background Orbs */}
      <div className="orb hero-orb-1"></div>
      <div className="orb hero-orb-2"></div>
      <div className="orb hero-orb-3"></div>

      {/* Grid overlay */}
      <div className="hero-grid-overlay"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-7">
            

            <motion.h1 {...fadeUp(0.25)} className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span className="hero-role">{personalInfo.title}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.4)} className="hero-subtitle">
              {personalInfo.subtitle}
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="hero-tech-stack mb-5">
              {techStack.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.7)} className="hero-cta d-flex flex-wrap gap-3">
              <button
                className="btn-primary-custom"
                onClick={() => scrollTo('projects')}
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
                View My Work
              </button>
              <button
                className="btn-outline-custom"
                onClick={() => scrollTo('contact')}
              >
                <i className="bi bi-envelope-fill"></i>
                Let's Talk
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.85)} className="hero-stats mt-5">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '40+', label: 'Projects Done' },
                { value: '30+', label: 'Happy Clients' },
              ].map(stat => (
                <div key={stat.label} className="hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar Card */}
          {/* <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hero-avatar-wrap"
            >
              <div className="hero-avatar-card glass">
                <div className="hero-avatar">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="avatar-svg">
                    <defs>
                      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6c63ff" />
                        <stop offset="100%" stopColor="#00d4ff" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#avatarGrad)" />
                    <circle cx="100" cy="80" r="36" fill="rgba(255,255,255,0.9)" />
                    <ellipse cx="100" cy="175" rx="60" ry="45" fill="rgba(255,255,255,0.85)" />
                  </svg>
                </div>

                <div className="float-badge badge-react">
                  <i className="bi bi-code-slash"></i> React
                </div>
                <div className="float-badge badge-node">
                  <i className="bi bi-server"></i> Node.js
                </div>
                <div className="float-badge badge-shopify">
                  <i className="bi bi-shop"></i> Shopify
                </div>

                <div className="hero-code-snippet glass">
                  <div className="code-dots">
                    <span style={{ background: '#ff5f57' }}></span>
                    <span style={{ background: '#ffbd2e' }}></span>
                    <span style={{ background: '#28ca41' }}></span>
                  </div>
                  <pre>{`const dev = {
  name: "Avsar",
  stack: ["React","Node"],
  available: true ✓
}`}</pre>
                </div>
              </div>
            </motion.div>
          </div> */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="scroll-indicator"
        >
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
