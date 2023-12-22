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
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import Task from "../Pages/Dashboard/Task";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";


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
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'add-task',
                element: <AddTask></AddTask>
            },
            {
                path:'my-task',
                element: <Task></Task>
            },
            {
                path:'update-task/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({params})=>fetch(`http://localhost:5000/tasks/${params.id}`)
            },
        ]
    }

  ]);

export default MainRouter;