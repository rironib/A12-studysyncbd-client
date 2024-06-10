import {Button} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {DeleteIcon} from "@chakra-ui/icons";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {toast} from "react-toastify";
import Swal from "sweetalert2";

const DeleteButton = ({id, refetch}) => {
    const axiosSecure = useAxiosSecure();
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((res) => {
            if (res.isConfirmed) {
                axiosSecure.delete(`/api/admin/sessions/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('User has been deleted.')
                        } else (toast.error(res.data.message));
                    })
                    .catch(err => toast.error(err.message));
            }
        });
    }

    return (
        <Button onClick={handleDelete} colorScheme='red'><DeleteIcon/></Button>
    );
};

DeleteButton.propTypes = {
    id: PropTypes.string,
    status: PropTypes.string,
    refetch: PropTypes.func
}

export default DeleteButton;
