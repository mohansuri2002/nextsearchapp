import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

import Login from './Login';

const PrivateRoute = (props) => {
    const { Cmp } = props;

    const { user } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <>
                    <Cmp />
                </>
            ) : (
                <>
                    <Login />
                </>
            )}
        </>
    );

};
export default PrivateRoute;