import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts";


const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, Login, , errors] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn){
      navigate('/homepage');
    }
  },[])
  
  
  const handleLoginSubmit = (e)=>{
    e.preventDefault();
     Login(user, password);
     navigate('/homepage');
  }

  return (
    <div className='container'>
      <div className='row d-flex justyfy-content-center'>
        <div className='col-md-4'>
          <form id='loginform' onSubmit={handleLoginSubmit}>
            <div className='form-group margin-bottom-05'>
              <label> User name</label>
              <input type='text'
              className='form-control'
              id='userName'
              name= 'user'
              placeholder='User name'
              onChange={e=> setUser(e.target.value)}
              value={user}
              />
            </div>
            <div className='form-group margin-bottom-05'>
              <label> Password</label>
              <input type='password'
              className='form-control'
              id='password'
              name= 'passwors'
              placeholder='User password'
              onChange={e=> setPassword(e.target.value)}
              value={password}
              />
            </div>
            <button type='submit' className="btn btn-secondary margin-bottom-05">Login</button>
            {errors?
            <div className="alert alert-danger" role="alert">
              {errors}
            </div>: null}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;