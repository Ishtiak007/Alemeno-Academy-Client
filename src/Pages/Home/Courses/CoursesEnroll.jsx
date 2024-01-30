import { FaCheck } from 'react-icons/fa';

const CoursesEnroll = ({ id, name, thumbnail, instructor, enrollmentStatus, duration, schedule, location, price, prerequisites, syllabus }) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 bg-gradient-to-r from-cyan-50 to-blue-50">


            <div className="lg:col-span-2 p-3">
                <h1 className="text-2xl font-bold text-center">Course : {name}</h1>
                <div className='my-5 lg:w-1/2 border-2 p-4 mx-auto'>
                    <h2 className="font-bold text-xl">Instructor : {instructor} </h2>
                    <p className="text-base font-medium my-2">Course ID : {id}</p>
                </div>

                <div className='my-5 lg:w-1/2 border-2 p-4 mx-auto'>
                    <h1 className='text-xl font-bold'>Prerequisites</h1>
                    <ul>
                        {prerequisites.map((prerequisite, index) => (
                            <li className='flex items-center gap-2' key={index}><FaCheck className='text-green-500'></FaCheck> {prerequisite}</li>
                        ))}
                    </ul>
                </div>

                <div className='my-5 border-2 p-4 mx-auto'>
                    <div>
                        <h2 className='text-xl font-bold text-center'>Course Syllabus</h2>
                        <ul>
                            {syllabus.map((week) => (
                                <li className='my-5' key={week.week}>
                                    <strong className='text-green-600'>Week {week.week}:</strong>
                                    <p>
                                        <strong>Topic:</strong> {week.topic}
                                    </p>
                                    <p>
                                        <strong>Content:</strong> {week.content}
                                    </p>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>




            <div className='p-4 rounded-md'>
                <div className="card card-compact lg:w-[340px] bg-gradient-to-r from-blue-50 to-indigo-50 shadow-2xl mt-2">
                    <figure><img className="w-full" src={thumbnail} alt="Shoes" /></figure>
                    <div className="card-body flex-col">
                        <div className="">
                            <h2 className="font-bold text-2xl">Price : <span className='text-green-500'>{price}</span></h2>
                        </div>
                        <div className='flex justify-between my-3'>
                            <p className="flex items-center gap-2 text-green-700 text-base font-medium">Location:{location}</p>
                            <p className="flex items-center gap-2 text-blue-700 text-base font-medium">Duration:{duration}</p>
                        </div>

                        <div>
                            <p className='text-sm font-bold'>{schedule}</p>
                            <p className='text-sm font-bold mt-2'>Enrollment Status : {enrollmentStatus}</p>
                        </div>
                        <button className="buttonProject3 w-full my-5">Enroll Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoursesEnroll;