import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, menuBg }) => {
    return (
        <div className="my-4">
            {title && <Cover img={menuBg} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-4 p-28">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center pb-3">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline mt-5 border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;