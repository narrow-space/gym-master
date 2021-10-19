import React from 'react';
import logo from '../../images/404.png'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';

const Notfound = () => {
    return (
        <>
        <Menubar></Menubar>
        <div id="404" className=" my-5">
            <img className="w-50" src={logo} alt="" />
            
        </div>
        <Footer></Footer>
        </>
    
    
    );  
};

export default Notfound;