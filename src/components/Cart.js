 // Cart.js
import React from 'react';
import './cart.css'

function Cart({ cartItems, clearCart,removeItem,updateQuantity}) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
 

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity:  <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                style={{ marginLeft: '10px', width: '50px' }}
              />   <button className='add' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
  <button className='minus' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button></p>
            <button onClick={() => removeItem(item.id)} style={{ color: 'white', background: 'red', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={clearCart}>clear</button>
      
    </div>
  );
}

export default Cart;