import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCode, FiAward, FiUsers, FiBookOpen, FiZap } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: <FiAward />,
    title: 'Flipkart Grid 7.0 — National Semi-Finalist',
    desc: 'Cleared multiple rounds to reach the national semi-finals in one of India\'s largest and most competitive engineering challenges.',
  },
  {
    icon: <FiCode />,
    title: '1200+ DSA Problems Solved',
    desc: 'Across LeetCode, Codeforces, CodeChef, and AtCoder. Focused on graphs, dynamic programming, segment trees, and binary search patterns.',
  },
  {
    icon: <FiAward />,
    title: 'Rank 1 in University (PUC)',
    desc: 'Topped RGUKT Basar with a CGPA of 9.92 in Pre-University Course across all branches.',
  },
  {
    icon: <FiUsers />,
    title: 'Team Lead — Smart India Hackathon 2024 & 2025',
    desc: 'Led teams in both SIH 2024 and 2025, developing solutions for government problem statements with real-world impact.',
  },
  {
    icon: <FiZap />,
    title: 'Cognizant × Aston Martin GenAI Ideathon',
    desc: 'Participated in the GenAI Ideathon organized by Cognizant in collaboration with Aston Martin, competing with solutions at the intersection of AI and industry.',
  },
  {
    icon: <FiAward />,
    title: '9am SkillVerified — Nova Coding Challenge IV (Top 20)',
    desc: 'Ranked among the Top 20 contestants nationwide in the 9am Nova Coding Challenge IV.',
    link: 'https://credentials.9am.careers/credentials/b6a1d57f-c99a-489e-94f8-6ec83f047ad6',
  },
  {
    icon: <FiBookOpen />,
    title: 'ML Specialization — Andrew Ng (Coursera)',
    desc: 'Completed the full Machine Learning Specialization covering supervised learning, neural networks, bias-variance tradeoff, and recommender systems.',
    link: 'https://coursera.org/verify/specialization/L6DINDHE7IR1',
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef}
      style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)', background: '#0d0d0d' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="section-label">// achievements</p>
        <h2 className="section-title">Recognition & milestones</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {achievements.map((item, i) => (
            <div key={i} ref={(el) => (itemsRef.current[i] = el)} className="achievement-item">
              <div className="achievement-icon">{item.icon}</div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0ece4', marginBottom: '4px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#8a8a8a', lineHeight: 1.6 }}>
                  {item.desc}
                  {item.link && (
                    <>
                      {' '}
                      <a href={item.link} target="_blank" rel="noopener noreferrer" data-cursor-hover
                        style={{ color: '#c9a84c', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                        Verify →
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
