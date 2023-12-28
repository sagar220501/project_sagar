// Cart.js

import { NavLink } from 'react-router-dom';
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
              <a href='https://www.phonepe.com/' target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-proceed-payment'>Proceed to Payment</button>
              </a>
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
