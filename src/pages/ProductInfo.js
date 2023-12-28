import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import './ProductInfo.css'; 

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
        <div className="col-md-8 offset-md-2">
          <div className="product-card">
            <div className="row">
              <div className="col-md-4">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt="Product"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <h2 className="product-title">{product.title}</h2>
                <div className="rating">
                  {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                    <i key={index} className="fa fa-star" aria-hidden="true"></i>
                  ))}
                  <span className="rating-count">({product.rating.count})</span>
                </div>
                <h3 className="text-success">&#8377; {product.price}</h3>
                <p className="product-description">{product.description}</p>
                <AddToCart product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
