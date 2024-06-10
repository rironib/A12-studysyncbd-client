import {Avatar, Button, Divider, Flex, Text} from "@chakra-ui/react";
import notFound from '/not-found.jpg';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({session}) => {
    const {_id, image, title, tutor, fee } = session;

    return (
        <Flex key={_id} className='flex-col border rounded-lg'>
            <img alt='cover' src={image || notFound} className='h-60 w-full rounded-xl'/>
            <div className='flex-grow mt-2 p-4 space-y-4'>
                <div className='font-bold text-2xl'>
                    {title}
                </div>
                <Flex className='items-center gap-2'>
                    <Avatar size='sm' name={tutor}/>
                    <Text>{tutor}</Text>
                </Flex>
            </div>
            <Divider/>
            <Flex className='justify-between items-center p-4 py-2'>
                <Text className='font-semibold text-xl' color='blue'>${fee}</Text>
                <Link to={`/session/${_id}`}>
                    <Button>Read More</Button>
                </Link>
            </Flex>
        </Flex>
    );
};

Card.propTypes = {
    session: PropTypes.object.isRequired
}

export default Card;
