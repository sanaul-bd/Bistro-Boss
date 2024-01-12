import FoodCard from "./FoodCard";


const OrderTab = ({ items }) => {
    console.log("IIIIIIIIIII", items);
    return (
        <div className='grid md:grid-cols-3 gap-3 ms-16'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;