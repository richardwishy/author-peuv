import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './carouselBooks.css';

const CarouselBooks = () => {
  return(
    <Carousel variant='dark' indicators={false} >
      <Carousel.Item>
        <Row>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/123/000000.jpg' alt='' />
          </Col>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/321/000000.jpg' alt='' />
          </Col>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/452/000000.jpg' alt='' />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/143/000000.jpg' alt='' />
          </Col>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/765/000000.jpg' alt='' />
          </Col>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/276/000000.jpg' alt='' />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/234/000000.jpg' alt='' />
          </Col>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/654/000000.jpg' alt='' />
          </Col>
          <Col md={4} className='itemCarousel'>
            <img src='https://dummyimage.com/214x438/876/000000.jpg' alt='' />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBooks;