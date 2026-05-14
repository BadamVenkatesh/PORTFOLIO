import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'SK2Face — Forensic Face Matching',
    desc: 'Distributed microservices architecture for sketch-to-photo face matching. Designed Spring Boot services with API Gateway, Eureka service discovery, and Feign Client for inter-service communication. Built an image retrieval pipeline using FastAPI + TensorFlow embeddings with cosine similarity ranking.',
    tech: ['Spring Boot', 'FastAPI', 'TensorFlow', 'MySQL', 'Docker', 'Eureka'],
    link: 'https://github.com/BadamVenkatesh/sk2face-backend',
    type: 'github',
  },
  {
    title: 'PathoLens — AI Genomic Variant Analysis',
    desc: 'Full-stack platform for visualizing genomic sequences and scoring pathogenicity of single-nucleotide variants. Deployed the Evo2 model on Modal for low-latency, scalable inference. Designed the UI for rapid variant lookup and researcher workflows.',
    tech: ['React', 'Tailwind', 'Three.js', 'Python', 'Modal', 'Evo2'],
    link: 'https://github.com/BadamVenkatesh/PathoLens.ai-Frontend',
    type: 'github',
  },
  {
    title: 'VIBE — 3D AI Companion',
    desc: 'Emotionally intelligent 3D AI avatar that supports real-time, emotion-aware conversations. Built interactive Three.js frontend with a Node.js backend managing conversational context and Gemini-powered inference pipelines.',
    tech: ['React', 'Three.js', 'Node.js', 'Gemini API'],
    link: 'https://github.com/BadamVenkatesh/VIBE',
    type: 'github',
  },
  {
    title: 'Chatterly — WhatsApp AI Assistant',
    desc: 'A WhatsApp bot built with LangChain + Gemini that replies exactly like me — mixing Telugu and English, casual slang, emojis, and real-human chat flow. Handles birthday wishes and friendly conversations automatically.',
    tech: ['Node.js', 'LangChain', 'Gemini', 'WhatsApp API'],
    link: 'https://github.com/BadamVenkatesh/Chatterly',
    type: 'github',
  },
  {
    title: 'TunedIn — AI Hackathon Finder',
    desc: 'AI-powered app that matches you with relevant hackathons based on your skills and interests. Uses Groq LLMs with a ChromaDB vector store for semantic search and precise recommendations.',
    tech: ['Python', 'Streamlit', 'Groq', 'ChromaDB', 'LangChain'],
    link: 'https://github.com/BadamVenkatesh/TunedIn',
    type: 'github',
  },
  {
    title: 'Afflicartz — Cashback Platform',
    desc: 'End-to-end cashback and coupon tracking platform with Flutter mobile app and React web dashboard. Integrated affiliate tracking APIs, Firebase auth, and real-time database for user cashback management.',
    tech: ['React', 'Flutter', 'Firebase', 'REST APIs'],
    link: 'https://afflicartz.com',
    type: 'live',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef}
      style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p className="section-label">// selected work</p>
        <h2 className="section-title">Things I've built</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))', gap: '24px' }}>
          {projects.map((proj, i) => (
            <a key={i} ref={(el) => (cardsRef.current[i] = el)}
              href={proj.link} target="_blank" rel="noopener noreferrer"
              className="project-card" data-cursor-hover
              style={{ textDecoration: 'none', display: 'block' }}>
              <span className="project-number">0{i + 1}</span>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f0ece4' }}>
                  {proj.title}
                </h3>
                {proj.type === 'github' ? (
                  <FiGithub style={{ color: '#6b6b6b', fontSize: '1.1rem', flexShrink: 0 }} />
                ) : (
                  <FiExternalLink style={{ color: '#6b6b6b', fontSize: '1.1rem', flexShrink: 0 }} />
                )}
              </div>

              <p style={{ fontSize: '0.9rem', color: '#8a8a8a', lineHeight: 1.7, marginBottom: '20px' }}>
                {proj.desc}
              </p>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {proj.tech.map((t) => (<span key={t} className="project-tech-tag">{t}</span>))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
