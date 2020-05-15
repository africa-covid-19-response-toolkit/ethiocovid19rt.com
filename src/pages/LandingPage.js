import React, { useEffect, useRef } from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import Partners from 'components/Partners/Partners.js'
// index page sections

import Hero from 'components/Hero';
import ProjectList from 'components/Projects/ProjectList';

const LandingPage = (props) => {
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef && mainRef.current) mainRef.current.scrollTop = 0;
  }, []);
  return (
    <>
      <MainNavbar />
      <main ref={mainRef}>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Hero />
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-sm pt-lg-0 mt--250">
          <Container>
            <h3 className="display-4 text-black">Featured Projects</h3>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <ProjectList limit={3} showIcon showTags />
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Button
                size="lg"
                className="btn-default text-black text-uppercase"
                href="/projects"
                //onClick={() => props.history.push('/projects')}
              >
                View all Tech Projects
              </Button>
            </Col>
          </Row>
        </section>

        <section className="section pb-0 bg-primary mt-5">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-lg-2 ml-lg-auto" md="6">
                <div className="position-relative pl-md-5">
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require('assets/img/theme/africa_covid19_2.svg')}
                  />
                </div>
              </Col>
              <Col className="order-lg-1" lg="6">
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div className="pl-4">
                        <h5 className="title text-dark display-3 ">
                          Africa COVID-19 Response Toolkit
                        </h5>
                        <p className="text-black">
                          Civic Engagement Workstream, is aimed at information,
                          galvanizing, and coordinating volunteer and civic
                          organizations responding to COVID-19 in Africa. The
                          civic engagement team collects all the lessons,
                          solutions and developed tools so that other groups in
                          other countries in Africa are also able to take the
                          information, adapt then implement it in their
                          communities. We use our blog AFRICA COVID-19 TOOL KIT
                          to collect and disband information.
                        </p>

                        <Button
                          className="mb-3"
                          color="dark"
                          target="_blank"
                          href="https://medium.com/africa-covid-19-response-toolkit"
                        >
                          Read our blog
                        </Button>
                        <Button
                          className="mb-3 "
                          color="dark"
                          target="_blank"
                          href="https://github.com/africa-covid-19-response-toolkit/community"
                        >
                          View our Products
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
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

        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Do you love this awesome{' '}
                  <span className="text-black">
                    work being done by volunteers like you ?
                  </span>
                </h2>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdYEaHBgkJpolgbrD3Y8ESbiDsx-WPY-S1j6hcNaq2KCthIBA/viewform"
                  >
                    Sign up!
                  </Button>
                  {/*                   <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="/projects"
                  >
                    Join an exsisting project
                  </Button> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col>
              <Partners />
            </Col>
          </Row>
        </Container>
      </section>

      </main>
      <SimpleFooter />
    </>
  );
};

export default LandingPage;
