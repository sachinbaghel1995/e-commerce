import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import CartProvider from "./components/Context/CartProvider"
import About from "./pages/About";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/products", element: <Products /> },
        { path: "/about", element: <About /> },
        { path: "/store", element: <Store /> },
        { path: "/contactus", element: <ContactUs /> }

      ],
    },
  ]);
  return (
    <div>
     
      <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;
