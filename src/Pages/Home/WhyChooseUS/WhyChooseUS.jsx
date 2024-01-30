import whyImg from '../../../assets/image/why2.png'
import WhySection from './WhySection';

import img1 from '../../../assets/image/choose1.png'
import img2 from '../../../assets/image/choose2.png'
import img3 from '../../../assets/image/choose3.png'
import img4 from '../../../assets/image/choose4.png'
import StatisticsCard from './StatisticsCard';

const WhyChooseUS = () => {
    return (
        <div className='my-10 bg-gradient-to-r from-violet-50 to-fuchsia-50 p-3'>
            <div className="my-6">
                <h1 className="text-2xl font-bold text-center my-2">What sets us apart?</h1>
                <p className='text-center text-sm'>Transforming futures through a single click. <br /> Uncover excellence through tailored learning, skilled educators, and seamless technology. Join us in reshaping the future of education.</p>
            </div>
            <div className='lg:flex justify-evenly items-center my-5'>
                <div className='flex-1'>
                    <img className='w-[260px] mx-auto border-b-2 border-black' src={whyImg} alt="" />
                </div>

                <div className='flex-1'>
                    <WhySection heading='Gnite Inquisitiveness' paragraph='Explore our platform fostering curiosity, enriching your learning journey. Our courses aim to nurture critical thinking and unleash creativity.'></WhySection>
                    <WhySection heading='Learn from Pioneers' paragraph='Absorb wisdom from seasoned educators, masters in their domains. Immerse yourself in interactive lessons, hands-on projects, and collaborative learning with peers.'></WhySection>
                    <WhySection heading='Craft Your Destiny' paragraph='Embark on a journey through diverse subjects technology, business, arts, and sciences. Discover your fervor and carve the path to your future.'></WhySection>
                </div>
            </div>


            <div className='lg:flex justify-evenly'>
                <StatisticsCard img={img4} heading={'Total Contents'} pragraph={'345'}></StatisticsCard>
                <StatisticsCard img={img2} heading={'Total Instructors'} pragraph={'56'}></StatisticsCard>
                <StatisticsCard img={img3} heading={'Approved Courses'} pragraph={'71'}></StatisticsCard>
                <StatisticsCard img={img1} heading={'Enrolled Students'} pragraph={'549'}></StatisticsCard>
            </div>
        </div>
    );
};

export default WhyChooseUS;