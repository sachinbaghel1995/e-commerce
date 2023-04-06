import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import CartProvider from "./components/Context/CartProvider";
import About from "./pages/About";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import { AuthContextProvider } from "./components/Context/Login-context";
import AuthContext from "./components/Context/Login-context";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

const productArr = [
  {
    product: "Colors",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    amount: 2,
  },

  {
    product: "Black and white Colors",

    price: "$ 50",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    amount: 3,
  },

  {
    product: "Yellow and Black Colors",

    price: "$ 70",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    amount: 4,
  },

  {
    product: "Blue Color",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    amount: 5,
  },
];

function App() {
  const loginCtx = useContext(AuthContext);

  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
            {<Route path="/products/:idToken" element={  <Products />} />}

            {/* <Route path="/products" element={  <Products />} /> */}

            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route
              path="/products/:productId"
              element={<ProductDetail products={productArr} />}
            />
            
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
