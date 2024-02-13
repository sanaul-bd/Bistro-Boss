import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    // refetch use for fetch after add cart items on mongoDb for updating current value.
    const [, refetch] = useCart()  // সেভাবেই ইন্ডেক্স অনুযায়ী import করতে হবে যেভাবে export করা হয়। 

    // food card handler 
    const handleAddToCart = (item) => {
        console.log("Add_To_Cart", item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, recipe, email: user.email }
            // console.log("logged from cart items ",cartItem);
            fetch("https://server-bistro-boss-ten.vercel.app/carts", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()   // refetch use for fetch after add cart items on mongoDb for updating current value.
                        Swal.fire({
                            // position: "top-end",
                            icon: "success",
                            title: "Data Added Success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Plese Login to Order the food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
                else {
                    alert('You chose bad way')
                }
            });
        }
    }

    return (
        <div className="card w-80 bg-base-100 shadow-2xl">
            <div className="p-1 mt-2">
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-1 px-4">${price}</p>
            <div className="card-body p-3">
                <h2 className='card-title'>{name}</h2>
                <p className="text-justify">{recipe}</p>
                <div className="card-actions justify-center mt-3">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline  border-orange-400 border-0 border-b-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;