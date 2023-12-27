import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import AddToCart from '../components/AddToCart';

function ProductInfo() {
  const { product_id } = useParams();
  const products_url_api = `https://fakestoreapi.com/products/${product_id}/`;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(products_url_api).then((res) => setProduct(res.data));
  }, []);

  if (!product) return null;

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2 shadow p-4 rounded">
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt="Product"
                className="w-100 rounded"
              />
            </div>
            <div className="col-md-8">
              <h2 className="mb-3">{product.title}</h2>
              <div className="d-flex align-items-center mb-3">
                <p className="text-warning me-2">
                  {[...Array(Math.floor(product.rating.rate))].map((star, index) => (
                    <i key={index} className="fa fa-star" aria-hidden="true"></i>
                  ))}
                  ({product.rating.count})
                </p>
              </div>
              <h3 className="text-success mb-3">&#8377; {product.price}</h3>
              <p className="mb-4">{product.description}</p>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
