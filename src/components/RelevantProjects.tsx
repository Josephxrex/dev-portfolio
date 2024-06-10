import React from 'react';
import ProjectCard, { Project } from './ProyectCard';

const RelevantProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      githubLink: "https://github.com/your-username/project-1"
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      githubLink: "https://github.com/your-username/project-2"
    },
    {
      title: "Project 3",
      description: "Description of Project 3.",
      githubLink: "https://github.com/your-username/project-3"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Proyectos Relevantes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <ProjectCard project={project} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelevantProjects;
