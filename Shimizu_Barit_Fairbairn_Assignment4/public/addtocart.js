
let params = (new URL(document.location)).searchParams; // get the query string which has the form data
// form was submitted so check that quantities are valid then redirect to invoice if ok.

var alohaBowlAlreadyInCart = 0;

function alohaBowlAdded() {
    if (alohaBowlAlreadyInCart == 0){
        alert("Item Added To Cart!");
        alohaBowlAlreadyInCart = 1;
        displayAlohaInCart();
    } else if (alohaBowlAlreadyInCart == 1){
        alert("Item Already In Cart!");
    }
}

function displayAlohaInCart(){
    alohabowl = products[0];
    userproducts.push(alohabowl);
}

function changeCartButton(){
    document.getElementById("cartName").innerHTML = "Item Already In Cart";
}

