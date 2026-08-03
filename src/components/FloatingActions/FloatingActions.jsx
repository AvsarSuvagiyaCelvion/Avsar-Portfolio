import { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import './FloatingActions.css';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Clean phone number: remove non-digit characters for WhatsApp API
  const cleanPhoneNumber = personalInfo.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}`;

  return (
    <div className={`floating-actions-container ${showScrollTop ? 'has-scroll' : ''}`}>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <span className="pulse-ring"></span>
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`floating-btn scroll-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
}
