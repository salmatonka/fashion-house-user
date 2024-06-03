import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePages/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Register from "../Pages/Forms/Register";
import LogIn from "../Pages/Forms/LogIn";
import ContactUs from "../Pages/ContactUs/ContactUs";
export const routes = createBrowserRouter([
    {
     path: '/',
     element: <Main />,
     errorElement: <ErrorPage />,
     children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path:'/register',
            element: <Register />
          },
          {
            path:'/login',
            element: <LogIn />
          },
          {
            path:'/contactUs',
            element: <ContactUs />
          }
        ]
    }
])