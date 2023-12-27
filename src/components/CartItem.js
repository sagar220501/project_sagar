import { useCartContext } from '../contexts/cartContext.js';

let CartItem = (props) => {
  const { removeFromCart } = useCartContext();

  const handleRemoveFromCart = () => {
    removeFromCart(props.cartedItem.id);
  };

  return (
    <div className="row mb-4 border rounded p-3 align-items-center">
      <div className="col-md-2">
        <img
          src={props.cartedItem.image}
          className="w-100 rounded"
          alt={props.cartedItem.title}
        />
      </div>
      <div className="col-md-6">
        <h4>{props.cartedItem.title}</h4>
        <p className="mb-0">{props.cartedItem.description}</p>
      </div>
      <div className="col-md-2 h5">&#8377; {props.cartedItem.price}</div>
      <div className="col-md-2 text-end">
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveFromCart}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
