import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { skills } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  const titleRef = useScrollReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="orb skills-orb-1"></div>
      <div className="orb skills-orb-2"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="What I Know"
            title="My Tech"
            highlight="Stack"
            subtitle="Technologies and tools I use to build modern, scalable applications."
          />
        </div>

        <motion.div
          className="row g-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map(skill => (
            <motion.div key={skill.category} className="col-sm-6 col-xl-3" variants={cardVariant}>
              <div className="skill-card glass h-100">
                <div
                  className="skill-icon-wrap"
                  style={{ background: `${skill.color}22`, border: `1px solid ${skill.color}44` }}
                >
                  <i className={`bi ${skill.icon}`} style={{ color: skill.color }}></i>
                </div>
                <h4 className="skill-category">{skill.category}</h4>
                <ul className="skill-list">
                  {skill.items.map(item => (
                    <li key={item} className="skill-item">
                      <span className="skill-dot" style={{ background: skill.color }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency bars row */}
        <div className="skills-proficiency mt-5">
          <div className="row g-3">
            {[
              { name: 'React / Frontend', pct: 92, color: '#6c63ff' },
              { name: 'Node.js / Backend', pct: 70, color: '#00d4ff' },
              { name: 'PHP & MySQL', pct: 80, color: '#ff6b9d' },
              { name: 'Shopify / E-commerce', pct: 88, color: '#ffd166' },
            ].map(bar => (
              <div key={bar.name} className="col-md-6">
                <div className="prof-bar-wrap glass">
                  <div className="prof-bar-header">
                    <span>{bar.name}</span>
                    <strong style={{ color: bar.color }}>{bar.pct}%</strong>
                  </div>
                  <div className="prof-bar-track">
                    <motion.div
                      className="prof-bar-fill"
                      style={{ background: bar.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
