import FAQsectionImage from '../../../assets/image/FAQsectionImage-removebg-preview.png'

const FAQsection = () => {
    return (
        <div className='my-16 bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4'>
            <h1 className='text-center font-bold text-2xl'>Frequently Asked Questions </h1>
            <p className='my-3 text-center'>Most common questions asked by students and instructors</p>
            <div className='lg:flex justify-evenly items-center'>
                <div className='lg:w-2/3'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-lg font-medium">
                                What is Alemeno Academy?
                            </div>
                            <div className="collapse-content">
                                <p>Alemeno Academy is an online learning platform that provides a diverse range of courses across various subjects. It offers a flexible and accessible way for individuals to enhance their skills and knowledge.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg font-medium">
                                How do I enroll in a course on Alemeno Academy?
                            </div>
                            <div className="collapse-content">
                                <p>To enroll in a course on Alemeno Academy, you can create an account on their platform, browse the available courses, and follow the enrollment instructions provided for each specific course.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg font-medium">
                                What types of courses are offered on Alemeno Academy?
                            </div>
                            <div className="collapse-content">
                                <p>Alemeno Academy offers a wide array of courses, including but not limited to business, technology, arts, and personal development. The platform aims to cater to a diverse range of interests and learning goals.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg font-medium">
                                Is Alemeno Academy accredited?
                            </div>
                            <div className="collapse-content">
                                <p>Alemeno Academys accreditation status may vary depending on the courses and the institutions or instructors providing them. Its recommended to check the accreditation details provided for each course.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-lg font-medium">
                                Are certificates offered upon completing courses on Alemeno Academy?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, Alemeno Academy typically provides certificates of completion for courses. The certificates can be a valuable recognition of the skills and knowledge gained through the learning experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='w-[300px]' src={FAQsectionImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQsection;