import {Alert, AlertIcon, AlertTitle} from "@chakra-ui/react";
import PropTypes from "prop-types";

const ErrorAlert = ({error}) => {
    return (
        <div className='flex justify-center items-center h-40'>
            <Alert status='error'>
                <AlertIcon/>
                <AlertTitle>{error?.message}</AlertTitle>
            </Alert>
        </div>
    );
};

ErrorAlert.propTypes = {
    error: PropTypes.node
}

export default ErrorAlert;
