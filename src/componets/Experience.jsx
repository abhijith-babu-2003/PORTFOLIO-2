import React, { useRef, useEffect, useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Teqbae",
    startDate: "Oct 2025",
    endDate: "Present",
    current: true,
  },
];

const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("opacity-100", "translate-y-0")
        ),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

const Experience = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-24 bg-neutral-900 border-y border-white/10 relative opacity-0 translate-y-10 transition-all duration-700"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-yellow-400/10 to-transparent blur-2xl pointer-events-none" />

      {/* Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-[1px] bg-yellow-400" />
        <span className="text-xs tracking-widest uppercase text-yellow-400">
          Experience
        </span>
        <div className="w-6 h-[1px] bg-yellow-400" />
      </div>

      <h2 className="text-3xl md:text-5xl text-center text-white mb-16">
        Where I've worked
      </h2>

      {/* Timeline */}
      <div className="w-full max-w-3xl relative">
        {/* Line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />

        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:p-8 ml-8 md:ml-12 rounded-xl border transition-all duration-300 ${
        hovered
          ? "border-yellow-400/40 bg-yellow-400/5 shadow-lg"
          : "border-white/10 bg-neutral-800"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dot */}
      <div className="absolute -left-4 md:-left-6 top-6 w-3 h-3 rounded-full bg-yellow-400 shadow-lg border-2 border-neutral-800" />

      {/* Logo */}
      <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 italic">
        tb
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3
            className={`text-lg md:text-xl ${
              hovered ? "text-yellow-400" : "text-white"
            }`}
          >
            {exp.role}
          </h3>

          <div className="flex items-center gap-2 text-xs text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full w-fit">
            {exp.current && (
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            )}
            {exp.startDate} — {exp.endDate}
          </div>
        </div>

        {/* Company */}
        <p className="text-sm text-yellow-400 mb-2">{exp.company}</p>
      </div>
    </div>
  );
};

export default Experience;