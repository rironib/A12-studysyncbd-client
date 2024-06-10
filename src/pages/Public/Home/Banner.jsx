import cover from '/home/banner-2.png'
import bgCover from '/bg-cover.png';
import {Button, Heading, Stack, useBreakpointValue} from "@chakra-ui/react";
import {ArrowForwardIcon, EmailIcon} from "@chakra-ui/icons";

const Banner = () => {
    const breakpoint = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });

    return (
            <div style={{backgroundImage: `url(${bgCover})`}} className='h-screen w-full bg-slate-200 bg-cover bg-no-repeat bg-center'>
                <div className='bg-slate-900 bg-opacity-40'>
                    <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                        <div className='h-screen flex justify-around items-center gap-20 pt-20'>
                            <div className='grid text-center lg:text-start gap-20 lg:gap-12 text-white'>
                                <Heading size='4xl'>
                                    Better Learning Future Starts With StudySync
                                </Heading>

                                <Stack className='justify-center lg:justify-start' direction='row' spacing={4}>
                                    <Button leftIcon={<EmailIcon/>} size={breakpoint} colorScheme='teal' variant='solid'>
                                        Email
                                    </Button>
                                    <Button rightIcon={<ArrowForwardIcon/>} size={breakpoint} colorScheme='gray' variant='outline'>
                                        Call us
                                    </Button>
                                </Stack>
                            </div>
                            <div className='hidden lg:block min-w-96'>
                                <img src={cover} alt='banner' className='h-[480px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;
