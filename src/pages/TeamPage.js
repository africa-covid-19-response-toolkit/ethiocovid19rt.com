import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  CardBody,
} from 'reactstrap';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import volunteerlist from '../data/volunteers.json';

class TeamPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  renderTableData(workstreamTable) {
    return volunteerlist.map((volunteer, index) => {
      const { name, handles, workstream } = volunteer; //destructuring
      if (workstream === workstreamTable) {
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>
              <a className="fa fa-facebook-square" href={handles.facebook}></a>
            </td>
          </tr>
        );
      }
    });
  }

  render() {
    return (
      <>
        <MainNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-1">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="text-center mt-5">
                  <h3>Our Volunteers</h3>
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>
                        It is run by a team from across the world that is
                        passionate about helping out with the current crisis.
                        Find us on Slack on <b>#all-general</b> .
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="12">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">1400+</span>
                          <span className="description">Volunteers</span>
                        </div>
                        <div>
                          <span className="heading">15</span>
                          <span className="description">Active Project</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5 py-5 border-top text-center">
                    <Col lg="3" classname="text-center mt-5 py-5">
                      <Button
                        color="default"
                        block
                        id="togglerOps"
                        style={{ margin: '1rem' }}
                      >
                        OPS Leads
                      </Button>
                      <Button
                        color="secondary"
                        id="togglersurv"
                        block
                        style={{ margin: '1rem' }}
                      >
                        SURVEILLANCE and reporting
                      </Button>
                      <Button
                        color="default"
                        id="togglerawarness"
                        block
                        style={{ margin: '1rem' }}
                      >
                        AWARENESS Team
                      </Button>
                      <Button
                        color="secondary"
                        block
                        id="togglerdiy"
                        style={{ margin: '1rem' }}
                      >
                        DIY GEAR Team
                      </Button>
                      <Button
                        color="default"
                        block
                        id="togglerdelv"
                        style={{ margin: '1rem' }}
                      >
                        DELIVERY TEAM
                      </Button>

                      <Button
                        color="secondary"
                        block
                        id="togglercivc"
                        style={{ margin: '1rem' }}
                      >
                        CIVIC ENGAGEMENT TEAM
                      </Button>
                    </Col>
                    <Col lg="9">
                      <UncontrolledCollapse toggler="#togglerOps">
                        <Card>
                          <CardBody>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>{this.renderTableData('ops')}</tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <UncontrolledCollapse toggler="#togglersurv">
                        <Card>
                          <CardBody>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.renderTableData('surveillance')}
                              </tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <UncontrolledCollapse toggler="#togglerawarness">
                        <Card>
                          <CardBody>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>{this.renderTableData('awareness')}</tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <UncontrolledCollapse toggler="#togglerdiy">
                        <Card>
                          <CardBody>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>{this.renderTableData('diy')}</tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <UncontrolledCollapse toggler="#togglerdelv">
                        <Card>
                          <CardBody>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>{this.renderTableData('delivery')}</tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <UncontrolledCollapse toggler="#togglercivc">
                        <Card>
                          <CardBody>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>{this.renderTableData('civic')}</tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default TeamPage;
