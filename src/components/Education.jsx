import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: 'Bachelor of Technology — Computer Science',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, Basar',
    date: 'Sept 2023 — May 2027',
    current: true,
    note: 'Final year. Focused on distributed systems, competitive programming, and applied ML.',
  },
  {
    degree: 'Pre-University Course (PUC)',
    institution: 'RGUKT Basar',
    date: 'July 2021 — May 2023',
    grade: 'CGPA: 9.92',
    note: 'Ranked 1st in university across all branches.',
  },
  {
    degree: 'Schooling (SSC)',
    institution: 'KLR New Indira Priyadarshini School',
    date: 'Graduated April 2021',
    grade: 'CGPA: 10',
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef}
      style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)', background: '#0d0d0d' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="section-label">// education</p>
        <h2 className="section-title">Where I studied</h2>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div style={{
            position: 'absolute', left: '5px', top: '8px', bottom: '8px', width: '1px',
            background: 'linear-gradient(to bottom, transparent, #c9a84c 15%, #c9a84c 85%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {educationData.map((edu, i) => (
              <div key={i} ref={(el) => (itemsRef.current[i] = el)} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-32px', top: '8px', width: '11px', height: '11px',
                  background: edu.current ? '#c9a84c' : '#0a0a0a', border: '2px solid #c9a84c',
                  borderRadius: '50%', zIndex: 2,
                }} />

                <div className="glass-card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <h3 className="font-heading" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f0ece4' }}>
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="font-mono" style={{
                        fontSize: '0.65rem', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)',
                        padding: '2px 10px', borderRadius: '20px', letterSpacing: '0.1em',
                      }}>FINAL YEAR</span>
                    )}
                  </div>
                  <p className="font-body" style={{ fontSize: '0.9rem', color: '#8a8a8a', marginBottom: '4px' }}>{edu.institution}</p>
                  <p className="font-mono" style={{ fontSize: '0.75rem', color: '#6b6b6b', marginBottom: edu.grade || edu.note ? '10px' : '0' }}>{edu.date}</p>
                  {edu.grade && (
                    <p className="font-mono" style={{ fontSize: '0.85rem', color: '#c9a84c', fontWeight: 600 }}>{edu.grade}</p>
                  )}
                  {edu.note && (
                    <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginTop: '8px', lineHeight: 1.6 }}>{edu.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
