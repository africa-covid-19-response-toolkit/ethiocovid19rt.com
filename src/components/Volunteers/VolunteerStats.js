import React from 'react';
import { Row, Col } from 'reactstrap';

const VolunteerStats = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col className="order-lg-1" lg="12">
          <div className="card-profile-stats d-flex justify-content-center">
            <div>
              <span className="heading">1400+</span>
              <span className="description">Volunteers</span>
            </div>
            <div>
              <span className="heading">15</span>
              <span className="description">Active Project</span>
            </div>
            <div>
              <span className="heading">89</span>
              <span className="description">Comments</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default VolunteerStats;
