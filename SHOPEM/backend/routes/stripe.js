const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

// stripe payment Routes
router.post('/create-checkout-session', async (req, res) => {
    const {total} = req.body;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Dress',
            },
            unit_amount: total * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://shopem.onrender.com/success',
      cancel_url: 'https://shopem.onrender.com/cancel',
    });
  
    res.redirect(303, session.url);
  });

module.exports = router;
