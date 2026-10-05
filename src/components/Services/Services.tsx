import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    title: 'Web & App Development',
    desc: 'Scalable web and mobile applications tailored to your business needs.'
  },
  {
    icon: <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9Z" />,
    title: 'Cloud Solutions',
    desc: 'Modernize, migrate and scale with secure cloud infrastructure.',
    iconColor: '#c25c34'
  },
  {
    icon: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>,
    title: 'AI & Automation',
    desc: 'Leverage AI to automate workflows and unlock new opportunities.',
    iconColor: '#5c7b68'
  },
  {
    icon: <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
    title: 'Product Engineering',
    desc: 'End-to-end product development from idea to deployment.',
    iconColor: '#c25c34'
  },
  {
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>,
    title: 'IT Consulting',
    desc: 'Strategic technology consulting for digital transformation.',
    iconColor: '#5c7b68'
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: 'Support & Maintenance',
    desc: 'Reliable support to keep your business running smoothly.',
    iconColor: '#c25c34'
  }
];

const Services: React.FC = () => {
  return (
    <section className="services section-white" id="services">
      <div className="container">
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-label">OUR SERVICES</span>
            <h2 className="h2">What We Do</h2>
          </div>
          <a href="#" className="btn-link">View All Services &rarr;</a>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon" style={s.iconColor ? { color: s.iconColor, background: s.iconColor === '#c25c34' ? '#fdf0e7' : '#f0f5f2' } : {}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {s.icon}
                </svg>
              </div>
              <div className="service-content">
                <h3 className="h3">{s.title}</h3>
                <p className="text-muted">{s.desc}</p>
              </div>
              <div className="service-arrow" style={s.iconColor ? { color: s.iconColor, background: s.iconColor === '#c25c34' ? '#fdf0e7' : '#f0f5f2' } : {}}>
                &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
