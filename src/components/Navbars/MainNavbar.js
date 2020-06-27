import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';

import Headroom from 'headroom.js';
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  // UncontrolledTooltip,
  Button,
} from 'reactstrap';

const DONATE_URL =
  'https://ethiocovid19rt.com/';
//const SINGUP_FORM_URL =
  //'https://docs.google.com/forms/d/e/1FAIpQLSdYEaHBgkJpolgbrD3Y8ESbiDsx-WPY-S1j6hcNaq2KCthIBA/viewform';

const BLOG_POST_URL = ' https://medium.com/@ethiocovid19RT';
const PRESS_RELEASE = [
  {
    name: 'May 8th 2020',
    link:
      'https://drive.google.com/file/d/1fFUO3d1D9iUx79HON2-ZSGmFh7zc_RCu/view?usp=sharing',
  },
];

const PressReleases = PRESS_RELEASE.map((item) => {
  return <DropdownItem href={item.link}>{item.name}</DropdownItem>;
});

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));

    headroom.init();
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require('assets/img/brand/ECRT_Horizontal_Logo.svg')}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require('assets/img/brand/ECRT_Horizontal_Logo.svg')}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  {/* <NavItem>
                    <NavLink smooth to="/about" tag={Link} role="tab">
                      About
                    </NavLink>
                  </NavItem> */}

                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      nav
                      href="https://github.com/africa-covid-19-response-toolkit/"
                      tag={Link}
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about" tag={Link}>
                        Mission & Vision
                      </DropdownItem>
                      <DropdownItem to="/volunteers" tag={Link}>
                        Volunteers
                      </DropdownItem>
                      <DropdownItem to="/partners" tag={Link}>
                        Our Partners
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <NavItem>
                    <NavLink to="/projects" tag={Link} href="" role="tab">
                      Projects
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink to="/volunteers" tag={Link} href="" role="tab">
                    Volunteers
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink to="/mutualaid" tag={Link} href="" role="tab">
                      Mutual Aid
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  href={BLOG_POST_URL} >
                      Blogs
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      nav
                      href="https://github.com/africa-covid-19-response-toolkit/"
                      tag={Link}
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Press Release
                      </span>
                    </DropdownToggle>
                    <DropdownMenu>{PressReleases}</DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <Button
                      className="mb-3 mb-sm-0"
                      color="dark"
                      target="_blank"
                      href={DONATE_URL}
                    >
                      Donate
                    </Button>
                  </NavItem>

                  {/*                   <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/EthioCovid19RT"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                 
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/ethiocovid19rt"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/EthioCovid19RT"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/Ethiopia-COVID19"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/company/ethiocovid19rt/"
                      id="tooltip49550735339"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip49550735339">
                      Follow us on Linkedin
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      color="youtube"
                      href="https://www.youtube.com/company/ethiocovid19rt/"
                      target="_blank"
                      id="tooltip495507359"
                    >
                      <i className="fa fa-youtube" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Youtube
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip495507359">
                      Subscribe on Youtube 
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      color="youtube"
                      href="https://t.me/ethiocovid19rt/"
                      id="tooltip495507259"
                      target="_blank"
                    >
                      <i className="fa fa-telegram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Youtube
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip495507259">
                      Message us on Telegram
                    </UncontrolledTooltip>
                  </NavItem> */}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default withRouter(MainNavbar);
