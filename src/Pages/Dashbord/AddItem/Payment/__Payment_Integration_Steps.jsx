
// [4242424242424242, 4000056655665556, 5555555555554444, 2223003122003222, 5200828282828210]
/*
step: 1 - viedo 70.1 - payment.jsx
1. goto react-stripe.js and isnatall stripe on client_side. 
2. make a <Payment> component page and require all kind of think: 
    a. const stripePromise = loadStripe(pk)
    b. get Elemetn from stripe and  send stripePromise as props. and wrapped <CheckOut> component by <Element> component.  

step : 2 - viedo 70.2 - checkout.jsx
3. make a <CheckOut> then creat a function on <form onsubmit={handleSubmit}> then copy <CardElement> from stripe.js and 
4. requere Hooks from react-stripe.js
    a. const stripe = useStripe();
    b. const elements = useElements();

step: 3 - viedo 70.3 - checkout.jsx
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
    [4242424242424242, 4000056655665556, 5555555555554444, 2223003122003222, 5200828282828210]
    we get response from stripe. res is result or error. we can showing the error by using state and store it to state. 

step: 4 - checkout.jsx
9. goto stripe doc/quick start : install stripe on servr: npm i --save stripe; - server.js - 1
10. creat a peyment intent: by creating post method . 
    পেমেন্ট ইন্টেন্ট হচ্ছে অনেক গুলো কাজের ধাপ। এর মাধ্যমে ইউজার ভ্যালিড কিনা, টাকা আছে কিনা যাবতীয় তথ্য যাচাইয়ের মাধ্যমে স্ট্রাইপ ইউজার কে একটা সিকরেট কোড দিয়ে থাকে অথেন্টিকেশনের পর। 
11. app.post("/create-payment-intent") - Creat a api for Payment-intent - server. 
12. আমরা একটি এপিআই বানালাম যেটা দিয়ে আমরা ইউজার কে চ্যালেঞ্জ করে তার বৈধতা দেখে নিবো। তারপর আমরা বডি থেকে প্রাইস / ইনফো নিবো, এমাউন্ট কে পারইন্ট করে দিবো যাতে পয়সা হিসেব করা যায়। পেমেন্ট ইন্টেন্ট কল করবো , তাতে অব্জেক্ট দিবো, পেমেন্ট মেথড দিবো আর রেসপন্স দিবো পেমেন্ট ইন্টেন্ট থেকে আসা ক্লাইন্ট সিক্রেট কোড কে। - server - 1.
* call that api from clinetSide

Step: 5 - 
13. useAxiosSecure inside of useEffect for getting user data user exist or not. 
14. এখানে একটা সমস্যার জন্য আমি ১ দিন কাজ আগাতে পারিনি তা হলে .env টা প্রথমেই রিকোয়ার করে নিতে হবে নয়ত সেখান থেকে কিছু আগে এক্সেস করতে চাইলে তা এক্সেস করা যাবে না।
15. we use axiosSecure inside useEffect. then we pass a price object and get response.data.clientsecret.
16. then we console it and set it on state for store secret data. 
17. আমরা এখান থেকে প্রাইস দিয়ে একটা রিকোয়েষ্ট করলাম, ব্যাকেন্ড থেকে এইটা রিসিভ করে stripe এটাকে অথেণ্টিকেশন করে একটা কোড জেনারেট করে দিলো যা নিশ্চিত করে ইউজার টা ভ্যারিফাইড। আর পেমেন্ট করার জন্য প্রাথমিক কাজ টা সম্পন্ন হলো। payment-intent means পেমেন্ট করার জন্য উদ্যত হওয়া । 
follow - payment - intent backend : 

step - 6
18. After Complate CreatPaymenMethod we get a 2 res ( paymetnMethod, error). log and set clientsecret to state.
19. then we creat ConfirmPaymentMethod then we get (paymentIntent, error) 
20. after creat confirmOayment successfully  we print swal("succes") - paymet.jsx

step : 7
31. আমরা একটা payment অবজেক্ট বানালাম তাতে পেমেন্ট জনিত সব ইনফো রেখে দিলাম।
32. axiosSecure করে আমরা এসব পেমেন্ট অব্জেক্ট ব্যাকেন্ডে পাঠিয়ে দিবো। আর রেস্পন্স হিসেবে প্রিন্ট করতে যেয়ে কার্ট / কার্ট আইটেম কয়টা তা মুছে দিবো। checkout.jsx
33. অন্যদিকে::: axiosSecure সেন্ড করা ডাটা রিসিভের জন্য app.post() API লিখবো। সেখানে বডি থেকে পেমেন্ট ইনফো পাওয়া যাবে। 
34. প্রথমে আমরা পেমেন্ট  কালেকশন ইনফো ডাটাবেসে পাঠিয়ে দিবো। 
35. তারপর যেগুলো পেমেন্ট করে পাঠালাম সেগুলো কার্ট থেকে ক্লেয়ার করার জন্য একটা কোয়ারি লিখবো , 
    const query = {
                // ~ এখানে পেমেন্ট অব্জেক্ট থেকে _cartIds.map() করে cardIds এক্সেস করার আইডি গুলো নিলাম। তারপর সেগুলো object করে রাখার জন্য একটা object{} বানালাম যেখানে নতুন একটা mdbr _id হলো। এবং এই টা দিয়ে এই অব্জেক্ট এ যে আইডি আছে সে সমস্ত cart আইডি যুক্ত আইটেম গুলো ডিলেট করে দিলাম। 
                // পেমেন্ট এর জন্য আলাদা কালেকশন হলো, তাতে অব্জেক্ট হিসেবে পেমেন্ট এর ইনফো ডাটাবেজে সেন্ড করে দিলাম। 
                // আবার এখানে কোয়ারি করে কার্ট থেকে সমস্ত আইটেম মুছে দিলাম কারণ পেমেন্ট হয়ে গেছে । 
                _id: {
                    $in: payment._cartIds.map(id => new ObjectId(id))
                }
            }
36. অতপর ডিলেট করে দেবো রিলেটেড সব কার্ট আইটেম ও res.send({paymentReslt, deletedResult}); দুইটা অবজেক্ট পাঠিয়ে দিবো ক্লাইন্টে। 

stepe: 8
37. we secure payment elementCard. and apply conditon for server error with zero price figure. 
38.  then we make a component for printing all payment list for user.
39. we make a "/payments/:email" for getting payment list and make call from frontend. 
39-1. after payment successfully we use useNavigation for navigate user to payment transaction page. 

step : 9
40. we make a payment transaction print component and show payment transaction.
41. we use "tasntack" for usestate and use "axiosSecure" inside tasntuck query.
42. 
43. 
44. 
45. 
46. 
47. 
48. 
49. 
50. 
    a. 
    b. 
    c. 
    d. 
    e. 

*/ 

