import React, { useEffect, useState } from 'react';
import Bodydetails from './Bodydetails/Bodydetails';
import './Body.css'

const Body = () => {
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('/gymdata.json')
            .then(res => res.json())
            .then(data => setdetails(data.slice(0,4)))
    }, [])
    return (
        <div className="body-container" >
            <h5 className="text">VIEW OUR GALLERY</h5>
            <div className="row">
            

           

            {
               
 
                      details.map(detail=> <Bodydetails key={detail.key} detail={detail}></Bodydetails>
                    )
                

            }
             </div>
        </div>
    );
};

export default Body;