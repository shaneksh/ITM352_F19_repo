/*
Author: Shane Shimizu
File Description: server processing
*/
//Source from Lab 13 and Professor Daniel Port's office hours
var express = require('express'); //gets express package
var app = express(); //starts express
var myParser = require("body-parser"); //requires body parser to form data 
var products = require("./public/products.js"); //assigns the product data from the json array into the variable products
const querystring = require('querystring'); //requires the querystring of the form.  gives utilities to parse and formate the querystring
//
app.use(myParser.urlencoded({ extended: true }));
fs = require('fs');
var filename = 'user_data.json';

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
        q = POST['quantity' + i]; //quantity entered by the user for a product(s) is assigned into q
        if (isNonNegInt(q) == false) { //if the quantity enteredby the user is not a valid integer
            hasValidQuantities = false; //HasValidQuantities is false or nothing was purchased
        }
        if (q > 0) { //if the quantity entered is more than 0
            hasPurchases = true; //hasPurchases is true and the user has entered a valid integer(s) to purchase something
        }
    }
    //source from Professor Ports office hours
    //if data is valid give user an invoice, if not give them an error
    var qString = querystring.stringify(POST); //string query together
    if (hasValidQuantities == true && hasPurchases == true) {//if hasValidQuantities and hasPurchases is true
        response.redirect('login.html?' + qString);
    }
    else {

        response.redirect("./store.html?" + qString); //if quantity is not valid, user is sent back to product page along with the query data entered previously from the user
    }

});


app.use(express.static('./public')); //retrieves get request and look for file in public directory
app.listen(8080, () => console.log(`listening on port 8080`)); //the server listens on port 8080 and prints the message into the console

//copied from order_page Lab 13
//function that returns errors
function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (q == '') { q = 0 }; //if quantity or 0
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0); //return errors if there are errors 

}

//
//check to see if the file exists. if it does, read it and parse it. if not output a message
if (fs.existsSync(filename)) {

    //returns contents of the path
    data = fs.readFileSync(filename, 'utf-8');

    stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats.size + ' characters'); //console logs the filename with the amount of characters it has


    users_reg_data = JSON.parse(data);//parses the data into JSON format
    /*
    username = 'newuser';
    users_reg_data[username] = {}; //new user becomes new property of users_reg_data object
    users_reg_data[username].password = 'newpass';
    users_reg_data[username].email = 'newuser@user.com';

    fs.writeFileSync(filename, JSON.stringify(users_reg_data));
    */

    console.log(users_reg_data); //console logs

} else {
    console.log(filename + ' does not exist');
}


//gets called with data from the form
app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    var qString = querystring.stringify(request.query);
    inputUser = request.body.username;
    inputPass = request.body.password;
    the_username = request.body.username.toLowerCase(); //give me username from object and assigning it
   
    if (typeof users_reg_data[the_username] != 'undefined') { //ask object if it has property called username, if it does, it wont be udefined. check to see if it exists
        if (users_reg_data[the_username].password == request.body.password) {//check if the password they entered matches what was stored
            //passes the username + the string logged in on the page to greet them
           
            //request.query.InvoiceName = users_reg_data[the_username].name;
            presentFullName = users_reg_data[the_username].name;
            stickPut = presentFullName;
            request.query.stickMe2 = stickPut; 
            qString = querystring.stringify(request.query);
            response.redirect("./invoice.html?" + qString);
            response.redirect("/invoiceCheck?" + qString);
            //if the quantity is valid, user is directed to invoice along with the query data from the form
        } else if (users_reg_data[the_username].password != request.body.password) {
            error = "Incorrect Password";
            stickInput = inputUser;
            //if they did not login successfully, does another get request and redirects user to login to page
        }
    } else {
        error = the_username + "is not registered";
        stickInput = inputUser;
    }
    request.query.LoginError = error;
    request.query.stickies = stickInput;
    qString = querystring.stringify(request.query);
    response.redirect("./login.html?" + qString);



});



app.post("/register", function (request, response) {
    // process a simple register form
    //reg_errors = {};
    //validate registration data

    //all good, so save new user to the file name(registration data)
    username = 'newuser';
    username = request.body.username.toLowerCase();
    fullname = request.body.fullname;

    var qString = querystring.stringify(request.query);
    regInputUser = request.body.username;
    regInputPass = request.body.password;
    regFullName = request.body.fullname;
    regFullName2 = request.body.fullname;
    regPassword = request.body.password;
    regRepPassword = request.body.repeat_password;
    regEmail = request.body.email;
    email =request.body.email.toLowerCase();
    
    if (request.body.fullname.length > 30){
        //response.send('your name is too damn long, shorten it');
        errors2='fullname is too long';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if(!(/^[A-Za-z ]+$/.test(fullname))) { 
        errors2='name must be letters only';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else {
        errors2='';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (request.body.password.length < 6){
        errors3='password must be more than 6 characters long';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (request.body.repeat_password != request.body.password) {
        errors3='password does not match';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else {
        errors3='';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (typeof users_reg_data[username] != 'undefined') {//check if the password they entered matches what was stored
        errors4='user already registered';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (!(/^[a-zA-Z0-9]+$/.test(username))) { //kiara's siter in law
        errors4='useusername must be characters and numbers only';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if(username.length > 10 ) {
        errors4='username is too long';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (username.length < 4) {
        errors4='username is too short';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else {
        errors4='';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (!(/^[a-zA-Z0-9._]+@[a-zA-Z.]+\.[a-zA-Z]{2,3}$/.test(email))){
        errors5='email is invalid';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else {
        errors5='';
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (errors2 == '' && errors3 == '' && errors4 == '' && errors5 =='') {   
        users_reg_data[username] = {}; //new user becomes new property of users_reg_data object
        users_reg_data[username].name = request.body.fullname;
        users_reg_data[username].password = request.body.password;
        users_reg_data[username].email = request.body.email;
        fs.writeFileSync(filename, JSON.stringify(users_reg_data));
        //alert(`${username} registered!`)
        
        stickType2 = regFullName;
        stickTypeEmail = regEmail;
        request.query.stickMe2 = stickType2; 
        request.query.stickMeEmail = stickTypeEmail;
        qString = querystring.stringify(request.query);
        response.redirect("./invoice.html?" + qString);

        var nodemailer = require('nodemailer');

					var transporter = nodemailer.createTransport({
						service: 'gmail',
						auth: {
							user: 'shanesurfshop@gmail.com',
							pass: 'surfdashop'
						}
					});
                    
					var mailOptions = {
						from: 'shanesurfshop@gmail.com',
						to: regEmail,
						subject: 'SHANES SURF SHOP - Thank you ' + regFullName + ' for your purchase!',
						text: 'idk how were supposed to attach a copy of the invoice to this email. it probablyt requires some advanced stuff.'
					};

					transporter.sendMail(mailOptions, function(error, info){
						if (error) {
							console.log(error);
						} else {
							console.log('Email sent: ' + info.response);
						}
					});
    
        //response.redirect ("./invoice.html?" + qString );//if the quantity is valid, user is directed to invoice along with the query data from the form

        console.log(request.body);
}   
    request.query.RegisterError = errors2; 
    request.query.RegisterError2 =  errors3; 
    request.query.RegisterError3 = errors4; 
    request.query.RegisterError4 =  errors5; 

    request.query.stickMe = stickType;
    request.query.stickMe3 = stickType3;
    request.query.stickMe4 = stickType4;
    qString = querystring.stringify(request.query);
    response.redirect("./registration.html?" + qString);    

});


