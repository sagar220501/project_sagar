
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
import Address from './pages/Address';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  const [cookies] = useCookies(['jwt']);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" component={ResetPassword} />
      <Route path="/" element={<Layout />}>
        {cookies.jwt ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/product-detail/:product_id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/address" element={<Address />} /> 
          </>
        ) : (
          
          <Navigate to="/login" />
        )}
      </Route>
    </Routes>
  );
}

export default App;
