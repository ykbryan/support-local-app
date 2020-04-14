import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Banners() {
  const [index, setIndex] = useState(0);

  const handleCarouselSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleCarouselSelect}>
      <Carousel.Item>
        <Link to='/'>
          <img
            className='d-block w-100'
            src='https://supportlocal.sg/assets/img/banner-lg.svg'
            alt='First slide'
          />
        </Link>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/'>
          <img
            className='d-block w-100'
            src='https://supportlocal.sg/assets/img/banner-lg.svg'
            alt='First slide'
          />
        </Link>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/'>
          <img
            className='d-block w-100'
            src='https://supportlocal.sg/assets/img/banner-lg.svg'
            alt='First slide'
          />
        </Link>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
