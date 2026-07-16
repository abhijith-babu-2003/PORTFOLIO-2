import React, { useRef, useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

// Import images - paths relative to this file
import ai from "../assets/ai.png";
import chat from "../assets/Chat.png";
import ecommerce from "../assets/e-commerce.png";
import userManagement from "../assets/userManagement.png";
import taskManager from "../assets/taskManager.png";
import Venuo from "../assets/Venuo.png";
import liveClassroom from "../assets/liveClassroom.png";
import peertopeer from "../assets/Peer-to-peer.png"

const projectList = [
  {
    id: 1,
    title: "NextGrade E-Learning Platform",
    description:
      "A full-featured Learning Management System (LMS) developed for online education. Built a complete platform with live classrooms powered by WebRTC & mediasoup, curriculum management, assignment and quiz modules, session scheduling, admin dashboard, content management, worksheet uploads, student progress tracking, and real-time communication. Optimized for scalability, performance, and seamless learning experiences across desktop and mobile.",
    image: liveClassroom,
    github: "https://github.com/abhijith-babu-2003/MEET-FRONTEND",
    live: "https://platform.nextgrade.ca/",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WebRTC",
      "mediasoup",
      "Socket.IO",
      "Redux",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Video Communication Platform",
    description:
      "A real-time peer-to-peer communication platform featuring  audio/video calling, screen sharing. Built with WebRTC, Socket.IO, React, Node.js, and Express, offering seamless communication across desktop and mobile with features like microphone/camera controls, connection status, and responsive UI.",
    image:peertopeer,
    github: "https://github.com/abhijith-babu-2003/MEET-FRONTEND",
    // live: "https://liveclassroom.abhijith.site/",
    tags: [
      "React",
      "Node.js",
      "Express",
      "WebRTC",
      "Socket.IO",
      "Peer-to-Peer",
      "Real-Time Communication",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Event Booking — Venuo",
    description:
      "Full-stack event platform with Stripe payments, QR-code ticketing, Cloudinary media, and an admin dashboard with revenue analytics. Built with Redux Toolkit and scalable API architecture.",
    image: Venuo,
    github: "https://github.com/abhijith-babu-2003/EVENT-FRONTEND",
    live: "https://event-frontend-git-main-abhijithbroto-8585s-projects.vercel.app/",
    tags: ["Stripe", "Redux Toolkit", "QR Code"],
    featured: true,
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "Real-time messaging platform with custom chat rooms, direct messaging, and WebSocket-based instant updates. Secured with JWT token-based authentication.",
    image: chat,
    github: "https://github.com/abhijith-babu-2003/CHAT-APPLICATION-FRONTEND",
    live: "https://chat-application-frontend-nine-rho.vercel.app/",
    tags: ["Socket.IO", "JWT", "React"],
    featured: true,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Scalable archery e-commerce platform with cart, wishlist, checkout, order tracking, and Razorpay payments. Features an admin dashboard with analytics and automated invoice generation.",
    image: ecommerce,
    github: "https://github.com/abhijith-babu-2003/ArrowMart",
    live: null,
    tags: ["Razorpay", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 6,
    title: "Task Manager",
    description:
      "Next.js task management app with secure JWT auth, real-time SWR updates, interactive Recharts progress visualisation, and MongoDB persistence.",
    image: taskManager,
    github: "https://github.com/abhijith-babu-2003/task-manager-nextjs",
    live: "https://task-manager-nextjs-nine.vercel.app/login",
    tags: ["Next.js", "SWR", "Recharts"],
    featured: false,
  },
  {
    id: 7,
    title: "AI Assistant",
    description:
      "AI-powered visual generation tool using OpenAI's API to create stunning visuals from text prompts. Clean, minimal UI with responsive design.",
    image: ai,
    github: "https://github.com/abhijith-babu-2003/AI-Assistant",
    live: null,
    tags: ["OpenAI", "React", "API"],
    featured: false,
  },
  {
    id: 8,
    title: "User Management System",
    description:
      "Full-stack user management with role-based access control, admin dashboard, image uploads via Cloudinary, and Redux state management.",
    image: userManagement,
    github: "https://github.com/abhijith-babu-2003/USM-REACT-REDUX",
    live: null,
    tags: ["Redux", "Cloudinary", "RBAC"],
    featured: false,
  },
];

const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(201,168,76,0.3)" : "var(--border)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        background: "var(--surface-2)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.1)"
          : "none",
        animationDelay: `${index * 0.1}s`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          background: "var(--surface-3)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />
        {/* Dark overlay on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.4s",
          }}
        />
        {/* Featured badge */}
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "4px 10px",
              borderRadius: "100px",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              backdropFilter: "blur(8px)",
            }}
          >
            <FaStar style={{ color: "var(--gold)", fontSize: "10px" }} />
            <span
              style={{
                color: "var(--gold)",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 400,
            color: hovered ? "var(--gold)" : "var(--text-primary)",
            margin: "0 0 10px",
            letterSpacing: "-0.01em",
            transition: "color 0.3s",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 300,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            margin: "0 0 16px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 10px",
                borderRadius: "100px",
                border: "1px solid var(--border)",
                fontSize: "11px",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              transition: "color 0.2s",
              padding: "6px 0",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <FaGithub size={15} /> Source
          </a>

          {project.live && (
            <>
              <div
                style={{
                  width: "1px",
                  height: "14px",
                  background: "var(--border)",
                }}
              />
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "var(--teal)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  padding: "6px 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="reveal"
      style={{
        minHeight: "100vh",
        padding: "120px 32px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "72px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{ width: "24px", height: "1px", background: "var(--gold)" }}
          />
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
            }}
          >
            Work
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          Things I've built
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 300,
            color: "var(--text-secondary)",
            maxWidth: "480px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          A selection of projects ranging from real-time video platforms to
          payment-integrated marketplaces.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {projectList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
