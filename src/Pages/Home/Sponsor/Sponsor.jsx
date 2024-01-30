import sponsor1 from '../../../assets/image/sponsor1.jpg'
import sponsor2 from '../../../assets/image/sponsor2.png'
import sponsor3 from '../../../assets/image/sponsor3.png'
import sponsor4 from '../../../assets/image/sponsor4.png'
import sponsor5 from '../../../assets/image/sponsor5.png'
import sponsor6 from '../../../assets/image/sponsor6.png'
import sponsor7 from '../../../assets/image/sponsor7.png'
import sponsor8 from '../../../assets/image/sponsor8.png'

import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div>
            <Marquee>
                <img className='w-36' src={sponsor1} alt="" />
                <img className='w-36' src={sponsor2} alt="" />
                <img className='w-36' src={sponsor3} alt="" />
                <img className='w-36' src={sponsor4} alt="" />
                <img className='w-36' src={sponsor5} alt="" />
                <img className='w-36' src={sponsor6} alt="" />
                <img className='w-36' src={sponsor7} alt="" />
                <img className='w-36' src={sponsor8} alt="" />
                <img className='w-36' src={sponsor6} alt="" />
                <img className='w-36' src={sponsor4} alt="" />
                <img className='w-36' src={sponsor5} alt="" />
            </Marquee>
        </div>
    );
};

export default Sponsor;