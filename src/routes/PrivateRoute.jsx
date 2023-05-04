import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Loading spinner
  if (loading) {
    return <Spinner />;
    }
    
    if (user) {
        return children
    } else {
       return <Navigate to='/login' state={{from: location}} replace></Navigate> 
    }
    
};

export default PrivateRoute;
