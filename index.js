let cartItem = document.getElementById("cart");
let cartIcon = document.getElementById("cart-icon");
let cartEl = document.querySelector(".cart");
let costEl = document.getElementById("cost");
let quantityEl = document.getElementById("quantity");

let count = 0;
let amount = 0;
cartItem.textContent = count;
costEl.textContent = amount;
quantityEl.textContent = count;

function addToCart(){
    count = count + 1;
    amount += 200;


    cartItem.textContent = count;
    costEl.textContent = amount;
    quantityEl.textContent = count;
}

cartIcon.addEventListener("click", () => {
    cartEl.classList.toggle("active")
})
