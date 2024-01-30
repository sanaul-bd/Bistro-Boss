
import SectionTitle from "../../../Components/Section_Title/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenuHook";


const PopulerMenu = () => {

    // ^ usege Custom Hooks for loading data. 
    const menu = useMenu()
    const popular = menu.filter(item => item.category === "popular")

    // ^ usege UseEffect for loading data. 
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             const populerItems = data.filter(item => item.category === "popular")
    //             setMenu(populerItems)
    //         })
    // }, [])

    return (
        <section className="py-5">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Populer Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex flex-col items-center my-3">
                <button className="btn btn-outline  border-orange-400 border-0 border-b-4">View Full Menu </button>
            </div>
        </section>
    );
};

export default PopulerMenu;