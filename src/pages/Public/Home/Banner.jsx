import cover from '/home/banner-2.png'
import {Button, Heading, Stack} from "@chakra-ui/react";
import {ArrowForwardIcon, EmailIcon} from "@chakra-ui/icons";

const Banner = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                <div className='h-screen flex justify-around items-center gap-20 pt-20'>
                    <div className='grid gap-12 text-white'>
                        <Heading size='4xl'>
                            Better Learning Future Starts With StudySync
                        </Heading>

                        <Stack direction='row' spacing={4}>
                            <Button leftIcon={<EmailIcon />} colorScheme='pink' variant='solid'>
                                Email
                            </Button>
                            <Button rightIcon={<ArrowForwardIcon />} colorScheme='gray' variant='solid'>
                                Call us
                            </Button>
                        </Stack>
                    </div>
                    <div className='min-w-96'>
                        <img src={cover} alt='banner' className='h-[480px]'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
