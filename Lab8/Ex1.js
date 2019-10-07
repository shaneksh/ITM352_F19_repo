
while (num < age){
    num++;
    if(num > (age/2)){
        console.log("Dont ask how old I am");
        process.exit();
    }
    console.log(`Are you ${num} years old?`);
}
console.log(`You must be ${num} years old!`);

var age = 21;

for (var num=50; num > age; num--){
    console.log(`Are you ${num} years old?`);
}
console.log(`You must be ${num} years old!`);

var count = 1;
var age = 21;
var stopValue = Math.ceil(Math.sqrt(age));

while(count < stopValue){
    console.log(count++);
}