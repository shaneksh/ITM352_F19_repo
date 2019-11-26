fs = require('fs');
var filename = 'user_data.json';

//check to see if the file exists. if it does, read it and parse it. if not output a message
if (fs.existsSync(filename)) {

    //returns contents of the path
    data = fs.readFileSync(filename, 'utf-8');

    users_reg_data = JSON.parse(data);
    console.log(users_reg_data);

} else {
    console.log(filename + ' does not exist');
}