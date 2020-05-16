import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap';
const AboutContent = () => {
  return (
    <div>
      <section className="section pb-0 bg-white mt-5 pb-150 ">
        <Container>
          <Row className="row-grid align-items-center mt--100 ">
            <Col className="order-lg-2 ml-lg-auto" md="6">
              <div className="position-relative pl-md-5">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require('assets/img/brand/ECRT_Vertical_Logo.svg')}
                />
              </div>
            </Col>
            <Col className="order-lg-1" lg="6">
              <div className="d-flex px-3">
                <div className="pl-4">
                  <h5 className="title display-3 text-warning ">Vision</h5>
                  <p className="text-black">
                    Minimize morbidity and mortality from COVID-19 and make
                    Ethiopia a leader in global COVID-19 response efforts.
                  </p>
                </div>
              </div>
              <div className="d-flex px-3">
                <div className="pl-4">
                  <h5 className="title display-3 text-warning ">Mission</h5>
                  <p className="text-black">
                    ECRT envisions that by creating a platform for different
                    professionals from all over the world to come together and
                    collaborate, we will meaningfully flatten the curve, more
                    readily available, and adopt technological solutions, and
                    creatively address communal challenges that make preventive
                    measures especially difficult in Ethiopia
                  </p>
                  <p className="text-black">
                    We will support first responders and healthcare
                    professionals to drive effective efforts in stagnating the
                    number of cases and get to levels of control that countries
                    that have been successful have reached.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg pt-lg-0 ">
        <Container>
          <Row className="row-grid align-items-center mt--100 ">
            <Col className="order-lg-1" lg="12">
              <div className="d-flex px-3">
                <div className="pl-4">
                  <h5 className="title display-3 text-warning ">
                    Strategic Pillars
                  </h5>
                  <Col className="order-lg-2 align-items-center " lg="12">
                    <strong>
                      Enabling compliance with public health guidelines
                    </strong>{' '}
                    <ul>
                      <p>
                        <li>Awareness</li>
                        <li>Handwashing and hand sanitizers</li>
                        <li>Face masks for every person </li>
                        <li>Care package delivery for vulnerable</li>
                      </p>
                    </ul>
                    <strong>
                      Supporting health/frontline workers with resources to
                      ensure they have access to
                    </strong>
                    <ul>
                      <p>
                        <li>Personal protective equipment (PPE)</li>
                        <li>Medical equipment</li>
                        <li>Emotional support services</li>
                        <li>Adequate housing and transportation</li>
                      </p>
                    </ul>
                    <strong>
                      Facilitating knowledge exchange between regions and
                      countries
                    </strong>{' '}
                    <ul>
                      <p>
                        <li>
                          Developing COVID-19 awareness content to inform
                          citizens in local languages
                        </li>
                        <li>
                          Encouraging the sharing of ideas through Civic
                          Engagement
                        </li>
                        <li>Free and open-source resources</li>
                      </p>
                    </ul>
                    <strong>
                      Forming mission-aligned partnerships for amplified impact
                    </strong>{' '}
                    <ul>
                      <p>
                        <li>Nonprofits and volunteer organizations</li>
                        <li>Product and service providers</li>
                        <li>Professional associations</li>
                        <li>
                          Governmental agencies that align with public health
                          and community response
                        </li>
                        <li>
                          Using our platform to help existing efforts gain
                          visibility and resources (mutual aid)
                        </li>
                      </p>
                    </ul>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <MainLayout
      title="About Us"
      description="On March 21st, we started off as a Slack channel of 4 software engineers working on building digital tools to help the Ethiopian Ministry of Health (MoH) track COVID-19 cases. By March 25th we had grown to a global volunteer network of more than 1200 people, working on over 15+ open source projects."
      cardStyle={true}
    >
      <AboutContent></AboutContent>
    </MainLayout>
  );
};
export default AboutPage;
