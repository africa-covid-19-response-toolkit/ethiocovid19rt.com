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
                View all Projects
              </Button>
            </Col>
          </Row>
        </section>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
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
                    <h2 className="font-weight-bold text-primary text-center">
                    #EneLegna እኔለኛ
                  </h2>
                    <p className=" text-italic text-white">
                      During a time of crisis,
                      <b> #EneLegna </b>reminds us that our decisions can impact
                      our community, our service will change our country, and
                      our collaboration makes a difference globally. Join us by
                      sharing our content, donating to the fund, and
                      volunteering with our team.
                    </p>
                    <p className="text-italic text-white">
                    #EneLegna (Me for Us), is a movement and a chance for each
                    one of us to make a difference for all of us. The actions we
                    take as individuals today will make the difference for our
                    global community tomorrow.
                  </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div id="about" className="pl-md-5">
                  <h2 className="font-weight-bold text-warning text-center">
                    Who we are
                  </h2>
                  <p>
                    The Ethiopia COVID-19 Response Team (ECRT) is a global
                    volunteer team of engineers, doctors, designers, marketers,
                    architects, product managers, and other industry
                    professionals working to respond to combat COVID-19 in
                    Ethiopia in partnership with the Federal Ministry of Health
                    (FMoH).
                  </p>
                  <p>
                    We have mobilized to build and support over 15+ open source
                    projects such as: public awareness campaigns, analytics
                    dashboards, case tracking databases, AI/ML bots,
                    future-forward delivery logistics, COVID-19 symptom app
                    trackers, and responding to many other immediate needs.
                  </p>
                  <p>
                    ECRT is focused on sharing critical, factual and life-saving
                    information while enhancing existing public health
                    capabilities with digital tools. Kicking off on March 21st
                    with four software engineers, by March 25th, ECRT had grown
                    to almost 1,200 people across the globe. To date, we have
                    mobilized 1,600 volunteers from more than 30 U.S. states and
                    18 countries around the world.
                  </p>

                  <br />
          
                </div>
              </Col>
            </Row>
          </Container>
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
                <h3 className="display-3">
                  Are you looking for a way to use your skills to combat
                  COVID-19 in Ethiopia?
                </h3>
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

      </main>
      <SimpleFooter />
    </>
  );
};

export default LandingPage;
