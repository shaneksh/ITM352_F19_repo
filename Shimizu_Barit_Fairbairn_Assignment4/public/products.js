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
        "description": "Acai based blended with strawberries, blueberries and bananas. Bowl comes topped with granola, bananas, strawberries, and honey."

    },
    {
        "model": "Mana Bowl",
        "price": 9.00,
        "image": "/Images/manabowl.png",
        "description": "Peanut butter based blended with bananas. Bowl comes topped with granola, bananas, strawberries, and honey."


    },
    {
        "model": "Makai Womens T-Shirt",
        "price": 20.00,
        "image": "/Images/makaiwomenst.jpeg",
        "description": "Style: Men's Basic T-Shirt"


    },
    {
        "model": "Makai Mens T-Shirt",
        "price": 20.00,
        "image": "/Images/makaimenst.jpeg",
        "description": ""
    },
    {
        "model": "Makai Womens Longsleeve",
        "price": 25.00,
        "image": "/Images/makaiwomenslong.jpeg",
        "description": ""
    },
    {
        "model": "Makai Mens Longsleeve",
        "price": 25.00,
        "image": "/Images/makaimenslong.jpeg",
        "description": ""
    },
    {
        "model": "Makai Womens Jacket",
        "price": 35.00,
        "image": "/Images/makaiwomensjacket.jpeg",
        "description": ""
    },
    {
        "model": "Makai Mens Jacket",
        "price": 35.00,
        "image": "/Images/makaimensjacket.jpeg",
        "description": ""
    },
    {
        "model": "Makai Hat",
        "price": 30.00,
        "image": "/Images/makaihat.jpeg",
        "description": ""
    
    },
    {
        "model": "Makai Reusable Bag",
        "price": 15.00,
        "image": "/Images/makaibag.jpeg",
        "description": ""
    },
    {
        "model": "Makai Key Chain",
        "price": 7.00,
        "image": "/Images/makaichain.jpeg",
        "description": ""
    },
    {
        "model": "Makai Reusable Water Bottle",
        "price": 15.00,
        "image": "/Images/makaibottle.jpeg",
        "description": ""
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
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><span class="shop-item-title">${products[i].model}</span></a>
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[i].image}>
                </div>
                <div class="shop-item-details">
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info"></a>
                </div>
            </div>
        `);
    }
}

function displayProducts2(){
    for (i = 2; i < 8; i++) {
        document.write(`
            <div class="shop-item">
            <a href="${(products[i].model).replace(/\s+/g,'')}.html"><span class="shop-item-title">${products[i].model}</span></a>
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[i].image}>
                </div>
                <div class="shop-item-details">
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info"></a>
                </div>
            </div>
        `);
    }   
}

function displayProducts3(){
    for (i = 8; i < 13 ; i++) {
        document.write(`
            <div class="shop-item">
            <a href="${(products[i].model).replace(/\s+/g,'')}.html"><span class="shop-item-title">${products[i].model}</span></a>
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[i].image}>
                </div>
                <div class="shop-item-details">
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info"></a>
                </div>
            </div>
        `);
    }   
}

function displayAlohaBowl() {
        document.write(`
            <div class="shop-item">
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[0].image}>
                </div>
                <div class="shop-item-description">${products[0].description}</div>
                <div class="shop-item-details">
                    <span class="shop-item-price">$${products[0].price.toFixed(2)}</span>
                </div>
            </div>
        `);  
}

function displayManaBowl() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[1].image}>
            </div>
            <div class="shop-item-description">${products[1].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[1].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayUserProducts() {
    document.write(`
        <div class="shop-item">
        <span class="shop-item-title">${storedUsersCartArray[0].model}</span>
        <div class="enlarge">
            <img class="shop-item-image" src=${storedUsersCartArray[0].image}>
        </div>
        <div class="shop-item-description">${storedUsersCartArray[0].description}</div>
        <div class="shop-item-details">
            <span class="shop-item-price">$${storedUsersCartArray[0].price.toFixed(2)}</span>
            <label id="quantity0_label" class="shop-item-quantity">Quantity</label>
            <input class="cart-quantity-input" type="text" name="quantity0" onkeyup=checkQuantityTextbox(this); placeholder="0">
        </div>
        </div>
    `);
}
var storedUsersCartArray = [];
if (typeof module != 'undefined') {
    module.exports.storedUsersCartArray = storedUsersCartArray;
}