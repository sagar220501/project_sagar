import { useState, useEffect } from 'react';
import Slides from '../components/Slides';
import ProductImage from '../components/Image';
import axios from "axios";

let products_url_api = "https://fakestoreapi.com/products";

function Home() {
  let [images, setImages] = useState(null);

  useEffect(() => {
    axios.get(products_url_api).then((res) => setImages(res.data));
  }, []);

  if (!images) return null;

  return (
    <>
      

      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <div className='container-fluid m-0 p-0 flex-grow-1'>
          <Slides />
          <div className='row my-2 p-2 mx-0'>
            {images.map(el => <ProductImage key={el.id} product={el} />)}
          </div>
        </div>
      </div>
      <div className='text' style={{textAlign:"center",fontWeight:"bold",fontSize:"30px"}}>Featured Brand</div>
      <div id="carouselExampleControls" className="carousel slide m-0 p-0" data-bs-ride="carousel">
          <div className="carousel-inner m-0 p-0">
            <div className="carousel-item active m-0 p-0">
              <img src="/images/loui.jpg" className="d-block w-100 m-0 p-0" style={{height:"500px"}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="/images/loui.jpg" className="d-block w-100" style={{height:"500px"}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="/images/special.jpg" className="d-block w-100" style={{height:"500px"}} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      
    </>
  );
}

export default Home;
