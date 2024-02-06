# Mongodb uses Example 
https://www.mongodb.com/docs/drivers/node/current/usage-examples/

# All Techonologis uses this project : 

* npm create vite@latest name-of-your-project -- --template react
* npm install react-router-dom localforage match-sorter sort-by

* Clinet Code: https://github.com/sanaul-bd/Bistro-Boss
<!-- ! ******************************************************************************** -->

# Tailwind Css
* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
* copy -content- replace "tailwind.config.css" & replace "index.css". 
* Clear index.css and main.css all doc. 

# Daysi Ui 
* npm i -D daisyui@latest
* copy plugin info & replace to "tailwind.config.js".
* [imp_Use_node:ture_at_.eslintrc.cjs_enverment]

# Awesome react Component
* npm install react-responsive-carousel --save
# Swiper
* npm install swiper

# React rating : for swing rating rate
*  npm i @smastrom/react-rating
* https://react-rating-buo7.onrender.com/

[paralx for using bg-fixed]

# React Helmet install & use . 
* npm i react-helmet || npm i react-helmet-async
    : use like react contextProvider . 
    : go to main.jsx > import "import { Helmet, HelmetProvider } from 'react-helmet-async';" > wrappde <HelmetProvider><RouterProvider></RouterProvider></HelmetProvider>.
    : Helmet Use for Dynamic Menu Title. 

# [paralx for using bg-fixed]
* npm i react-parallax
* react parallax use for fun annimantion , fixd cover with overlay, fun fun fun feture . 

# React Tabs > Tabtab
* npm install --save react-tabs

# React Simple Captha 
* npm install react-simple-captcha

# react stripe for national || international online payment - follow react_stripe | there git 
* npm install --save @stripe/react-stripe-js @stripe/stripe-js

# React hook form : used for collect data from any kind of form feild in a easy way. 
* npm install react-hook-form
*     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
* onSubmit={handleSubmit(onSubmit)} Add  it to form section. 
* use {...register("example")} as name={name} for dicated data from which feild. 
* এইভাবে করার পর আমরা খুব সহজে ডাটার একটা অবজেক্ট পেয়ে যাবো। এর জন্য প্রতিটাকে আলাদা করে ধরে ফাংশান করতে হবে না , প্রিভেন্ট ডিফল্ট করতে হবে না, খুব সহজেই ডাটা পেইয়ে যাবো। 
* 


1. Healmet 
2. Captcha 
3. Carusal 
4. React Rating 
5. paralax 
<!-- todo "https://github.com/brillout/awesome-react-components" ALL UNIQ COMPONENT COLLECT FROM HEARE -->

<!-- ^ Firebase info [ **INSTALL FIREBASE** ]-->
# npm install firebase
Email: devConfig.cu@gmail.com
Name: bistro-boss-restaurant-dbe5f;


<!-- ! ******************************************************************************** -->

[
    ::: Work for Firebase :::
    1. creat a auth provider and do all think releted it. <AuthContext.Provider value={authInfo}{children}</AuthContext.Provider>.
    2. export const AuthContext = createContext(null) & export default AuthProvider;
    3. useState for store user info & loading(true) info.
    4. set an observer for observe user still connect or not. 
            // set Auth Obsarver || call outside api for Manage User
            useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, currentUser => {
                    setUser(currentUser);
                    console.log("Current User", currentUser);
                    setLoading(false);
                });
                return () => {
                    return unSubscribe()
                }
            }, [])
    5. creat an authInfo and export it throgh <autcontext.provider value={authInfo}>
]




# 74-1 Install Project and techonologis
1. install and setup all kind of client side. (Client) 

# 74-2 Setup routes, layout and footer
1. Goto react router and set the router . (c)
2. Make a fil "Router.jsx" < mkdir Routes on src. (c) 
3. creat router , setUp Router , make all pages and set router (c)
4. <!--todo "className='max-w-screen-xl mx-auto" for max widh & fix screen size Main.jsx (c)>
5. Make footer and NavBar component and fillup. (c)
7. take a responsive nav bur and Customized it. 


