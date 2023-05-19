import React, { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const authContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();


    const provider = new GoogleAuthProvider();
    

    const authInfo ={
        user,

    }




    return (
        <authContext.Provider value={authInfo}>

            {children}
            
        </authContext.Provider>
    );
};

export default AuthProvider;