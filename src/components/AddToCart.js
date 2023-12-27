import { NavLink } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";

let AddToCart = (props) => {
    let { addToCart } = useCartContext(); // Corrected case sensitivity
    
    return (
        <NavLink to='/cart/' onClick={() => addToCart(props.product)}>
            <input type={"button"} className="btn btn-success" value="Add to Cart" />
        </NavLink>
    );
};

export default AddToCart;
