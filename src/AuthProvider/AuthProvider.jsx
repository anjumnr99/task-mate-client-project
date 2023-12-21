import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // email password sign up
    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // email password login
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            

            // if (currentUser) {
            //     const userInfo = { email: currentUser.email };

            //     axiosPublic.post('/jwt', userInfo)
            //         .then(res => {
            //             console.log(res.data);
            //             if (res.data?.token) {
            //                 console.log(res.data?.token);
            //                 localStorage.setItem('access-token', res.data?.token);
            //             }
            //         })

            // }else{
            //     localStorage.removeItem('access-token')
            // }
            setLoading(false);
        });

        return () => {
            unSubscriber()
        }

    }, []);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // user updating

    const userUpdate = (name, image) => {
        return (
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: image
            })
        )
    }



    const authInfo = {
        googleLogin,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        user,
        logOut,
        userUpdate,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;