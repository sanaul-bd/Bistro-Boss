import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

/*
^ Document for Creat a custom Hooks and Uses. 
* creat a fn. 
* creat state [menu, setMenu] = for store data. 
* creat state [loading, setLoading] = for print loading in client. loading defult(true).
* then get data as use useEffect > store by state. 
* Export the Hooks || useMenu function for useing another Components.
*/ 

const useMenu = () => {
    // ! type one using useState manual way
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     // fetch('menu.json')
    //     fetch('https://server-bistro-boss-ten.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("Loogeeed from useMenu __Hook", data);
    //             // const populerItems = data.filter(item => item.category === "popular")
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu, loading]

    // ! type 2 use tanstuck || query fn -- it's so easy
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://server-bistro-boss-ten.vercel.app/menu');
            return res.json()
        }
    })

    return [menu, loading, refetch]
}

export default useMenu;
