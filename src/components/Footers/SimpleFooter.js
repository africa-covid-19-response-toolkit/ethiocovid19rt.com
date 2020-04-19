/*eslint-disable*/
import React from 'react';
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-white font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className=" mb-0 font-weight-light text-white">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/EthioCovid19RT"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/EthioCovid19RT"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href="https://www.instagram.com/ethiocovid19rt"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/Ethiopia-COVID19"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  href="https://www.linkedin.com/company/ethiocovid19rt/"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="youtube"
                  href="https://www.youtube.com/company/ethiocovid19rt/"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-youtube" />
                  </span>
                </Button>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  href="https://t.me/ethiocovid19rt"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-telegram" />
                  </span>
                </Button>
              </Col>
            </Row>
            <hr />
            <Row className=" text-primary align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{' '}
                  <HashLink smooth to={`/#about`}>
                    Ethiopia COVID-19 Response Team
                  </HashLink>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
