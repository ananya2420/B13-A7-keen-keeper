import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";

import HomePage from "../components/homepage/HomePage";
import Keepers from "../pages/keepers/Keepers";
import KeeperDetails from "../pages/keeperDetails/KeeperDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";

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
    },
    {
      path:"/timeline",
      element:<Timeline />
    },
    {
      path:"/stats",
      element:<Stats />
    }
  ],
  errorElement:<ErrorPage />
  }
])