// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './Category.css'

// TODO: implement pagination heare on this page? 



import slide1 from '../../../assets/home/Category/slide1.jpg'
import slide2 from '../../../assets/home/Category/slide2.jpg'
import slide3 from '../../../assets/home/Category/slide3.jpg'
import slide4 from '../../../assets/home/Category/slide4.jpg'
import SectionTitle from '../../../Components/Section_Title/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00am to 10.00pm'}
                heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                className="mySwiper mb-2"
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <img src={slide1} alt="slider-1" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slider-2" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slider-3" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Sups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slider-4" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Desserts</h3>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <img src={slide1} alt="slider-1" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slider-2" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slider-3" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Sups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slider-4" />
                    <h3 className='text-3xl uppercase text-center mb-2 -mt-16'>Desserts</h3>
                </SwiperSlide>
            </Swiper>
        </section >
    );
};

export default Category;