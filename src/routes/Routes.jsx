import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";

import HomePage from "../components/homepage/HomePage";
import Keepers from "../pages/keepers/Keepers";
import KeeperDetails from "../pages/keeperDetails/KeeperDetails";






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
      element:<Keepers />
    },
    {
      path:"/keeperDetails/:keeperId",
      Component: KeeperDetails,
      loader: ()=>fetch("/friendsData.json")
    }
  ],
  errorElement:<ErrorPage />
  }
])