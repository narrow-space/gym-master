import React, { createContext } from 'react';
import Usefirebase from '../Hooks/Usefirebase';
export const authContext=createContext();
const Authprovider = ({children}) => {
    const allcontext =Usefirebase();
    return (
        <authContext.Provider  value={allcontext}>
            {
                children
            }
            
        </authContext.Provider>
    );
};

export default Authprovider;