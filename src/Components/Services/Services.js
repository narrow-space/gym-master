import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Service from './Servicedetails/Service';

const Services = () => {
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('/gymdata.json')
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [])
    return (
        <>
        <Menubar></Menubar>
        <Banner></Banner>
        <div className="body-container" >
            
            <div className="mt-3">
            <h5 style={{"font-size":"50px","color":"#E31C25"}} >VIEW OUR SERVICES</h5>
            </div>
            
            <div className="row">
            

           

            {
               
 
                      details.map(detail=> <Service key={detail.id} detail={detail}></Service>
                    )
                

            }
             </div>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Services;