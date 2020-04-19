import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import Projects from 'components/Projects';

const ProjectsPage = (props) => {
  return (
    <MainLayout>
      <Projects {...props} />
    </MainLayout>
  );
};

export default ProjectsPage;
