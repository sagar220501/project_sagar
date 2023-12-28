import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contexts/cartContext';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>,
  root
);
