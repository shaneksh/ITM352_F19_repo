var products = [
    {
        "model": "Apple",
        "price": 1200.00,
        "image": "https://github.com/shaneksh/ITM352_F19_repo/blob/master/images/Apple-iPhone-11-Pro-Midnight-Green-frontimage.png?raw=true",

    },
    {
        "model": "Samsung",
        "price": 1100.00,
        "image": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/Screen%20Shot%202019-11-04%20at%201.38.56%20PM.png",
        
    },
    {
        "model": "Google",
        "price": 900.00,
        "image": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/PIXEL4-5K1-iGeeksBlog-OnLeaks.png",
        
    },
    {
        "model": "Razer",
        "price": 800.00,
        "image": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/razer.png",
        

    },
    {
        "model": "OnePlus",
        "price": 500.00,
        "image": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/oneplus.png",
        
    },
    {
        "model": "Motorola",
        "price": 850.00,
        "image": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/motorola.png",
        
    }
];

var fproducts =
[
    {
        "fmodel": "Motorola Flip",
        "fprice": 200.00,
        "fimage": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/Nokia7220.png"
    },
    {
        "fmodel": "Nokia",
        "fprice": 150.00,
        "fimage": "https://raw.githubusercontent.com/shaneksh/ITM352_F19_repo/master/images/motorolarazr.png"
    }

];
if(typeof module != 'undefined') {
    module.exports.products = products;
  }

function welcome() {
    var name = prompt("Hi there! What is your name?");
    alert("Hi " + name + "! Welcome to my online store, click on the shop tab to view my products!");
}


function displayProducts() {
    for (i = 0; i <= products.length; i++) {
        document.write(`
            <div class="shop-item">
            <span class="shop-item-title">${products[i].model}</span>
            <div class="enlarge">
                <img class="shop-item-image" src=${products[i].image}>
            </div>
            <div class="shop-item-details">
                <span class="shop-item-price">${products[i].price}</span>
                <button class="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
            </div>
            </div>
        `);
    }
}
