import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';
import {Navigate} from 'react-router-dom';
import routes from '../../pages/routes';

const PrivateRoute= (props)=>{

const [isLoggedIn] = useContext(AuthContext);

if(isLoggedIn){
  return props.children
}

return <Navigate to={routes.login.path} />

}

export default PrivateRoute;