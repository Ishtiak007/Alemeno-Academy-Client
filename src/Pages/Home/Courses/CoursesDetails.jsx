import { useLoaderData } from "react-router-dom";
import CoursesEnroll from "./CoursesEnroll";


const CoursesDetails = () => {
    const course = useLoaderData();
    const { _id, thumbnail, name, instructor, description, enrollmentStatus, duration, schedule, location, price, prerequisites, syllabus } = course;
    return (
        <div>
            <div className="h-[50vh] flex justify-center items-center bg-gradient-to-r from-blue-100 to-pink-100">
                <div>
                    <h1 className="font-bold text-3xl text-center">{name}</h1>
                    <p className="mt-3">{description}</p>
                </div>
            </div>

            <div>
                <CoursesEnroll id={_id} name={name} thumbnail={thumbnail} description={description} instructor={instructor} enrollmentStatus={enrollmentStatus} duration={duration} schedule={schedule} location={location} price={price} prerequisites={prerequisites} syllabus={syllabus}></CoursesEnroll>
            </div>
        </div>
    );
};

export default CoursesDetails;