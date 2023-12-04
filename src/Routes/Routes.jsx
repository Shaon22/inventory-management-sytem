import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../LayOuts/MainLayout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import DashboardLayout from "../LayOuts/DashboardLayout/DashboardLayout";
import ManagerHome from "../ManagerOptions/ManagerHome/ManagerHome";
import AddProduct from "../ManagerOptions/ManagerHome/AddProduct";
import AllProducts from "../ManagerOptions/Allproducts/AllProducts";
import UpdateProducts from "../ManagerOptions/Allproducts/UpdateProducts";
import CreateShop from "../Pages/CreateShop/CreateShop";
import CheckOut from "../ManagerOptions/Sales/CheckOut";
import SalesPage from "../ManagerOptions/Sales/SalesPage";
import PrivateRoute from "./Private/PrivateRoutes";
import AddProductPage from "../ManagerOptions/ManagerHome/AddProductPage";
import AdminHome from "../AdminOptions/AdminHome";
import Subcriptions from "../ManagerOptions/Subscriptions/Subcriptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/createShop',
        element: <PrivateRoute><CreateShop></CreateShop></PrivateRoute>
      }

    ]
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'login',
    element: <Login></Login>
  },

  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/managerHome',
        element: <ManagerHome></ManagerHome>,
      },
      {
        path:'/dashboard/addProductPage',
        element:<AddProductPage></AddProductPage>
      },
      {
        path: '/dashboard/addProducts',
        element:<AddProduct></AddProduct>
      },
      {
        path: '/dashboard/allProducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/dashboard/updateProducts/:id',
        element: <UpdateProducts></UpdateProducts>,
        loader:({params})=>fetch(`https://inventory-management-server-ten.vercel.app/product/${params.id}`)

      },
      {
        path: '/dashboard/salesPage/',
        element: <SalesPage></SalesPage>,
      },
      {
        path: '/dashboard/checkOut',
        element: <CheckOut></CheckOut>
      },
      {
        path:'/dashboard/subscriptions',
        element:<Subcriptions></Subcriptions>
      },
      {
        path:'/dashboard/adminHome',
        element:<AdminHome></AdminHome>
      }
    ]
  }
]);
export default router