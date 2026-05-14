import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      );
      linksRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 92%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef}
      style={{
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)',
        background: '#0a0a0a',
        textAlign: 'center',
      }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p className="section-label">// get in touch</p>

        <h2 ref={headingRef} className="font-heading"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
            lineHeight: 1.2, marginBottom: '24px',
          }}>
          <span style={{ color: '#f0ece4' }}>Let's build </span>
          <span className="gold-gradient-text">something together.</span>
        </h2>

        <p style={{ fontSize: '1rem', color: '#8a8a8a', lineHeight: 1.7, marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px' }}>
          I'm always open to chatting about new projects, internship opportunities,
          or just talking tech. Drop me a line — I reply fast.
        </p>

        {/* Contact Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <a ref={(el) => (linksRef.current[0] = el)} href="mailto:badamvenkatesh2007@gmail.com"
            className="contact-link" data-cursor-hover>
            <HiOutlineMail style={{ fontSize: '1.2rem' }} />
            badamvenkatesh2007@gmail.com
          </a>
          <a ref={(el) => (linksRef.current[1] = el)} href="https://linkedin.com/in/badamvenkatesh"
            target="_blank" rel="noopener noreferrer" className="contact-link" data-cursor-hover>
            <FaLinkedin style={{ fontSize: '1.1rem' }} />
            linkedin.com/in/badamvenkatesh
          </a>
          <a ref={(el) => (linksRef.current[2] = el)} href="https://github.com/BadamVenkatesh"
            target="_blank" rel="noopener noreferrer" className="contact-link" data-cursor-hover>
            <FaGithub style={{ fontSize: '1.1rem' }} />
            github.com/BadamVenkatesh
          </a>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '80px', paddingTop: '32px',
          borderTop: '1px solid rgba(201, 168, 76, 0.08)',
        }}>
          <p className="font-mono" style={{ fontSize: '0.7rem', color: '#3a3a3a', letterSpacing: '0.08em' }}>
            Designed & built by Badam Venkatesh · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
