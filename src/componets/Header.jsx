
import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <div className="flex space-x-4">
        <a 
          href="https://github.com/abhijith-babu-2003" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaGithub className="text-white text-xl" />
        </a>
        <a 
          href="https://www.linkedin.com/in/abhijith-babu-820827329/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaLinkedin className="text-white text-xl" />
        </a>
      </div>
    </header>
  );
};


export default Header;
