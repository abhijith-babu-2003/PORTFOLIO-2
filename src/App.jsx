import About from "./componets/About";
import Contact from "./componets/Contact";
import Header from "./componets/Header";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;