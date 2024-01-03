

import { NavLink ,Link } from 'react-router-dom';
import CartItem from '../components/CartItem.js';
import { useCartContext } from '../contexts/cartContext.js';
import './Cart.css';

const Cart = () => {
  const { cart, total_price } = useCartContext();

  return (
    <div className='cart-container'>
      {cart.length ? (
        <div className='cart-items'>
          {cart.map((cartedItem) => (
            <CartItem key={cartedItem.id} cartedItem={cartedItem} />
          ))}
          <div className='total-section'>
            <div className='total-amount'>
              Total: <span className='price'>{total_price}</span>
            </div>
            <div className='button-section'>
              <NavLink to='/home'>
                <button className='btn btn-continue-shopping'>Continue Shopping</button>
              </NavLink>
              <Link to='/address'>
                <button className='btn btn-proceed-payment'>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='empty-cart'>
          <h3>No Items in the Cart</h3>
          <NavLink to='/' className='btn btn-continue-shopping'>Continue Shopping</NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
