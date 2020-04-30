import LogoNames from './LogoNames';
import React from 'react';

const Partners = () => {
  const items = LogoNames.map((item) => (
    <div>
      <img alt="..." src={require('assets/img/partners/' + item)} />
    </div>
  ));

  return (
    <div className="partners-section  ">
      <div className="title">
        <h2 class="display-3">Out Partners</h2>
      </div>
      <div className="partners-list">{items}</div>
    </div>
  );
};

export default Partners;
