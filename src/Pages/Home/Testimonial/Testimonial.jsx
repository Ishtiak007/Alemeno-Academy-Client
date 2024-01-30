
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Scrollbar,
    EffectCube,
    Autoplay,
} from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    const testimonialData = [
        {
            rating: 4.7,
            review:
                "Enrolling in Alemeno Academy was the best decision. The instructors are not only experts in their fields but also great mentors. I feel more confident in my skills.",
            authorName: "Sarah Johnson",
            authorPosition: "Operations Manager",
            authorCompany: "TechMart Solutions",
            imageUrl:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            rating: 4.0,
            review:
                "I appreciate the practical approach to learning at Alemeno Academy. The hands-on projects helped me apply theoretical knowledge to real-world scenarios.",
            authorName: "Michael Chang",
            authorPosition: "Warehouse Supervisor",
            authorCompany: "LogiTech Warehousing",
            imageUrl:
                "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            rating: 4.5,
            review:
                "The variety of courses at Alemeno Academy allowed me to explore new fields. The instructors are passionate, and the learning environment is encouraging.",
            authorName: "Emily Martinez",
            authorPosition: "Small Business Owner",
            authorCompany: "Crafty Creations",
            imageUrl:
                "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="pb-10 bg-gradient-to-r from-violet-50 to-fuchsia-50">
            <p
                data-aos="fade-up"
                className="pt-16 text-xl font-bold text-center font-clashBold md:text-2xl lg:text-3xl"
            >
                Words Of Satisfaction
            </p>
            <Swiper
                // pagination={true}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
                className="mySwiper"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                speed={2000}
            >
                {testimonialData.map((testimonial) => (
                    <SwiperSlide key={testimonial.imageUrl}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;