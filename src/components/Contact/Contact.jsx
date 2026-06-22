import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionTitle from '../SectionTitle/SectionTitle';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

const contactInfo = [
  { icon: 'bi-envelope-fill', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#6c63ff' },
  { icon: 'bi-telephone-fill', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#00d4ff' },
  { icon: 'bi-geo-alt-fill', label: 'Location', value: personalInfo.location, href: '#', color: '#ff6b9d' },
];

export default function Contact() {
  const formRef = useRef(null);
  const titleRef = useScrollReveal();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.user_name?.trim()) e.user_name = 'Name is required.';
    if (!data.user_email?.trim()) e.user_email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)) e.user_email = 'Invalid email address.';
    if (!data.subject?.trim()) e.subject = 'Subject is required.';
    if (!data.message?.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = Object.fromEntries(new FormData(form));
    const errs = validate(data);

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="orb contact-orb-1"></div>
      <div className="orb contact-orb-2"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div ref={titleRef} className="reveal">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Contact"
            highlight="Me"
            subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life."
          />
        </div>

        <div className="row g-5 align-items-start">
          {/* Info Column */}
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-info">
              <h3 className="contact-heading">
                Let's build something <span className="gradient-text">great together</span>
              </h3>
              <p className="contact-sub">
                I'm currently available for freelance work and full-time opportunities.
                Feel free to reach out — I typically respond within 24 hours.
              </p>

              <div className="contact-cards">
                {contactInfo.map(item => (
                  <a key={item.label} href={item.href} className="contact-card glass">
                    <div className="contact-card-icon" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                      <i className={`bi ${item.icon}`} style={{ color: item.color }}></i>
                    </div>
                    <div>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="contact-socials mt-4">
                {Object.entries(personalInfo.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={key}
                  >
                    <i className={`bi bi-${key}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-form-wrap glass">
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label-custom">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className={`input-custom ${errors.user_name ? 'input-error' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.user_name && <span className="error-msg">{errors.user_name}</span>}
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label-custom">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      className={`input-custom ${errors.user_email ? 'input-error' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.user_email && <span className="error-msg">{errors.user_email}</span>}
                  </div>

                  <div className="col-12">
                    <label className="form-label-custom">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className={`input-custom ${errors.subject ? 'input-error' : ''}`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && <span className="error-msg">{errors.subject}</span>}
                  </div>

                  <div className="col-12">
                    <label className="form-label-custom">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      className={`input-custom ${errors.message ? 'input-error' : ''}`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <span className="error-msg">{errors.message}</span>}
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-primary-custom w-100 justify-content-center"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                      ) : (
                        <><i className="bi bi-send-fill"></i>Send Message</>
                      )}
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="col-12">
                      <div className="alert-custom alert-success">
                        <i className="bi bi-check-circle-fill"></i>
                        Message sent! I'll get back to you within 24 hours.
                      </div>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="col-12">
                      <div className="alert-custom alert-error">
                        <i className="bi bi-exclamation-triangle-fill"></i>
                        Something went wrong. Please try again or email me directly.
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
