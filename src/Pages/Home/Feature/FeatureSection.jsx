

const FeatureSection = ({ img, heading, paragraph }) => {
    return (
        <div className="flex justify-evenly items-center gap-4 border-2 border-green-300 bg-green-50 p-2 rounded-md">
            <div>
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
            <div>
                <h1 className='text-xl font-bold my-3'>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default FeatureSection;