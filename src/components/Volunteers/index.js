import React from 'react';

import VolunteerStats from './VolunteerStats';
import VolunteerList from './VolunteerList';

const Volunteers = () => {
  return (
    <section className="section section-sm">
      <VolunteerStats />

      <VolunteerList />
    </section>
  );
};

export default Volunteers;
