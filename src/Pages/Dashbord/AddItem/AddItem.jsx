import SectionTitle from "../../../Components/Section_Title/SectionTitle";
import { useForm } from "react-hook-form"

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const AddItem = () => {

    // * এখানে রিয়েক্ট hook from use করা হয়েছে। আমরা তা ইমপোর্টের মাধ্যমে ব্যাবহার করবো ও স্টেট এ স্টোর করবো। আবার তা ছোট ফাংশানের মাধ্যমে ও ডাটা গুলো পেয়ে যাবো। ডাটা ও এরোর প্রিন্ট করবো। 

    // collect data by using react hook form it's so easy and usefull. 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imageResponse => {
            if(imageResponse.success){
                const imageURL = imageResponse.data.display_url;
                console.log(imageURL);
                const {name, category, price, recipe} = data;
                const newItem = {name, category, price: parseFloat(price), recipe, image:imageURL}
                console.log(newItem);
            }
            console.log(imageResponse);
        })
        // console.log(formData);
        // console.log(data)
    };
    console.log(errors);
    console.log(image_hosting_token);


    return (
        <div className="w-full px-16">
            <SectionTitle subHeading="What's a new" heading="Add an Item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Recipe Name */}
                <div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Recipe Name * </span>
                        </div>
                        <input type="text" placeholder="Recipe Name"
                            {...register('name', { required: true, maxLength: 80 })}
                            className="input input-bordered w-full " />
                    </label>
                </div>
                <div className="flex gap-3">
                    {/* Category : Dropdown  */}
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Category *</span>
                            </div>
                            <select defaultValue="Pick One" className="select select-bordered"
                                {...register('category', { required: true })}
                            >
                                <option disabled>Pick One</option>
                                <option>Pizza</option>
                                <option>Sup</option>
                                <option>Salad</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </label>
                    </div>
                    {/* Price */}
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Price * </span>
                            </div>
                            <input type="number"
                                {...register('price', { required: true })}
                                placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* detail about Food */}
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">Recipe Detiles  *</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24"
                            {...register('recipe', { required: true, maxLength: 200 })}
                            placeholder="Write somthing About Food"></textarea>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    {/* File input  */}
                    <div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Item Image *</span>
                            </div>
                            <input type="file"
                                {...register('image', { required: true })}
                                className="file-input file-input-bordered w-full " />
                        </label>
                    </div>
                    <input type="submit" className="btn-success btn-md rounded-md w-40 text-black font-semibold mt-8" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;