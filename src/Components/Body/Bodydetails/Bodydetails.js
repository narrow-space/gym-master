import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Bodydetails.css'

const Bodydetails = (props) => {
    const {id,name,img,discription,price}= props.detail
    return (
        
        
        <div  className="col-md-4 card-component">
           
           
            <Row xs={1} md={2} className="m-3">
  {Array.from({ length:1 }).map((_, idx) => (
   
      <div className="card-container">
        <div className="box">

       
        <div className="img-box" >
        <img src={img} alt="" />
        </div>
        </div>
        
        <Card.Body>
          <Card.Title> <h5>{name}</h5> </Card.Title>
          
          <Card.Text>
            <p>{discription.slice(0,100)}</p>
          </Card.Text>
         <Link to={`/details/${id}`}><button className="btn btn-1">SHOW DETAILS</button></Link> 
        </Card.Body>

        
      </div>
    
  ))}
</Row>

  

            
        </div>

       
        
        
    );

    
};

export default Bodydetails;