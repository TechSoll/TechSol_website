import React from 'react';
import './Portfolio.css';

const PROJECTS = [
  {
    title: 'E-commerce Platform',
    desc: 'Scalable e-commerce solution with AI-powered recommendations.',
    tags: ['Web Development', 'AI'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Healthcare App',
    desc: 'Telemedicine platform for seamless patient-doctor interaction.',
    tags: ['Mobile App', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Business Analytics Platform',
    desc: 'Real-time analytics and reporting dashboard for enterprises.',
    tags: ['Data Analytics', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio section-light" id="projects">
      <div className="container">
        {/* Projects */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-label">FEATURED PROJECTS</span>
            <h2 className="h2">Our Recent Work</h2>
          </div>
          <a href="#" className="btn-link">View All Projects &rarr;</a>
        </div>
        
        <div className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-image-wrapper">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-content">
                <h3 className="h3">{p.title}</h3>
                <p className="text-muted">{p.desc}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <button className="project-arrow-btn">&rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
