import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootState } from './state/reducers';
export type ProtectedRouteProps = {
    access: string;
    outlet: JSX.Element;
};
export const ProtectedRoutes = ({ access, outlet }: ProtectedRouteProps) => {
    const stateUser = useSelector((state: RootState) => state.user)
    const [user, setUser] = React.useState(stateUser)
    React.useEffect(() => {
        setUser(stateUser)
    }, [stateUser])
    
    // let authenticated = false;

    // if (!authenticated) {
    //     return <Navigate to={'/'} replace />;
    // } else if (access === 'admin' && user.role !== 'admin') {
    //     return <Navigate to={'/unauthorized'} replace />
    // }
    return outlet;
}