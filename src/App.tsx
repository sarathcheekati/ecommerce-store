import { ErrorElement } from "./components";
import {
  HomeLayout,
  Landing,
  Error,
  Register,
  SingleProduct,
  Products,
  Cart,
  About,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingPageLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
import { action as registerAction } from "./pages/Register";
import { action as loginUser } from "./pages/Login";
import { store } from "./redux-toolkit/store/store";
import { action as checkoutAction } from "./components/CheckoutForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingPageLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Cart />, errorElement: <ErrorElement /> },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginUser(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
