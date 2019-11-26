var express = require('express');
var app = express();
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));
fs = require('fs');
var filename = 'user_data.json';

//check to see if the file exists. if it does, read it and parse it. if not output a message
if (fs.statSync(filename)) {

    //returns contents of the path
    data = fs.readFileSync(filename, 'utf-8');
    
    stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats.size + ' characters'); //console logs the filename with the amount of characters it has

    console.log(users_reg_data); //console logs

} else {
    console.log(filename + ' does not exist');
}

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 //gets called with data from the form
app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    the_username = request.body.username; //give me username from object and assigning it
    if (typeof users_reg_data[the_username] != 'undefined') { //ask object if it has property called username, if it does, it wont be udefined. check to see if it exists
        if (users_reg_data[the_username].password == request.body.password) {//check if the password they entered matches what was stored
            response.send(the_username + ' logged in!');//passes the username + the string logged in on the page to greet them
        } else {
            response.redirect('/login');//if they did not login successfully, does another get request and redirects user to login to page
            //can regnerate form here and display errors
        }
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));
