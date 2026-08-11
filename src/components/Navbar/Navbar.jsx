import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Navbar.css';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Services',     href: '#services' },
  { label: 'Contact',      href: '#contact' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container d-flex align-items-center justify-content-between py-2">

        {/* Logo */}
        <MagneticButton>
          <a
            href="#home"
            className="navbar-logo"
            onClick={e => handleNavClick(e, '#home')}
            data-cursor="hover"
          >
            <span className="logo-name">Avsar</span>
          </a>
        </MagneticButton>

        {/* Desktop Links */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="navbar-links d-none d-lg-flex"
        >
          {navLinks.map(link => (
            <motion.li key={link.href} variants={itemVariants}>
              <MagneticButton>
                <a
                  href={link.href}
                  className={`nav-link-item ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={e => handleNavClick(e, link.href)}
                  data-cursor="hover"
                >
                  {link.label}
                  <span className="nav-underline"></span>
                </a>
              </MagneticButton>
            </motion.li>
          ))}
        </motion.ul>

        {/* Controls */}
        <div className="navbar-controls d-flex align-items-center gap-3">
          <MagneticButton>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              data-cursor="hover"
            >
              <i className={`bi bi-${theme === 'dark' ? 'sun-fill' : 'moon-stars-fill'}`}></i>
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="./resume.pdf"
              className="btn-primary-custom d-none d-lg-inline-flex"
              download
              data-cursor="hover"
            >
              <i className="bi bi-download"></i> Resume
            </a>
          </MagneticButton>

          <button
            className={`hamburger d-lg-none ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={personalInfo.resume} className="btn-primary-custom mt-2" download>
              <i className="bi bi-download"></i> Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
