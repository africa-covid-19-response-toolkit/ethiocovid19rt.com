import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import projectList from '../../data/projects';

const ProjectLanding = ({ slug }) =>
  !slug ? (
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
  ) : null;

const ProjectDetail = ({ slug }) => {
  const projectItem = projectList.find((item) => item.slug === slug);

  return (
    <>
      {slug ? (
        <Col lg="12">
          <Row className="row-grid">
            <Container>
              <h5 className="display-4">
                <span className="text-black">{projectItem.name}</span>
              </h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: projectItem.description,
                }}
              ></div>
              {projectItem.components &&
                projectItem.components.map((Component, index) => (
                  <Component key={index} />
                ))}
            </Container>
          </Row>
        </Col>
      ) : null}
    </>
  );
};

const Projects = (props) => {
  const { slug } = useParams();

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

      <ProjectLanding slug={slug} />
      <ProjectDetail slug={slug} />
    </>
  );
};

export default Projects;
