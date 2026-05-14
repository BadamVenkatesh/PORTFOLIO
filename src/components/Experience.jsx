import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'App Developer',
    company: 'Afflicartz',
    period: 'Aug 2024 — Nov 2024',
    logo: '/affli_logo.png',
    website: 'https://afflicartz.com',
    description:
      'Built a cashback and coupon tracking platform from scratch. Developed the mobile app in Flutter and the web dashboard in React. Integrated affiliate tracking APIs so users could earn cashback on e-commerce purchases.',
    tech: ['Flutter', 'React', 'Firebase', 'REST APIs'],
  },
  {
    role: 'Shopify Developer Intern',
    company: 'Sai Ram Snacks',
    period: 'Dec 2024 — Feb 2025',
    logo: '/sairam_logo.png',
    website: 'https://sairamsnacks.com',
    description:
      'Customized a full Shopify storefront for a local snack brand. Worked on Liquid templating, built custom product pages, optimized checkout flow, and made the site mobile-responsive.',
    tech: ['Shopify', 'Liquid', 'HTML/CSS', 'JavaScript'],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef}
      style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)', background: '#0d0d0d' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="section-label">// work experience</p>
        <h2 className="section-title">Where I've worked</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)} className="glass-card"
              style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '36px', width: '40px', height: '2px', background: '#c9a84c' }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <img src={exp.logo} alt={`${exp.company} logo`}
                  style={{ width: '52px', height: '52px', objectFit: 'contain', borderRadius: '10px',
                    border: '1px solid rgba(201,168,76,0.15)', background: '#1a1a1a', padding: '6px', flexShrink: 0 }} />
                <div>
                  <h3 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f0ece4', marginBottom: '4px' }}>
                    {exp.role}<span style={{ color: '#c9a84c' }}> @ </span>
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" data-cursor-hover
                      style={{ color: '#c9a84c' }}>{exp.company}</a>
                  </h3>
                  <p className="font-mono" style={{ fontSize: '0.8rem', color: '#6b6b6b' }}>{exp.period}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#a3a3a3', lineHeight: 1.75, marginBottom: '20px' }}>{exp.description}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {exp.tech.map((t) => (<span key={t} className="project-tech-tag">{t}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
