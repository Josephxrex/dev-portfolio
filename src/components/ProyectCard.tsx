import React from 'react';

export interface Project {
  title: string;
  description: string;
  githubLink: string;
}

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, githubLink } = project;

  return (
    <div className="bg-white shadow-md rounded-md p-6 m-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={githubLink} className="text-blue-500 hover:underline">GitHub Repository</a>
    </div>
  );
};

export default ProjectCard;
