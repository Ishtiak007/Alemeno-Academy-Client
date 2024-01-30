

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8 ">
            <h3 className=" text-3xl uppercase font-bold py-2">{heading}</h3>
            <p className="text-yellow-700 text-lg font-bold mb-3">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;