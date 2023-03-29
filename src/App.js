import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route,Routes} from "react-router-dom";

import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import CartProvider from "./components/Context/CartProvider"
import About from "./pages/About";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
const productArr = [
  {
    product: "Colors",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    product: "Black and white Colors",

    price: "$ 50",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    product: "Yellow and Black Colors",

    price: "$ 70",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    product: "Blue Color",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       { path: "/products", element: <Products /> },
  //       { path: "/about", element: <About /> },
  //       { path: "/store", element: <Store /> },
  //       { path: "/contactus", element: <ContactUs /> }

  //     ],
  //   },
  // ]);
  return (
    <div>
     
      
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
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
