import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

// menu bg img 

import useMenu from '../../../Hooks/UseMenuHook';
import SectionTitle from '../../../Components/Section_Title/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

// bg img import 
import menuBg from '../../../assets/menu/menuBg/banner3.jpg'
import desserdBg from '../../../assets/menu/menuBg/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/menuBg/pizza-bg.jpg'
import saladBg from '../../../assets/menu/menuBg/salad-bg.jpg'
import soupBg from '../../../assets/menu/menuBg/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    // console.log("D", pizza);



    return (
        <div className="">
            <Helmet> <title>Bistro Boss || Menu</title> </Helmet>

            {/* 1 : Offered  */}
            <Cover img={menuBg} title="Our Menu" ></Cover>
            <SectionTitle subHeading="don't miss" heading="Today's offer"></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>

            {/* 2 : Dessert   */}
            <MenuCategory items={desserts} title="Dessert" menuBg={desserdBg}></MenuCategory>

            {/* 3 : Sup  */}
            <MenuCategory items={soup} title="Soup" menuBg={soupBg}></MenuCategory>

            {/* 4 : Salad  */}
            <MenuCategory items={salad} title="Salad" menuBg={saladBg}></MenuCategory>

            {/* 5 : pizza  */}
            <MenuCategory items={pizza} title="Pizza" menuBg={pizzaBg}></MenuCategory>
        </div>
    );
};

export default Menu;