import React from 'react';
import './Contact.css'
import { Col, Container, Form, Row,Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div
        style={{ backgroundAttachment: "fixed" }}
       className="bg-img">
        <ContactForm />
      </div>
    );
  };
  const formStyle = { background: "transparent", color: "white" };
  function ContactForm() {
    return (
      <div style={{ padding: "58px 0 40px" }}>
        
          <h2 className="text-center text-white">Contact Us</h2>
      
  
        
          <p className="text-center text-muted mb-4">
            You can easily reach us through filling up the form
          </p>
       
        <div>
          <Container>
              <Form>
                <Row>
                  <Col sm>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicText"
                    >
                      <Form.Label>Your Name </Form.Label>
                      <Form.Control
                        style={formStyle}
                        type="email"
                        placeholder="Enter Your Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Your Email </Form.Label>
                      <Form.Control
                        style={formStyle}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Control
                  style={formStyle}
                  className="my-3"
                  type="text"
                  placeholder="Write Your Subject..."
                />
                <Form.Group
                  className="mb-3 text-white"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Messages</Form.Label>
                  <Form.Control
                        style={formStyle}
                        type="email"
                        placeholder="Enter Your Meaasge"
                        row={3}
                      />
                </Form.Group>
                <Button className="mb-5 px-4" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </Container>
        </div>
      </div>
    );
};

export default Contact;