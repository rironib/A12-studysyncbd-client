import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Error from "../pages/Public/Error/Error.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";
import Home from "../pages/Public/Home/Home.jsx";
import Login from "../pages/Public/Auth/Login.jsx";
import Register from "../pages/Public/Auth/Register.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <PublicLayout/>,
                children: [
                    {
                        path: '/',
                        element: <Home/>
                    },
                    // Auth Routes
                    {
                        path: '/login',
                        element: <Login/>
                    },
                    {
                        path: '/register',
                        element: <Register/>
                    }
                ]
            },
        ]
    },
]);

export default router;