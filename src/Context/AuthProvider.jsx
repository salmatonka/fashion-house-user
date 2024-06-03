// import React, { createContext, useEffect, useState } from 'react';
// import {
//     GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,
//     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,
//     updateProfile
// } from "firebase/auth";
// import { app } from '../firebase/firebase.config';
// import axios from 'axios';
// // import { data } from 'autoprefixer';

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//     const googleProvider = new GoogleAuthProvider();

//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     //     // createUser
//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     //     // login
//     const singIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     //     // logOut
//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth)
//     }


//     // googleSignIn
//     const googleSignIn = () =>{
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const updateUserProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         });
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             console.log('currentUser', currentUser)
//                 if (currentUser) {
//                     axios.post('http://localhost:5000/jwt', {email: currentUser.email})
//                     .then(data=>{
//                         console.log(data.data.token)
//                         if (data.data.token) {
//                             localStorage.setItem('access-token', data.data.token);
//                             setLoading(false);
//                         }
//                     })
//                 }
               
//                 else {
//                     // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
//                     localStorage.removeItem('access-token');
//                     setLoading(false);
//                 }
            
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])


//     const authInfo = {
//         user, loading, createUser, singIn, logOut, updateUserProfile,googleSignIn
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     )
// }


// export default AuthProvider


import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);
import { app } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
  
    // createUser
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    // updateName
    const updateName = (firstName, photo) => {
      // setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName: firstName,
        photoURL: photo
      })
    }
  
  
  
  
    //   verifyEmail
    const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser)
    }
  
    // googleSignIn
    const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider)
    }
  
    // login
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }
    // forgetPassword
    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email)
    }
    // logOut
    const logOut = () => {
      return signOut(auth)
    }
  
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser);
      })
  
      return () => {
        return unsubscribe();
      }
    }, [])
  
    const authInfo = {
      user,
      loading,
      createUser,
      updateName,
      verifyEmail,
      googleSignIn,
      login, resetPassword, logOut
    };
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    )
  }
  

export default AuthProvider
