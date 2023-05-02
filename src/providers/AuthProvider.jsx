import React, { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "./../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* Google & GitHub Providers */
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  /* Sign in with GitHub & Google */
  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const singInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

    
    const authInfo = {
        user,
        singInWithGoogle,
        singInWithGithub
    };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
