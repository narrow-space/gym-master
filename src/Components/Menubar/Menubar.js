import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'
import logo from '../../images/logo-3.svg'


const Menubar = () => {
    return (
        <div  className=" header-container sticky-top bg-light">
           <Navbar collapseOnSelect expand="lg" bg="" variant="light">
  <Container className="">
  <Navbar.Brand to="#home"><img style={{"width":"150px"}} src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto p-2">
      <Link className="text-decoration-none p-3" to="/Home"><span> Home</span>  </Link>
      <Link className="text-decoration-none p-3" to="/pricing"><span>Services</span></Link>
      <Link className="text-decoration-none p-3" to="/pricing"><span>About us</span></Link>
      <Link className="text-decoration-none p-3" to="/pricing"><span>Contact us</span></Link>
      <Link className="text-decoration-none p-3" to="/pricing"><span>Login</span></Link>
      <Link className="text-decoration-none p-3" to="/pricing"><span>Signup</span></Link>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default Menubar;