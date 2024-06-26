import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import axios from "axios";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const singIn = (email, password) => {
    setLoding(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);

      // get jwt token
      axios
        .post(`http://localhost:5000/jwt`, { email: currentUser.email })
        .then((data) => {
          console.log(data.data.token);
          localStorage.setItem("access-token", data.data.token);
        });

      setLoding(false);
    });

    return () => {
      return unSubcribe();
    };
  }, []);
  const authInfo = {
    user,
    loding,
    singInGoogle,
    logOut,
    creatUser,
    singIn,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
