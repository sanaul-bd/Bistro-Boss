

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
12. আমরা একটি এপিআই বানালাম যেটা দিয়ে আমরা ইউজার কে চ্যালেঞ্জ করে তার বৈধতা দেখে নিবো। তারপর আমরা বডি থেকে প্রাইস / ইনফো নিবো, এমাউন্ট কে পারসফ্লোট করে দিবো যাতে পয়সা হিসেব করা যায়। পেমেন্ট ইন্টেন্ট কল করবো , তাতে অব্জেক্ট দিবো, পেমেন্ট মেথড দিবো আর রেসপন্স দিবো পেমেন্ট ইন্টেন্ট থেকে আসা ক্লাইন্ট সিক্রেট কোড কে। - server - 1.
* call that api from clinetSide

Step: 5 - 
13. useAxiosSecure inside of useEffect for getting user data user exist or not. 
14. এখানে একটা সমস্যার জন্য আমি ১ দিন কাজ আগাতে পারিনি তা হলে .env টা প্রথমেই রিকোয়ার করে নিতে হবে নয়ত সেখান থেকে কিছু আগে এক্সেস করতে চাইলে তা এক্সেস করা যাবে না।
15. we use axiosSecure inside useEffect. then we pass a price object and get response.data.clientsecret.
16. then we console it and set it on state for store secret data. 
17. আমরা এখান থেকে প্রাইস দিয়ে একটা রিকোয়েষ্ট করলাম, ব্যাকেন্ড থেকে এইটা রিসিভ করে stripe এটাকে অথেণ্টিকেশন করে একটা কোড জেনারেট করে দিলো যা নিশ্চিত করে ইউজার টা ভ্যারিফাইড। আর পেমেন্ট করার জন্য প্রাথমিক কাজ টা সম্পন্ন হলো। payment-intent means পেমেন্ট করার জন্য উদ্যত হওয়া । 
follow - payment - intent backend : 

step- 6
18. 
19. 
20. 
    a. 
    b. 
    c. 
    d. 
    e. 

*/ 
















/* 
PAYMENT INTGREATION STEPS:

1. install sripe and react stripe js. - npm install --save @stripe/react-stripe-js @stripe/stripe-js
2. creat a checkout from with card element (card element contains: card element, expiration date, cvs, zip code )
3. creat account on stripe and get the pk || publishable key
4. create a function and apply some condition for secure this operation .   
5. use test card for updating perfomance and print error if finding any kind of error. 
6. 
7. 
8. 
9. 
10. 
*/ 
/* 
PAYMENT INTGREATION STEPS:

1. *
2. *
3. *
4. *
5. *
6. install stripe backend : - npm install --save stripe
7. creat paymentIntent api with paymentMethod types
8. 
9. 
10. 
*/ 

// Secret_Key=sk_test_51OeYPIEp3bUWfzDZyDKyKCCLodM1FdVOZSBzShxGnYJe2KL5TwbIElRcXS9ThjTprmKPDRIZqVG1T2f2HH3sFeTJ00R8QgoF6F
// publishable_key=pk_test_51OeYPIEp3bUWfzDZ7QWnvjD3wmhwqwnGEhqmb3Wrjg8vUdkE2HHe4JUHuWTgNjCycXne5jM8Bmr3zxTv8U273Svw00mT3jZKeL
