import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./componets/Header";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Experience from "./componets/Experience";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ background: 'var(--ink)', minHeight: '100vh', color: 'var(--text-primary)', overflowX: 'hidden' }}>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;