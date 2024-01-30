

const WhySection = ({ heading, paragraph }) => {
    return (
        <div className="my-6">
            <h1 className='text-xl font-bold'>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    );
};

export default WhySection;