# 74-3 Create simple Top Banner react responsive carousel
1. goto "Awesome react Component" > chose responsive react carosual > install > use . (c)
2. make import all baner photos 
3. আমরা NavMenu তা কে ব্যানারের উপর সেট করে দিতে চাই : <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 text-white bg-gray-700"> (C)


# 74-4 Use swiper JS to create a category Swiper
1. goto react awesome carusal and find react-swiper > "npm install swiper" (c)
2. "https://codesandbox.io/s/6gw7p4?file=/src/App.jsx:383-547" > study all doc and make it awesome slider. (c)
3. make swiper slider user friendly.


# 74-5 Shared section title for different sections
1. we make a Heading Dynamicly coz Design same Content Diff. (c)


# 74-6 Show Popular menu items in the home page
1. same with shered section heading. (C)
2. useEffect for getting data and print it, (c) 
3. import "menu.json" data then print it. (c)
4. use "flex" on parent div for align all items same center. menuItem.jsx (c)
5. use "grid md:grid-cols-2 gap-4" on perent div for dividing menu 2 cols for md:device. (c)

# 74-7 Featured items section
1. use "className="md:flex justify-center items-center" " for flex in medium device & x, y center. feture.jsx 13 (c)
2. if use md:flex thn use md:size, md:spcae, md:margin, md:padding ect. (c)


# 74-8 Create Parallax and Add Testimonials with react rating
1. "bg-fixd" ude for fixd bg for specific content || div. after scrolling the bg'll hide auto.   (c)
2. "bg-slate-500" tailwind div background color.  (c)
3. "bg-opacity-30" apply opacity on backgrond 30.  (c)
4. "npm i @smastrom/react-rating" for swing rating rate by react.  (c)
5. "flex flex-col items-center"
    a. flex = flex everything.
    b. flex-col = flex col way. উপরে নিচে কলাম আকারে সাজানো ।  (c)
    c. items-center = get center all items. (c)

# 74-9 Module Summary
1. there disscuss all summary which have learnd at 74.  (c)

<!-- ! next -->
# 75-1 Dynamic Page Title By Route Using React Helmet
1. Creat a  Dynamic Route. 
2. install "npm i react-helmet" and use.  (c)
3. : go to main.jsx > import "import { Helmet, HelmetProvider } from 'react-helmet-async';" > wrappde <HelmetProvider><RouterProvider></RouterProvider></HelmetProvider>. (c)
4. Helmet Use for Dynamic Menu Title.  (c)


# 75-2 Implement Cover With With Blur Parallax Using React Parallax
1. use Background Css Img on fram work [style={{ backgroundImage: `url("${img}")`}}] (c)
2. Max Width "<div className="max-w-md"></div>" in Tailwind.css (C) (vvi)
3. parallax use for awesome future fun. this is most needed for client side feture.
4. first install > import parallax > copy and pest component > make div inside the parallax. see the present doc || work cover.jsx (c)
5. 

# 75-3 Create Custom Hook Usemenu To Load Menu Data
1. Today we learn how to creat custom Hooks & their usesge Doc. 
2. 


# 75-4 Display different menu category items with cover
1. menu.jsx- make some category by using filter. make menu dynamciy. 
2. make all cover and soup, pizza, salad saperetly. 


# 75-5 Simple Food Order page with tabs
1. mk dir Order > mkdir oder > creat file order.jsx
2. creat a Order route. 
3. <!-- * careat tab > copy tabs from daysiui --> 
4. install react tabs "npm install --save react-tabs" > "https://github.com/reactjs/react-tabs"
5. tab list tab for "tab menu" > "tab panal" for content view. 

# 75-6 Display food items on different tabs
1. make dynamic and specific order system and tab. 
2. "grid md:grid-cols-3 gap-4" for making product grid. 
3. "absulute right-0 mr-4 mt-4" align price top right. "orderTab.jsx" (c)


