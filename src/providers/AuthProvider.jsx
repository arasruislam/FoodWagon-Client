import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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

  /* Sing Out */
  const loggedOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* Current user */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log(loggedUser);
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
    loggedOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
