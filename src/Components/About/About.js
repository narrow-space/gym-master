import React from 'react';
import './About.css'
import img1 from '../../images/about/p-8-3.jpg'
import img2 from '../../images/about/p-13-3.jpg'
import img3 from '../../images/about/p-12-3.jpg'
import img4 from '../../images/about/p-10-3.jpg'
import Menubar from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
const About = () => {
    return (
        <>
        <Menubar></Menubar>
        <h1 className="text-danger">OUR EXPERTS ATLETH</h1>
        <span>How would you describe an athlete?
Image result for athlete description
An athlete (also sportsman or sportswoman) is a person who competes in one or more sports that involve physical strength, speed or endurance. ... Most professional athletes have particularly well-developed physiques obtained by extensive physical training and strict exercise accompanied by a strict dietary regimen.</span>
        <div className="img-container my-4">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <Footer></Footer>
        </>
    
    );
};

export default About;