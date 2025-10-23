import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user register
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    Sign In user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google log In
  const googleLogInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   log out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   update user info
  const updateUserInfo = async (name, photoURL) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL,
      });

      await auth.currentUser.reload();

      setUser(auth.currentUser);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // reset password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //   set observer for current user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //   user info
  const userInfo = {
    user,
    loading,
    setLoading,
    registerUser,
    logInUser,
    googleLogInUser,
    updateUserInfo,
    resetPassword,
    logOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
