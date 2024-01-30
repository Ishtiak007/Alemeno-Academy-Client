import img1 from '../../../assets/image/Feature1.png'
import img2 from '../../../assets/image/Feature2.png'
import img3 from '../../../assets/image/Feature3.png'
import FeatureSection from './FeatureSection';

const Feature = () => {
    return (
        <div className="lg:flex my-10 gap-5 p-2">
            <FeatureSection img={img1} heading={'Accelerate Learning'} paragraph={'Embracing Rapid Learning Strategies from Industry Professionals'}></FeatureSection>
            <FeatureSection img={img2} heading={'Community-driven Platform'} paragraph={'A global open-source learning platform propelling your career forward.'}></FeatureSection>
            <FeatureSection img={img3} heading={'Optimal Productivity'} paragraph={'The course offers the opportunity to attain peak efficiency through the learning process.'}></FeatureSection>
        </div>
    );
};

export default Feature;