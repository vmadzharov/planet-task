import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContexts';
import axios from 'axios';
import checkLocalStorage from '../../services/checkLocalStorige/checkLocalStorage';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, Login, Logout, errors] = useContext(AuthContext);
  const [error, setError] = useState('');
  
  const handleGetProduct = async (e)=>{
    const current = e.currentTarget.value;
    if (!current){
      Logout();
      return
    }

    checkLocalStorage()
    .then((res) =>{
      console.log(res)
      axios.get(`http://localhost:3001/products/${current}`)
      .then(response =>{        
        const prod =  response.data
        setError('');
        setProducts([prod]);
      }).catch(error=>{
        console.log("ERR: "+error)
        setProducts([]);
        if(error.response.status === 404){
         setError('Product not found')
        }                
      });
      })
    .catch(err=>{
      setError(err)
      Logout()
    })
  }
  
  return (
    <div className='container'>
      <div className='row d-flex justyfy-content-center'>
        <div className='col-md-6'>      
          <h3>HomePage componenet </h3>
          <div className="btn-group margin-bottom-05" role="group">
          <button type="button" className="btn btn-primary btn-sm" value={1} onClick={handleGetProduct}>Product 1</button>
          <button type="button" className="btn btn-secondary btn-sm" value={2} onClick={handleGetProduct}>Product 2</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleGetProduct}>log out</button>
          </div>
          {products&& products.map(product => (
            <div className="card"  key={product.name}>
              <div className="card-body">
                <h5 className="card-title">Product {product.name}</h5>
                <ul>
                  <li>Price: {product.price}</li>
                  <li>Color: {product.color}</li>      
                </ul>
              </div>
            </div>
          ))}
          {error&&(
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">Error</h5>
              <p className='alert alert-danger'>
                {error}
              </p>
            </div>
          </div>
          )} 
        </div>
      </div>
    </div>
  )
}

export default HomePage