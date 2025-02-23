import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { FaFolder } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { IoMdPin } from "react-icons/io";

const Navbar = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-2 px-3 sm:py-4 sm:px-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="font-bold text-[10px] sm:text-sm text-white flex items-center">
          <IoMdPin className="mr-1 sm:mr-2 text-base sm:text-lg" />
          Toronto, Canada
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center">
        {/* Desktop view */}
        <div className="hidden lg:flex space-x-4 text-sm">
          <a href="#about-me" onClick={(e) => handleClick(e, 'about-me')} className="text-white hover:text-cyan-300">About Me</a>
          <a href="#education" onClick={(e) => handleClick(e, 'education')} className="text-white hover:text-cyan-300">Education</a>
          <a href="#work-experience" onClick={(e) => handleClick(e, 'work-experience')} className="text-white hover:text-cyan-300">Work Experience</a>
          <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="text-white hover:text-cyan-300">Projects</a>
          <a href="#tech" onClick={(e) => handleClick(e, 'tech')} className="text-white hover:text-cyan-300">Technologies</a>
        </div>

        {/* Mobile view */}
        <div className="flex lg:hidden space-x-1">
          <a 
            href="#about-me" 
            onClick={(e) => handleClick(e, 'about-me')} 
            className="flex items-center justify-center w-6 h-6 text-white hover:text-cyan-300"
          >
            <CgProfile className="w-4 h-4" />
          </a>
          <a 
            href="#education" 
            onClick={(e) => handleClick(e, 'education')} 
            className="flex items-center justify-center w-6 h-6 text-white hover:text-cyan-300"
          >
            <FaGraduationCap className="w-4 h-4" />
          </a>
          <a 
            href="#work-experience" 
            onClick={(e) => handleClick(e, 'work-experience')} 
            className="flex items-center justify-center w-6 h-6 text-white hover:text-cyan-300"
          >
            <GiSuitcase className="w-4 h-4" />
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleClick(e, 'projects')} 
            className="flex items-center justify-center w-6 h-6 text-white hover:text-cyan-300"
          >
            <FaFolder className="w-4 h-4" />
          </a>
          <a 
            href="#tech" 
            onClick={(e) => handleClick(e, 'tech')} 
            className="flex items-center justify-center w-6 h-6 text-white hover:text-cyan-300"
          >
            <RiToolsFill className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-1 sm:gap-2 text-base sm:text-xl">
        <a 
          href="https://www.linkedin.com/in/amdsyd" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-cyan-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Syed2096" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-cyan-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;