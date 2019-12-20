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
        "description": "Style: Women's Basic T-Shirt"


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
//Source W3 Schools Cookies: https://www.w3schools.com/js/js_cookies.asp
//aloha bowl
function setCookie0(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie0(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie0() {
    setCookie0("alohabowl", products[0], 30);
}
function checkCookie1(){
    setCookie0("manabowl", products[1], 30);

}
function checkCookie2(){
    setCookie0("womensshirt", products[2], 30);
    
}
function checkCookie3(){
    setCookie0("mensshirt", products[3], 30);
    
}
function checkCookie4(){
    setCookie0("womenssleeve", products[4], 30);
    
}
function checkCookie5(){
    setCookie0("menssleeve", products[5], 30);

}
function checkCookie6(){
    setCookie0("womensjacket", products[6], 30);
   
}
function checkCookie7(){
    setCookie0("mensjacket", products[7], 30);
   
}
function checkCookie8(){
    setCookie0("makaihat", products[8], 30);
    
}
function checkCookie9(){
    setCookie0("makaibag", products[9], 30);
    
}
function checkCookie10(){
    setCookie0("makaichain", products[10], 30);
    
}
function checkCookie11(){
    setCookie0("makaibottle", products[11], 30);
   
}


  function updateRecent0(){
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
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info" onclick="checkCookie${i}()"></a>
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
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info" onclick="checkCookie${i}()"></a>
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
                <a href="${(products[i].model).replace(/\s+/g,'')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info" onclick="checkCookie${i}()"></a>
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

function displayMakaiWomensShirt() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[2].image}>
            </div>
            <div class="shop-item-description">${products[2].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[2].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiMensShirt() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[3].image}>
            </div>
            <div class="shop-item-description">${products[3].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[3].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiWomensSleeve() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[4].image}>
            </div>
            <div class="shop-item-description">${products[4].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[4].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiMensSleeve() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[5].image}>
            </div>
            <div class="shop-item-description">${products[5].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[5].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiWomensJacket() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[6].image}>
            </div>
            <div class="shop-item-description">${products[6].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[6].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiMensJacket() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[7].image}>
            </div>
            <div class="shop-item-description">${products[7].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[7].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiHat() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[8].image}>
            </div>
            <div class="shop-item-description">${products[8].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[8].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiBag() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[9].image}>
            </div>
            <div class="shop-item-description">${products[9].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[9].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiChain() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[10].image}>
            </div>
            <div class="shop-item-description">${products[10].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[10].price.toFixed(2)}</span>
            </div>
        </div>
    `);  
}

function displayMakaiBottle() {
    document.write(`
        <div class="shop-item">
            <div class="enlarge">
                <img class="shop-item-image" src=${products[11].image}>
            </div>
            <div class="shop-item-description">${products[11].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[11].price.toFixed(2)}</span>
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