import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';

const BrandSection = () => {
    return (
        <section className='mb-20'>
            <div className='px-12 py-8 bg-emerald-950 rounded-xl'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{delay: 1500}}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/5.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/4.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/2.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/1.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/5.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/4.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/3.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/2.svg' alt='cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/1.svg' alt='cover' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default BrandSection;
