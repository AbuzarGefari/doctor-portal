import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import {  useParams } from 'react-router-dom';

const ServiceDetails = (props) => {
    const {serviceID}=useParams();


    const [detailss,setServiceDetails]=useState([])

useEffect(()=>{
   fetch('/details.json')
    .then(res=>res.json())
    .then(data=>setServiceDetails(data))
},[])


const serviceDetails =detailss.find(ds=>ds.id===Number(serviceID))

    return (
        <div>

<Container>
  <Row>
    <Col md={10}>
      <Card>
        <Card.Img variant="top" src={serviceDetails?.image} />
      </Card>
    </Col>
    <Col md={5}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{serviceDetails?.name}</Card.Title>
          <Card.Text>
               {serviceDetails?.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
      </div>
    );
};

export default ServiceDetails;