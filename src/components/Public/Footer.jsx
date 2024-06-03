import {Button, Divider, Heading, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='h-screen w-full bg-emerald-950 text-white'>
            <div className='h-screen w-11/12 lg:w-10/12 max-w-[1275px] mx-auto pt-24 space-y-12 flex flex-col justify-between'>
                <div>
                    <div className='flex justify-between items-center py-8'>
                        <Heading size='lg' className='w-[420px]'>
                            Subscribe to Our Newsletter
                            for Latest Update
                        </Heading>
                        <div className='min-w-[420px] flex justify-between bg-white p-2 rounded-full'>
                            <input type='email' name='email' placeholder='Email Address'
                                   className='w-full p-3 border-0 outline-none rounded-full'/>
                            <button className='bg-emerald-500 p-3 px-6 rounded-full'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <Divider/>
                <div className='grid grid-cols-4 gap-4 flex-grow'>
                    <div className='space-y-6'>
                        <Heading>StudySync</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit varius congue Morbi</Text>
                        <div className='space-y-4'>
                            <Text fontSize='lg'>Follow Us On:</Text>
                            <Stack direction='row' spacing={4} align='center'>
                                <Button colorScheme='teal' variant='solid'>
                                    X
                                </Button>
                                <Button colorScheme='teal' variant='solid'>
                                    X
                                </Button>
                                <Button colorScheme='teal' variant='solid'>
                                    X
                                </Button>
                                <Button colorScheme='teal' variant='solid'>
                                    X
                                </Button>
                            </Stack>
                        </div>
                    </div>
                    <div className='space-y-6'>
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
                    <div className='space-y-6'>
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
                    <div className='space-y-6'>
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
