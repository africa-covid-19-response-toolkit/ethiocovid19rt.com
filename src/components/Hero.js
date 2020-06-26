import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';
const items = [
  {
    id: 2,
    heading: 'ECRT Partners with Habesha Networks',
    summary: `Habesha Network is a grassroots non-profit organization in multiple cities around
    the world committed to developing and implementing methods of
    connectivity and support between Habesha communities across the globe.
    With an emphasis on community development, philanthropy, thought
    leadership, and social and professional networking, our goal is to
    provide members resources while bridging the gaps and growing a
    stronger Habesha Network.`,
    image: `${require('assets/img/icons/HN_GOLD-logo.png')}`,
    actionbutton: 'Donate',
    secondactionbutton: 'Read more',
    buttonLink:
      'https://www.ethiopiatrustfund.org/donations/ecrt-emergency-covid-19-donation/',
  },
  {
    id: 1,
    heading: 'Africa COVID-19 Response Toolkit Launched',
    summary: `We’re excited to announce the first release of the Africa COVID-19 Response Toolkit (ACRT), a set of open source projects developed by an international group of volunteer software engineers, designers, and PMs that allow any government or public entity to get up and running with a software toolset to respond to COVID-19.
    `,
    image: `${require('assets/img/theme/africa_covid19_2.svg')}`,
    buttonLink:
      'https://github.com/africa-covid-19-response-toolkit/community/tree/readme-refresh',
  },
  {
    id: 3,
    heading: 'Delivery Initiatives Drive Change',
    summary: `Our Delivery Workstream Team is engaged in a range of on-the-ground initiatives from donation drives which provide clothing and sanitary products for people in quarantine centers to promotion of local services that have recently increased the provision of food and grocery home delivery.

    Collaboration with businesses on the ground (e.g., hotels, laundromats, shops) has contributed to the success of our delivery projects to date and the team looks forward to the exciting partnerships ahead!
    `,
    image: `${require('assets/img/theme/delivery.png')}`,
    actionbutton: 'See Pictures',
    buttonLink: 'https://www.instagram.com/p/CAKR1fQHro9/',
  },
];

const Hero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const isDonateCarousel = (item) => {
    if (item.secondactionbutton) {
      return (
        <Link to="/fundraising">
          <Button className="btn-white mt-4" color="default">
            {item.secondactionbutton || 'More'}
          </Button>
        </Link>
      );
    }
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Container className="py-md align-items-center h-50vh">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-lg-auto" lg="6">
              <h2 className="text-dark font-weight-bold">{item.heading}</h2>
              <p className="text-dark mt-4">
                {truncate(item.summary, { length: 500 })}
              </p>
              <Button
                className="btn-white mt-4"
                color="default"
                href={item.buttonLink}
              >
                {item.actionbutton || 'Read More'}
              </Button>
              {isDonateCarousel(item)}
            </Col>
            <Col className="mb-lg-auto align-items-center" lg="5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={item.image}
              />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Row className="justify-content-between align-items-center pt-50 ">
      <Col>
        <Carousel
          ride="carousel"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Col>
    </Row>
  );
};

export default Hero;
