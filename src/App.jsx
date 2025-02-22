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
	  	<div class="relative h-full w-full bg-slate-950">
		  <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
		</div>
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