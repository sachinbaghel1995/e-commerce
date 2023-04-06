import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route,Routes} from "react-router-dom";

import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import CartProvider from "./components/Context/CartProvider"
import About from "./pages/About";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import { AuthContextProvider } from "./components/Context/Login-context";
const productArr = [
  {
    product: "Colors",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    amount:2
  },

  {
    product: "Black and white Colors",

    price: "$ 50",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    amount:3
  },

  {
    product: "Yellow and Black Colors",

    price: "$ 70",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    amount:4
  },

  {
    product: "Blue Color",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    amount:5
  },
];


function App() {

  return (
    <div>
     
      <AuthContextProvider>
      <BrowserRouter>
      <Routes>
      <Route  exact path="/"
       element={<Products />}
      />
      <Route  exact path="/products"
       element={<Products />}
      />
      <Route path="/about"
        element={<About />}
      />
      <Route path="/store"
       element= {<Store />}
      />
      <Route path="/contactus"
       element={<ContactUs />}
      />
      <Route path="/products/:productId"
      element={<ProductDetail products={productArr} />}
      />
        <Route path="/login"
       element={<Login />}
      />
    
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
