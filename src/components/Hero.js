import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from 'reactstrap';
import { truncate } from 'lodash';

const items = [
  {
    id: 1,
    heading: 'Africa COVID-19 Response Toolkit Launched',
    summary: `We’re excited to announce the first release of the Africa COVID-19 Response Toolkit (ACRT), a set of open source projects developed by an international group of volunteer software engineers, designers, and PMs that allow any government or public entity to get up and running with a software toolset to respond to COVID-19.
    `,
    image: 'assets/img/theme/africa_covid19_2.svg',
    buttonLink:
      'https://github.com/africa-covid-19-response-toolkit/community/tree/readme-refresh',
  },
  {
    id: 2,
    heading: 'ECRT Partners with EDTF',
    summary: `ADTF Emergency COVID-19 or EDTF COVID-19 is established by the EDTF Advisory Council in recognition of the new challenge and existential threat that coronavirus represents to the wellbeing and livelihood of the Ethiopian people and in particular the most disadvantaged segments of the population.`,
    image: `'https://www.ethiopiatrustfund.org/wp-content/uploads/2018/09/edtf-yellow-alt.png`,
    actionbutton:'Donate',
    buttonLink:
      'https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page',
  },
  {
    id: 3,
    heading: 'Slide 3',
    summary: `Argon Design System comes with four pre-built pages to help you
    get started faster. You can change the text and images and
    you're good to go.'`,
    image: 'assets/img/theme/africa_covid19_2.svg',
    buttonLink:
      'https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page',
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-lg-auto" lg="6">
              <h2 className="text-dark font-weight-bold">{item.heading}</h2>
              <p className="lead text-dark mt-4">
              {truncate(item.summary, { length: 400 })}
              </p>
              <Button
                className="btn-white mt-4"
                color="default"
                href={item.buttonLink}
              >
                {item.actionbutton || 'Read More'}
              </Button>
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <img
                alt="..."
                className="img-center img-fluid"
            //    src={require(item.image)}
                src={require('assets/img/theme/africa_covid19_2.svg')}
              />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Row className="justify-content-between align-items-center">
      <Col>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