# 75-7 Select right tab based on the category
1. const {any name } = useParams() - "know about page location name. (c)
2. make a index of tab name. > get current tab name by using "useParams" > initialIndex = categoriseslistWich we make and index of (category - page location name )
3. const initialIndex = categories.indexOf(category) (c)
4. set state initialindex. 
5. order.jsx (13-21 line )
6. Creat a Server for getting data from DB. install and requere all  config. 
7. 
    ***********************************
            const express = require('express')
            const app = express()
            const cors = require('cors')
            require('dotenv').config()
            const port = process.env.PORT || 5000;

            // middleWare 
            app.use(cors)
            app.use(express.json())

            // 
            app.get('/', (req, res) => {
                res.send("Restaurante Is runninG ")
            })

            app.listen(port, () => { 
                console.log(`Bistro boss is running port ${port}`);
            })
    ***********************************
8. git init then creat a git ignore file and make it complate. 
9. *( Follow the dotEnv Website ######------------########)
10. Creat a Db & Db user name & pass. [every user can access data on db but user name & id is uniq. remining creat db user a role must be givel - admin or read and write. ]
11. 
    "
        DB_USER_NAME=BistroDbuser
        DB_USER_PASS=nPp4usjotr9WdRqY
    "
12. copy collection config and pest to index.js in server file. - server 

# 75-8 Load menu data from server
1. "flex flex-xol items-center" for center button on foodCard . break internal css then apply. client 
2. or "justify-center" to button immidiate div. 
3. 


# 76-1 Module Introduction and simple login form [vvi]
1. W'll Make login || signin form Without NavBar .. lets try it.
2. 
    a. make a login component in login dir. 
    b. goto routes then set path "login", 
    c. goto navBar then set <a> || <link> then set for clicky menu.

3. use condition on "MAIN.jsx" . 
4. get location and check "const noHeaderFooter = location.pathname.includes('login')"; then apply else noHeaderFooter is true then didn't show Header & footer . main.jsx 
5. get login info and erese() all data from input feild. - login.jsx - client 
    
    1. Healmet 
    2. Captcha 
    3. Carusal 
    4. react Rating 
    5. paralax 
    <!-- todo "https://github.com/brillout/awesome-react-components" ALL UNIQ COMPONENT COLLECT FROM HEARE -->

# 76-2 Setup Recaptcha And Validate Captcha
1. goto react simple captha install "npm install react-simple-captcha";
2. see doc. import all think which is need. 
3. then collect captcha and apply confition if match captcha than button'll be enable or disable. 
4. <!-- * useRef(null)   : use for store onClick referance or value.   -->
5. 

# 76-3 Firebase Project Setup For Bistro Boss
1. go to "www.Console.firebase.google" then create a project for authentication function perpuse. 
2. Install firebase "npm install firebase" > create a project , name, ect . 
3. goto "Env Variables" then creat a .env.loacl file on root dir . make sure packege.json and .env.local as same dir.  <!--todo[ Env Variables : used for hide authentication config from github or dipployed site. ]-->

4. we handaling context from a stablize dir. we make a dir on src wjich name is Provider. 
5. 
    1. import { getAuth } from "firebase/auth";
    2. const auth = getAuth(app);
    <!-- * those line copy from // copy from www.console.firebase.google > doc > web > getStarted -->

# 76-4 Setup Login Page And Auth Context || Manage User or Set Auth Observer
1. set Obsarver ; 
        // set Auth Obsarver || call outside api for Manage User
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                console.log(currentUser);
                setLoading(false);
            });
            return () => {
                return unSubscribe()
            }
        }, []);

2. creat user, creat login, signup, nav& routes.
3. 


# 76-5 Explore React Hook Form Validation, Error Handling
1. 
    *     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    * onSubmit={handleSubmit(onSubmit)} Add  it to form section. 
    * use {...register("example")} as name={name} for dicated data from which feild. 
    * এইভাবে করার পর আমরা খুব সহজে ডাটার একটা অবজেক্ট পেয়ে যাবো। এর জন্য প্রতিটাকে আলাদা করে ধরে ফাংশান করতে হবে না , প্রিভেন্ট ডিফল্ট করতে হবে না, খুব সহজেই ডাটা পেইয়ে যাবো। 
    * 
