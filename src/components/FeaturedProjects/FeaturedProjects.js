import React from 'react';
import Card from './Card';
import projects from 'data/projects';

const FeaturedProjects = (props) => {
  const keyId = 'work stream';
  const workStreams = projects.reduce((groups, item) => {
    const element =
      Array.isArray(item.tags) &&
      item.tags.find((element) => element.key == keyId);
    return {
      ...groups,
      [element['value']]: [...(groups[element['value']] || []), item],
    };
  }, {});

  return (
    <div className="featured-projects">
      {Object.keys(workStreams).map((item) => {
        return (
          <>
            <h3 className="work-stream display-4">{item}</h3>
            <div className="project-card">
              {workStreams[item].map((project) => {
                return <Card project={project} />;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
