import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './components/store/cart-context';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from './components/store/login-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartContextProvider>
  </LoginContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
