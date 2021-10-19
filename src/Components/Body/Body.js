import React, { useEffect, useState } from 'react';
import Bodydetails from './Bodydetails/Bodydetails';
import './Body.css'
import logo1 from '../../images/home-ex1.jpg'
import logo2 from '../../images/ex-2.jpg'
import logo3 from '../../images/ex-3.jpg'

import { Col, Container, Row } from 'react-bootstrap';

const Body = () => {
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('/gymdata.json')
            .then(res => res.json())
            .then(data => setdetails(data.slice(0, 4)))
    }, [])
    return (
        <div className="body-container" >
            <h5 className="text">VIEW OUR GALLERY</h5>
            <div className="row">




                {


                    details.map(detail => <Bodydetails key={detail.key} detail={detail}></Bodydetails>
                    )


                }
            </div>

            <div id="extra-section">
                <img src={logo1} alt="" />

            </div>

            <div>
               
                    <div className="my-5 container">

                        <h1 id="line-1" className="d-flex">OVERVIEW & <span className="text-primary">CHALLENGE</span>​</h1>
                        <h5 id=""className="d-sm-flex text-danger fw-bolder">How can I get athletic body?</h5>
                        <p className="d-sm-flex"> 1. Strategies to Hone a MoreAthletic-looking Body</p>
                        <p className="d-sm-flex">2.Combine weight training and high-intensity cardio.</p>
                        <p className="d-sm-flex">3.Focus on dynamic exercises. .. </p>
                        <p className="d-sm-flex">4.Take advantage of plyometrics, bodyweight moves, and agility work. </p>
                        <p className="d-sm-flex">5. Up the reps, lighten the load.</p>
                        <p className="d-sm-flex">6. Perfect your nutrition </p>
                    </div>



                       <div className="my-5">
                       <Row className="">
                        <Col sm={6} >
                            <div className="">
                            <img className="extra-img" src={logo2} alt="" />
                            </div>

                        </Col>
                        <Col sm={6}>
                            <div>
                            <img src={logo3} alt="" />
                            </div>

                        </Col>
                    </Row>
                       </div>
                   
                    
                   

            </div>
        </div>
    );
};

export default Body;