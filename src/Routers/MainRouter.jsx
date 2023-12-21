import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Register from "../Register/Register";
import MainLayout from "../Layout/MainLayout";
import Login from "../Login/Login";


const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <LandingPage></LandingPage>
        },
        {
            path:'register',
            element: <Register></Register>
        },
        {
            path:'login',
            element: <Login></Login>
        },
      ]
    }

  ]);

export default MainRouter;