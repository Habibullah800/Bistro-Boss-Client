import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
// import { BsQuote } from 'react-icons/fa';
import { BsQuote } from "react-icons/bs";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="w-[80%] mx-auto">
            <SectionTitle
                heading='TESTIMONIALS'
                subHeading='---What Our Clients Say---'
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">


                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h3> <BsQuote className="h-[100px] w-[84px] mx-auto mt-2" /> </h3>

                            <div className="my-4 mb-10 p-2">
                                <p className="text-center w-[80%] mx-auto">{review.details}</p>
                                <h3 className="text-3xl text-orange-400 text-center my-6">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;