2. এখানে ডাটা কালেক্ট করার পর কিভাবে ফর্ম রিসেট করতে হয় তা ডকুমেন্টস দেখে শিখতে হবে। 


# 76-6 Use Regex Validation In React Hook Form And Signup
1. আমরা এখান থেকে রেগুলার এক্সপ্রেশন সম্পর্কে জানলাম। আমরা চাইলে সব একত্রে দিতে পারি বা আলাদা আলাদা করে ও লিখতে পারি। 
    ^                         Start anchor || এংকর দিয়ে শুরু 
    (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters. || বড় হাতের বর্ণ দিয়ে শুরু 
    (?=.*[!@#$&*])            Ensure string has one special case letter. || স্পেশাল বর্ণ দিয়ে শুরু 
    (?=.*[0-9].*[0-9])        Ensure string has two digits. || কম করে হলেও ২ টা সংখ্যা লাগবে 
    (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters. || ৩ টা ছোট হাতের বর্ণ লাগবে 
    .{8}                      Ensure string is of length 8. || আটটা বর্ণ হতে হবে 
    $                         End anchor. || এংকর দিয়ে শেষ করতে হবে 
    ^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$  , চাইলে একেবারে ও লিখা যায় । 
2. 

# 76-7 Logout, Sweet Alert And Some Bug Fix.
1. react Auth Protected... secret route. How can go to Secret route repo: 
    react router > Example > git ink > auth > src > app.tsx > scrool down 
2. 

# 76-8 Private Route And Redirect User After Login
1. first we made a privet secret coponent. inport {user, loading } from authContext.
3. apply 2 condition if (user){<>spinner<>}. then if(user){return children}. get children as props. 
4. get: const location = useLocation(); we get current page location for ditacte where we r.
5. return <Navigate to='/login' state={{from: location}} replace></Navigate>
6. import: location = useLocation(), navigate = useNavigate().
7. find path location: if location available or redirect root directory to the app.  
    const from = location.state?.from?.pathname = '/'
8. redirect user to specific dir after login user || console.log(user)
    navigate(from, { replace: true })
* https://web.programming-hero.com/update-1/video/update-1-76-8-private-route-and-redirect-user-after-login


# 76-9 Module Summary And Update User Profile
1. https://i.ibb.co/3cZrWcF/IMG-8051.jpg
2. we build login, login profile name, update user profile info.
3. 

# 77-1 Module Introduction
1. add to cart related next viedo . 

# 77-2 API naming convention and API to save Cart
1. আমরা অর্ডার গুলো একটা নিউট্রল যায়গায় রাখবও যেখান থেকে পুরো এপ্লিকেশনে আমরা ডাটা গুলো ড্রিল করে প্রেরণ করতে পারি। অনেক টা রিডাক্সের মত আমরা একটা নিউট্রাল যায়গায় রাখবো । যেভাবে করতে পারিঃ 
    1.যে যে আইটেম এড করতে চাই সে আইটেমের আইডি লোকালস্টরে সেভ করে রেখে পরে যখন ডাটা লোড হবে তখন ls আইডির সাথে Datar id মিল করে শো করতে পারি। 
    2. context Api || Redux দিয়ে নিউট্রল যায়গায় রেখে কাজ করা। 
    3. Database > এখানে রাখলে কোথাও থেকে হারাবে না। 

2. we make a api for receiving from server side. that is cartCollection app.psot() - server 
3. then we make an api for the client side to hitt server request. 
    fetch(http://localhost:5000/carts).then().then()

4. 

# 77-3 Save Cart data to the server
1. https://web.programming-hero.com/update-1/video/update-1-77-3-save-cart-data-to-the-server
2. add location.. how to redirect locatin, routes, custom hook, react Query.
3. 

# 77-4 Simple Overview of React Query and load data
1. install tinstcuk || react query "npm i @tanstack/react-query" ;
2. tanstuck || reactQuery use on main.jsx file. -client 
3. use like AuthProvider || HelmetProvider . 
4. 
    import { useEffect, useState } from "react";

    const useMenu = () => {
        const [menu, setMenu] = useState([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            // fetch('menu.json')
            fetch('http://localhost:5000/menu')
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // const populerItems = data.filter(item => item.category === "popular")
                    setMenu(data)
                    setLoading(false)
                })
        }, [])
        return [menu, loading]
    }

    export default useMenu;


# 77-5 (Interesting) Show add to cart count on navbar : time 4.25min
1. tanstuck how to refetch and call from client and send response from server. 
2. // tenstack quary  : Email Query একদম হুবুহু হইতে হবে । 
    // http://localhost:5000/carts?email=sanaullah.bd21@gmail.com  || not Work
    // http://localhost:5000/carts?email=sanaullah.bd21@gmail.com  || work

# 77-6 Create Dashboard route and Dashboard navigation
1. we Make a Dashbord for manage system easily. copy a drowar component from daysiUI.
2. make a Layout component to layout > main > Dashbord.jsx.
3. make a dir "Dashbord" in "page" dir
<!--* 4. Remmember: main.jsx and Dashbord.jsx is similar layout Component.  -->
5. we setup Dashbord menu and icon. 
7. 

# 77-7 Cart data from custom hook and calculate total price
1. we used reduce function for adding sum. that have 2 perameter. sum & item. & initial value
    const total = cart.reduce((sum, item) => item.price + sum, 0)
2. 

# 77-8 Display cart items to review before order
1. for flex_justify_align-items
    "flex justify-between px-4 py-4 text-white rounded bg-slate-500 items-center"
2. customized all table , index, name, image all.
3. we make an api for delete myCart data request  to server. next we build client request to server.  


# 77-9 Delete cart item and sync data using refetch
1. impliment Delete function request from cient . mycart.jsx
2. we just fetch tne method: "DELETE" , then only refetch().. amazin tanstuck query. 


# 78-1 module Introduction and save user data
1. we make user data collection. creat fetch('') request from cleint and accept from server sent user info to db. signin.jsx -c & userCollection post api
2. 


# 78-2 Google Sign and when to save user info
1. we made Social login Heare after we made it. 
2. we impliment a socile login provider in AuthProvider.jsx thn call it from "socialLogin.jsx" 
3. 

# 78-3 Save User if he doesnt exists in the database
1. we made socile log in. then we customized it.
2. we build that fetch for request to post user info .
3. if(manually login) then check insertedId. else{socile login} no need to check insertedId then directly "Navigate" to the home page. 
4. creat a get api for user collection. 
5. 


# 78-4 Load all users on the Dashboard page
    https://tanstack.com/query/v5/docs/react/overview;
1.  // বাপ রে। এইটা একটু সময় লাগছে ভালোই। সমস্যা দেখলেই ডকুমেন্টস দেখে ফিক্স করে নাও । 
    // this is use for getting all data. 
    const { data: users = [], refetch } = useQuery({
        queryKey: [''], 
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
2. 


# 78-5 Display All users and Create Make admin API
1. we make a table for showing total user data on "allUser" page. we made 2 fn "delete, makeAdmin" and wrappd tham for cliccki. 
2. 


# 78-6 Make User Admin and install JWT
1.  Backend for update as admin any user. - index.jsx
        // pertial update || patch || make someone admin from existing user 
        app.patch('/users/admin/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    role: 'admin'
                },
            };
            const result = await usersCollection.updateOne(filter, updateDoc);
            res.send(result)
        })
2.  frontend, user update requset for bakend. - alluser.jsx 
        // 
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()  // refatch for recall and re arranged info.
                    Swal.fire({
                        title: "Success!",
                        text: "Admin Make Successfully",
                        icon: "success"
                    });
                }
            })

