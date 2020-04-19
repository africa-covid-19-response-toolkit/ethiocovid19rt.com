import React from 'react';

import list from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      {/* Only 3 items to feature */}
      {list.slice(0, 3).map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </>
  );
};

export default Projects;
