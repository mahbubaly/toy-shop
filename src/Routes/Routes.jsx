import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../ErrorPage/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;