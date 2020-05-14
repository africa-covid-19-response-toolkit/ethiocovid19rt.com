import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap';
const AboutContent = () => {
  return (
    <div>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid ">
            <Col md="6">
              <Card className="bg-secondary shadow border-0">
                <CardImg
                  alt="..."
                  src={require('assets/img/theme/ENELEGNA.JPG')}
                  top
                />
                <blockquote className="card-blockquote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-bg secondary"
                    preserveAspectRatio="none"
                    viewBox="0 0 583 95"
                  >
                    <polygon
                      className="fill-secondary"
                      points="0,52 583,95 0,95"
                    />
                    <polygon
                      className="fill-secondary"
                      opacity=".2"
                      points="0,42 583,95 683,0 0,95"
                    />
                  </svg>
                  <h4 className="display-3 font-weight-bold text-white">
                    #EneLegna እኔለኛ
                  </h4>
                  <p className="lead text-italic text-white">
                    #EneLegna እኔለኛ (Me for Us), is a movement and a chance for
                    each one of us to make a difference for all of us. The
                    actions we take as individuals today will make the
                    difference for our global community tomorrow. We work
                    together in the spirit of Ubuntu - the universal principle
                    of ‘ I am because we are’. The current health crisis
                    highlights just how interconnected we all are. We have come
                    together to work collectively, and across borders to create
                    and share open source tools and valuable information. It is
                    in this spirit that ECRT came to be and operates.
                  </p>
                </blockquote>
              </Card>
            </Col>
            <Col md="6">
              <div id="about" className="pl-md-5 ">
                <h2 className="font-weight-bold text-warning text-center">
                  Vision
                </h2>
                <br />
                <p>
                  Minimize morbidity and mortality from COVID-19 and make
                  Ethiopia a leader in global COVID-19 response efforts.
                </p>

                <br />
                <h2 className="font-weight-bold text-warning text-center">
                  Mission
                </h2>
                <br />
                <p>
                  ECRT envisions that by creating a platform for different
                  professionals from all over the world to come together and
                  collaborate, we will meaningfully flatten the curve, more
                  readily available, and adopt technological solutions, and
                  creatively address communal challenges that make preventive
                  measures especially difficult in Ethiopia
                </p>
                <p>
                  We will support first responders and healthcare professionals
                  to drive effective efforts in stagnating the number of cases
                  and get to levels of control that countries that have been
                  successful have reached.
                </p>
                <br />
                <h2 className="font-weight-bold text-warning text-center">
                  #EneLegna እኔለኛ
                </h2>
                <p>
                  #EneLegna እኔለኛ (Me for Us), is a movement and a chance for
                  each one of us to make a difference for all of us. The actions
                  we take as individuals today will make the difference for our
                  global community tomorrow. We work together in the spirit of
                  Ubuntu - the universal principle of ‘ I am because we are’.
                  The current health crisis highlights just how interconnected
                  we all are. We have come together to work collectively, and
                  across borders to create and share open source tools and
                  valuable information. It is in this spirit that ECRT came to
                  be and operates.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg pt-lg-0 ">
        <Container>
        <h4 className="display-3 text-warning ">Strategic Pillars</h4>
        <br/>
          <Row xs="2">
        
            <Col className="align-items-center">
              <Row>
                {' '}
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-3 ">
                  1
                </div>
              </Row>
              <Row>
                <strong>
                  Enabling compliance with public health guidelines
                </strong>{' '}
                <br/>
              </Row>
              <Row>
                <ul>
                  <p>
                    <li>Awareness</li>
                    <li>Handwashing and hand sanitizers</li>
                    <li>Face masks for every person </li>
                    <li>Care package delivery for vulnerable</li>
                  </p>
                </ul>
              </Row>
            </Col>

            <Col  className="align-items-center">
              <Row>
                {' '}
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-3 ">
                  2
                </div>
              </Row>
              <Row>
                <strong>
                Supporting health/frontline workers with resources to ensure
                they have access to
                </strong>
                <br/>
              </Row>
              <Row>
                <ul>
                  <p>
                  <li>Personal protective equipment (PPE)</li>
                  <li>Medical equipment</li>
                  <li>Emotional support services</li>
                  <li>Adequate housing and transportation</li>
                  </p>
                </ul>
              </Row>
            </Col>
            <Col  className="align-items-center">
              <Row>
                {' '}
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-3 ">
                  3
                </div>
              </Row>
              <Row>
                <strong>
                Facilitating knowledge exchange between regions and countries
                </strong>{' '}
                <br/>
              </Row>
              <Row>
                <ul>
                  <p>
                  <li>
                    Developing COVID-19 awareness content to inform citizens in
                    local languages
                  </li>
                  <li>
                    Encouraging the sharing of ideas through Civic Engagement
                  </li>
                  <li>Free and open-source resources</li>
                  </p>
                </ul>
              </Row>
            </Col>
            <Col  className="align-items-center">
              <Row>
                {' '}
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-3 ">
                4
                </div>
              </Row>
              <Row>
                <strong>
                Forming mission-aligned partnerships for amplified impact
                </strong>{' '}
                <br/>
              </Row>
              <Row>
                <ul>
                  <p>
                  <li>Nonprofits and volunteer organizations</li>
                  <li>Product and service providers</li>
                  <li>Professional associations</li>
                  <li>
                    Governmental agencies that align with public health and
                    community response
                  </li>
                  <li>
                    Using our platform to help existing efforts gain visibility
                    and resources (mutual aid)
                  </li>
                  </p>
                </ul>
              </Row>
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
