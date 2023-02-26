const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

// router.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/Success',
//     cancel_url: 'http://localhost:3000/Cancel',
//   });

//   res.redirect(303, session.url) 
// });

module.exports = router;
