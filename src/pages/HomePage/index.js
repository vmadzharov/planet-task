import React, {useEffect, useState, useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContexts';

const HomePage = () => {
  const {logout} = useContext(AuthContext);
  const [products, setProducts] = useState([]);
 
 
  const handleClick =()=>{
    setProducts([{ name: "product1", price: 3.14, color: "red" }])
  }

  const logoutHandler =()=>{
    logout();
  }


  return (
    <div className='container'>
      <div className='row d-flex justyfy-content-center'>
        <div className='col-md-6'>      
          <h3>HomePage componenet </h3>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>Product 1</button>
          <button type="button" className="btn btn-secondary btn-sm">Product 2</button>
          <button type="button" className="btn btn-secondary btn-sm">Product 3</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={logoutHandler}>log out</button>

          {products? products.map(product => (
            <div className="card"  key={product.name}>
              <div className="card-body">
                <h5 className="card-title">Product {product.name}</h5>
                <ul>
                  <li>Price: {product.price}</li>
                  <li>Color: {product.color}</li>      
                </ul>
              </div>
            </div>
          )): null} 
        </div>
      </div>
    </div>
  )
}

export default HomePage