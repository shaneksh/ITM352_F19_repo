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
app.use(myParser.urlencoded({ extended: true })); //tells the system to use JSON
fs = require('fs'); //imports Node File System or fs
var filename = 'user_data.json';//assigns the user information from the JSON into the variable filename

//source from Lab 13
//logs the method and path into the console
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});


//source from Lab 13
//posts the process form data with the action as process_form
app.post("/process_form", function (request, response) {
    let POST = request.body; //assigns the body into POST variable
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
        response.redirect('login.html?' + qString); //redirects the user to the login page with qstring
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

    data = fs.readFileSync(filename, 'utf-8');  //returns contents of the path

    stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats.size + ' characters'); //console logs the filename with the amount of characters it has

    users_reg_data = JSON.parse(data);//parses the data into JSON format

    console.log(users_reg_data); //console logs

} else {
    console.log(filename + ' does not exist');
}




//gets called with data from the form
app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    var qString = querystring.stringify(request.query); //string query together
    inputUser = request.body.username;
    inputPass = request.body.password;
    the_username = request.body.username.toLowerCase(); //give me username from input and assigning it

    if (typeof users_reg_data[the_username] != 'undefined') { //ask object if it has property called username, if it does, it wont be udefined. check to see if it exists
        if (users_reg_data[the_username].password == request.body.password) {//check if the password they entered matches what was stored

            //assigns the username, email and fullname into variables
            presentFullName = users_reg_data[the_username].name;
            presentEmail = users_reg_data[the_username].email;
            presentUserName = request.body.username;
            //set those variables into another variable
            stickPut = presentFullName;
            stickPut2 = presentEmail;
            stickPut3 = presentUserName;
            //retrieve variable values and puts it into query
            request.query.stickMe2 = stickPut;
            request.query.stickMe3 = stickPut2;
            request.query.stickMe4 = stickPut3;
            //strings query together
            qString = querystring.stringify(request.query);
            response.redirect("./invoice.html?" + qString); //redirects user back to incoice page with the query string

        //else if the password of the user name in JSON does not match the password entered
        } else if (users_reg_data[the_username].password != request.body.password) {
            error = '<font color="red">Incorrect Password</font>'; //sets error to incorrect password, which will display on the page
            stickInput = inputUser; //assigns the username the user ernterd into a variabel which will let it stick 
           
        }
        //else the username the user entered and errpr message is displayed
    } else {
        error = the_username +"<style=word-spacing: 5px>: </style>" + "<font color='red'>is not registered</font>";
        stickInput = inputUser; //assigns the username the user entered into stick input
    }

    //retrieve variable values and puts it into query
    request.query.LoginError = error;
    request.query.stickies = stickInput;
    //string query together
    qString = querystring.stringify(request.query);
    //redirect user back to login page with qString
    response.redirect("./login.html?" + qString);



});



