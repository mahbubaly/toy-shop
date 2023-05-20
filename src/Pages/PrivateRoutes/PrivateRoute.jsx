import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Auths/AuthProvider';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/log" state={{ from: location }} replace> </Navigate>
};

export default PrivateRoute;