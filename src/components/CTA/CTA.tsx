import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <span className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>LET'S WORK TOGETHER</span>
            <h2 className="h2" style={{color: '#fff', marginBottom: '8px'}}>Let's Build What's Next</h2>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem'}}>Have a project in mind? Let's discuss how TechSol can help you achieve your goals.</p>
          </div>
          <a href="#" className="btn btn-orange cta-btn">Get in Touch &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
