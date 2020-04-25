import React from 'react';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

const MainLayoutHeader = ({ title, description }) => {
  return (
    <Container className="py-lg-md d-flex">
      <div className="col px-0 pt-50">
        <Row>
          <Col lg="12">
            <h1 className="display-3 text-black">{title}</h1>
            <p className="text-black">{description}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MainLayoutHeader;
