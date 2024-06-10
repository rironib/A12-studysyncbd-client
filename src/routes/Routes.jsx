import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Error from "../pages/Public/Error/Error.jsx";

// Public Routes
import PublicLayout from "../layouts/PublicLayout.jsx";
import Home from "../pages/Public/Home/Home.jsx";
import Login from "../pages/Public/Auth/Login.jsx";
import Register from "../pages/Public/Auth/Register.jsx";
import SessionDetails from "../pages/Public/SessionDetails/./SessionDetails.jsx";
import SessionList from "../pages/Public/SessionList/SessionList.jsx";
import Payment from "../pages/Public/Payment/Payment.jsx";

// Private Routes
import PrivateRoute from "./PrivateRoute.jsx";

// Student Dashboard
import StudentRoute from "./StudentRoute.jsx";
import StudentLayout from "../layouts/StudentLayout.jsx";
import StudentHome from "../pages/Student/Home/Home.jsx";
import StudentSessions from "../pages/Student/Sessions/Sessions.jsx";
import StudentCreateNote from "../pages/Student/CreateNote/StudentCreateNote.jsx";
import StudentManageNotes from "../pages/Student/ManageNotes/ManageNotes.jsx";
import StudentMaterials from "../pages/Student/Materials/Materials.jsx";

// Tutor Dashboard
import TutorRoute from "./TutorRoute.jsx";
import TutorLayout from "../layouts/TutorLayout.jsx";
import TutorHome from "../pages/Tutor/Home/Home.jsx";
import TutorCreateSessions from "../pages/Tutor/CreateSessions/TutorSessions.jsx";
import TutorSessions from "../pages/Tutor/Sessions/Sessions.jsx";
import TutorAddMaterials from "../pages/Tutor/AddMaterials/AddMaterials.jsx";
import TutorMaterials from "../pages/Tutor/Materials/Materials.jsx";

// Admin Dashboard
import AdminRoute from "./AdminRoute.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminHome from "../pages/Admin/Home/Home.jsx";
import AdminUsers from "../pages/Admin/Users/Users.jsx";
import AdminSessions from "../pages/Admin/Sessions/Sessions.jsx";
import AdminMaterials from "../pages/Admin/Materials/Materials.jsx";
import UpdateSession from "../pages/Admin/UpdateSession/UpdateSession.jsx";
import UpdateNote from "../pages/Student/UpdateNote/UpdateNote.jsx";
import UpdateMaterial from "../pages/Tutor/UpdateMaterial/UpdateMaterial.jsx";



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
                        element: <PrivateRoute><SessionDetails/></PrivateRoute>,
                        loader: ({params}) => fetch(`https://studysyncbd.vercel.app/api/sessions/${params.id}`, {})
                    },
                    {
                        path: '/payment/:id',
                        element: <PrivateRoute><Payment/></PrivateRoute>,
                        loader: ({params}) => fetch(`https://studysyncbd.vercel.app/api/sessions/${params.id}`, {})
                    }
                ]
            },

            // Student Routes
            {
                path: '/student',
                element: <StudentRoute><StudentLayout/></StudentRoute>,
                children: [
                    {
                        path: '/student/dashboard',
                        element: <StudentHome/>,
                    },
                    {
                        path: '/student/sessions',
                        element: <StudentSessions/>,
                    },
                    {
                        path: '/student/create-note',
                        element: <StudentCreateNote/>,
                    },
                    {
                        path: '/student/notes',
                        element: <StudentManageNotes/>,
                    },
                    {
                        path: '/student/note/:id',
                        element: <UpdateNote/>,
                        loader: ({params}) => fetch(`https://studysyncbd.vercel.app/api/student/note/${params.id}`, {})
                    },
                    {
                        path: '/student/materials/:id',
                        element: <StudentMaterials/>,
                        loader: ({params}) => fetch(`https://studysyncbd.vercel.app/api/materials/${params.id}`, {})
                    },
                ]
            },

            // Tutor Routes
            {
                path: '/tutor',
                element: <TutorRoute><TutorLayout/></TutorRoute>,
                children: [
                    {
                        path: '/tutor/dashboard',
                        element: <TutorHome/>,
                    },
                    {
                        path: '/tutor/create-sessions',
                        element: <TutorCreateSessions/>,
                    },
                    {
                        path: '/tutor/sessions',
                        element: <TutorSessions/>,
                    },
                    {
                        path: '/tutor/materials/add/:id',
                        element: <TutorAddMaterials/>
                    },
                    {
                        path: '/tutor/materials/update/:id',
                        element: <UpdateMaterial/>,
                        loader: ({params}) => fetch(`https://studysyncbd.vercel.app/api/material/${params.id}`, {})
                    },
                    {
                        path: '/tutor/materials',
                        element: <TutorMaterials/>,
                    }
                ]
            },

            // Admin Routes
            {
                path: '/admin',
                element: <AdminRoute><AdminLayout/></AdminRoute>,
                children: [
                    {
                        path: '/admin/dashboard',
                        element: <AdminHome/>
                    },
                    {
                        path: '/admin/users',
                        element: <AdminUsers/>
                    },
                    {
                        path: '/admin/sessions',
                        element: <AdminSessions/>
                    },
                    {
                        path: '/admin/update/:id',
                        element: <UpdateSession/>,
                        loader: ({params}) => fetch(`https://studysyncbd.vercel.app/api/sessions/${params.id}`, {})
                    },
                    {
                        path: '/admin/materials',
                        element: <AdminMaterials/>
                    },
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