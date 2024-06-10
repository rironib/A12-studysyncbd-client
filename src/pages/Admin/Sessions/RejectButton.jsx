import {
    Button,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    useDisclosure,
    Textarea,
    Box
} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";

const RejectButton = ({ id, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const info = {
            status: 'rejected',
            rejectionReason: data.rejectionReason,
            feedback: data.feedback,
        }

        axiosSecure.patch(`/api/admin/sessions/${id}`, info)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success('Session rejected successfully!');
                    onClose();
                    reset();
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);
            });
    };

    return (
        <>
            <Button onClick={onOpen} colorScheme='orange'><CloseIcon/></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Reject Session</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl mb={4}>
                                <FormLabel>Rejection Reason</FormLabel>
                                <Input type="text" {...register('rejectionReason', { required: true })} placeholder="Enter rejection reason" />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Feedback</FormLabel>
                                <Textarea {...register('feedback')} placeholder="Provide feedback (optional)" />
                            </FormControl>
                            <Box textAlign="right">
                                <Button colorScheme="blue" mr={3} type="submit">
                                    Submit
                                </Button>
                                <Button variant="ghost" onClick={onClose}>Cancel</Button>
                            </Box>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

RejectButton.propTypes = {
    id: PropTypes.string.isRequired,
    refetch: PropTypes.func.isRequired
};

export default RejectButton;
