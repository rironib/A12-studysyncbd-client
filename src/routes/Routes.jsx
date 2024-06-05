import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Error from "../pages/Public/Error/Error.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";
import Home from "../pages/Public/Home/Home.jsx";
import Login from "../pages/Public/Auth/Login.jsx";
import Register from "../pages/Public/Auth/Register.jsx";
import Session from "../pages/Public/SessionDetails/Session.jsx";
import SessionList from "../pages/Public/SessionList/SessionList.jsx";
import PrivateLayout from "../layouts/PrivateLayout.jsx";
import PrivateHome from "../pages/Private/PrivateHome/PrivateHome.jsx";
import AdminHome from "../pages/Admin/AdminHome/AdminHome.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";

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
                    {
                        path: '/sessions',
                        element: <SessionList/>
                    },
                    {
                        path: '/session/:id',
                        element: <Session/>,
                        loader: ({params}) => fetch(`http://localhost:5000/api/sessions/${params.id}`, {})
                    }
                ]
            },

            // Private Routes
            {
                path: '/dashboard',
                element: <PrivateLayout/>,
                children: [
                    {
                        path: '/dashboard',
                        element: <PrivateHome/>,
                    }
                ]
            },

            // Admin Routes
            {
                path: '/admin',
                element: <AdminLayout/>,
                children: [
                    {
                        path: '/admin',
                        element: <AdminHome/>
                    }
                ]
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
]);

export default router;