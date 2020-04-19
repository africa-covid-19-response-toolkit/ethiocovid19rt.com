import React from 'react';
import ProjectList from './ProjectList';
import { Col, Row, Container } from 'reactstrap';

const Projects = () => {
  return (
    <>
      <section className="section section-sm mt--200">
        <Container>
          <h3>Our Projects</h3>
          <p>
            ECRT is currently working across 8 key verticals that aim to support
            Ethiopia’s COVID-19 containment efforts. The projects have broad
            ranges going from raising awareness and delivering care packages to
            families struggling in this pandemic to building surveillance and
            reporting dashboards to aid the fight against COVID-19.
          </p>
        </Container>
      </section>

      <Col lg="12">
        <Row className="row-grid">
          <ProjectList />
        </Row>
      </Col>
    </>
  );
};

export default Projects;
