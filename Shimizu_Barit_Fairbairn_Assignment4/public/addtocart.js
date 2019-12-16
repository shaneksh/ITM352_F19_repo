

function addThisToCart() {
    cartOne = JSON.stringify(products[0]);
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("usersCart", JSON.stringify(products[0]));
            storedUsersCart = JSON.parse(localStorage.getItem("usersCart"));
        }
}