/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import Tabletop from 'tabletop';

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from 'reactstrap';

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
    data: [],
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/18iq-c-NvggsY3Yl5qElgovUzD6awAXSCzzHZ91Bwbzs/pubhtml',
      simpleSheet: true,
      callback: (googleData) => {
        this.setState({
          data: googleData,
        });
      },
    });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <Row className="justify-content-center">
          <Col className="mt-5 mt-lg-0">
            {/* Menu */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                It is run by a team from across the world that is passionate
                about helping out with the current crisis. Find us on Slack on
                #all-general .
              </small>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Operation Leads
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 2)}
                    href="#pablo"
                    role="tab"
                  >
                    Moderator
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Technical Team
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 4}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 4,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 4)}
                    href="#pablo"
                    role="tab"
                  >
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 5}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 5,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 5)}
                    href="#pablo"
                    role="tab"
                  >
                    Digital Media
                  </NavLink>
                </NavItem>
              </Nav>
            </div>

            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={'plainTabs' + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((obj) => {
                          return (
                            <tr>
                              <td>{obj.Name} gag</td>
                              <td>
                                <a
                                  className="fa fa-facebook-square"
                                  href={'https://' + obj.LinkedIn}
                                ></a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
