import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { features } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Features.css';

export default function Features() {
  const titleRef = useScrollReveal();

  return (
    <section id="features" className="features-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="Why Choose Me"
            title="Core"
            highlight="Capabilities"
            subtitle="I build products with high standards, ensuring scalability, performance, and outstanding aesthetics."
          />
        </div>

        <div className="row g-4 mt-2">
          {features.map((item, i) => (
            <motion.div
              key={item.id}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="feature-card glass">
                <div
                  className="feature-icon-box"
                  style={{
                    background: `${item.color}15`,
                    borderColor: `${item.color}30`,
                  }}
                >
                  <i className={`bi ${item.icon}`} style={{ color: item.color }}></i>
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
