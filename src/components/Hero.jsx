import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = ({ imageSrc }) => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });

    const nameEl = nameRef.current;
    if (nameEl) {
      const text = nameEl.textContent;
      nameEl.innerHTML = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'hero-name-char';
        nameEl.appendChild(span);
      });

      tl.to(nameEl.querySelectorAll('.hero-name-char'), {
        opacity: 1, y: 0, duration: 0.05, stagger: 0.04, ease: 'power2.out',
      });
    }

    tl.fromTo(subtitleRef.current, { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');
    tl.fromTo(descRef.current, { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
    tl.fromTo(ctaRef.current, { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    tl.fromTo(socialRef.current, { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    tl.fromTo(imageRef.current, { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, '-=1');
    tl.fromTo(scrollRef.current, { opacity: 0 },
      { opacity: 1, duration: 0.8 }, '-=0.3');

    gsap.to(imageRef.current, {
      y: -10, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 3.5,
    });
  }, []);

  return (
    <section id="home" ref={sectionRef} style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative',
      overflow: 'hidden', background: '#0a0a0a',
      padding: 'clamp(100px, 15vw, 140px) clamp(24px, 5vw, 80px) clamp(60px, 10vw, 100px)',
    }}>
      <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-15%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid',
        gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 'clamp(40px, 6vw, 80px)' }}
        className="hero-grid">
        <div style={{ zIndex: 2 }}>
          <p className="font-mono" style={{ fontSize: '0.85rem', color: '#c9a84c', letterSpacing: '0.15em', marginBottom: '20px' }}>
            hey there, I'm —
          </p>
          <h1 ref={nameRef} className="font-heading" style={{
            fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, color: '#f0ece4',
            lineHeight: 1.05, marginBottom: '20px', letterSpacing: '-0.02em',
          }}>Badam Venkatesh</h1>

          <p ref={subtitleRef} className="font-body" style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#c9a84c', marginBottom: '24px', opacity: 0,
          }}>Spring Boot Developer · GenAI Engineer · Problem Solver</p>

          <p ref={descRef} className="font-body" style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', color: '#8a8a8a', lineHeight: 1.7,
            maxWidth: '520px', marginBottom: '36px', opacity: 0,
          }}>
            I design distributed backend systems with Spring Boot, build
            GenAI-powered applications with LangChain, and solve 1200+ DSA
            problems for fun. Final-year CS undergrad at RGUKT Basar — shipping
            production code since sophomore year.
          </p>

          <div ref={ctaRef} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px', opacity: 0 }}>
            <button className="btn-gold-filled" data-cursor-hover
              onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work
            </button>
            <a href="mailto:badamvenkatesh2007@gmail.com" className="btn-gold" data-cursor-hover>
              Get In Touch
            </a>
          </div>

          <div ref={socialRef} style={{ display: 'flex', gap: '20px', opacity: 0 }}>
            {[
              { Icon: FaGithub, href: 'https://github.com/BadamVenkatesh', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com/in/badamvenkatesh', label: 'LinkedIn' },
              { Icon: HiOutlineMail, href: 'mailto:badamvenkatesh2007@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={label} data-cursor-hover
                style={{ color: '#6b6b6b', fontSize: '1.2rem', transition: 'color 0.3s ease, transform 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6b6b6b'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div ref={imageRef} style={{
          width: 'clamp(240px, 22vw, 320px)', height: 'clamp(300px, 28vw, 400px)',
          borderRadius: '16px', overflow: 'hidden', position: 'relative', opacity: 0,
          border: '1px solid rgba(201, 168, 76, 0.2)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(201, 168, 76, 0.05)',
        }}>
          <img src={imageSrc} alt="Badam Venkatesh — Spring Boot Developer & GenAI Engineer" loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 0%' }} draggable={false} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
            background: 'linear-gradient(transparent, rgba(10, 10, 10, 0.7))', pointerEvents: 'none' }} />
        </div>
      </div>

      <div ref={scrollRef} className="scroll-indicator" style={{ opacity: 0 }}>
        <div className="scroll-line" />
        <div className="scroll-text">scroll</div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child { order: 2; }
          .hero-grid > div:last-child { order: 1; justify-self: center; }
          .hero-grid > div:first-child > div:last-child { justify-content: center; }
          .hero-grid > div:first-child > div[style*="gap: 16px"] { justify-content: center; }
          .hero-grid p[class*="font-mono"] { text-align: center; }
          .hero-grid p[class*="font-body"] { margin-left: auto; margin-right: auto; }
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
