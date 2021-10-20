import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Firebase/Firebase.init";

initilizeAuthentication();
const Usefirebase = () => {
    const [name,setName] =useState('')
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider()

   
    

    const handleNameChnage=(e)=>{
        setName(e.target.value)

    }
    

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

    }

    const handlepasswordchange = (e) => {
        console.log(e.target.value);
        setpassword(e.target.value);
       
    }



    const EmailLogin = (e) => {
        // setIsLoading(true)
        e.preventDefault();
        if(password.length<6){
            setError('password must be at least 6 characters long.')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                window.location.reload(true)
                setUser(user)
                setError("")
                console.log(user);
               
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            })



    }

    const setUserName=()=>{
        updateProfile(auth.currentUser,{displayName:name})
            .then(result=>{ })        
    }


    const Emailregister = (e) => {

        e.preventDefault();
        if(password.length<6){
            setError('password must be at least 6 characters long.')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                  const user = result.user;
                  window.location.reload(true)
            
                
              


                console.log(user);
                setUser(user)

                setUserName()
               
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


        signOut(auth)
            .then(() => { })

    }

    const GooglesignIn = () => {

        return signInWithPopup(auth, Googleprovider)



    }

    const Githubsignin = () => {

        return signInWithPopup(auth, GithubProvider)


    }





    return {


        handleEmailChange,
        handleNameChnage,
        handlepasswordchange,
        Emailregister,
        EmailLogin,
        GooglesignIn,
        Githubsignin,
        logOut,
        user,
        error,
       
        setUser,



    }






}

export default Usefirebase;