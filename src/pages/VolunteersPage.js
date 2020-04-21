import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import Volunteers from 'components/Volunteers';

const VolunteersPage = () => {
  return (
    <MainLayout
      title="Our Volunteers"
      description="It is run by a team from across the world that is
                      passionate about helping out with the current crisis.
                        Find us on Slack on #all-general ."
    >
      <Volunteers />
    </MainLayout>
  );
};

export default VolunteersPage;
