import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut,GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Firebase/Firebase.init";

initilizeAuthentication();
const Usefirebase = () => {
    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider()


    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')



    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

    }

    const handlepasswordchange = (e) => {
        console.log(e.target.value);
        setpassword(e.target.value);
    }



    const EmailLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const { email, displayName, photoURL } = result.user;
                const UserInfo = {
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(UserInfo)
                setError("")
                console.log(UserInfo);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
              });

    }


    const Emailregister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const { email, displayName, photoURL } = result.user;
                const UserInfo = {
                    name: displayName,
                    photo: photoURL,
                    email: email
                }


                console.log(user);
                setUser(UserInfo)
                setError("")

            })
            .catch(error => {
                setError(error.message);
            })


    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed
    }, [])

    const logOut = () => {
        ;
        signOut(auth)
            .then(() => { })
           
    }

    const GooglesignIn = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                const { email, displayName, photoURL } = result.user;

                const UserInfo = {
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(UserInfo)
            })

    }

    const Githubsignin=()=>{
        signInWithPopup(auth,GithubProvider)
        .then(result => {
            const { email, displayName, photoURL } = result.user;

            const UserInfo = {
                name: displayName,
                photo: photoURL,
                email: email
            }
            setUser(UserInfo)
        })
    }





    return {

        
        handleEmailChange,
        handlepasswordchange,
        Emailregister,
        EmailLogin,
        GooglesignIn,
        Githubsignin,
        logOut,
        user,
        error
        


    }






}

export default Usefirebase;