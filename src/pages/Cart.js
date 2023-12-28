import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem.js';
import { useCartContext } from '../contexts/cartContext.js';
import './Cart.css'; 

const Cart = () => {
  const { cart, total_price } = useCartContext();

  return (
    <div className='container mt-5'>
      {cart.length ? (
        <>
          {cart.map((cartedItem) => (
            <CartItem key={cartedItem.id} cartedItem={cartedItem} />
          ))}

          <div className='row mb-3 border p-2 mb-5 total-section'>
            <div className='offset-md-8 col-md-2 h5'>Total</div>
            <div className='col-md-2 h5'>{total_price}</div>
          </div>

          <div className='row mt-5'>
            <div className='d-flex justify-content-between'>
             
              <NavLink to='/home'>
                <input className='btn btn-info' type='button' value={"Continue Shopping"} />
              </NavLink>
              <NavLink to='https://www.phonepe.com/' target='_blank' rel='noopener noreferrer'>
                <input className='btn btn-success' type='button' value={"Proceed to Payment"} />
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className='text-center'>No Items in the Cart</h3>
          
          <NavLink to='/' className='d-flex justify-content-center'>
            <input className='btn btn-info mt-4' type='button' value={"Continue Shopping"} />
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Cart;
