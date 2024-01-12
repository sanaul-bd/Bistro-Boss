import { createContext, useEffect, useState } from "react";
// copy from www.console.firebase.google > doc > web > getStarted 
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import axios from "axios";



// context
export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    // google Provider 
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // todo Authentication Code 
    // Creat User with Email & Password 
    const creatuserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logIn 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    //  logOut 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        // console.log("Log Out SuccessFully");
    }

    // update user info mathods
    const updateUserProfileMethod = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Socile Login Section \
    // google Login
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // set Auth Obsarver || call outside api for Manage User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("AuthProvider.jsx___ ::: Current User", currentUser);

            //! get and set || remove token 
            if (currentUser) {
                axios.post("http://localhost:5000/jwt", { email: currentUser.email })
                .then(data => {
                    // console.log("TOKEN______", data.data.token);

                    // set token kye to local storege 
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            
        });
        return () => {
            return unSubscribe()
        }
    }, [])

    // authInfo provie all over the application 
    const authInfo = {
        user,
        loading,
        setLoading,
        auth,
        creatuserWithEmail,
        logIn,
        logOut,
        updateUserProfileMethod,
        googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;