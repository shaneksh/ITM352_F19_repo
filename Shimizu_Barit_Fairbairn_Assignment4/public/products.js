/*
Author: Shane Shimizu, Daniel Franci Barit
File Description: JSON array for products
Date: 11/30/19
*/
//JSON array for products
var products = [
    {
        "model": "Aloha Bowl",
        "price": 9.00,
        "image": "/Images/alohabowl.png",
    },
    {
        "model": "Mana Bowl",
        "price": 9.00,
        "image": "/Images/manabowl.png",

    },
    {
        "model": "Makai Women's T-Shirt",
        "price": 20.00,
        "image": "",

    },
    {
        "model": "Makai Men's T-Shirt",
        "price": 20.00,
        "image": "",
    },
    {
        "model": "Makai Womens Longsleeve",
        "price": 25.00,
        "image": "",
    },
    {
        "model": "Makai Mens Longsleeve",
        "price": 25.00,
        "image": "",
    },
    {
        "model": "Makai Women's Jacket",
        "price": 35.00,
        "image": "",
    },
    {
        "model": "Makai Men's Jacket",
        "price": 35.00,
        "image": "",
    },
    {
        "model": "Makai Hat",
        "price": 30.00,
        "image": "",
    
    },
    {
        "model": "Makai Reusable Bag",
        "price": 15.00,
        "image": "",
    },
    {
        "model": "Makai Reusable Bag",
        "price": 15.00,
        "image": "",
    },
    {
        "model": "Makai Key Chain",
        "price": 7.00,
        "image": "",
    },
    {
        "model": "Makai Reusable Water Bottle",
        "price": 15.00,
        "image": "",
    },
];

//Source from Profesor Daniel Port
//checks if the products in the array are defined
if (typeof module != 'undefined') {
    module.exports.products = products;
}

//when user clicks on the click me button on the home page
function welcome() {
    var name = prompt("Hi there! What is your name?"); //prompts the user for their name
    alert("Hi " + name + "! Welcome to my online store, click on the shop tab to view my products!"); //alerts their name and string
}

//for loop that displays products stored in the JSON array onto the products.html page when the function is called
//<div class="shop-item-description">${products[i].description}</div>
//
//<label id="quantity${i}_label" class="shop-item-quantity">Quantity</label>
//<input class="cart-quantity-input" type="text" name="quantity${i}" onkeyup=checkQuantityTextbox(this); placeholder="0">
function displayProducts() {
    for (i = 0; i < 2; i++) {
        document.write(`
            <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[i].image}>
            </div>
            <span class="shop-item-title" id="bowls-title-click${i}">${products[i].model}</span>
                <span class="shop-item-price">$${products[i].price.toFixed(2)}</span>
            </div>
        `);
    }
     // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("bowls-title-click0");  
    var btn2 = document.getElementById("bowls-title-click1");  

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


}

function displayProducts2(){
    for (i = 3; i < 8; i++) {
        document.write(`
            <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[i].image}>
            </div>
            <span class="shop-item-title" id="apparel-title-click${i}">${products[i].model}</span>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[i].price.toFixed(2)}</span>
            </div>
        </div>
        `);
    }   
}

function displayProducts3(){
    for (i = 8; i < 13 ; i++) {
        document.write(`
            <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[i].image}>
            </div>
            <span class="shop-item-title" id="accessories-title-click${i}">${products[i].model}</span>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[i].price.toFixed(2)}</span>
            </div>
        </div>
        `);
    }   
}



