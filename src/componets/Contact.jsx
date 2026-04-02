import React, { useRef, useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";

const contactItems = [
  { icon: MdEmail, label: "Email", value: "abhijith7133@gmail.com", href: "mailto:abhijith7133@gmail.com", accent: '#e74c3c' },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/abhijith-babu", href: "https://www.linkedin.com/in/abhijith-babu-820827329/", accent: '#0077b5' },
  { icon: FaGithub, label: "GitHub", value: "github.com/abhijith-babu-2003", href: "https://github.com/abhijith-babu-2003", accent: '#f0ece4' },
  { icon: FaPhoneAlt, label: "Phone", value: "+91 9207257133", href: "tel:+919207257133", accent: '#4ecdc4' },
];

const Contact = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="reveal" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'120px 32px', position:'relative', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
      <div style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:'600px', height:'300px', background:'radial-gradient(ellipse at bottom, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div style={{ display:'flex', alignItems:'center', gap:'10px', justifyContent:'center', marginBottom:'16px' }}>
        <div style={{ width:'24px', height:'1px', background:'var(--gold)' }} />
        <span style={{ fontSize:'12px', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)', fontWeight:500 }}>Contact</span>
        <div style={{ width:'24px', height:'1px', background:'var(--gold)' }} />
      </div>
      <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px, 6vw, 72px)', fontWeight:400, color:'var(--text-primary)', letterSpacing:'-0.03em', margin:'0 0 12px', lineHeight:1.05 }}>
        Let's work<br /><span style={{ fontStyle:'italic', color:'var(--gold)' }}>together</span>
      </h2>
      <p style={{ fontFamily:'var(--font-body)', fontSize:'16px', fontWeight:300, color:'var(--text-secondary)', maxWidth:'440px', lineHeight:1.7, margin:'0 0 64px' }}>
        Open to full-time roles, freelance projects, and interesting collaborations. Reach out through any channel below.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'16px', width:'100%', maxWidth:'820px', marginBottom:'64px' }}>
        {contactItems.map(({ icon: Icon, label, value, href, accent }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', padding:'28px 20px', border:'1px solid var(--border)', borderRadius:'14px', background:'var(--surface-2)', textDecoration:'none', transition:'all 0.3s cubic-bezier(0.22,1,0.36,1)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=`${accent}55`; e.currentTarget.style.background=`${accent}0d`; e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--surface-2)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
          >
            <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:`${accent}1a`, display:'flex', alignItems:'center', justifyContent:'center', border:`1px solid ${accent}33` }}>
              <Icon size={22} style={{ color: accent }} />
            </div>
            <div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'4px' }}>{label}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-secondary)', fontWeight:300, wordBreak:'break-all' }}>{value}</div>
            </div>
          </a>
        ))}
      </div>
      <div style={{ borderTop:'1px solid var(--border)', paddingTop:'32px', width:'100%', maxWidth:'820px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)', fontWeight:300 }}>© 2025 Abhijith Babu — Kochi, Kerala, India</span>
        <span style={{ fontFamily:'var(--font-display)', fontSize:'18px', color:'var(--gold)', fontStyle:'italic' }}>ab<span style={{ color:'var(--text-muted)' }}>.</span></span>
      </div>
    </section>
  );
};

export default Contact;
