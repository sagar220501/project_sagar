import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Cart from './pages/Cart';
import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Cards from './pages/Cards';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['jwt']);

  useEffect(() => {
   
    if (!cookies.jwt) {
      
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.location.href = '/login'; 
      }
    }
  }, [cookies.jwt]);

  return (
    <Routes>
     
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

     
      <Route path="/" element={<Layout />}>
        {cookies.jwt ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/product-detail/:product_id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cards" element={<Cards />} />
           
          </>
        ) : null }
        }
      </Route>
    </Routes>
  );
}

export default App;
