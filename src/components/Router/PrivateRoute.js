import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import routes from '../../pages/routes';

const PrivateRoute= (props)=>{

const [loginStatus, setLoginStatus] = useState(false);
   
if(loginStatus){

    return props.children
  }

 return <Navigate to={routes.login.path} />
}

export default PrivateRoute;