import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
          
              <Row>
    <Col xs={12} md={3}>
        <div className="contact d-flex justify-content-center align-items-center me-3">
            <div>
            <h5>Get us support</h5>
           <h5>+1800-208-6835</h5>
            </div>
            <div className="tel-icon text-center">
            <i className="fas fa-phone ms-5"></i>
            </div>
        
           
       
      
        </div>
       
     
    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
        <h5>USEFUL-LINKS</h5>
        <ul>
            <li>Lifting weight</li>
            <li>Cardio Classic</li>
            <li>NEW TO FITNESS</li>
            <li>MUSCLE BUILDER</li>
            <li>EXTRA ENERGY</li>
            <li>BODY MUSCLE</li>
            <li>TRAINING TIPS</li>
        </ul>
        </div>
     
    </Col>
    <Col xs={12} md={3}>
      <div className="link mx-5">
     <h5> GYM OPINEING TIME </h5>
          <ul>
              <li>MONDAY</li>
              <li>Tuseday</li>
              <li>wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>On Public Holidays</li>
          </ul>
      </div>
    </Col>
    <Col xs={12} md={3}>
      <div className="link mx-5">
     <h5> GYM OPINEING TIME </h5>
          <ul>
              <li>8AM -2PM</li>
              <li>8AM -2PM</li>
              <li>8AM -2PM</li>
              <li>8AM -2PM</li>
              <li>8AM -2PM</li>
              <li>8AM -2PM</li>
              <li>Closed</li>
          </ul>
          
      </div>
    </Col>
  </Row>
  <p>Copyright 2021 IMRAN HASAN All Rights Reserved.</p>
        </div>
        
    );
};

export default Footer;