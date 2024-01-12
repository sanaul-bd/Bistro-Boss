
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../src/assets/home/Banner/01.jpg'
import img2 from '../../../src/assets/home/Banner/02.jpg'
import img3 from '../../../src/assets/home/Banner/03.png'
import img4 from '../../../src/assets/home/Banner/04.jpg'
import img5 from '../../../src/assets/home/Banner/05.png'
import img6 from '../../../src/assets/home/Banner/06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt="Banner-1" />
            </div>
            <div>
                <img src={img2} alt="Banner-2" />
            </div>
            <div>
                <img src={img2} alt="Banner-2" />
            </div>
            <div>
                <img src={img4} alt="Banner-4" />
            </div>
            <div>
                <img src={img5} alt="Banner-5" />
            </div>
            <div>
                <img src={img6} alt="Banner-6" />
            </div>
        </Carousel>
    );
};

export default Banner;