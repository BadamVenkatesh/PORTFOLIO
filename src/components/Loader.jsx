import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const screenRef = useRef(null);
  const monogramRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      monogramRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
    )
      .fromTo(
        lineRef.current,
        { width: 0 },
        { width: '80px', duration: 0.6, ease: 'power2.inOut' },
        '-=0.3'
      )
      .to(monogramRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.in',
        delay: 0.5,
      })
      .to(
        lineRef.current,
        { opacity: 0, duration: 0.3, ease: 'power2.in' },
        '-=0.3'
      )
      .to(screenRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
      });
  }, [onComplete]);

  return (
    <div ref={screenRef} className="loader-screen">
      <div style={{ textAlign: 'center' }}>
        <div ref={monogramRef} className="loader-monogram">
          BV
        </div>
        <div ref={lineRef} className="loader-line" />
      </div>
    </div>
  );
};

export default Loader;
