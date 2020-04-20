import React, { useEffect, useRef } from 'react';

// reactstrap components
import { Card, Container } from 'reactstrap';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter';
import MainLayoutHeader from './MainLayoutHeader';

const MainLayout = ({ title, description, children }) => {
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
        <section className="section section-lg section-shaped pb-250">
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
          <MainLayoutHeader title={title} description={description} />
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
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">{children}</div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default MainLayout;
