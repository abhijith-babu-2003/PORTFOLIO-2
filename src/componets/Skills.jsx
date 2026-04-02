import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3, FaBootstrap, FaNode, FaReact, FaAws, FaNpm, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiTypescript, SiRedux, SiNextdotjs, SiSocketdotio, SiWebrtc, SiMongodb, SiTailwindcss, SiVercel, SiCloudinary } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  { icon: IoLogoJavascript, color: "#F0DB4F", name: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
  { icon: SiRedux, color: "#764ABC", name: "Redux" },
  { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind" },
  { icon: FaNode, color: "#339933", name: "Node.js" },
  { icon: SiExpress, color: "#FFFFFF", name: "Express" },
  { icon: SiSocketdotio, color: "#ffffff", name: "Socket.IO" },
  { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  { icon: FaAws, color: "#FF9900", name: "AWS" },
  { icon: SiVercel, color: "#ffffff", name: "Vercel" },
  { icon: FaGitAlt, color: "#F05033", name: "Git" },
  { icon: SiCloudinary, color: "#3448C5", name: "Cloudinary" },
  { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
  { icon: FaCss3, color: "#1572B6", name: "CSS3" },
  { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
];

const specialties = [
  { label: 'WebRTC & mediasoup', desc: 'Live video, screen share, P2P' },
  { label: 'Real-Time Systems', desc: 'Socket.IO, event-driven architecture' },
  { label: 'Payment Integration', desc: 'Stripe, Razorpay, webhooks' },
  { label: 'Full Stack MERN', desc: 'End-to-end application development' },
];

const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

const Skills = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  const doubled = [...skills, ...skills];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 32px',
        position: 'relative',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            Tech Stack
          </span>
          <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          margin: 0,
          lineHeight: 1.1,
        }}>
          Technical Skills
        </h2>
      </div>

      {/* Speciality cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '900px',
        marginBottom: '72px',
      }}>
        {specialties.map(({ label, desc }) => (
          <div
            key={label}
            style={{
              padding: '20px 22px',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              background: 'var(--surface-2)',
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
              e.currentTarget.style.background = 'var(--gold-dim)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.background = 'var(--surface-2)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--gold)',
              marginBottom: '4px',
            }}>
              {label}
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--text-muted)',
              fontWeight: 300,
            }}>
              {desc}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee strip */}
      <div style={{
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        padding: '4px 0',
      }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '120px', height: '100%',
          background: 'linear-gradient(to right, var(--surface), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '120px', height: '100%',
          background: 'linear-gradient(to left, var(--surface), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div
          className="animate-marquee"
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
          }}
        >
          {doubled.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '20px 24px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'var(--surface-2)',
                  minWidth: '100px',
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.background = 'var(--gold-dim)';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--surface-2)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <Icon size={32} color={skill.color} style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                }}>
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
