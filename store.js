// Theme Change Functionality
const theme_change_btn = document.querySelector(".ri-moon-fill");
theme_change_btn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "white" ? "black" : "white";
    
    if (document.body.style.backgroundColor === "black") {
        theme_change_btn.classList.remove("ri-sun-fill");
        theme_change_btn.classList.add("ri-moon-fill");
    } else {
        theme_change_btn.classList.remove("ri-moon-fill");
        theme_change_btn.classList.add("ri-sun-fill");
    }
});

// Store Functionality
// JavaScript for handling Buy Now and Add to Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = document.querySelector(".cart-count");
cartCount.innerText = cart.length;

// Add event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        const productName = card.querySelector("h1").innerText;
        const productPrice = card.querySelector(".real-price").innerText;
        const productImage = card.querySelector("img").getAttribute("src");

        const buyBtn = card.querySelector(".buy-now");
        const cartBtn = card.querySelector(".add-to-cart");

        buyBtn.addEventListener("click", () => {
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };
            localStorage.setItem("buyNowProduct", JSON.stringify(product));
            window.location.href = "buy.html";
        });

        cartBtn.addEventListener("click", () => {
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartCount.innerText = cart.length;
            alert("Added to cart!");
        });
    });

    // Cart icon click behavior
    document.querySelector(".ri-shopping-bag-2-fill").addEventListener("click", () => {
        window.location.href = "cart.html";
    });
});



// Newletter
const footer_h1 = document.querySelector(".footer_h1");
const footer_btn = document.querySelector(".subscribe_btn");

footer_btn.addEventListener("click", (event) => {
  const footer_email_input = document.querySelector(".subscribe_input");
  
  if (footer_email_input.value === "") {
    alert("Fill the input");
  } else {
    footer_email_input.remove();
    footer_btn.remove();
    footer_h1.innerHTML = "Thanks!";
  }
});