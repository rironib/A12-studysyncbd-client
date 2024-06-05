import {Box, Heading, Stack, Text} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const StudentReview = () => {
    return (
        <section className='mt-12 mb-20'>
            <Stack mb='10' align='center' spacing={1}>
                <Text fontSize='xl' color='blue'>Our Students Review</Text>
                <Heading className='font-lexend'>What Our Students Are Say’s</Heading>
            </Stack>
            <div className='px-12 py-8'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper h-96"
                >
                    <SwiperSlide>
                        <Box align='center' className='p-8 shadow rounded-lg'>
                            <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                            <div className='mt-4 space-y-2'>
                                <div className='font-bold text-2xl'>Motasim Billah</div>
                                <Text color='teal'>UI / UX Designer</Text>
                            </div>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box align='center' className='p-8 shadow rounded-lg'>
                            <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                            <div className='mt-4 space-y-2'>
                                <div className='font-bold text-2xl'>Motasim Billah</div>
                                <Text color='teal'>UI / UX Designer</Text>
                            </div>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box align='center' className='p-8 shadow rounded-lg'>
                            <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                            <div className='mt-4 space-y-2'>
                                <div className='font-bold text-2xl'>Motasim Billah</div>
                                <Text color='teal'>UI / UX Designer</Text>
                            </div>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box align='center' className='p-8 shadow rounded-lg'>
                            <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                            <div className='mt-4 space-y-2'>
                                <div className='font-bold text-2xl'>Motasim Billah</div>
                                <Text color='teal'>UI / UX Designer</Text>
                            </div>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box align='center' className='p-8 shadow rounded-lg'>
                            <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                            <div className='mt-4 space-y-2'>
                                <div className='font-bold text-2xl'>Motasim Billah</div>
                                <Text color='teal'>UI / UX Designer</Text>
                            </div>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default StudentReview;
