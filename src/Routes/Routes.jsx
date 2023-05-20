import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../ErrorPage/Error";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys";
import LogIn from './../Pages/LogIN/LogIn';
import SignUp from "../Pages/SignIn/SignUp";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/toys',
                element: <AllToys />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },

            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
]);

export default router;