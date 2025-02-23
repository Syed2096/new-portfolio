import python from '../assets/Python.png';
import java from '../assets/Java.png';
import javascript from '../assets/JavaScript.png';
import c from '../assets/C.png';
import cplus from '../assets/Cplus.png';
import csharp from '../assets/Csharp.png';
import typescript from '../assets/TypeScript.png';
import react from '../assets/React.png';
import tailwind from '../assets/Tailwind.png';
import unity from '../assets/Unity.png';
import django from '../assets/Django.png';
import express from '../assets/Express.png';
import flask from '../assets/Flask.png';
import node from '../assets/Node.js.png';
import mongodb from '../assets/MongoDB.png';
import sql from '../assets/MySQL.png';
import ansible from '../assets/Ansible.png';
import aws from '../assets/AWS.png';
import azure from '../assets/Azure.png';
import docker from '../assets/Docker.png';
import gcloud from '../assets/GCloud.png';
import jenkins from '../assets/Jenkins.png';
import kubernetes from '../assets/Kubernetes.png';
import linux from '../assets/Linux.png';
import windows from '../assets/Windows.png';
import androidStudio from '../assets/AndroidStudio.png';
import subversion from '../assets/Subversion.png';
import git from '../assets/Git.png';
import jira from '../assets/Jira.png';
import selenium from '../assets/Selenium.png';
import sonarqube from '../assets/SonarQube.png';
import tensorflow from '../assets/TensorFlow.png';
import vscode from '../assets/VSCode.png';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],  // Reduced animation range
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const TechItem = ({ name, icon }) => {
  const randomDuration = Math.random() * (6 - 2.5) + 2.5;

  return (
    <div className="w-24 sm:w-32"> {/* Fixed width container */}
      <motion.div
        variants={iconVariants(randomDuration)}
        initial="initial"
        animate="animate"
        className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutra-800 p-2 sm:p-4 flex flex-col items-center relative h-24 sm:h-32" // Fixed height
      >
        <div className="absolute inset-0 bg-white opacity-10 rounded-xl sm:rounded-2xl blur-lg" />
        <div className="relative z-10 flex flex-col items-center justify-between h-full">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            <img
              src={icon}
              alt={name.toLowerCase()}
              className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] object-contain"
            />
          </div>
          <h1 className="text-[10px] sm:text-sm text-center overflow-hidden text-ellipsis w-full px-1">
            {name}
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

const TechSection = ({ title, items, index }) => {
  const xValue = index % 2 === 0 ? -100 : 100;

  return (
    <>
      <motion.h3 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: xValue }}
        transition={{ duration: 1 }} 
        className="my-6 sm:my-10 text-center text-xl sm:text-2xl"
      >
        {title}
      </motion.h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: xValue }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
      >
        {items.map((tech, index) => (
          <TechItem key={tech.name} {...tech} />
        ))}
      </motion.div>
    </>
  );
};

const Tech = () => {
  const technologies = {
    languages: [
      { name: 'Python', icon: python },
      { name: 'Java', icon: java },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
      { name: 'C', icon: c },
      { name: 'C++', icon: cplus },
      { name: 'C#', icon: csharp },
    ],
    frontend: [
      { name: 'React', icon: react },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Unity', icon: unity },
    ],
    backend: [
      { name: 'Django', icon: django },
      { name: 'Express', icon: express },
      { name: 'Flask', icon: flask },
      { name: 'Node', icon: node },
    ],
    database: [
      { name: 'MongoDB', icon: mongodb },
      { name: 'MySQL/SQL', icon: sql },
    ],
    devCloud: [
      { name: 'Ansible', icon: ansible },
      { name: 'AWS', icon: aws },
      { name: 'Azure', icon: azure },
      { name: 'G Cloud', icon: gcloud },
      { name: 'Docker', icon: docker },
      { name: 'Jenkins', icon: jenkins },
      { name: 'Kubernetes', icon: kubernetes },
      { name: 'Linux', icon: linux },
      { name: 'Windows', icon: windows },
    ],
    tools: [
      { name: 'Android', icon: androidStudio },
      { name: 'Subversion', icon: subversion },
      { name: 'Git', icon: git },
      { name: 'Jira', icon: jira },
      { name: 'Selenium', icon: selenium },
      { name: 'SonarQube', icon: sonarqube },
      { name: 'TensorFlow', icon: tensorflow },
      { name: 'VS Code', icon: vscode },
    ],
  };

  return (
    <div className="mt-20 sm:mt-30 pb-10 sm:pb-20">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}} 
        initial={{opacity: 0, y: -100}} 
        transition={{duration: 0.5}} 
        className="my-6 sm:my-10 text-center text-3xl sm:text-4xl"
      >
        My Technologies
      </motion.h2>
      <TechSection title="Database" items={technologies.database} index={0} />
      <TechSection title="Front-End" items={technologies.frontend} index={1} />
      <TechSection title="Back-End" items={technologies.backend} index={2} />
      <TechSection title="Languages" items={technologies.languages} index={3} />
      <TechSection title="Tools" items={technologies.tools} index={4} />
      <TechSection title="DevOps & Cloud" items={technologies.devCloud} index={5} />
    </div>
  );
};

export default Tech;