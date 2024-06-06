import useAuth from "../hooks/useAuth.jsx";
import useAdmin from "../hooks/useAdmin.jsx";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Shared/Loading.jsx";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading/>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/dashboard' state={{from: location}} replace />
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoute;
