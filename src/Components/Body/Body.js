import React, { useEffect, useState } from 'react';
import Bodydetails from './Bodydetails/Bodydetails';
import './Body.css'
import logo1 from '../../images/home-ex1.jpg'
import logo2 from '../../images/ex-2.jpg'
import logo3 from '../../images/rsz_p-10-3.jpg'

import { Col, Container, Row } from 'react-bootstrap';

const Body = () => {
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('/gymdata.json')
            .then(res => res.json())
            .then(data => setdetails(data.slice(0, 4)))
    }, [])
    return (

        <div className="body-container container" >
            <h1 style={{ "font-size": "" }} className="mt-4 ">VIEW OUR GALLERY</h1>
            <div className="row">




                {


                    details.map(detail => <Bodydetails key={detail.key} detail={detail}></Bodydetails>
                    )


                }
            </div>

            <div id="extra-section">
                <img className="img-fluid" src={logo1} alt="" />

            </div>

           


                <div className="container my-4">
                    
                    <div className="row">
                        <div className="col">
                        <h1 id="line-1" className="d-sm-flex">OVERVIEW & <span className="text-primary">CHALLENGE</span>​</h1>
                        <h4 id="" className="d-sm-flex text-danger ">How can I get athletic body?</h4>
                    <h4 className="d-sm-flex"> 1. Strategies to Hone a MoreAthletic-looking Body</h4>
                    <h4 className="d-sm-flex">2.Combine weight training and high-intensity cardio.</h4>
                    <h4 className="d-sm-flex">3.Focus on dynamic exercises. .. </h4>
                    
                        </div>
                        <div className="col-md-auto">
                        <h4 className="d-sm-flex">4.Take advantage of plyometrics, bodyweight moves, and agility work. </h4>
                    <h4 className="d-sm-flex">5. Up the reps, lighten the load.</h4>
                    <h4 className="d-sm-flex">6. Perfect your nutrition </h4>
                        </div>
                        <div className="col col-lg-2">
                            
                        </div>
                    </div>
                </div>



                


                {/* <Container> */}

                    <Row xs={1} md={2}>
                        <Col className="">
                            <img className="img-fluid mx-2" src={logo2} alt="" />

                        </Col>
                        <br />
                        <Col>
                        <img className="img-fluid mx-2" src={logo3} alt="" />
                        </Col>
                        <Col><br /> <br /> </Col>
                    </Row>

                {/* </Container> */}
                {/* </div> */}




            
        </div>

    );
};

export default Body;