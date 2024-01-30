

const StatisticsCard = ({ img, heading, pragraph }) => {
    return (
        <div className="flex justify-evenly items-center gap-4 border-2 border-green-200 bg-white p-2 rounded-md">
            <div>
                <figure><img className="w-20" src={img} alt="Shoes" /></figure>
            </div>
            <div>
                <h1 className='text-xl font-bold my-3'>{heading}</h1>
                <p className="font-bold text-2xl text-blue-800">{pragraph}</p>
            </div>
        </div>
    );
};

export default StatisticsCard;