/*
Authors: Shane Shimizu, Daniel Francis Barit, Kiara Fairbairn
File Description: functions to add products to the cart page
Date: December 19, 2019
*/

//function to add Aloha Bowl to cart
function addThisToCart1() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available 
        localStorage.setItem("usersCart", JSON.stringify(products[0])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart = JSON.parse(localStorage.getItem("usersCart")); //parses the JSON string stored in localStorage with the name usersCart
    }
    alert("Aloha Bowl added to cart"); //alert the user the item was added to the cart
}

//function to add Mana Bowl to cart
function addThisToCart2() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart2", JSON.stringify(products[1])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart2 = JSON.parse(localStorage.getItem("usersCart2")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Mana Bowl added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Womens T-shirt to cart
function addThisToCart3() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart3", JSON.stringify(products[2])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart3 = JSON.parse(localStorage.getItem("usersCart3")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Women's T-Shirt added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Mens T-Shirt to cart
function addThisToCart4() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart4", JSON.stringify(products[3])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart4 = JSON.parse(localStorage.getItem("usersCart4")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Men's T-Shirt added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Women's Longsleeve to cart
function addThisToCart5() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart5", JSON.stringify(products[4])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart5 = JSON.parse(localStorage.getItem("usersCart5")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Women's Longsleeve added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Mens Longsleeve to cart
function addThisToCart6() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart6", JSON.stringify(products[5])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart6 = JSON.parse(localStorage.getItem("usersCart6")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Men's Longsleeve added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Womens Jacket to cart
function addThisToCart7() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart7", JSON.stringify(products[6])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart7 = JSON.parse(localStorage.getItem("usersCart7")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Women's Jacket added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Mens Jacket to cart
function addThisToCart8() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart8", JSON.stringify(products[7])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart8 = JSON.parse(localStorage.getItem("usersCart8")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Men's Jacket added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Hat to cart
function addThisToCart9() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart9", JSON.stringify(products[8])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart9 = JSON.parse(localStorage.getItem("usersCart9")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Hat added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Reusable Bag to cart
function addThisToCart10() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart10", JSON.stringify(products[9])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart10 = JSON.parse(localStorage.getItem("usersCart10")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Reusable Bag added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Key Chain to cart
function addThisToCart11() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart11", JSON.stringify(products[10])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart11 = JSON.parse(localStorage.getItem("usersCart11")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Key Chain added to cart"); //alert the user the item was added to the cart
}

//function to add Makai Reusable Water Bottle to cart
function addThisToCart12() {
    if (typeof (Storage) !== "undefined") { //if localStorage is available
        localStorage.setItem("usersCart12", JSON.stringify(products[11])); //sets localStorage name and use JSON.stringify on product[#] as the value
        storedUsersCart12 = JSON.parse(localStorage.getItem("usersCart12")); //parses the JSON string stored in localStorage with the name usersCart

    }
    alert("Makai Reusable Water Bottle added to cart"); //alert the user the item was added to the cart
}