3. JTW: json web token. for secure personal info: 
    1. npm install jsonwebtoken : https://github.com/auth0/node-jsonwebtoken - bakend
    2. npm install jose : https://github.com/panva/jose
    3. npm install aws-jwt-verify : https://github.com/awslabs/aws-jwt-verify
    # in single line "npm i jsonwebtoken jose aws-jwt-verify" ;
4. 
5. 


# 78-7 (Recap) Create a JWT token and save it on client side
1. install "JWT" on server and requre. make a secret key and store it to .env file. 
2. make a route || api for getting request from client "app.post("/jwt', (req,res)=>{}) - server. 
3. make a fetch request on "AuthProvider" > userObserver when user is created. by Axios - client. 
4. if(currentuser) then we fetch with axios and get the secret key from server and we set it to localstore and when we logout set remove it from localstore.  
5. 


# 78-8 (Recap) Send JWT Token To Back End For Verification

# 78-9 (Optional)(Advanced) Axios Interceptor Using Chat Gpt
1. this is too tuff.. must see [78.7] [78.8] [78.9 is veri important]
2. 

# 78-10 Limit The Feature Based On Admin Level (this is so important )
1. more secure user info, check user securiy or check admin or not. if admin see admin section else user seen user info. dynamicly. 
2. 

# 78-11 (Super Advanced) Make User Api Secure And Verify Admin
1. 



