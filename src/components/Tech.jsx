import python from '../assets/Python.png'
import java from '../assets/Java.png'
import javascript from '../assets/JavaScript.png'
import c from '../assets/C.png'
import cplus from '../assets/Cplus.png'
import csharp from '../assets/Csharp.png'
import typescript from '../assets/TypeScript.png'
import react from '../assets/React.png'
import tailwind from '../assets/Tailwind.png'
import unity from '../assets/Unity.png'
import django from '../assets/Django.png'
import express from '../assets/Express.png'
import flask from '../assets/Flask.png'
import node from '../assets/Node.js.png'
import mongodb from '../assets/MongoDB.png'
import sql from '../assets/MySQL.png'
import ansible from '../assets/Ansible.png'
import aws from '../assets/AWS.png'
import azure from '../assets/Azure.png'
import docker from '../assets/Docker.png'
import gcloud from '../assets/GCloud.png'
import jenkins from '../assets/Jenkins.png'
import kubernetes from '../assets/Kubernetes.png'
import linux from '../assets/Linux.png'
import windows from '../assets/Windows.png'
import androidStudio from '../assets/AndroidStudio.png'
import subversion from '../assets/Subversion.png'
import git from '../assets/Git.png'
import jira from '../assets/Jira.png'
import selenium from '../assets/Selenium.png'
import sonarqube from '../assets/SonarQube.png'
import tensorflow from '../assets/TensorFlow.png'
import vscode from '../assets/VSCode.png'


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
      { name: 'Unity', icon: unity }
    ],
    backend: [
      { name: 'Django', icon: django },
      { name: 'Express', icon: express },
      { name: 'Flask', icon: flask },
	  { name: 'Node', icon: node }
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
	]
  };

  const TechItem = ({ name, icon }) => (
    <div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center relative'>
      {/* Blurred background for entire card */}
      <div className="absolute inset-0 bg-white opacity-10 rounded-2xl blur-lg" />
      {/* Content container with relative positioning to stay above blur */}
      <div className="relative z-10">
        <div className="w-20 h-20 flex items-center justify-center">
          <img src={icon} alt={name.toLowerCase()} className="w-[80px] h-[80px] object-contain" />
        </div>
        <h1 className="mt-2 text-center">{name}</h1>
      </div>
    </div>
  );

  const TechSection = ({ title, items }) => (
    <>
      <h3 className='my-10 text-center text-2xl'>{title}</h3>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {items.map((tech) => (
          <TechItem key={tech.name} {...tech} />
        ))}
      </div>
    </>
  );

  return (
    <div className='mt-150 pb-20'>
      <h2 className='my-10 text-center text-4xl'>My Technologies</h2>
      <TechSection title="Languages" items={technologies.languages} />
      <TechSection title="Front-End" items={technologies.frontend} />
      <TechSection title="Back-End" items={technologies.backend} />
	  <TechSection title="Database" items={technologies.database} />
	  <TechSection title="DevOps & Cloud" items={technologies.devCloud} />
	  <TechSection title="Tools" items={technologies.tools} />
    </div>
  );
};

export default Tech;