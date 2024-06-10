import {
    Button,
    Input,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    useDisclosure,
    RadioGroup,
    Radio,
    Stack,
    InputLeftAddon, InputGroup
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {toast} from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {CheckIcon} from "@chakra-ui/icons";

const ApproveButton = ({ id, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState(0);
    const { register, handleSubmit, setValue: setFormValue, watch } = useForm();

    const paymentOption = watch("paymentOption", "free");

    const handleValueChange = (e) => {
        setFormValue('value', e.target.value);
        setValue(e.target.value);
    };

    const onSubmit = (data) => {
        const sessionInfo = {
            status: 'approved',
            fee: data.value
        }

        axiosSecure.patch(`/api/admin/sessions/${id}`, sessionInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    onClose();
                    toast.success('Session rejected successfully!')
                } else {
                    onClose();
                    toast.error(res.data.message);
                }
            })
            .catch(err => {
                onClose();
                toast.error(err.message)
            })
    };

    return (
        <>
            <Button onClick={onOpen} colorScheme='green'><CheckIcon/></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Approve Session</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Text fontWeight='bold' mb='1rem'>
                                Select Fee Option
                            </Text>
                            <FormControl>
                                <RadioGroup defaultValue="free">
                                    <Stack direction="row">
                                        <Radio value="free" {...register('paymentOption')}>Free</Radio>
                                        <Radio value="paid" {...register('paymentOption')}>Paid</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                            {paymentOption === "paid" && (
                                <FormControl mt={4}>
                                    <InputGroup>
                                        <InputLeftAddon>$</InputLeftAddon>
                                        <Input type='number' {...register('value', { required: paymentOption === "paid" })} defaultValue={value} onChange={handleValueChange} placeholder='Enter Course Fee' />
                                    </InputGroup>
                                </FormControl>
                            )}
                            {paymentOption === "free" && (
                                <FormControl mt={4}>
                                    <InputGroup>
                                        <InputLeftAddon>$</InputLeftAddon>
                                        <Input type='number' defaultValue={0} isDisabled />
                                    </InputGroup>
                                </FormControl>
                            )}
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSubmit(onSubmit)}>
                            Submit
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

ApproveButton.propTypes = {
    id: PropTypes.string.isRequired,
    refetch: PropTypes.func.isRequired
};

export default ApproveButton;
