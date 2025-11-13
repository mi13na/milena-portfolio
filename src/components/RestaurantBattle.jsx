import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Navigation, Pagination} from 'swiper/modules';

export const RestaurantBattle = ({data}) => {
    return (
        <div>
            <Swiper
                navigation={true}
                pagination={{clickable: true}}
                modules={[Navigation, Pagination]}
                className='rounded-3xl'
            >
                {data.slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {slide.type === 'video' ? (
                            <video
                                src={slide.src}
                                controls
                            >
                            </video>
                        ) : (
                            <img
                                src={slide.src}
                            />
                        )}
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}