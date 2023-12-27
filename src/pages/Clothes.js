import { useState, useEffect } from 'react'
import ProductImage from '../components/Image'
import axios from "axios"

let products_url_api ="https://fakestoreapi.com/products"
function Clothes() {
    let [images, setImages] = useState(null)

    useEffect( () => {
        axios.get(products_url_api).then((res) => setImages(res.data))
    }, []);

    if (!images) return null;

    return (
        <div className='container-fluid m-0 p-0'>
           
            <div className='row my-2 p-2 mx-0'>
                {images.map(el => <ProductImage key={el.id} product={el}/>)}                    
            </div>
        </div>
    );
  }
export default Clothes;