import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // user register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    Sign In user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log out user
  const logOutUser = () => {
    return signOut(auth);
  };

  //   set observer for current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unSubscribe();
  }, []);

  //   user info
  const userInfo = {
    user,
    registerUser,
    logInUser,
    logOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
