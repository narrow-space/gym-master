import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Menubar from '../../Menubar/Menubar';
import './Singledetails.css'

const Singledetails = () => {
    const{detailsId} =useParams()
    const[singleDetails,setSingleDetails] =useState([])
    const[founddetails,setFonddetails] =useState({})

    useEffect(()=>{
        fetch('/gymdata.json')
        .then(res=>res.json())
        .then(data=>setSingleDetails(data))
    },[]);

    useEffect(()=>{
      const p =singleDetails.find(found=>found.id==detailsId)
        setFonddetails(p)
    },[singleDetails])
    console.log(founddetails);
    
    return (
        <div className="details-container">
           <Menubar/>
        
        <Container>
             <Row>
    <Col sm={6}>
    <div className="mt-5 text-container">
    <h1 className="text-danger"><span>{founddetails?.name}</span></h1>
    <h5 >{founddetails?.discription}</h5>
    <h4 className="me-2">Price:<i className="fas fa-dollar-sign me-2"></i>{founddetails?.price}</h4>
    <h4>FOLLOW US</h4>
    <div className="icon d-flex justify-content-center ">
     <i className="fab fa-facebook-square mx-3 "></i>
    <i className="fab fa-twitter-square mx-3 "></i>
    <i className="fab fa-youtube mx-3"></i>
    </div>
    </div>
    
    </Col>
    <Col sm={6}>
     <div className="mt-3">
     <img className="img-thumbnail" style={{"width":"100%"}} src={founddetails?.img} alt="" />
     </div>
    </Col>
  </Row>
        </Container>
        </div>
    );
};

export default Singledetails;