import React, { useState } from 'react';
import Card from './Card';
import { map } from 'lodash';
import { UncontrolledCollapse } from 'reactstrap';

const WorkStreams = ({ projects, workStreamName }) => {
  let [toggle, setToggle] = useState(true);

  return (
    <>
      <h3
        onClick={() => setToggle(!toggle)}
        id={workStreamName.replace(/[\W_]+/g, '')}
        className="work-stream display-4"
      >
        {toggle && (
          <img
            style={{ width: '48px' }}
            alt="..."
            src={require('assets/img/icons/common/arrow_right-24px.svg')}
          />
        )}
        {!toggle && (
          <img
            style={{ width: '48px' }}
            alt="..."
            src={require('assets/img/icons/common/arrow_drop_down-24px.svg')}
          />
        )}
        {workStreamName}
      </h3>
      <UncontrolledCollapse
        toggler={'#' + workStreamName.replace(/[\W_]+/g, '')}
      >
        <div className="project-card">
          {map(projects, (project, workStreamName) => (
            <Card project={project} />
          ))}
        </div>
      </UncontrolledCollapse>
    </>
  );
};

export default WorkStreams;
