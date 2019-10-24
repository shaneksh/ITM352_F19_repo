var str = `a:b:c`;
var arr = str.split(`,`);
console.log(arr);

//attributes  =  `<Shane>;<20>;<MIS>`;
//attributes  =  `<Shane>;<20>;<20 + 0.5>;<0.5 - 20>`;
theSeparator = `;`;

attributes = attributes.split(theSeparator);

parts = ['Shane',20, 20 + 0.5, 0.5 - 20];

for (i=0; i < parts.length; i++){
    console.log(typeof parts[i]);
}


console.log(parts.join(theSeparator));

function isNonNegInt (q){
    console.log('hey!');
}

isNonNegInt();