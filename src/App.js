import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './pages/Home'
import Clothes from './pages/Clothes'
import Cart from './pages/Cart'
import ProductInfo from './pages/ProductInfo'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='product-detail/:product_id' element={<ProductInfo />} />
          <Route path='cart' element={<Cart />} />
          {/* Additional Routes Here */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
