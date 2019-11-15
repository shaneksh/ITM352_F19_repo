/*
Author: Shane Shimizu
File Description: server processing
*/
//Source from Lab 13 and Professor Daniel Port's office hours
var express = require('express'); //gets express package
var app = express(); //starts express
var myParser = require("body-parser"); //requires body parser to form data 
var products = require ("./public/products.js"); //assigns the product data from the json array into the variable products
const querystring = require('querystring'); //requires the querystring of the form.  gives utilities to parse and formate the querystring

//source from Lab 13
//logs the method and path into the console
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

//source from Lab 13
app.use(myParser.urlencoded({ extended: true }));

//source from Lab 13
//posts the process form data with the action as process_form
app.post("/process_form", function (request, response) {
    let POST = request.body;
    var hasValidQuantities = true; //assume that the quantities textbox is true
    var hasPurchases = false; //assume the quantity of purchases are false
    for (i = 0; i < products.length; i++) { //for loop for each product in the array that increases the count by 1
        q = POST ['quantity' +i]; //quantity entered by the user for a product(s) is assigned into q
        if (isNonNegInt(q) == false){ //if the quantity enteredby the user is not a valid integer
            hasValidQuantities = false; //HasValidQuantities is false or nothing was purchased
        }
        if (q>0) { //if the quantity entered is more than 0
            hasPurchases = true; //hasPurchases is true and the user has entered a valid integer(s) to purchase something
        }
    }
    //source from Professor Ports office hours
    //if data is valid give user an invoice, if not give them an error
     qString = querystring.stringify (POST); //string query together
     if (hasValidQuantities == true && hasPurchases == true) {//if hasValidQuantities and hasPurchases is true
       
        response.redirect ("./invoice.html?" + qString ); //if the quantity is valid, user is directed to invoice along with the query data from the form
    }
    else {
        response.redirect ("./store.html?" + qString); //if quantity is not valid, user is sent back to product page along with the query data entered previously from the user
    }

});

app.use(express.static('./public')); //retrieves get request and look for file in public directory
app.listen(8080, () => console.log(`listening on port 8080`)); //the server listens on port 8080 and prints the message into the console

//copied from order_page Lab 13
//function that returns errors
function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (q== '') {q=0}; //if quantity or 0
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0); //return errors if there are errors 

}

