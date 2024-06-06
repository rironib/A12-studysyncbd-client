import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Error from "../pages/Public/Error/Error.jsx";

// Public Routes
import PublicLayout from "../layouts/PublicLayout.jsx";
import Home from "../pages/Public/Home/Home.jsx";
import Login from "../pages/Public/Auth/Login.jsx";
import Register from "../pages/Public/Auth/Register.jsx";
import Session from "../pages/Public/SessionDetails/Session.jsx";
import SessionList from "../pages/Public/SessionList/SessionList.jsx";

// Student Dashboard
import StudentLayout from "../layouts/StudentLayout.jsx";
import StudentHome from "../pages/Student/Home/Home.jsx";
import StudentSessions from "../pages/Student/Sessions/Sessions.jsx";
import StudentCreateNote from "../pages/Student/CreateNote/StudentCreateNote.jsx";
import StudentManageNotes from "../pages/Student/ManageNotes/ManageNotes.jsx";
import StudentMaterials from "../pages/Student/Materials/Materials.jsx";

// Tutor Dashboard
import TutorLayout from "../layouts/TutorLayout.jsx";
import TutorHome from "../pages/Tutor/Home/Home.jsx";
import TutorCreateSessions from "../pages/Tutor/CreateSessions/TutorSessions.jsx";
import TutorSessions from "../pages/Tutor/Sessions/Sessions.jsx";
import TutorAddMaterials from "../pages/Tutor/AddMaterials/AddMaterials.jsx";
import TutorMaterials from "../pages/Tutor/Materials/Materials.jsx";
import TutorNotes from "../pages/Tutor/Notes/Notes.jsx";

// Admin Dashboard
import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminHome from "../pages/Admin/Home/Home.jsx";
import AdminUsers from "../pages/Admin/Users/Users.jsx";
import AdminSessions from "../pages/Admin/Sessions/Sessions.jsx";
import AdminMaterials from "../pages/Admin/Materials/Materials.jsx";

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

            // Student Routes
            {
                path: '/student',
                element: <StudentLayout/>,
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
                        path: '/student/manage-note',
                        element: <StudentManageNotes/>,
                    },
                    {
                        path: '/student/study-materials',
                        element: <StudentMaterials/>,
                    },
                ]
            },

            // Tutor Routes
            {
                path: '/tutor',
                element: <TutorLayout/>,
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
                        path: '/tutor/add-materials',
                        element: <TutorAddMaterials/>,
                    },
                    {
                        path: '/tutor/materials',
                        element: <TutorMaterials/>,
                    },
                    {
                        path: '/tutor/notes',
                        element: <TutorNotes/>,
                    },
                ]
            },

            // Admin Routes
            {
                path: '/admin',
                element: <AdminLayout/>,
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