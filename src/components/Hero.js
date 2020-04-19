import React from 'react';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <Container className="py-lg-md d-flex">
      <div className="col px-0">
        <Row>
          <Col lg="12">
            <h1 className="display-3 text-black">
              Ethiopia
              <span className="text-black">COVID-19 Response Team</span>
            </h1>
            <p className="text-black">
              We are a global volunteer team of engineers, health professionals,
              designers, marketing professionals, architects, product managers,
              and other industry professionals. We have mobilized to build and
              support over 15+ open source projects such as; creating a database
              for case tracking, developing public awareness campaigns, building
              bots, facilitating enhanced delivery logistics, retrofitting
              underutilized buildings into treatment centers, and responding to
              many other needs to combat COVID-19 in Ethiopia.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
