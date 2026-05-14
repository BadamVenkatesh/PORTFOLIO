import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '1200+', label: 'DSA Problems' },
  { value: '43+', label: 'GitHub Repos' },
  { value: '2', label: 'Internships' },
  { value: '9.92', label: 'PUC CGPA' },
];

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 85%' } });

      statsRef.current.forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)', background: '#0a0a0a', position: 'relative',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="section-label">// about me</p>
        <h2 className="section-title">A bit about who I am</h2>

        <div ref={textRef}>
          <p style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', lineHeight: 1.8, color: '#a3a3a3', marginBottom: '20px', maxWidth: '680px' }}>
            Final-year Computer Science student at RGUKT Basar with a strong focus on
            backend engineering and AI. I spend most of my time designing distributed
            systems with Spring Boot — microservices, API gateways, service discovery
            with Eureka, the whole nine yards. On the AI side, I build GenAI applications
            using LangChain, Hugging Face, and Google's Gemini.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', lineHeight: 1.8, color: '#a3a3a3', marginBottom: '20px', maxWidth: '680px' }}>
            I've shipped real products — a forensic face-matching system with Spring Boot
            microservices, an AI genomic variant analysis platform, a WhatsApp bot that
            mimics my texting style, and e-commerce platforms for actual businesses. I
            don't just build demos; I build things that run in production and handle
            real users.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', lineHeight: 1.8, color: '#8a8a8a', maxWidth: '680px' }}>
            Competitive programming keeps my problem-solving sharp — 1200+ problems
            solved across LeetCode, Codeforces, CodeChef, and AtCoder. I think in
            time complexities and dream in graph algorithms. Currently aiming for
            roles where I can work on systems that scale to millions.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '24px', marginTop: '60px', paddingTop: '40px',
          borderTop: '1px solid rgba(201, 168, 76, 0.12)',
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} ref={(el) => (statsRef.current[i] = el)} style={{ textAlign: 'center' }}>
              <div className="font-heading" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c9a84c', lineHeight: 1.2 }}>
                {stat.value}
              </div>
              <div className="font-mono" style={{
                fontSize: '0.75rem', color: '#6b6b6b', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginTop: '6px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
