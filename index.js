let cartItem = document.getElementById("cart")
let cartIcon = document.getElementById("cart-icon")
let cartEl = document.querySelector(".cart")
let count = 0
cartItem.textContent = count

function addToCart(){
    count = count + 1
    cartItem.textContent = count
}

cartIcon.addEventListener("click", () => {
    cartEl.classList.toggle("active")
})
