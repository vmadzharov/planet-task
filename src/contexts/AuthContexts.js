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
            localStorage.setItem('planet', 'planet-user');
            setTimeout(()=>{
                localStorage.removeItem('planet');
            }, 60000)
            
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
        setErrors('');
        setIsLoggedIn(false);
    }


    return <AuthContext.Provider value={[isLoggedIn, Login, Logout, errors]}>{props.children}</AuthContext.Provider>
}