// process a simple register form
app.post("/register", function (request, response) {

    //validate registration data
    username = 'newuser';
    username = request.body.username.toLowerCase(); //assigns the username the user entered with to lower case for unique names
    fullname = request.body.fullname; //assigns the fullname the user entered

    //string query together
    var qString = querystring.stringify(request.query);
    //assigns the inputs of the user into variables
    regInputUser = request.body.username;
    regInputPass = request.body.password;
    regFullName = request.body.fullname;
    regFullName2 = request.body.fullname;
    regPassword = request.body.password;
    regRepPassword = request.body.repeat_password;
    regEmail = request.body.email;
    email = request.body.email.toLowerCase();

    
    if (request.body.fullname.length > 30){ //if the fullname entered is greater than 30 characters
        errors2 = '<font color="red">Full Name is too long</font>'; //stores appropriate error into variable
        stickType = regFullName2; //sticks the input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (!(/^[A-Za-z ]+$/.test(fullname))) { // regular expression; else if the fullname does not equal letters only, source: https://www.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
        errors2 = '<font color="red">Name must be letters only</font>'; //stores appropriate error into variable
        stickType = regFullName2; //sticks the input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else { //else  there are no errors
        errors2 = ''; //no errors are stored in the variable
        stickType = regFullName2; //sticks input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (request.body.password.length < 6) { //if password the user enters is less than 6 characters
        errors3 = '<font color="red">Password must be more than 6 characters long</font>'; //stores appropriate error into variable
        stickType = regFullName2; //sticks input from the user and store in varible
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (request.body.repeat_password != request.body.password) { //else if the repeat password does not match the password enterd from the user
        errors3 = '<font color="red">Password DOES NOT Match</font>'; //stores appropriate error into variable
        stickType = regFullName2; //sticks input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else { //else there are no errors
        errors3 = ''; //no errors are stores in the variable
        stickType = regFullName2; //sticks input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (typeof users_reg_data[username] != 'undefined') {//check if the username is already taken
        errors4 = '<font color="red">User already registered</font>'; //stores appropriate error into a variable
        stickType = regFullName2; //sticks input from user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (!(/^[a-zA-Z0-9]+$/.test(username))) { //if the username does not equal letters and numbers only, source: https://www.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
        errors4 = '<font color="red">Username must be characters and numbers only</font>'; //stores appropriate error into a variable
        stickType = regFullName2; //sticks input from user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (username.length > 10) { //if the username is greater than 10 characters long
        errors4 = useLong = '<font color="red">Username is too long</font>'; //stores appropriate error into variable
        stickType = regFullName2; //sticks input from user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else if (username.length < 4) { //if the username is less than 4 characters long
        errors4 = '<font color="red">Username is too short</font>'; //store appropriate error into variable
        stickType = regFullName2; //sticks input from the user and store in varible
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else { //else there are no errors
        errors4 = ''; //no errors are stored in the variable
        stickType = regFullName2; //sticks input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    if (!(/^[a-zA-Z0-9._]+@[a-zA-Z.]+\.[a-zA-Z]{2,3}$/.test(email))) { // follows X@Y.Z format; address which can only contain letters, numbers, and the characters “_” and “.”; Y is the host machine which can contain only letters and numbers and “.” characters; Z is the domain name which is either 2 or 3 letters such as “edu” or “tv”
        errors5 = '<font color="red">Email is invalid</font>'; //no errors are stored in the variable
        stickType = regFullName2; //sticks input from the user and store in variable
        stickType3 = regInputUser;
        stickType4 = regEmail;
    } else { //else there are no errors
        errors5 = ''; //no errors are stored in the variable
        stickType = regFullName2;
        stickType3 = regInputUser;
        stickType4 = regEmail;
    }

    //if there are no errors stored in each error variable, user is stored in users_reg_data object
    if (errors2 == '' && errors3 == '' && errors4 == '' && errors5 == '') {
        users_reg_data[username] = {}; //new user becomes new property of users_reg_data object
        users_reg_data[username].name = request.body.fullname; //name entered is stored in users_reg_data object
        users_reg_data[username].password = request.body.password; //password entered is stored in users_reg_data object
        users_reg_data[username].email = request.body.email; //email entered is stored in users_reg_data object
        fs.writeFileSync(filename, JSON.stringify(users_reg_data)); //strings data into JSON for users_reg_data

        //assigns user input into variable
        stickType2 = regFullName;
        stickTypeEmail = regEmail;
        stickTypeUserName = regInputUser;
        //retrieve variables and puts them into query
        request.query.stickMe2 = stickType2;
        request.query.stickMeEmail = stickTypeEmail;
        request.query.stickMeUserName = stickTypeUserName;
        //string query together
        qString = querystring.stringify(request.query);
        //redirect user to invoice page with query string
        response.redirect("./invoice.html?" + qString);

        //sends an email to the email the user entered https://www.w3schools.com/nodejs/nodejs_email.asp
        var nodemailer = require('nodemailer'); //requires nodemailer after install

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shanesurfshop@gmail.com', //my email
                pass: 'surfdashop' //my password
            }
        });

        var mailOptions = {
            from: 'shanesurfshop@gmail.com',
            to: regEmail, //to users email
            subject: 'SHANES SURF SHOP - Thank you ' + regFullName + ' for your purchase!', //prints message with users full name into the subject box
            text: 'PLEASE COME AGAIN!'
        };

        transporter.sendMail(mailOptions, function (error, info) { //if failed to send or there are errors, console.log them
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });


        console.log(request.body);
    }
    //retrieve variables and puts them into query; for displaying errors on page
    request.query.RegisterError = errors2;
    request.query.RegisterError2 = errors3;
    request.query.RegisterError3 = errors4;
    request.query.RegisterError4 = errors5;
    //retrieve variables and puts them into query; for sticking user input
    request.query.stickMe = stickType;
    request.query.stickMe3 = stickType3;
    request.query.stickMe4 = stickType4;
    //string query together
    qString = querystring.stringify(request.query);
    //redirect user to registration page with qstring
    response.redirect("./registration.html?" + qString);

});


