if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger') //listens to when user clicks on the delete button
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input') //listens to when user changes quantity of item
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button') //listens to when user clicks on item to add to cart
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

}

//removes item from cart when user clicks on delete button
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//updates cart total based on the quantity of each item
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
     
        
    }
    updateCartTotal()
}


/*onkeyup="checkQuantityTextbox(this)";*/

//adds item to cart
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

var cartcount = 0;
function addItemToCart(title, price, imageSrc) {
    cartcount = 1;
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText != title) {
            cartcount = cartcount + 1;
        }
    }
    cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <label id="quantity1_label">Quantity</label>
            <input class="cart-quantity-input" type="text" name="quantity1" onkeyup=checkQuantityTextbox(this); placeholder="0">
            <button class="btn btn-danger" type="button">Delete</button>
        </div>`
    
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function isNonNegInt(q, return_errors = false) {
    errors = []; // assume no errors at first
    if(q == '') q =0; // handle blank inputs as if they are 0
    if (Number(q) != q) errors.push('<font color="red">Not a number!</font>'); // Check if string is a number value
    else if (q < 0) errors.push('<font color="red">Negative value!</font>'); // Check if it is non-negative
    else if (parseInt(q) != q) errors.push('<font color="red">Not an integer!</font>'); // Check that it is an integer
    return return_errors ? errors : (errors.length == 0);
}

function checkQuantityTextbox(theTextbox) {
    errs = isNonNegInt(theTextbox.value, true);
    if (errs.length == 0) errs = ['You want: '];
    if (theTextbox.value.trim() == '') errs = ['Quantity'];
    document.getElementById(theTextbox.name + '_label').innerHTML = errs.join(", ");
    
}

window.onload = function () {
    let params = (new URL(document.location)).searchParams; // get the query string which has the form data
    // form was submitted so check that quantities are valid then redirect to invoice if ok.
    if (params.has('purchase_submit')) {
        has_errors = false; // assume quantities are valid from the start
        total_qty = 0; // need to check if something was selected so we will look if the total > 0
        for (i = 0; i < products.length; i++) {
            if (params.has(`quantity1`)) {
                a_qty = params.get(`quantity1`);
                // make textboxes sticky in case of invalid data
                product_selection_form[`quantity1`].value = a_qty;
                total_qty += a_qty; 
                if(!isNonNegInt(a_qty)) {
                    has_errors = true; // oops, invalid quantity
                    checkQuantityTextbox(product_selection_form[`quantity1`]); // show where the error is
                }
            }
        }
        // Now respond to errors or redirect to invoice if all is ok
        if(has_errors) {
            alert("Please enter only valid quantities!");
        } else if(total_qty == 0) { // no quantity selections, just give a general alert
            alert("Please select some quantities!");
        } else { // all good to go!
            window.location = `./invoice.html${document.location.search}`;
            window.stop;
        }
    }
}