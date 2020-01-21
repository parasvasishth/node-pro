const express = require('express')
const app = express()
const port = 3000

var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "jtpyd4gbf9mt2cb6",
  publicKey: "hknrvmz9f9nfvr7c",
  privateKey: "8bf9745b2df333a9c67f3e813de01d7b"
});

// gateway.clientToken.generate({
//     // customerId: 
//   }, function (err, response) {
//     var clientToken = response.clientToken
//   });


  app.get("/", function (req, res) {
    gateway.clientToken.generate({}, function (err, response) {
      res.send(response.clientToken);
    });
  });
app.listen(port, () => console.log(`Example app listening on port port!`))