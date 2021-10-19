import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
const Footer = () => {
    return (
        <div className="text-white footer">
        <div className="py-4 gradient">
          <Container>
            <Row>
              <Col md={3}>
                  <h3  className="text-center">Helpline</h3>
                <div className="text-center">
                  <img width="120px" src="" alt="" />
                </div>
  
                <ul className="">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className="ms-1 fs-5">Rajshahi,Bangladesh</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ms-1 ">
                      abuzargefari98@gmail.com
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="ms-1">
                      Helpline: 01740725436(10:00AM to 10.00PM)
                    </span>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                 
              <Row>
              <h3 className="text-center">Our Departments</h3>
                  <Col md={6}>
                  <ul>
                      <li>Cardiology</li>
                      <li>Traumatology</li>
                      <li>Nuclear</li>
                      <li>Pregnancy</li>
                      <li>X-ray</li>
                  </ul>
                  
                  
                  </Col>
                  <Col md={6}>
                  <ul>
                      <li>Neurology</li>
                      <li>Dental</li>
                      <li>magnetic</li>
                      <li>Ambulance</li>
                      <li>rayProstheses</li>
                  </ul>
                  
                  
                  </Col>
              </Row>
              </Col>
              <Col md={5}>

<Row>
<h3  className="text-center" >We’re Available</h3>
    <Col md={8}>
    <ul>
    <li>Saturday</li>
    <li>Sunday</li>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thrusday</li>
    <li>Friday</li>
</ul>


    </Col>
    <Col md={4}>
<ul>
<li>8.00 - 23.00</li>
<li>8.00 - 23.00</li>
<li>8.00 - 18.00</li>
<li>8.00 - 23.00</li>
<li>8.00 - 20.00</li>
<li>8.00 - 22.00</li>
<li>8.00 - 12.00</li>

</ul>

    </Col>
</Row>
              </Col>
           
            </Row>
          </Container>
        </div>
        <hr className="m-0 p-0" />
        <p className="text-center m-0 py-3 copyright">
          Copyright © All Reserved by Abuzar Gefari - programming Community in
          2021
        </p>
      </div>
    );
};

export default Footer;