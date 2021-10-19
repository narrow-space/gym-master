import React from 'react';
import { Link } from 'react-router-dom';
import Useauth from '../../Hooks/Useauth';

import Menubar from '../Menubar/Menubar';





import './Register.css'

const Register = () => {
    const {error,Emailregister, handleEmailChange, handlepasswordchange,} = Useauth();

    return (

        <div className="banner ">
            <Menubar />

            <div className="row container ">
                <div className="col-md-5">

                </div>
                   
                <div className="col-md-4 mt-5 ">
                    <div className="text-center">
                        
                        <h4 className="text-info">Please Register</h4>
                    </div>
                    <form onSubmit={Emailregister}>
                        <div className="mb-3 input-from">




                            <input onChange={handleEmailChange} placeholder="Email" type="email" className="form-control mt-3" required />

                            <input onChange={handlepasswordchange} placeholder="Password" type="password" className="form-control mt-3" required />
                            <p id="error">{error}</p>
                             <input className="from-btn mt-2 p-3" type="Submit" value="Submit" />
                                   

                        </div>
                       
                        <br /> <br />

                        <Link to="/login"className="text-decoration-none"><p>Already have an account !! please log in</p></Link>


                        <h4 className="text-center mt-3 already-btn">Already have an account??</h4>




                    </form>


                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>

    );
};

export default Register;