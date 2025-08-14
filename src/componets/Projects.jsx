import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ai from '../assets/ai.png'
import chat from '../assets/Chat.png'
import ecommerce from '../assets/e-commerce.png'
import netflix from '../assets/netflix.png'

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
       ' A fully functional e-commerce platform built for optimal scalability and performance. Features include real-time updates, secure payment processing, and advanced inventory management systems.',
      image: ecommerce,
      github: 'https://github.com/yourusername/ecommerce-platform',
      featured: true,
    },
    {
      id: 2,
      title: 'AI Assistant',
      description:
       ' An AI-powered tool that generates stunning visuals from text prompts using OpenAI’s technology..',
      image: ai,
      github: 'https://github.com/yourusername/ai-image-generator',
      featured: false,
    },
    {
      id: 3,
      title: 'Chat Application',
      description:
        'A real-time chat application with WebSocket support for instant messaging, featuring end-to-end encryption, file sharing capabilities, and multi-platform synchronization.',
      image: chat,
      github: 'https://github.com/yourusername/chat-application',
      featured: true,
    },
    {
      id: 4,
      title: 'Netflix Clone',
      description:
        'A Netflix-inspired streaming platform with movie listings, trailers, user authentication, personalized recommendations, and responsive design for all devices.',
      image: netflix,
      github: 'https://github.com/yourusername/netflix-clone',
      featured: false,
    },
  ];

  const scrollLeft = () => {
    document.getElementById('projects-container').scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('projects-container').scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Stuff I've built
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between w-full max-w-6xl mb-8">
        <button
          onClick={scrollLeft}
          className="p-3 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all duration-300 hover:scale-110"
        >
          <FaChevronLeft size={20} />
        </button>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm">Scroll to explore projects</p>
        </div>
        
        <button
          onClick={scrollRight}
          className="p-3 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all duration-300 hover:scale-110"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Horizontal Projects Container */}
      <div className="w-full max-w-7xl relative">
        <div
          id="projects-container"
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {projectList.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:transform hover:scale-[1.05] flex-shrink-0 w-80 lg:w-96"
            >
              {/* Project Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="flex items-center text-yellow-400 ml-2">
                      <FaStar size={16} />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                      title="View Source"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                  
                  {/* Tech Stack Indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Gradient Fade Effects - Much Reduced */}
        <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-l from-gray-900/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex items-center space-x-2 mt-8">
        {projectList.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-600 opacity-50"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Projects;