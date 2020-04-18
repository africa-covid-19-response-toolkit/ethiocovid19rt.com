import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';

// index page sections
import Projects from 'components/Projects';
import Hero from 'components/Hero';

const LandingPage = () => {
  const mainRef = useRef(null);

  const [state, setState] = useState({
    nameFocused: false,
    emailFocused: false,
  });

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
            <div className="shape shape-default">
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
        <section className="section section-sm pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Projects />
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">Build something</h2>
                <p className="lead text-white">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice.
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">Building tools</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">Grow your market</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">Launch time</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src={require('assets/img/theme/ENELEGNA.JPG')}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-default"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-default"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                      About
                    </h4>
                    <p className="lead text-italic text-white">
                      The Ethiopia COVID-19 Response Team (ECRT) is a global
                      volunteer team supporting the Ethiopian Ministry of Health
                      (MoH) in its COVID-19 containment efforts.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div id="about" className="pl-md-5">
                  <p>
                    On March 21st, we started off as a Slack channel of 4
                    software engineers working on building digital tools to help
                    the Ethiopian Ministry of Health (MoH) track COVID-19 cases.
                    By March 25th we had grown to a global volunteer network of
                    more than 1200 people, working on over 15+ open source
                    projects.
                  </p>
                  <p>
                    A few of our current initiatives and activities include;
                    creating a database for case tracking, developing public
                    awareness campaigns, building bots, facilitating enhanced
                    delivery logistics, retrofitting underutilized buildings
                    into treatment centers, and responding to many other needs
                    to combat COVID-19 in Ethiopia.
                  </p>
                  <br />
                  <h2 className="font-weight-bold text-warning text-center">
                    #EneLegna እኔለኛ
                  </h2>
                  <br />
                  <p>
                    #EneLegna እኔለኛ (Me for Us), is a movement and a chance for
                    each one of us to make a difference for all of us.
                  </p>
                  <p>
                    The actions we take as individuals today will make the
                    difference for our global community tomorrow. We work
                    together in the spirit of Ubuntu - the universal principle
                    of ‘ I am because we are’. The current health crisis
                    highlights just how interconnected we all are. We have come
                    together to work collectively, and across borders to create
                    and share open source tools and valuable information. It is
                    in this spirit that ECRT came to be and operates.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
     
        <section className="section pb-0 bg-gradient-secondary">
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
                <div className="d-flex px-3">
                  <div className="pl-4">
                    <h4 className="display-3 text-black">Africa Covid-19 Response Toolkit</h4>
                    <p className="text-black">
                    Civic Engagement Workstream, is aimed at information, galvanizing, and coordinating volunteer and civic organizations responding to COVID-19 in Africa. 
                    The civic engagement team collects all the lessons, solutions and developed tools so that other groups in other countries in Africa are also able to take the information, adapt then implement it in their communities. 
                    We use our blog AFRICA COVID-19 TOOL KIT to collect and disband information.
                    </p>
                  </div>
                </div>
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div className="pl-4">
                        <h5 className="title text-danger">View Tools</h5>
                        <p>
                          View our products built under the Tool Kit to collect and disband information!
                        </p>
                        <a
                          className="text-danger"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div className="pl-4">
                        <h5 className="title text-warning">
                          Read Blog
                        </h5>
                        <p>
                          We use our blog AFRICA COVID-19 TOOL KIT to collect and disband information. Please read our blog and let us know what you think!
                        </p>
                        <a
                          className="text-warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </a>
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
                  Do you love this awesome{" "}
                  <span className="text-success">
                   work being done by volunteers like you ?
                  </span>
                </h2>
                <p className="lead">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in React. Start a new project or give an old
                  Bootstrap project a new look!
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  >
                    Sign up for our Newsletter
                  </Button>
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  >
                    Join a project
                  </Button>
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
