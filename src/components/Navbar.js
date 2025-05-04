import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import {useDispatch} from 'react-redux';
import {setUser} from '../store/usersSlice.js';;

function Navbar() {
  const dispatch = useDispatch()

  function handlesignout(){
    
      signOut(auth).then(() => {
        dispatch(setUser(null))
      }).catch((error) => {
        console.log(error)
      });
    
  }

  return (
    <div className='nav-container'>
      {/* Logout button on the left */}
      <div className="nav-left">
        <button onClick={handlesignout}>
          Logout
        </button>
      </div>
  
      {/* Centered navigation links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
  
      {/* Cart icon on the right */}
      <div className="nav-right">
        <Link to="/cart" className="cart-icon">
          <span className="material-icons">shopping_cart</span>
        </Link>
      </div>
    </div>
  );
  
  
}

export default Navbar;
