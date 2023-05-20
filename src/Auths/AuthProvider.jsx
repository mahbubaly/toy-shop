import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const[loading,setLoading] =useState();


    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    
    const CreateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut= () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log( currentUser);
            setLoading(false);
          
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo ={
        user,
        CreateUser,
        signIn,
        loading,
        googleSignIn,
        logOut

    }




    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;