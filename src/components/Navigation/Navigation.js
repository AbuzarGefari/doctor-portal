import React from 'react';
import { Container, Nav, Navbar ,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo-two.png'
import './Navigation.css'

const Navigation = () => {
    const linkStyle = {
        color: "red",
        textDecoration: "none",
        marginLeft: "15px",
      };
      const currentStyle = {
        fontWeight: "bold",
        color: "blue",
      };
      const { user, logOut } = useAuth();

    return (
        <div >
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img className="logo" width="70px" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} style={linkStyle} activeStyle={currentStyle} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} style={linkStyle} activeStyle={currentStyle} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} style={linkStyle} activeStyle={currentStyle} to="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} style={linkStyle} activeStyle={currentStyle} to="/services" className="text-white">
                Services
              </Nav.Link>
        

                  <Nav.Link as={NavLink} style={linkStyle} activeStyle={currentStyle} to="/register" className="text-white">
                    Register
                  </Nav.Link>

                  {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
                 <Navbar.Text>
                             <a href="#login"><img   style={{
                        width: "45px",
                        borderRadius: "50%",
                      }} src={user?.photoURL} alt="" />{user?.displayName}</a>
                        </Navbar.Text>
  
                        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );
};

export default Navigation;