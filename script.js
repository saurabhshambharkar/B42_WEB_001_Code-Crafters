// script.js

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const products = document.querySelectorAll(".product");
    
    searchInput.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = productName.includes(query) ? "block" : "none";
        });
    });
    
    const cart = [];
    const wishlist = [];
    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.querySelector("h3").textContent;
            cart.push(productName);
            alert(`${productName} added to cart!`);
            console.log("Cart:", cart);
        });
    });
    
    document.querySelectorAll(".add-to-wishlist").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.querySelector("h3").textContent;
            wishlist.push(productName);
            alert(`${productName} added to wishlist!`);
            console.log("Wishlist:", wishlist);
        });
    });
});
