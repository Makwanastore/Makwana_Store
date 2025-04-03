document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const cartCount = document.getElementById("cart-count");
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.querySelector(".autocomplete-results");
    document.querySelector(".hero-content").classList.add("slide-in");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
        // Simulated Cart Items (Replace with actual logic)
        function updateCartCount() {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    
        updateCartCount();
    
        // Search Bar Functionality
        document.querySelector(".search-form").addEventListener("submit", function (event) {
            event.preventDefault();
            let query = document.getElementById("searchInput").value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
            }
        });
    // Sample Products List
    // const products = ["Men's Sneakers", "Women's Dress", "Kids' Toys", "Wrist Watch", "Bluetooth Headphones", "Leather Wallet", "Sunglasses"];

    // Search Functionality
    searchInput.addEventListener("keyup", function () {
        let query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = "";

        if (query) {
            let filtered = products.filter(item => item.toLowerCase().includes(query));
            filtered.forEach(item => {
                let div = document.createElement("div");
                div.classList.add("result-item");
                div.textContent = item;
                div.onclick = function () {
                    searchInput.value = item;
                    resultsContainer.innerHTML = "";
                };
                resultsContainer.appendChild(div);
            });

            resultsContainer.style.display = "block";
        } else {
            resultsContainer.style.display = "none";
        }
    });

    // Hide autocomplete when clicking outside
    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bannerTitle = document.getElementById("banner-title");
    const bannerSubtitle = document.getElementById("banner-subtitle");

    const offers = [
        { title: "🔥 Exclusive Deals Just for You! 🔥", subtitle: "Shop the latest trends at unbeatable prices." },
        { title: "🛍️ New Arrivals Just Dropped! 🛍️", subtitle: "Upgrade your style with the latest collections." },
        { title: "⚡ Limited Time Offer: Up to 50% OFF! ⚡", subtitle: "Grab the hottest deals before they’re gone." },
        { title: "🎁 Free Shipping on All Orders! 🎁", subtitle: "No minimum purchase required. Shop now!" }
    ];

    let index = 0;

    function updateBanner() {
        index = (index + 1) % offers.length;
        bannerTitle.classList.add("fade-out");
        bannerSubtitle.classList.add("fade-out");

        setTimeout(() => {
            bannerTitle.textContent = offers[index].title;
            bannerSubtitle.textContent = offers[index].subtitle;

            bannerTitle.classList.remove("fade-out");
            bannerSubtitle.classList.remove("fade-out");
            bannerTitle.classList.add("fade-in");
            bannerSubtitle.classList.add("fade-in");
        }, 500);
    }

    // Change banner text every 5 seconds
    setInterval(updateBanner, 5000);
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutTitle = document.querySelector(".about-container h1");
    const aboutText = document.querySelector(".about-container p");
    const aboutImage = document.querySelector(".about-img");

    function revealAboutSection() {
        aboutTitle.style.opacity = "1";
        aboutText.style.opacity = "1";
        aboutImage.style.opacity = "1";
    }

    setTimeout(revealAboutSection, 500);
});


const products = [
    { name: "Personalized Men's Wallet", link: "Sproduct.html" },
    { name: "Customised T-Shirt", link: "Tshirt_Details.html" },
    { name: "Gift Mug", link: "Coffee_Mug.html" },
    { name: "Saree Parker", link: "Women_parker.html" }
];

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.querySelector(".autocomplete-results");

searchInput.addEventListener("keyup", () => {
    let query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";
    if (query.length > 0) {
        let matches = products.filter(p => p.name.toLowerCase().includes(query));
        matches.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("autocomplete-item");
            div.innerHTML = product.name;
            div.onclick = () => window.location.href = product.link;
            resultsContainer.appendChild(div);
        });
    }
});
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}
updateCartCount();



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const autocompleteResults = document.querySelector(".autocomplete-results");
    const products = ["Personalised T-Shirt", "Customizable Gift Mug", "Googles", "Shoes", "Accessories"];

    searchInput.addEventListener("input", function () {
        let searchValue = searchInput.value.toLowerCase();
        autocompleteResults.innerHTML = "";

        if (searchValue) {
            let filteredProducts = products.filter(product =>
                product.toLowerCase().includes(searchValue)
            );

            filteredProducts.forEach(product => {
                let div = document.createElement("div");
                div.classList.add("autocomplete-item");
                div.innerText = product;
                div.addEventListener("click", function () {
                    searchInput.value = product;
                    autocompleteResults.innerHTML = "";
                });
                autocompleteResults.appendChild(div);
            });
        }
    });
});


const features = [
    { icon: "bi bi-truck", title: "Fast Delivery", description: "Get your orders delivered quickly with our express shipping." },
    { icon: "bi bi-shield-lock", title: "Secure Payment", description: "Your payments are protected with top-notch security." },
    { icon: "bi bi-headset", title: "24/7 Support", description: "We are here to assist you anytime, anywhere." },
    { icon: "bi bi-tag", title: "Best Prices", description: "We offer unbeatable prices on all our products." },
];

const featureList = document.getElementById("feature-list");

features.forEach(feature => {
    let featureItem = `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="feature-box">
                <i class="feature-icon ${feature.icon}"></i>
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            </div>
        </div>
    `;
    featureList.innerHTML += featureItem;
});


document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Footer Links
    document.querySelectorAll(".footer-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Payment Icons Hover Animation
    const paymentIcons = document.querySelectorAll(".payment-icon");
    paymentIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.3s ease-in-out";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // WhatsApp Floating Button Animation
    const whatsappButton = document.querySelector(".whatsapp-float");
    setInterval(() => {
        whatsappButton.style.transform = "scale(1.1)";
        setTimeout(() => {
            whatsappButton.style.transform = "scale(1)";
        }, 500);
    }, 2000);
});

// script.js

// Function to add items to cart
function addToCart(productName, productImage, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, image: productImage, price: price, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

document.addEventListener("DOMContentLoaded", updateCartCount);

// Function to load cart items in cart.html
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;
    
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += `
            <tr>
                <td><img src="${item.image}" width="50"></td>
                <td>${item.name}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td>INR ${item.price * item.quantity}</td>
                <td><button onclick="removeItem(${index})">❌</button></td>
            </tr>
        `;
    });
    document.getElementById("total-price").innerText = `INR ${totalPrice}`;
}

// Function to update item quantity
function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// Function to remove item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}








