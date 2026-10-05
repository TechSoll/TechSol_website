import React from 'react';
import './Stats.css';

const STATS = [
  { icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></>, num: '50+', text: 'Businesses helped' },
  { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>, num: '100+', text: 'Projects shipped' },
  { icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>, num: '5+', text: 'Years of Experience' },
  { icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>, num: '99%', text: 'Client Satisfaction', iconColor: '#c25c34' },
];

const Stats: React.FC = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-bar">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-icon" style={s.iconColor ? { color: s.iconColor, background: '#fdf0e7' } : {}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {s.icon}
                </svg>
              </div>
              <div className="stat-text">
                <span className="stat-num">{s.num}</span><br/>
                <span className="stat-label">{s.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
