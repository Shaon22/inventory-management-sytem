import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../LayOuts/MainLayout/MainLayout";
import CreateStore from "../Pages/CreateStore/CreateStore";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/createStore',
          element:<CreateStore></CreateStore>
        }
      ]
    },
  ]);
  export default router