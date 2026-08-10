import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const footerLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">

            {/* Brand */}
            <div className="col-md-6 col-lg-5">
              <div className="footer-brand">
                <span className="footer-logo">
                  Avsar<span className="logo-dot">.</span>
                </span>
                <p className="footer-tagline">
                  Building modern, scalable web experiences with clean code and creative design.
                </p>
                <div className="footer-socials">
                  {Object.entries(personalInfo.socials).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social"
                      aria-label={key}
                    >
                      <i className={`bi bi-${key}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-0">
              <div className="footer-col-wrapper">
                <h4 className="footer-col-title">Quick Links</h4>
                <ul className="footer-nav">
                  {footerLinks.map(link => (
                    <li key={link.href}>
                      <a href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
                        <i className="bi bi-chevron-right"></i> {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-sm-6 col-md-3 col-lg-4 mb-4 mb-sm-0">
              <div className="footer-col-wrapper">
                <h4 className="footer-col-title">Contact Info</h4>
                <ul className="footer-contact-list">
                  <li>
                    <i className="bi bi-envelope-fill"></i>
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>{personalInfo.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
