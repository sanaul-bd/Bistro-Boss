

const MenuItem = ({ item }) => {
    const { image, price, recipe, name, } = item;
    return (
        <div className="flex space-x-2 my-1">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[100px] me-6" src={image} alt="image" />
            <div>
                <h3 className="uppercase mb-1">{name}  --------</h3>
                <p>{recipe}</p>
            </div>
            <p className="">${price}</p>
        </div>
    );
};

export default MenuItem;