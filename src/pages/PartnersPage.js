import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import Partners from 'components/Partners/Partners';

const PartnersPage = (props) => {
  return (
    <MainLayout
      title="Our Partners"
      description=""
    >
      <Partners />
    </MainLayout>
  );
};

export default PartnersPage;
