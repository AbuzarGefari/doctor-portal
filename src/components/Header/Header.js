import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css'
import banner1 from '../../images/slider/1.png'
import banner2 from '../../images/slider/2.png'
import banner3 from '../../images/slider/3.png'
const Header = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="text-dark text-position">
          <h6> FEEL THE DIFFERENCE WITH US</h6>
           <h3  className="font-size-h"><span className="fw-bold">Your Health</span> <span className="fw-light">Is Our Property</span></h3>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={banner2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
           <div className="text-dark text-position">
               <h6> FEEL THE DIFFERENCE WITH US</h6>
           <h3  className="font-size-h"><span className="fw-bold">Your Health</span> <span className="fw-light">Is Our Property</span></h3>
            <p className="font-size-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={banner3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <div className="text-dark text-position">
          <h6> FEEL THE DIFFERENCE WITH US</h6>
           <h3  className="font-size-h"><span className="fw-bold">Your Health</span> <span className="fw-light">Is Our Property</span></h3>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Header;