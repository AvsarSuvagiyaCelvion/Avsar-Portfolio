import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import { pricingPlans } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Pricing.css';

export default function Pricing() {
  const titleRef = useScrollReveal();

  const handleInquiry = (planName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill subject if input exists
      setTimeout(() => {
        const subjectInput = document.getElementsByName('subject')[0];
        if (subjectInput) {
          subjectInput.value = `Collaboration Inquiry: ${planName}`;
        }
      }, 800);
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="Collaboration Plans"
            title="Service"
            highlight="Packages"
            subtitle="Transparent pricing and tailored plans to build high-converting digital products."
          />
        </div>

        <div className="row g-4 justify-content-center align-items-stretch mt-2">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className="col-md-6 col-lg-4 d-flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`pricing-card glass h-100 w-100 ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <div className="pricing-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price" style={{ color: plan.color }}>
                    <span className="amount">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="period">/est</span>}
                  </div>
                  <p className="plan-desc">{plan.description}</p>
                </div>

                <div className="pricing-divider"></div>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="bi bi-patch-check-fill" style={{ color: plan.color }}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`pricing-btn ${plan.popular ? 'btn-primary-custom w-100 mt-auto' : 'btn-outline-custom w-100 mt-auto'}`}
                  onClick={() => handleInquiry(plan.name)}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
