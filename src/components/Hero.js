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

const items = [
  {
    id: 1,
    heading: 'Slide 1',
    summary: `Argon Design System comes with four pre-built pages to help you
    get started faster. You can change the text and images and
    you're good to go.'`,
    image: 'assets/img/theme/africa_covid19_2.svg',
    buttonLink: 'https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page'
  } ,{
    id: 2,
    heading: 'Slide 2',
    summary: `Argon Design System comes with four pre-built pages to help you
    get started faster. You can change the text and images and
    you're good to go.'`,
    image: `'assets/img/theme/africa_covid19_2.svg'`,
    buttonLink: 'https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page'
  }, {
    id: 3,
    heading: 'Slide 3',
    summary: `Argon Design System comes with four pre-built pages to help you
    get started faster. You can change the text and images and
    you're good to go.'`,
    image: 'assets/img/theme/africa_covid19_2.svg',
    buttonLink: 'https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page'
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
            <h1 className="text-white font-weight-light">
               {item.heading}
              </h1>
              <p className="lead text-white mt-4">
               {item.summary}
              </p>
              <Button
                className="btn-white mt-4"
                color="default"
                href={item.buttonLink}
              >
                Read More
              </Button>
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
            <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require('assets/img/theme/africa_covid19_2.svg')}
                  />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
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
  );
};

export default Hero;
