import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.15,
        }
      );
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '16px 0' : '24px 0',
          background: scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(24px, 4vw, 48px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-heading"
            data-cursor-hover
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#f0ece4',
            }}
          >
            B
            <span style={{ color: '#c9a84c' }}>V</span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.6rem',
                color: '#6b6b6b',
                marginLeft: '10px',
                verticalAlign: 'middle',
                letterSpacing: '0.15em',
              }}
            >
              / 2026
            </span>
          </a>

          {/* Desktop Links */}
          <div
            style={{
              display: 'flex',
              gap: '36px',
              alignItems: 'center',
            }}
            className="nav-desktop"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                data-cursor-hover
                className="font-mono"
                style={{
                  fontSize: '0.8rem',
                  color: '#8a8a8a',
                  letterSpacing: '0.08em',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#c9a84c')}
                onMouseLeave={(e) => (e.target.style.color = '#8a8a8a')}
              >
                <span style={{ color: '#c9a84c', marginRight: '4px' }}>0{i + 1}.</span>
                {link.label}
              </a>
            ))}

            <a
              href="/BADAM_VENKATESH_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              data-cursor-hover
              style={{ padding: '8px 20px', fontSize: '0.75rem' }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-cursor-hover
            className="nav-mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: isOpen ? '0' : '6px' }}>
              <span
                style={{
                  width: '24px',
                  height: '1.5px',
                  background: '#c9a84c',
                  transition: 'all 0.3s ease',
                  transform: isOpen ? 'rotate(45deg) translateY(1px)' : 'none',
                }}
              />
              {!isOpen && (
                <span
                  style={{
                    width: '16px',
                    height: '1.5px',
                    background: '#c9a84c',
                    marginLeft: 'auto',
                  }}
                />
              )}
              <span
                style={{
                  width: '24px',
                  height: '1.5px',
                  background: '#c9a84c',
                  transition: 'all 0.3s ease',
                  transform: isOpen ? 'rotate(-45deg) translateY(-1px)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Full-screen Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10, 10, 10, 0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={handleLinkClick}
              className="font-heading"
              style={{
                fontSize: '2rem',
                fontWeight: 600,
                color: '#f0ece4',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#c9a84c')}
              onMouseLeave={(e) => (e.target.style.color = '#f0ece4')}
            >
              <span className="font-mono" style={{ fontSize: '0.8rem', color: '#c9a84c', marginRight: '12px' }}>
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}

          <a
            href="/BADAM_VENKATESH_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            onClick={handleLinkClick}
            style={{ marginTop: '20px' }}
          >
            Resume
          </a>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <div style={{ position: 'relative', width: '24px', height: '24px' }}>
              <span
                style={{
                  position: 'absolute',
                  width: '24px',
                  height: '1.5px',
                  background: '#c9a84c',
                  top: '50%',
                  left: 0,
                  transform: 'rotate(45deg)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  width: '24px',
                  height: '1.5px',
                  background: '#c9a84c',
                  top: '50%',
                  left: 0,
                  transform: 'rotate(-45deg)',
                }}
              />
            </div>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
