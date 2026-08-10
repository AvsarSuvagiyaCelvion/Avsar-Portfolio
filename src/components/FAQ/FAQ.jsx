import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { faqs } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const titleRef = useScrollReveal();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="Help Center"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Find quick answers to common questions about my development process, packages, and terms."
          />
        </div>

        <div className="faq-list-container mt-2">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={faq.id}
                className="faq-item-wrap mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={`faq-header ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFAQ(i)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon-toggle">
                    <i className={`bi bi-${isOpen ? 'dash-lg' : 'plus-lg'}`}></i>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="faq-content-wrap"
                    >
                      <div className="faq-answer-box">
                        <p className="faq-answer">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
