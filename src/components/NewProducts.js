import React from 'react'
import product1 from './../productsimage/product1.jpg'
import product2 from './../productsimage/product2.jpg'
import product3 from './../productsimage/product3.jpg'
import product4 from './../productsimage/product4.jpg'
import product5 from './../productsimage/product5.jpg'
import product6 from './../productsimage/product6.jpg'
import './new.css'

import Items from './Data'
import { useOutletContext } from 'react-router-dom'

function NewProducts({addToCart}) {
  const {search}= useOutletContext()
  const newproducts = [
    { id: 1, name: 'cargopants', image: product6, price: 40, sizes: [40, 30, 20] },
    { id: 2, name: 'cargopants', image: product5, price: 40, sizes: [40, 30, 20] },
    { id: 3, name: 'cargopants', image: product4, price: 40, sizes: [40, 30, 20] },
    { id: 4, name: 'cargopants', image: product3, price: 40, sizes: [40, 30, 20] },
    { id: 5, name: 'cargopants', image: product2, price: 40, sizes: [40, 30, 20] },
    { id: 6, name: 'cargopants', image: product1, price: 40, sizes: [40, 30, 20] },
  ];
  

  
  return (
    <div className='new-container'>
       {newproducts.filter((producte)=>{
         return search.toLowerCase()==='' ? producte:producte.name.toLowerCase().includes(search)
      }).map((producte) => (
        <div className='Product' key={producte.id}>
          <img src={producte.image} alt={producte.name} />
          <p className='name'>{producte.name}</p>
          <p>Size available: {producte.sizes.join(', ')}</p>
          <p>Price: ${producte.price}</p>
          <button onClick={() => addToCart(producte)} className='addto-cart'>Add to Cart</button>
        </div>

      ))}
        
    </div>
  )
}

export default NewProducts
