import {Stack, Heading, Text, Box, Grid} from "@chakra-ui/react";

const TutorSection = () => {
    return (
        <section className='mt-12 mb-20'>
            <Stack mb='10' align='center' spacing={1}>
                <Text fontSize='xl' color='blue'>Talented Instructors</Text>
                <Heading>Our Expert Instructors</Heading>
            </Stack>
            <div>
                <Grid className="grid-cols-4 gap-8">
                    <Box align='center' className='p-8 shadow rounded-lg'>
                        <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                        <div className='mt-4 space-y-2'>
                            <div className='font-bold text-2xl'>Motasim Billah</div>
                            <Text color='teal'>UI / UX Designer</Text>
                        </div>
                    </Box>
                    <Box align='center' className='p-8 shadow rounded-lg'>
                        <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                        <div className='mt-4 space-y-2'>
                            <div className='font-bold text-2xl'>Motasim Billah</div>
                            <Text color='teal'>UI / UX Designer</Text>
                        </div>
                    </Box>
                    <Box align='center' className='p-8 shadow rounded-lg'>
                        <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                        <div className='mt-4 space-y-2'>
                            <div className='font-bold text-2xl'>Motasim Billah</div>
                            <Text color='teal'>UI / UX Designer</Text>
                        </div>
                    </Box>
                    <Box align='center' className='p-8 shadow rounded-lg'>
                        <img alt='cover' src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3-2.jpg' className='rounded-full' />
                        <div className='mt-4 space-y-2'>
                            <div className='font-bold text-2xl'>Motasim Billah</div>
                            <Text color='teal'>UI / UX Designer</Text>
                        </div>
                    </Box>
                </Grid>
            </div>
        </section>
    );
};

export default TutorSection;
