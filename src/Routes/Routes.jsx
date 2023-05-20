import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../ErrorPage/Error";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys";
import LogIn from './../Pages/LogIN/LogIn';
import SignUp from "../Pages/SignIn/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import About from "./About";
import ViewDetails from './../Pages/Home/ViewDetails';


const router = createBrowserRouter([
    {
        path: '/',
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
                element: <Blogs ></Blogs>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "/:id",
                element: <ViewDetails />,
                loader: ({ params }) => fetch(`https://toy-server-site-mahbubaly.vercel.app/allToys/${params.id}`)
            }
        ]
    },
]);

export default router;