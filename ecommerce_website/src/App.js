import React, {useContext} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import Footer from './components/footer/Footer';
import ContactUs from './components/pages/ContactUs';
import ProductDetail from './components/pages/ProductDetail';
import Login from './components/pages/Login';
import loginContext from './components/store/login-context';

import { ShowCartContextProvider } from './components/store/showCart-Context';
import { ProductContextProvider } from './components/store/product-context';
import { CartContextProvider } from './components/store/cart-context';

function App() {
  const loginCtx = useContext(loginContext);

  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <React.Fragment>
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Switch>
        <ProductContextProvider>

        <CartContextProvider>
            <ShowCartContextProvider>
              <Header />
              <Route path='/product' exact>
                {loginCtx.isloggedIn && <Store productList={productsArr} />}
                {!loginCtx.isloggedIn && <Redirect to='/login'/>}
              </Route>
            </ShowCartContextProvider>
        </CartContextProvider>
        
    
          <Route path='/product/:productId'>
            <ProductDetail />
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/login'>
      {!loginCtx.isloggedIn && <Login />}
      {loginCtx.isloggedIn && <Redirect to='/home'/>}
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='*'>
        <Redirect to='home'/>
      </Route>
      
      <Footer />
    </React.Fragment>
  );
}

export default App;






