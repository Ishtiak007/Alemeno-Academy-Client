import { Typewriter } from "react-simple-typewriter";
import bannerImg from '../../../assets/image/bannerImg.png'
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img src={bannerImg} className="lg:max-w-sm mx-auto" />
                </div>
                <div className="flex-1 lg:w-[1000px] w-full">
                    <h1 className="lg:text-4xl text-lg font-bold">Navigate the Future with <span className="text-green-400">Online Learning</span></h1>
                    <div className="lg:h-[170px] h-[260px] mt-10">
                        <p className='lg:text-xl' style={{ margin: 'auto 0' }}>
                            <span>
                                <Typewriter
                                    words={['Our main aim for Alemeno Academy Empowering Learning Through Technology is to make learning easier and more fun. We want everyone, from students to professionals, to have access to great education using our online platform.']}
                                    loop={true}
                                    onLoopDone={1}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                    </div>
                    <Link to='/register'><button className="bg-green-500 rounded-2xl px-5 py-2 text-white font-bold mt-4">Get Started</button></Link>
                    <button className="bg-white border-[1px] border-green-500 rounded-2xl px-5 py-2 text-gray-500 font-bold lg:mx-5 mt-4">View Courses</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;