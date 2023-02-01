/* eslint-disable prettier/prettier */
import express from 'express';

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = 'pk_test_51LVAOnA5eY7qzEyzi9wPgPhAh7nQKrR0vul1qp2RvHP1jsgwyoMlPze2jhosCQT9bAPcC35p0A3RaEbx1o5St6WO00LHYfB4UC';
const SECRET_KEY = 'sk_test_51LVAOnA5eY7qzEyzUY7YHTuGqQY5GNE5Szze4bMGJnpJ6lKl1grphVmFTtvzr3G5iWEx7TKnmnS6daqWyDVNRK0j00Qq6M6rdT';
import Stripe from 'stripe';

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: '2020-08-27' });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: 'usd',
      payment_method_types: ['card'], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
