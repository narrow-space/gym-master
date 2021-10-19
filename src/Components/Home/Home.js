import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Menubar></Menubar>
            <Banner></Banner>
            <Body></Body>
            
            <Footer></Footer>

        </div>
    );
};

export default Home;