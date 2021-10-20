import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services';

const Service = (props) => {
    
        const {id,name,img,discription,price}= props.detail
        return (
            
            
            <div  className="col-md-4 card-component">
               
               
                <Row xs={1} md={2} className="m-3">
      {Array.from({ length:1 }).map((_, idx) => (
       
          <div className="card-container">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title> <h5>{name}</h5> </Card.Title>
              
              <Card.Text>
                <p>{discription.slice(0.100)}</p>
                <h3>Price:${price}</h3>
              </Card.Text>
             <Link to={`/details/${id}`}><button className="btn btn-1">SHOW DETAILS</button></Link> 
            </Card.Body>
          </div>
        
      ))}
    </Row>
    
      
    
                
            </div>
    );
};

export default Service;