// Class Name: 71-5 (Optional) High Level Overview Of Aggregate Pipeline
// class link: https://web.programming-hero.com/update-1/video/update-1-71-5-optional-high-level-overview-of-aggregate-pipeline

// class Name: 71-6 (Optional) Get Order Quantity And Revenue By Category
// class link: https://web.programming-hero.com/update-1/video/update-1-71-6-optional-get-order-quantity-and-revenue-by-category

/* 
    const payment = {
        _id: id, 
        email: email,
        price: price, 
        transaction_id: trID,
        date: new Date(),
        _cardIds: [id, id, id],
        menuItemsId: [id, id, id],
        status: "pending"
    }

    const result = await paymentColeection.aggregate([
        {
            $unwind: "$menuItemsId", // সব গুলো কে ... আলাদা করে ফেলা । 
        },
        {
            $lookup: { // লোকআপ মানে একটা কালেকনশনের সাথে অন্য কালেকশনের রিলেশন তৈরি করা । 
                from: "menu", // উপরের paymentCollection সাথে যার রিলেসশন হবে সে "menu" collection.
                localField: "menuItemsId", // menuItemsId এর আইডি গুলোকে 
                foreignField: "_id", // from এর menu কালেকশনের আইডির সাথে 
                as: "menuItems" // কাজ শেষে এই নামের একটা কালেকশন দিতে হবে 
            }
            # lookup মানে একটার সাথে অন্যটার কানেকশন করা । 
            # group মানে আলদা আলদা গ্রুপ তৈরী করা। 
            1. এখানে প্রথমে paymentCollection এ যাবে। 
            2. তারপর menuItemsId এর সব গুলাকে আলাদা করে ফেলবে। 
            3. lookup করবে মানে সম্পর্কের লজিক কে কার সাথে যুক্ত হচ্ছে। 
            4. paymentCollection এর সাথে from: "$menu" কালেকশনের কানেকশন করতে হবে । 
            5. localField মানে হলো আমরা যেগুলো কে $unwind: করলাম মানে খুলে দিলাম।
            6. foreignField: মানে হলো যে কালেকশনের সাথে মিল করতে চাচ্ছি। 
                ex: from: যার সাথে মিলাবো। 
                    local: যেখান থেকে নিয়ে মিলাবো। 
                    foreginField: যে এলিমেন্ট এর সাথে মিলাবো (_id, name, email etc) to from এর সাথে। 
                    as: যে নাম দিয়ে একসাথে রেসপন্স পাববো । 
        },
        {
            $unwind: "$menuItems" 
        },
        {
            $group: { // গ্রুপ করবো আলাদা আলাদা ক্যাটাগরি ও আলাদা আলাদ আইডি হিসেবে 
                _id: "$menuItems.category", // আইডি গুলো আলাদা করবো ক্যাটাগরি দিয়ে তুলনা করে 
                quantity: { $sum: 1}, একেক টা আইডির জন্য একটা করে যোগ করে কোয়ান্টিটি বের করবো 
                totalRevenue: { $sum: "menuItems.price"} এখান থেকে প্রাইস গুলো নিয়ে totalRe তে রাখবো। 
            }
        }
    ]).toArray();

todo. class link: https://web.programming-hero.com/update-1/video/update-1-71-6-optional-get-order-quantity-and-revenue-by-category
related viedo : https://www.youtube.com/watch?v=fNQY8KKRx2I

1. $unwind করলে একটা _id: তে অনেক গুলো menuId থাকে, সেগুলো কে ওই একটা _id: রেখেই আলাদা করে একটা একটা menuId করে দেয়। মানে একসাথে এরে তে না রেখে আলদা আলদা করে খোলা ছেড়ে দেয়। 

         * Using Aggregate pipeline
        app.get('/order-stats', async (req, res) => {
            const result = await paymentCollection.aggregate([
                {
                    $unwind: "$menuItemIds" // এক আইডি দিয়ে menuId গুলোকে আলাদা আলাদা করে দিবে।  
                },
                {
                    $lookup: {
                        from: "menu", // menu'র সাথে মিলাবো , খুজে দেখবো 
                        localField: "menuItemIds", // এইখানের আইডি গুলাকে মিলাবো 
                        foreginfield: "_id", // "menu" collecion এর _id র সাথে মিলাবো 
                        as: "menuItems", // যে নামে রিটার্ন চাচ্ছি 
                        paymentCollection er "menuItemIds" gulake unwind korbo. "menu: menuCollection er foreginField: menu._id" sathe tulona kore as: menuitems নামে রিটার্ন নিবো । 
                    }
                }
            ]).toArray();


            res.send(result);
        })
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 


*/ 














// todo: Bug fix 71-2 Fix Login Issue And API Race Condition : https://web.programming-hero.com/update-1/video/update-1-71-2-fix-login-issue-and-api-race-condition