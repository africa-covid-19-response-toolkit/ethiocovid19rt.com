import React from 'react';

import list from '../../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      {list.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </>
  );
};

export default Projects;
