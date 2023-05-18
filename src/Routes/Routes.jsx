import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../ErrorPage/Error";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/toys',
                element:<AllToys/>
            }
        ]
    },
]);

export default router;