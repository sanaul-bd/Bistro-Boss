import { Helmet } from "react-helmet";
import Banner from "../../Banner/Banner";
import Category from "../Category/category";
import Fetured from "../Fetured/Fetured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            {/* <p>This is Home</p> */}
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;