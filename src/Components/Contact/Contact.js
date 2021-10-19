import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Contact.css'

const Contact = () => {
    return (
        <>
        <Menubar></Menubar>
          <div id="contact" className="row ">

          
        

            <div id="contact-text" className="col-12 ">

            
                <h1>PLEASE CONTACT WITH US TO KNOW OUR SERVICE</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <h3>Our Office Adress</h3>
                    <div className="icon">
                        <i className="fas fa-map-marker-alt ms-4"></i>
                    </div>
                </div>
                <h4 className="mt-3">The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</h4>

                <div className="d-flex justify-content-center align-items-center mt-4">
                    <h4>

                        CALL US:
                        + (567) 1234-567-8900
                    </h4>
                    <div className="icon">
                        <i className="fas fa-phone ms-4"></i>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-4">
                    <h4>MAIL US:
                        hximranhasan@gmail.com</h4>
                        <div className="icon">
                        <i className="far fa-envelope ms-3"></i>
                        </div>
                </div>


            </div>
            </div>  
            <Footer></Footer>

      </>
        
        
    );
};

export default Contact;