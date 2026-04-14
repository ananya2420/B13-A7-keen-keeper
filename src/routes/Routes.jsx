import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Keens from "../pages/keens/Keens";
import ErrorPage from "../pages/error/ErrorPage";



export const router=createBrowserRouter([
  {
  path:"/",
  Component: MainLayout,
  children:[
    {
      index:true,
      element:<HomePage />
    },
    {
      path:"/keens",
      element:<Keens />
    }
  ],
  errorElement:<ErrorPage />
  }
])