import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth.jsx";
import useAdmin from "../hooks/useAdmin.jsx";
import Loading from "../components/Shared/Loading.jsx";
import useTutor from "../hooks/useTutor.jsx";
import useStudent from "../hooks/useStudent.jsx";

const StudentRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isTutor, isTutorLoading] = useTutor();
    const [isStudent, isStudentLoading] = useStudent();

    if (loading || isTutorLoading || isAdminLoading || isStudentLoading) {
        return <Loading/>;
    }

    if (isTutor) {
        return <Navigate to='/tutor/dashboard' state={{from: location}} replace />;
    }

    if (isAdmin) {
        return <Navigate to='/admin/dashboard' state={{from: location}} replace />
    }

    if (user && isStudent) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace />;
};

StudentRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StudentRoute;