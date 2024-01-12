import SectionTitle from "../../../Components/Section_Title/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// react rating file
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}

                    >
                        <div className="m-10 flex flex-col items-center">
                            <>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </>
                            <p className="my-3 px-36">{review.details}</p>
                            <p className="text-2xl text-orange-500 font-semibold">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;