# https://web.programming-hero.com/update-1/video/update-1-79-2-make-admin-only-link-secure-using-adminroute
1. Security step: 
    a. do not show the link to them who shouldn't see them. 
    b. only show that person /type of user who should see it. 
    c. if someone type url don't show the page. 

2. we have a AdminRoute as PrivetRoute. here in AdminRoute check user Admin or not. if user role === admin then user can access the "AddItem" route. ELSE we can through user to Home Page. 
3. 


# https://web.programming-hero.com/update-1/video/update-1-79-3-create-add-item-form-using-react-hook-form
1. we use REACT-HOOKS-FORM for getting data easily. we just skip form structure for better perfomance. 
2. we impliment all kind of input feild then we registerd all feild name for getting data. 
3. next()
4. 

# 79-4: design and get data. 

# https://web.programming-hero.com/update-1/video/update-1-79-5-upload-image-to-image-hosting-server-imgbb-and-get-image-url
1. FormData() - আমরা যখন রিয়েক্ট হুক ফর্ম ব্যাবহার করবো তখন সেখানে কোন ফাইল আপলোড করতে চাইলে সেটাকে ফর্মডাটা দিয়ে গ্র্যাব করতে  হবে । (((((8:00min)))))


# Upload a file or Photo by using imageBB Api. 
1. we make a new fromData then append it as "image", data.image[0].
2. then we make fatch and collect data by return fetch. there have so meny link like disp;ay image, delete image, experis time etc. next
3. 

# https://web.programming-hero.com/update-1/video/update-1-79-6-get-image-url-and-create-save-new-item-api
1. we make imageBB api for post image in imageBB server, then get res an object from imageBB with image details. image link, delete link etc. 
2. then we make a apis add a food information with image. we make a api for receive and send data to db. - client. additem.jsx 


# https://web.programming-hero.com/update-1/video/update-1-79-7-save-new-item-to-the-server-and-make-api-secure
1. we made it by using axios.post(). when we return that operation then we make a popup success with Sweet Alert 2.
2. 

# https://web.programming-hero.com/update-1/video/update-1-79-8-create-manage-items-admin-route-and-load-all-menu-items
1. Create Update items component and make update or delete item from heare . 
2.  

# https://web.programming-hero.com/update-1/video/update-1-79-9-delete-menu-item-with-verifyadmin-middleware
1. menu.map((item, index) =><component></component>); index use for showing serial number . 
2. আমরা ডিলেট বা যে কোন রিকোয়েষ্ট করবো ফ্রন্ট থেকে সেটা ব্যাকেন্ডে রিসিভ করে ডাটাবেজে দিতে হবে। আবার ডাটাবেজ থেকে আসলে সেটা ফ্রন্টেন্ডে পাঠালে ফেচ করে রিসিভ করে প্রিন্ট করতে হবে। এই হলো কনসেপ্ট। 
3. we first import axiosSecure method on requere component. 
4. then we axiosSecure.request[post, put, delet, patch] and get back .then(res.data)
5. axiosSecure secure is secure for axios interceptor. its amazinng. 
7. 

# Stripe start: 
<!-- todo: BATCH - 8 here: continue  -->

