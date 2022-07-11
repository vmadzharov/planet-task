import React, { useState } from "react"

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLoginSubmit =(e)=>{
    e.preventDefault();

    //console.log(`${user} : ${password}`);
  }

  return (
    <div className='container'>
      <div className='row d-flex justyfy-content-center'>
        <div className='col-md-4'>
          <form id='loginform' onSubmit={handleLoginSubmit}>
            <div className='form-group'>
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
            <div className='form-group'>
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
            <button type='submit' className="btn btn-secondary">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;