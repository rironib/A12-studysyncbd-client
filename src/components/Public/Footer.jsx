import {Button, Divider, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill} from "react-icons/ri";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='w-full bg-emerald-950 text-white'>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto pt-24 space-y-12 flex flex-col justify-between mb-20'>
                <div className='grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-x-12 gap-y-12 flex-grow'>
                    <div className='col-span-2 md:col-span-1 text-center md:text-left space-y-6'>
                        <Heading>StudySync</Heading>
                        <Text>
                            Unlock learning potential with StudySync: your guide to academic excellence
                        </Text>
                        <div className='space-y-4'>
                            <Text fontSize='lg'>Follow Us On:</Text>
                            <Flex className='justify-center md:justify-start gap-4'>
                                <Button bg='#1877F2' color='white' _hover={{}}>
                                    <RiFacebookFill />
                                </Button>
                                <Button bg='#1DA1F2' color='white' _hover={{}}>
                                    <RiTwitterFill/>
                                </Button>
                                <Button bg='#0077B5' color='white' _hover={{}}>
                                    <RiLinkedinFill/>
                                </Button>
                                <Button bg='#FF0000' color='white' _hover={{}}>
                                    <RiYoutubeFill/>
                                </Button>
                            </Flex>
                        </div>
                    </div>
                    <div className='text-center md:text-left space-y-6'>
                        <Heading>
                            Useful Links
                        </Heading>
                        <Stack direction='column' spacing={4} align='left'>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About us</Link>
                            <Link to='/'>Courses</Link>
                            <Link to='/'>Pricing</Link>
                            <Link to='/'>Categories</Link>
                        </Stack>
                    </div>
                    <div className='text-center md:text-left space-y-6'>
                        <Heading>
                            Resources
                        </Heading>
                        <Stack direction='column' spacing={4} align='left'>
                            <Link to='/'>Community</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Guides</Link>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Terms</Link>
                        </Stack>
                    </div>
                    <div className='col-span-2 md:col-span-1 text-center md:text-left space-y-6'>
                        <Heading>
                            Contact Us
                        </Heading>
                        <Stack direction='column' spacing={4} align='left'>
                            <Link to='/'>15 Rose StreetHarvey, IL
                                60426 USA</Link>
                            <Link to='/'>708-210-9101</Link>
                            <Link to='/'>example@education.com</Link>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className='bg-emerald-700 p-4 text-center'>
                <Text>Copyright © {year} StudySync. All Rights Reserved.</Text>
            </div>
        </footer>
    );
};

export default Footer;