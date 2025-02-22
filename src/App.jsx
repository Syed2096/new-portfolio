// App.jsx
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Navbar from "./components/Navbar.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-8">
          <Navbar />
        </div>
      </div>
      
      {/* Main Content with padding-top to account for fixed navbar */}
      <div className="container mx-auto px-20">
        <section id="about-me" className="scroll-mt-24">
          <About />
        </section>
        <section id="education" className="scroll-mt-24">
          <Education />
        </section>
        <section id="work-experience" className="scroll-mt-24">
          <Experience />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
		<section id="tech" className="scroll-mt-24">
          <Tech />
        </section>
      </div>
    </div>
  );
}

export default App;