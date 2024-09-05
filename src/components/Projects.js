import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects.json';
const Projects = () => {
  return (
    <section id="projects" className="py-2 m-1 bg-stone-200 text-primary-color">
      <div className="container mx-auto">
        <h2 style={{ "font-family": "Baskervville SC, system-ui" }} className="text-3xl font-bold mb-4 text-gray-500">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;