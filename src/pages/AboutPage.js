import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
} from 'reactstrap';
const AboutPage = ()=> {
    return(
        <MainLayout >
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
        </MainLayout>

    )
}
export default AboutPage;