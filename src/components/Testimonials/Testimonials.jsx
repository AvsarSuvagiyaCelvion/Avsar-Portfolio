import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { testimonials } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const titleRef = useScrollReveal();

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="Reviews"
            title="Client"
            highlight="Feedback"
            subtitle="Don't just take my word for it. Here is what directors and clients say about my work."
          />
        </div>

        <div className="testimonial-slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="testimonial-card-wrap"
            >
              <div className="testimonial-card glass text-center">
                {/* Stars */}
                <div className="star-rating mb-3">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>

                {/* Text */}
                <p className="testimonial-text">"{current.text}"</p>

                {/* Author Info */}
                <div className="testimonial-author mt-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="author-avatar mx-auto mb-3"
                  />
                  <h4 className="author-name">{current.name}</h4>
                  <p className="author-role">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button className="slider-btn btn-prev" onClick={handlePrev} aria-label="Previous testimonial">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="slider-btn btn-next" onClick={handleNext} aria-label="Next testimonial">
            <i className="bi bi-chevron-right"></i>
          </button>

          {/* Dots */}
          <div className="slider-dots mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${active === index ? 'active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
