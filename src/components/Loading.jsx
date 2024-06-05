import {Spinner} from "@chakra-ui/react";

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-40'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='lg'
            />
        </div>
    );
};

export default Loading;
