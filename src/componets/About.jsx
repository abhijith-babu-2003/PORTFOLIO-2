const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Abhijith Babu</h3>
            <p className="text-blue-400 text-lg">Full-Stack Developer</p>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
            Hi! I'm a passionate full-stack developer with strong skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
             I enjoy building responsive and interactive web applications with a keen interest in web design and UI/UX development.
              I am a self-learner, able to quickly adapt and learn new technologies, and always eager to take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
