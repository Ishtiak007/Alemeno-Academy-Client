import { Rating } from "@mui/material";


const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="min-h-[500px] h-[60vh] w-[70%] mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 mt-10 md:mt-0">
            <div className="w-[80%] h-[280px]  ">
                <img
                    src={testimonial.imageUrl}
                    alt=""
                    className="object-cover h-full"
                />
            </div>
            <div className="flex flex-col justify-center gap-5 pl-10 font-poppins">
                <Rating
                    name="half-rating-read"
                    value={testimonial.rating}
                    precision={0.5}
                    readOnly
                />
                <p className="text-[13px] ">{testimonial.review}</p>
                <div className="flex items-center gap-4">
                    <div className="pr-4 border-r border-r-gray-500">
                        <p className="text-lg font-bold"> {testimonial.authorName}</p>
                        <p className="text-[12px]">{testimonial.authorPosition}</p>
                    </div>
                    <p className=" font-clashSemibold">{testimonial.brand}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;