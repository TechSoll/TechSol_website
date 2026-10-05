import React from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: "TechSol delivered our platform ahead of schedule with great quality. Highly recommended!",
    author: "Rohan Mehta",
    role: "Founder, GrowthKart",
    img: "https://i.pravatar.cc/100?img=11"
  },
  {
    quote: "Professional team with deep technical expertise. They truly understand business needs.",
    author: "Priya Sharma",
    role: "Product Manager, HealthBridge",
    img: "https://i.pravatar.cc/100?img=5"
  },
  {
    quote: "A reliable partner for our cloud migration. The support has been excellent.",
    author: "Abhishek Rao",
    role: "CTO, FinTrack",
    img: "https://i.pravatar.cc/100?img=12"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials section-white" id="testimonials">
      <div className="container">
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-label">CLIENTS SAY</span>
            <h2 className="h2">What Our Clients Say</h2>
          </div>
          <a href="#" className="btn-link">View All Testimonials &rarr;</a>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="test-card">
              <p className="test-quote">"{t.quote}"</p>
              <div className="test-author">
                <img src={t.img} alt={t.author} className="test-avatar" />
                <div>
                  <h4 className="h4" style={{fontSize: '0.95rem', marginBottom: '2px'}}>{t.author}</h4>
                  <span className="text-muted" style={{fontSize: '0.8rem'}}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
