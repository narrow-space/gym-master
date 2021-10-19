import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';


const Home = () => {
    return (
        <div className="home">
              <Menubar></Menubar>
            <Banner></Banner>
            <Body></Body>
            
            <Footer></Footer>  
          

        </div>
    );
};

export default Home;