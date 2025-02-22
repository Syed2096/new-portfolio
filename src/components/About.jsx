import { ABOUT_ME } from "../constants/index.js";
import me from '../assets/Ahmed.jpg';

const About = () => {
  return (
    <div className="mt-50">
      <div className="flex flex-wrap justify-center lg:justify-start">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="py-4 pd-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ahmed Syed
            </h1>
          </div>
          <div className="flex justify-center lg:justify-start">
            <span className="text-4xl tracking-tight mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl font-light">
              {ABOUT_ME}
            </p>
          </div>
        </div>
        
        {/* Right image */}
        <div className='w-full py-4 lg:w-1/2 lg:p-8'>
          <div className="flex justify-center">
            <img src={me} alt='Ahmed Syed' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
