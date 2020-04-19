import React from 'react';

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
          <iframe
            title="projects"
            className="airtable-embed"
            src="https://airtable.com/embed/shr2J750ULFDomQMO?backgroundColor=gray&viewControls=on"
            frameBorder="0"
            width="100%"
            height="533"
            style={{ background: 'transparent', border: ' 1px solid #ccc' }}
          />
        </Row>
      </Col>
    </>
  );
};

export default Projects;
