import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'
import logo from '../../images/logo-3.svg'

import Useauth from '../../Hooks/Useauth';


const Menubar = () => {
  const {user,logOut} =Useauth()
    return (
        <div  className=" header-container sticky-top bg-light">
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container className="">
  <Navbar.Brand ><Link to="/home"><img style={{"width":"150px"}} src={logo} alt="" /> </Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto p-2">
      <Link className="text-decoration-none p-3" to="/Home"><span> Home</span>  </Link>
      <Link className="text-decoration-none p-3" to="/services"><span>Services</span></Link>
      <Link className="text-decoration-none p-3" to="/aboutus"><span>About us</span></Link>
      <Link className="text-decoration-none p-3" to="/contactus"><span>Contact us</span></Link>
     { user.email? <button onClick={logOut} className="btn btn-danger">Logout</button>:
       
     <Link className="text-decoration-none p-3" to="/login"><span>Login</span></Link>
     
    
    }

    { user?.email&& 
       <span className="p-3">{user?.email}</span>
       }
      
    
    
      <Link className="text-decoration-none p-3" to="/register"><span>Signup</span></Link>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default Menubar;