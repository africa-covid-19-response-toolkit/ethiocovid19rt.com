import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import Projects from 'components/Projects';

const ProjectsPage = (props) => {
  return (
    <MainLayout
      title="Our Projects"
      description="ECRT is currently working across 8 key verticals that aim to support
    Ethiopia’s COVID-19 containment efforts. The projects have broad
    ranges going from raising awareness and delivering care packages to
    families struggling in this pandemic to building surveillance and
    reporting dashboards to aid the fight against COVID-19."
    >
      <Projects {...props} />
    </MainLayout>
  );
};

export default ProjectsPage;
