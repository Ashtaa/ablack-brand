
import product1 from './../productsimage/product1.jpg';
import product2 from './../productsimage/product2.jpg';
import product3 from './../productsimage/product3.jpg';
import product4 from './../productsimage/product4.jpg';
import product5 from './../productsimage/product5.jpg';
import product6 from './../productsimage/product6.jpg';
import './featured.css';
import { useOutletContext } from 'react-router-dom';


function FeaturedProducts({ addToCart }) {
   const {search}= useOutletContext()
  const products = [
    { id: 1, name: 'cargopants', image: product1, price: 27, sizes: [40, 30, 20] },
    { id: 2, name: 'zipup', image: product2, price: 41, sizes: [40, 30, 20] },
    { id: 3, name: 'hoodie', image: product3, price: 25, sizes: [40, 30, 20] },
    { id: 4, name: 'jeans', image: product4, price: 10, sizes: [40, 30, 20] },
    { id: 5, name: 'pant', image: product5, price: 50, sizes: [40, 30, 20] },
    { id: 6, name: 'short', image: product6, price: 40, sizes: [40, 30, 20] },
  ];
  return (
   <>
    <div className='featured-container'>
       
    {products.filter((product)=>{
         return search.toLowerCase()==='' ? product:product.name.toLowerCase().includes(search)
      }).map((product) => (
        <div className='Product' key={product.id}>
          <img src={product.image} alt={product.name} />
          <p className='name'>{product.name}</p>
          <p>Size available: {product.sizes.join(', ')}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)} className='addto-cart'>Add to Cart</button>
        </div>

      ))}


    </div>
   </>
  );
}

export default FeaturedProducts;
