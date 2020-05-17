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
    id: 1,
    heading: 'Africa COVID-19 Response Toolkit Launched',
    summary: `We’re excited to announce the first release of the Africa COVID-19 Response Toolkit (ACRT), a set of open source projects developed by an international group of volunteer software engineers, designers, and PMs that allow any government or public entity to get up and running with a software toolset to respond to COVID-19.
    `,
    image: `${require('assets/img/theme/africa_covid19_2.svg')}`,
    buttonLink:
      'https://github.com/africa-covid-19-response-toolkit/community/tree/readme-refresh',
  },
  {
    id: 2,
    heading: 'ECRT Partners with EDTF',
    summary: `EDTF COVID-19 is established by the EDTF Advisory Council in recognition of the new challenge and existential threat that coronavirus represents to the well being and livelihood of the Ethiopian people and in particular the most disadvantaged segments of the population.`,
    image: `${require('assets/img/theme/edtf-yellow.png')}`,
    actionbutton: 'Donate',
    secondactionbutton:'Read more',
    buttonLink: 'https://www.ethiopiatrustfund.org/donations/ecrt-emergency-covid-19-donation/',
  },
  {
    id: 3,
    heading: 'What makes a modern-day hero?',
    summary: `A story of one of  @EthioCovid19RT’s volunteers about why the health care professionals are the modern-day heroes.
    The story chronicles her personal journey and what we can all do practically to support these brave warriors.`,
    image: `${require('assets/img/theme/news_3.png')}`,
    buttonLink:
      'https://medium.com/africa-covid-19-response-toolkit/what-makes-a-modern-day-hero-66ff3c5a0aef',
  },
  {
    id: 4,
    heading: 'Who we are',
    summary: `On March 21st, we started off as a Slack channel of 4 software engineers working on building digital tools to help the Ethiopian Ministry of Health (MoH) track COVID-19 cases. By March 25th we had grown to a global volunteer network of more than 1600 people, working on over 15+ open source projects. A few of our current initiatives and activities include; creating a database for case tracking, developing public awareness campaigns, building bots, facilitating enhanced delivery logistics, retrofitting underutilized buildings into treatment centers, and responding to many other needs to combat COVID-19 in Africa.`,
    buttonLink:
      '#about',
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
        <Link to="/aboutedtf">
          <Button className="btn-white mt-4" color="default">
            {item.secondactionbutton || 'About EDTF'}
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
                {truncate(item.summary, { length: 300 })}
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
              { item.image && <img
                alt="..."
                className="img-center img-fluid"
                src={item.image}
              />
              }
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
