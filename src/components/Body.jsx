import Home from "./Home"
import CartPage from "./CartPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./ProductList";
import PaymentDetails from "./pages/PaymentDetails"
import PaymentSucess from "./pages/PaymentSucess"

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/cartpage",
      element: <CartPage/>,
    },
    {
        path:"/productlist",
        element:<ProductList/>
    },
    {
        path:"/paymentdetail",
        element:<PaymentDetails/>
    },
    {
        path:"/paymentsucess",
        element:<PaymentSucess/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;