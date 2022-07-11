import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export default function AuthContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    useEffect(()=>{
        setIsLoggedIn(true);

    },[])
/**
 * Login
 * @param {*} user 
 * @param {*} pass 
 */
    function login(user, pass){

       // doLogin({user: user, password: pass})
       // add localStorige item
    }

    /**
     * Logout
     */
    function logout(){
        console.log('LOGOUT');
        setIsLoggedIn(false);
        // remove localStorige item
    }


    return <AuthContext.Provider value={{isLoggedIn, login, logout}}>{props.children}</AuthContext.Provider>
}