

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















// todo: Bug fix 71-2 Fix Login Issue And API Race Condition : https://web.programming-hero.com/update-1/video/update-1-71-2-fix-login-issue-and-api-race-condition