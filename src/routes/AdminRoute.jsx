import useAuth from "../hooks/useAuth.jsx";
import useAdmin from "../hooks/useAdmin.jsx";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Shared/Loading.jsx";
import useTutor from "../hooks/useTutor.jsx";
import useStudent from "../hooks/useStudent.jsx";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isTutor, isTutorLoading] = useTutor();
    const [isStudent, isStudentLoading] = useStudent();

    if (loading || isTutorLoading || isAdminLoading || isStudentLoading) {
        return <Loading/>;
    }

    if (user && isAdmin) {
        return children;
    }

    if (isStudent) {
        return <Navigate to='/student/dashboard' state={{from: location}} replace />;
    }

    if (isTutor) {
        return <Navigate to='/tutor/dashboard' state={{from: location}} replace />;
    }

    return <Navigate to="/login" state={{from: location}} replace />;
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoute;
