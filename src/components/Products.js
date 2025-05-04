import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './product.css'

function Products() {
  
  const [search,setsearch] =useState('')
  
  return (
   <>
  
    <nav className='product-container'>
    <input type='text' onChange={(e)=>setsearch(e.target.value)} className='input' placeholder='search your fit' />
      <Link to='featured'>featured</Link>
      <Link to='new'>new</Link>
    </nav>
    <Outlet context={{ search }} />
   </>
  )
}

export default Products
