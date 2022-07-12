import { createContext, useState } from "react";

export const AuthContext = createContext([[],()=>{}]);

export default function AuthContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [errors, setErrors] = useState('')
   
    
    /**
     * Login
     * @param {*} user 
     * @param {*} pass 
     */  
    function Login (user, pass){
        setErrors('');
        if(user==='user'&& pass==='pass'){
            setIsLoggedIn(true);
            const dataTime = new Date().getTime();
            localStorage.setItem('planet', dataTime);
        }else{
            setIsLoggedIn(false)
            setErrors("Wrong credentials");
        }
    }

    /**
     * Logout
     */
    const Logout = () => {
        localStorage.removeItem('planet');
        setErrors('You are not authorized!');
        setIsLoggedIn(false);
    }


    return <AuthContext.Provider value={[isLoggedIn, Login, Logout, errors]}>{props.children}</AuthContext.Provider>
}