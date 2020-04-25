const express = require('express');
require('dotenv').config();

const jwt = require("express-jwt") // validates JWT and set req.user
const jwksRsa = require("jwks-rsa") // Retrieve TRSA keys from a JSON web key set endpoint

const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header
    // and the signing keys provided by the JWKS endpoint
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5, // prevent hackers from requesting more than 5 per min
        jwksUri: `https://${
            process.env.REACT_APP_AUTH0_DOMAIN 
        }/.well-known/jwks.json`
    }),

    // validate the audience and the issuer
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

    // this must match the algorithm selected in the Auth0 dashboard under your app's
    // advance settings under the 0Auth tab
    algorithms: ["RS256"]
})

const app = express();

app.get('/public', function(req, res) {
    res.json({
        message: "Hello from a public api"
    })
})

// the checkJwt assures that a valid jwt has been sent before allowing access
app.get('/private', checkJwt, function(req, res) {
    res.json({
        message: "Hello from a private api"
    })
})

app.listen(3001)

console.log("API server listening on " + process.env.REACT_APP_API_URL);