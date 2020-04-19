import React from 'react';
import { Col, Badge, Row } from 'reactstrap';

const CivicEngagementDetail = () => {
  return (
    <section className="section section-sm">
      <Row className="row-grid align-items-center">
        <Col className="order-md-2" md="6">
          <img
            alt="..."
            className="img-fluid floating"
            src={require('../assets/images/acr_toolkit_logo.webp')}
          />
        </Col>
        <Col className="order-md-1" md="6">
          <div className="pr-md-5">
            <h3>Join the effort</h3>
            <p>
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
            </p>
            <ul className="list-unstyled mt-5">
              <li className="py-2">
                <a href="https://medium.com/africa-covid-19-response-toolkit">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="fa fa-book" aria-hidden="true" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Read our blog</h6>
                    </div>
                  </div>
                </a>
              </li>
              <li className="py-2">
                <a href="https://airtable.com/embed/shr2J750ULFDomQMO/tblqMZstgKApLYxQq?backgroundColor=gray&viewControls=on&blocks=hide">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="fa fa-money" aria-hidden="true" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Donate or find funding</h6>
                    </div>
                  </div>
                </a>
              </li>
              <li className="py-2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1moOVG3JUmE-szQ0Mgf8am65k5QljGLQ_KuyKFGjGO14nvw/viewform">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-satisfied" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Join our team</h6>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CivicEngagementDetail;