# 70-3 Create Stripe Account And Use Publishable Key: 70-2 Install Stripe, Stripe For React And Create Card Element
step: 1 - payment.jsx
1. goto react-stripe.js and isnatall stripe on client_side. 
2. make a <Payment> component page and require all kind of think: 
    a. const stripePromise = loadStripe(pk)
    b. get Elemetn from stripe and  send stripePromise as props. and wrapped <CheckOut> component by <Element> component.  

step: 2 - checkout.jsx
3. make a <CheckOut> then creat a function on <form onsubmit={handleSubmit}> then copy <CardElement> from stripe.js and 
4. requere Hooks from react-stripe.js
    a. const stripe = useStripe();
    b. const elements = useElements();

# 70-3 Create Stripe Account And Use Publishable Key: 70-3 Create Stripe Account And Use Publishable Key
step: 3 - checkout.jsx
5. goto stripe and creat a account for getting "pk" and pest it .env file with a name. then import it to stripePromise = loadStripe('pk')
6. // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });
7.  use it for getting error for solving. 
    if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
8. get some test card for testing stripe: search "stripetestcard"
    [4242424242424242, 4000056655665556, 5555555555554444, 2223003122003222, 5200828282828210];


# 70-4 Display Card Error And Create Server Side Payment Intents : https://web.programming-hero.com/update-1/video/update-1-70-4-display-card-error-and-create-server-side-payment-intents
step: 4 - checkout.jsx
9. goto stripe doc/quick start : install stripe on servr: npm i --save stripe; - server.js - 1
10. creat a peyment intent: by creating post method . 
    পেমেন্ট ইন্টেন্ট হচ্ছে অনেক গুলো কাজের ধাপ। এর মাধ্যমে ইউজার ভ্যালিড কিনা, টাকা আছে কিনা যাবতীয় তথ্য যাচাইয়ের মাধ্যমে স্ট্রাইপ ইউজার কে একটা সিকরেট কোড দিয়ে থাকে অথেন্টিকেশনের পর। 
11. app.post("/create-payment-intent") - Creat a api for Payment-intent - server. 
12. আমরা একটি এপিআই বানালাম যেটা দিয়ে আমরা ইউজার কে চ্যালেঞ্জ করে তার বৈধতা দেখে নিবো। তারপর আমরা বডি থেকে প্রাইস / ইনফো নিবো, এমাউন্ট কে পারসফ্লোট করে দিবো যাতে পয়সা হিসেব করা যায়। পেমেন্ট ইন্টেন্ট কল করবো , তাতে অব্জেক্ট দিবো, পেমেন্ট মেথড দিবো আর রেসপন্স দিবো পেমেন্ট ইন্টেন্ট থেকে আসা ক্লাইন্ট সিক্রেট কোড কে। - server - 1.
* call that api from clinetSide

# 70-5 Send Price And Get Client Secret From Stripe : https://web.programming-hero.com/update-1/video/update-1-70-5-send-price-and-get-client-secret-from-stripe 
Step: 5 - 
13. useAxiosSecure inside of useEffect for getting user data user exist or not. 
14. এখানে একটা সমস্যার জন্য আমি ১ দিন কাজ আগাতে পারিনি তা হলে .env টা প্রথমেই রিকোয়ার করে নিতে হবে নয়ত সেখান থেকে কিছু আগে এক্সেস করতে চাইলে তা এক্সেস করা যাবে না।
15. we use axiosSecure inside useEffect. then we pass a price object and get response.data.clientsecret.
16. then we console it and set it on state for store secret data. 
17. আমরা এখান থেকে প্রাইস দিয়ে একটা রিকোয়েষ্ট করলাম, ব্যাকেন্ড থেকে এইটা রিসিভ করে stripe এটাকে অথেণ্টিকেশন করে একটা কোড জেনারেট করে দিলো যা নিশ্চিত করে ইউজার টা ভ্যারিফাইড। আর পেমেন্ট করার জন্য প্রাথমিক কাজ টা সম্পন্ন হলো। payment-intent means পেমেন্ট করার জন্য উদ্যত হওয়া । 

