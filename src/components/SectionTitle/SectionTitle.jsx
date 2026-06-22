import './SectionTitle.css';

export default function SectionTitle({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="section-title text-center mb-5">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider">
        <span></span><span></span><span></span>
      </div>
    </div>
  );
}
