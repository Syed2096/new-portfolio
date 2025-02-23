import React from 'react';
import { ABOUT_ME } from "../constants/index.js";
import me from '../assets/Ahmed.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
	hidden: {x: -100, opacity: 0},
	visible: {
		x: 0,
		opacity: 1,
		transition: {duration: 0.5, delay: delay}
	}
})

const About = () => {
  return (
    <div className="my-10 h-screen flex items-center px-4"> {/* Added px-4 for better spacing on mobile */}
      <div className="flex flex-wrap justify-center lg:justify-start items-center w-full">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)} 
              initial='hidden' 
              animate="visible" 
              className="py-4 text-4xl lg:text-6xl xl:text-8xl font-thin tracking-tight lg:text-8xl"
            >
              Ahmed Syed
            </motion.h1>
          </div>
          <div className="flex justify-center lg:justify-start">
            <motion.span 
              variants={container(0.5)} 
              initial='hidden' 
              animate="visible" 
              className="text-2xl lg:text-4xl tracking-tight mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.span>
          </div>
          <div className="flex justify-center lg:justify-start">
            <motion.p 
              variants={container(1)} 
              initial='hidden' 
              animate="visible" 
              className="my-2 max-w-xl font-light"
            >
              {ABOUT_ME}
            </motion.p>
          </div>
        </div>
        
        {/* Right image */}
        <div className="w-full py-4 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              initial={{x: 100, opacity: 0}} 
              animate={{x: 0, opacity:1}} 
              transition={{duration: 1, delay: 1.2}} 
              src={me} 
              alt="Ahmed Syed" 
              className='rounded-4xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
