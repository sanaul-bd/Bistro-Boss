
// order Cover
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../Hooks/UseMenuHook';
import OrderTab from '../../../Components/Section_Title/FoodCard/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    // make category index for getting that tab which is client clicked 
    const categories = ["Pizza", "Salad", "Soup", "Dessert", "offered"];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    console.log("Category list >> ", category, categories);

    const [tabindex, setTabIndex] = useState(initialIndex)

    // get data by calling custom hooks & filter all menu data for print . 
    const [menu] = useMenu()
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const desserts = menu.filter(item => item.category === "dessert")
    const offered = menu.filter(item => item.category === "offered" || item.category === "offer")



    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Form Heare "></Cover>
            <Tabs className='text-center my-4'
                defaultIndex={tabindex}
                onSelect={(index) => setTabIndex(index)}
            >

                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>offered</Tab>
                </TabList>

                {/* Pizza */}
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                {/* Salad */}
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                {/* Soup */}
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>

                {/* Dessert */}
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>

                {/* offer */}
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;