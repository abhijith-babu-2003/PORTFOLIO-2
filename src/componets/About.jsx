import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
];

const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const sectionRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "120px 32px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />

      {/* Decorative grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Top label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "40px",
          animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both",
        }}
      >
        <div
          style={{ width: "32px", height: "1px", background: "var(--gold)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontWeight: 500,
          }}
        >
          Available for work
        </span>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#4ade80",
            boxShadow: "0 0 8px #4ade80",
          }}
        />
      </div>

      {/* Main heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 8vw, 100px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          Abhijith
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              color: "var(--gold)",
              marginTop: "-4px",
            }}
          >
            Babu
          </span>
        </h1>
      </div>

      {/* Typewriter role */}
      <div
        style={{
          margin: "28px 0 24px",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both",
          height: "32px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontWeight: 300,
            color: "var(--text-secondary)",
            letterSpacing: "0.02em",
          }}
        >
          {displayed}
          <span
            className="cursor-blink"
            style={{ color: "var(--gold)", marginLeft: "2px" }}
          >
            |
          </span>
        </span>
      </div>

      {/* Bio */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "var(--text-secondary)",
          maxWidth: "560px",
          textAlign: "center",
          margin: "0 0 48px",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both",
        }}
      >
        I build real-time web applications — from WebRTC-powered live classrooms
        to Stripe-integrated event platforms. Based in Kerala, India, obsessed
        with clean architecture and seamless user experiences.
      </p>

      {/* CTA row */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both",
        }}
      >
        <a
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "13px 28px",
            background: "var(--gold)",
            color: "var(--ink)",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            textDecoration: "none",
            borderRadius: "8px",
            transition: "all 0.25s",
            border: "1px solid var(--gold)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold-light)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          View Projects
        </a>
        <a
          href="/#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "13px 28px",
            background: "transparent",
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.04em",
            textDecoration: "none",
            borderRadius: "8px",
            border: "1px solid var(--border-hover)",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--gold)";
            e.currentTarget.style.color = "var(--gold)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-hover)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.transform = "none";
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Speciality tags */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "48px",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.85s both",
        }}
      >
        {[
          "WebRTC",
          "Socket.IO",
          "mediasoup",
          "Stripe",
          "Redux Toolkit",
          "Next.js",
        ].map((tag) => (
          <span
            key={tag}
            style={{
              padding: "5px 14px",
              borderRadius: "100px",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              transition: "all 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.background = "var(--gold-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 1.1s both",
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, var(--gold))",
          }}
        />
        <FaArrowDown style={{ color: "var(--gold)", fontSize: "10px" }} />
      </div>
    </section>
  );
};

export default About;
