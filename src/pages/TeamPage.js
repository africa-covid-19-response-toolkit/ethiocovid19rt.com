import React, { useEffect, useRef } from 'react';
import { Button, Card, Container, Row, Col } from 'reactstrap';
import MainNavbar from 'components/Navbars/MainNavbar';
import SimpleFooter from 'components/Footers/SimpleFooter';
import Tabs from 'components/Tabs'

const TeamPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef && mainRef.current) mainRef.current.scrollTop = 0;
  }, []);
  return (
    <>
      <MainNavbar />
      <main className="profile-page" ref={mainRef}>
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-default">
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
       
        <section className="section section-lg section-shaped pb-250">
          <Container>
            <Tabs />
          </Container>
        </section>
      </main>
      
      <SimpleFooter />
    </>
  );
};

export default TeamPage;
