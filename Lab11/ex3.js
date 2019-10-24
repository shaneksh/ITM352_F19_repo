theSeparator = `;`;

var attributes = "Shane,20, 20 + 0.5, 0.5 - 20";
var parts = attributes.split(theSeparator);



for (i=0; i < parts.length; i++){
    console.log(typeof parts[i]);
}


console.log(parts.join(theSeparator));