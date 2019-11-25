/*
Author: Shane Shimizu
File Description: JSON array for products
*/
//JSON array for products
var products = [
    {
        "model": "RVCA Boardshorts",
        "price": 139.50,
        "image": "Images/rvcashorts.png",
        "description": "The RVCA X Birdwel Point Panic 18 Trunk. A special edition boardshorts with custom contrast color blocked and print paneling.  Drawcord enclosure with button fly and patch pocket behind.  Button-flap enclosure. Finished with VA checker print lininig.  Birdwell 'VA' label at the back waist.  Custom Birdwell X RVCA patch. -RVCA"


    },
    {
        "model": "Billabong Boardshorts",
        "price": 69.95,
        "image": "Images/billabongshorts.png",
        "description": "Redefine the performance boardshort with Airlite technology, matched with a gradient stripe print. Design goes beyond stretch with anatomically mapped, multi-tier stretch, creating omni-directional movement, while flex welding allows for movement whilst maintaining great comfort laying against the skin.  -Billabong"

    },
    {
        "model": "Quiksilver Boardshorts",
        "price": 139.99,
        "image": "Images/quiksilver.png",
        "description": "Highline New Wave Pro 19.  Boardshorts Quiksilver Highline boardshorts are made to enhance every detail of high-performance surfing. They're the modern embodiment of 50 years of bold original concepts and designs. Crafted in high-performance Highlite 4-way stretch, and semi-perforated channels. -Quiksilver"
    },
    {
        "model": "Hurley Boardshorts",
        "price": 115.00,
        "image": "Images/hurleyshorts.png",
        "description": "The Hurley Phantom Hyperweave Miramar Board Shorts are made for ultimate comfort in the water, delivering an adaptive fit that won't slow you down. The pinnacle of boardshort design, Airlite combines unprecedented levels of flexibility, stability, breathability and comfort into one comfortable boardshorts. -Hurley"

    },
    {
        "model": "Vans Boardshorts",
        "price": 100.00,
        "image": "Images/vansshorts.png",
        "description": "The Surf Trunk 19 is a 100% polyester boardshort crafted specifically for surfing, keeping you Off The Wall and in the water all day long. Vans Ever-Ride fabrication utilizes renewable Sorona® fibers to combine functional benefits with an old school boardshort look, featuring lightweight fabric that dries quickly. -Vans"
    },
    {
        "model": "Ripcurl Boardshorts",
        "price": 79.95,
        "image": "Images/ripcurlshorts.png",
        "description": "The Mirage Medina Stryker is Gabe's signature boardshort. The Mirage Medina Stryker features a 20 outseem, Mirage Pro Fabric, a high hip zipper pocket, and a stitched body for unrestricted performance. Has a long-lasting mechanical stretch, and uses a compact weave structure that creates a smooth finish. -Ripcurl"
    }
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
function displayProducts() {
    for (i = 0; i <= products.length; i++) {
        document.write(`
            <div class="shop-item">
            <span class="shop-item-title">${products[i].model}</span>
            <div class="enlarge">
                <img class="shop-item-image" src=${products[i].image}>
            </div>
            <div class="shop-item-description">${products[i].description}</div>
            <div class="shop-item-details">
                <span class="shop-item-price">$${products[i].price.toFixed(2)}</span>
                <label id="quantity${i}_label" class="shop-item-quantity">Quantity</label>
                <input class="cart-quantity-input" type="text" name="quantity${i}" onkeyup=checkQuantityTextbox(this); placeholder="0">
            </div>
            </div>
        `);
    }
}




