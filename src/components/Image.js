import { NavLink } from "react-router-dom";
import './Image.css';

function Image(props) {
  return (
    <div className="col-md-3 my-2">
      <NavLink to={`/product-detail/${props.product.id}`} className="nav-item text-decoration-none">
        <div className="card shadow rounded custom-card">
          <div className="image-container">
            <img
              src={props.product.image}
              alt="Product"
              className="card-img-top image-fit"
            />
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title text-truncate">{props.product.title}</h5>
              <p className="card-text text-truncate">{props.product.description}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <p className="badge bg-success fs-6 m-0">
                &#8377; {props.product.price}
              </p>
              <p className="m-0">
                50 interested
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Image;
