import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Menubar from '../Menubar/Menubar';

const Home = () => {
    return (
        <div>
           <Menubar></Menubar>
            <Banner></Banner>
            <Body></Body>
            
        </div>
    );
};

export default Home;