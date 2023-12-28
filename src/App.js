import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Cart from './pages/Cart';
import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Cards from './pages/Cards';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Redirect to Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/clothes"
        element={
          <Layout>
            <Clothes />
          </Layout>
        }
      />
      <Route
        path="/product-detail/:product_id"
        element={
          <Layout>
            <ProductInfo />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
      <Route
        path="/cards"
        element={
          <Layout>
            <Cards />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
