import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "./../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Google & GitHub Providers */
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  /* Sign in with GitHub & Google */
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const singInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  /* Register User */
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* LoggedIn User */
  const loggedInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Sing Out */
  const loggedOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* Password reset */
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  /* Current user */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    singInWithGoogle,
    singInWithGithub,
    registerUser,
    loggedInUser,
    passwordReset,
    loggedOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
