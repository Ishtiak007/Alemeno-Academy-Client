import AllCoursesCard from "./AllCoursesCard";


const AllCoursesTab = ({ coursesName }) => {
    return (
        <div>
            <div className="flex justify-center my-7">
                <div className="lg:flex gap-10">
                    {
                        coursesName.map(courseItem => <AllCoursesCard key={courseItem._id} item={courseItem}></AllCoursesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCoursesTab;