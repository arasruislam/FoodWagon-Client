import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);

    // Loading spinner
  if (loading) {
    return <Spinner />;
    }
    
    if (user) {
        return children
    } else {
       return <Navigate to='/login' replace></Navigate> 
    }
    
};

export default PrivateRoute;
