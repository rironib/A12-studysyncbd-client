import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
