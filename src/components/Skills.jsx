import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiCplusplus, SiPython, SiJavascript, SiReact, SiTailwindcss,
  SiSpringboot, SiDocker, SiJenkins, SiGit, SiMongodb,
  SiMysql, SiApachekafka, SiLinux, SiShopify, SiTensorflow
} from 'react-icons/si';
import { FaCode, FaJava, FaLink } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    label: 'Languages',
    skills: [
      { name: 'C', icon: <FaCode /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'SQL', icon: <FaCode /> },
    ],
  },
  {
    label: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'REST APIs', icon: <FaCode /> },
      { name: 'Microservices', icon: <FaCode /> },
      { name: 'Kafka', icon: <SiApachekafka /> },
      { name: 'Eureka Server', icon: <FaCode /> },
      { name: 'Spring Cloud Gateway', icon: <SiSpringboot /> },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    label: 'GenAI & ML',
    skills: [
      { name: 'LangChain', icon: <FaLink /> },
      { name: 'Hugging Face', icon: <FaCode /> },
      { name: 'Machine Learning', icon: <SiTensorflow /> },
      { name: 'Deep Learning', icon: <SiTensorflow /> },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'Linux (CLI)', icon: <SiLinux /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Shopify', icon: <SiShopify /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const chipsRef = useRef([]);
  let chipIndex = 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      chipsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)', delay: i * 0.04,
            scrollTrigger: { trigger: el, start: 'top 92%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef}
      style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="section-label">// tech stack</p>
        <h2 className="section-title">Skills & Technologies</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <h3 className="font-mono" style={{
                fontSize: '0.75rem', color: '#c9a84c', letterSpacing: '0.15em',
                textTransform: 'uppercase', marginBottom: '16px',
              }}>{cat.label}</h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {cat.skills.map((skill) => {
                  const idx = chipIndex++;
                  return (
                    <div key={skill.name} ref={(el) => (chipsRef.current[idx] = el)} className="skill-chip">
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
