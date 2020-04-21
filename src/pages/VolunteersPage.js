import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import Tabs from 'components/Tabs';
import {
  Row,
  Col
} from 'reactstrap';

const VolunteersPage = (props) => {


  return (
    <MainLayout
      title="Our Volunteers"
      description="It is run by a team from across the world that is
                      passionate about helping out with the current crisis.
                        Find us on Slack on #all-general ."
    >
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
    <Tabs></Tabs>
    </MainLayout>
  );
};

export default VolunteersPage;
