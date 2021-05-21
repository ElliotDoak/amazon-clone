const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Ipc4yC0KHjr56dw01l2Rp4n9V8Alv39Zw42loPEKaMnLM9xIZ00dyySLWtrhGMG7TwMk8xZ3YKKKpIABKcK50PR00oeLfrjvE')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world')) 

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! For this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "gbp",
    });

    // This status number means it processed okay and payment was created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example Endpoint 
// http://localhost:5001/clone-b17c7/us-central1/api