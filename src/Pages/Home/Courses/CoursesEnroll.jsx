import { FaCheck } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCarts from '../../../Hooks/useCarts';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const CoursesEnroll = ({ id, name, thumbnail, instructor, enrollmentStatus, duration, schedule, location, price, prerequisites, syllabus }) => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const location2 = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();

    const handleAddToCart = () => {
        if (user && user.email) {

            const cartItem = {
                courseId: id,
                email: user.email,
                name,
                thumbnail,
                price,
                instructor
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to your Dashboard cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please Log In first to Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location2 } })
                }
            });
        }
    }

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 bg-gradient-to-r from-cyan-50 to-blue-50">


            <div className="lg:col-span-2 p-3">
                <h1 className="text-2xl font-bold text-center">Course : {name}</h1>
                <div className='my-5 border-2 p-4 mx-auto rounded-md'>
                    <h2 className="font-bold text-xl">Instructor : {instructor} </h2>
                    <p className="text-base font-medium my-2">Course ID : {id}</p>
                </div>

                <div className='my-5 border-2 p-4 mx-auto rounded-md'>
                    <h1 className='text-xl font-bold'>Prerequisites</h1>
                    <ul>
                        {prerequisites.map((prerequisite, index) => (
                            <li className='flex items-center gap-2' key={index}><FaCheck className='text-green-500'></FaCheck> {prerequisite}</li>
                        ))}
                    </ul>
                </div>

                <div className='my-5 border-2 p-4 mx-auto rounded-md'>
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
                            <h2 className="font-bold text-2xl">Price : <span className='text-green-500'>{price} $</span></h2>
                        </div>
                        <div className='flex justify-between my-3'>
                            <p className="flex items-center gap-2 text-green-700 text-base font-medium">Location:{location}</p>
                            <p className="flex items-center gap-2 text-blue-700 text-base font-medium">Duration:{duration}</p>
                        </div>

                        <div>
                            <p className='text-sm font-bold'>{schedule}</p>
                            <p className='text-sm font-bold mt-2'>Enrollment Status : {enrollmentStatus}</p>
                        </div>
                        <button onClick={handleAddToCart} className="buttonProject3 w-full my-5">Enroll Now for add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoursesEnroll;