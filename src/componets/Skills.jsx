import React from 'react';
import { FaHtml5, FaCss3, FaBootstrap, FaNode, FaReact, FaAws, FaNpm } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiTypescript, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { icon: FaCss3, color: "#1572B6", name: "CSS3" },
    { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
    { icon: IoLogoJavascript, color: "#F0DB4F", name: "JavaScript" },
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiRedux, color: "#764ABC", name: "Redux" },
    { icon: FaNode, color: "#339933", name: "Node.js" },
    { icon: SiExpress, color: "#FFFFFF", name: "Express" },
    { icon: DiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
    { icon: FaAws, color: "#FF9900", name: "AWS" },
    { icon: RiTailwindCssFill, color: "#38B2AC", name: "Tailwind CSS" },
    { icon: FaNpm, color: "#CB3837", name: "NPM" },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg">Technologies I work with</p>
      </div>

      {/* Horizontal scrolling container */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll whitespace-nowrap gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50"
              >
                <div className="mb-4 p-4 rounded-full bg-gray-800/50">
                  <IconComponent size={40} color={skill.color} />
                </div>
                <span className="text-white font-medium text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
