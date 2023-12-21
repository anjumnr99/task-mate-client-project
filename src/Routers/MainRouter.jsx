import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Register from "../Register/Register";
import MainLayout from "../Layout/MainLayout";
import Login from "../Login/Login";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Feature from "../Pages/Feature/Feature";
import Pricing from "../Pages/Pricing/Pricing";


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
        {
            path:'about',
            element: <About></About>
        },
        {
            path:'blog',
            element: <Blog></Blog>
        },
        {
            path:'contact',
            element: <Contact></Contact>
        },
        {
            path:'feature',
            element: <Feature></Feature>
        },
        {
            path:'pricing',
            element: <Pricing></Pricing>
        },
      ]
    }

  ]);

export default MainRouter;