import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg'
import logo2 from '../../images/luis-vidal-FodEsaNZs48-unsplash.jpg'
import logo3 from '../../images/rsz_pexels-anush-gorak-1229356.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logo1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5>BEGIN YOUR FITTNESS JOURNEY</h5>

                            <div className="slider-btn res-btn">
                                <button className="btn btn-1">Expolre More</button>
                                <button className="btn btn-2">Get In Touch</button>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={logo2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5>GET BODY IN SHAPE AND STAY HEALTHY</h5>

                            <div className="slider-btn res-btn">
                                <button className="btn btn-1">Expolre More</button>
                                <button className="btn btn-2">Get In Touch</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={logo3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5>TEAM TRAINING LIFE CHANGING</h5>

                            <div className="slider-btn res-btn">

                                <button className="btn btn-1">Expolre More</button>
                                <button className="btn btn-2">Get In Touch</button>


                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Banner;