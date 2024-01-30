import { Link } from "react-router-dom";



const AllCoursesCard = ({ item }) => {
    const { _id, name, instructor, description, thumbnail, duration, price } = item
    return (
        <div>
            <div className="card card-compact lg:w-[340px] bg-gradient-to-r from-blue-100 to-indigo-50 shadow-2xl mt-2">
                <figure><img className="w-full h-60" src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body flex-col lg:h-[260px]">
                    <div className="flex justify-between">
                        <div className="badge badge-warning badge-outline">{price}</div>
                        <div className="badge badge-accent badge-outline">Duration : {duration}</div>
                    </div>
                    <h2 className="font-bold text-lg">{name}</h2>
                    <div>
                        <p className="flex items-center gap-2">{description}</p>
                    </div>
                    <hr />
                    <div className="my-2">
                        <h1 className="text-base font-medium">Instructor : {instructor}</h1>
                    </div>
                    <Link to={`/coursesDetails/${_id}`}><button className="buttonProject3 w-full">More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllCoursesCard;