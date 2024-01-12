import SectionTitle from "../../../Components/Section_Title/SectionTitle";
import './FeturedItem.css'
import Feturedimg from '../../../assets/home/Fetured/featured.jpg'


const Fetured = () => {
    return (
        <div className="feturedItem text-white bg-fixed mt-16">
            <div className=" bg-slate-500 bg-opacity-25 pt-3">
                <SectionTitle
                    subHeading={"Check it Out"}
                    heading={"Fetured Item"}
                ></SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36  ">
                    <div className="left-div">
                        <img src={Feturedimg} alt="Fetured Image " />
                    </div>
                    <div className="right-div md:ml-16">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase my-4">Where can i get some? </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quos veniam fugit quis, natus totam minima culpa at id vitae corporis laboriosam qui, officia architecto doloribus provident? Aspernatur praesentium minus amet illum ipsa laboriosam magni. Nam deleniti porro laboriosam inventore. Possimus cumque ut consectetur voluptate debitis necessitatibus quos. Quis.</p>
                        <button className="btn btn-outline mt-5 border-0 border-b-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetured;