import React from 'react';

import list from '../../data/projects';
import ProjectCard from './ProjectCard';

const defaultLimit = list.length || 3;

const ProjectList = ({ limit = defaultLimit, showIcon, showTags }) => {
  return (
    <>
      {/* Only 3 items to feature */}
      {list.slice(0, limit).map((project, index) => (
        <ProjectCard
          showTags={showTags}
          showIcon={showIcon}
          key={index}
          project={project}
        />
      ))}
    </>
  );
};

export default ProjectList;