# 70-6 Use Confirm Card Payment To Process Payment : https://web.programming-hero.com/update-1/video/update-1-70-6-use-confirm-card-payment-to-process-payment
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 

# 
1. 
2. 
3. 
4. 
5. 
7. 
8. 
9. 
10. 






























///////////////   IMPORTANT CLASS TO THE PROJECT   //////////////////
<!-- ! use "stanstuck" for state managment :: refatch, easy method for fetching || post request and store data in cookis. it't take data one time in a loading, while we need data it surve only. -->
<!-- ! use "Axios" for fetch more easyest , make header, intersept, . -->
<!-- ^ 78.9, 78.10, 78.11 ভালো করে দেখতে হবে ।  -->

1. # redirect after login || privet route. 
    * https://web.programming-hero.com/update-1/video/update-1-76-8-private-route-and-redirect-user-after-login

2. # add location.. how to redirect locatin, routes, custom hook, react Query. tinestack query
    * https://web.programming-hero.com/update-1/video/update-1-77-3-save-cart-data-to-the-server

3. # tanstuck Query: 
    * https://web.programming-hero.com/update-1/video/update-1-77-4-simple-overview-of-react-query-and-load-data

4. # tanstuck how to refetch and call from client and send response from server. 
    * https://web.programming-hero.com/update-1/video/update-1-77-5-interesting-show-add-to-cart-count-on-navbar
5. # 78-6 Make User Admin and install JWT (So important for update || patch || some , pertial data || user for request from client and accept from server then update by using tanstuck. )
    * https://web.programming-hero.com/update-1/video/update-1-78-6-make-user-admin-and-install-jwt
6. # 78-8 (Recap) Send JWT Token To Back End For Verification: 
    * This viedo about JWT creat, verify, send error or after verify send res.data.
7. # 78-9 (Optional)(Advanced) Axios Interceptor Using Chat Gpt (78.7, 8, 9 (vvvi...))
    * https://web.programming-hero.com/update-1/video/update-1-78-9-optional-advanced-axios-interceptor-using-chat-gpt
8. # Delete || Update items by veridy admin or not , middleware 
    * https://web.programming-hero.com/update-1/video/update-1-79-9-delete-menu-item-with-verifyadmin-middleware
9. # Upload image to imageBB server then fetch and print to the client 
    * https://web.programming-hero.com/update-1/video/update-1-79-9-delete-menu-item-with-verifyadmin-middleware

10. # Stripe Intrigate.
    # install & Creat Component and hooks from git: 
    * https://web.programming-hero.com/update-1/video/update-1-80-2-install-stripe-stripe-for-react-and-create-card-element

<!-- todo: BATCH - 8 -->
11. # 70-2 Install Stripe, Stripe For React And Create Card Element
    * https://web.programming-hero.com/update-1/video/update-1-70-2-install-stripe-stripe-for-react-and-create-card-element

12. # 70-3 Create Stripe Account And Use Publishable Key
    * https://web.programming-hero.com/update-1/video/update-1-70-3-create-stripe-account-and-use-publishable-key

13. # 70-4 Display Card Error And Create Server Side Payment Intents
    * https://web.programming-hero.com/update-1/video/update-1-70-4-display-card-error-and-create-server-side-payment-intents

   14. # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    # 
    * 

    
11. 

12. 

13. 

14. 

15. 

16. 

17. 

18. 

19. 

/////////////////////////////////////////////////////////////////////












1. if use md:flex thn use md:size, md:spcae, md:margin, md:padding ect. (c)
2. use "className="md:flex justify-center items-center" " for flex in medium device & x, y center. feture.jsx 13 (c)
3. "bg-fixd" ude for fixd bg for specific content || div. after scrolling the bg'll hide auto.  
4. "bg-slate-500" tailwind div background color. 
5. "bg-opacity-30" apply opacity on backgrond 30. 
6. flex = flex everything.
7. flex-col = flex col way. উপরে নিচে কলাম আকারে সাজানো । 
8. items-center = get center all items.


<!-- react query -->
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

return(
    <>
        <AuthProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
    </>
)
