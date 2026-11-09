function changeQty(button, amount) {
    let counter = button.parentElement;
    let quantity = counter.querySelector(".quantity");

    let currentQty = parseInt(quantity.innerText) || 0;
    currentQty += amount;

    if (currentQty < 0) {
        currentQty = 0;
    }

    quantity.innerText = currentQty;

    updateCartTotal();
}

function goToMenu(category) {

    let section = document.getElementById(category);

    section.scrollIntoView({
    behavior: "smooth",
    block: "start"
     });
}


function updateCartTotal() {
    let totalItems = 0;
    let subtotal = 0;
    let cartData = [];

    document.querySelectorAll('.FoodBox').forEach(box => {
        const qty = parseInt(box.querySelector('.quantity').textContent);
        if (qty > 0) {
            const nameText = box.querySelector('p').textContent;
            const price = parseFloat(box.getAttribute('data-priced')) || 0;
            
            totalItems += qty;
            subtotal += qty * price;
            cartData.push({ name: nameText, quantity: qty, price: price }); 
        }
    });

    const cartCountBadge = document.getElementById('cartcount');
    if (cartCountBadge) {
        cartCountBadge.textContent = totalItems;
    }

    localStorage.setItem('cafeCart', JSON.stringify(cartData));
    localStorage.setItem('cafeSubtotal', subtotal);

}

function goHome() {
    window.location.href = "index.html";
}


function openCart() {
    updateCartTotal(); 
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = localStorage.getItem('subtotal') || 0;
    
    const itemsContainer = document.getElementById('receiptitems');
    itemsContainer.innerHTML = "";

    if (cart.length === 0) {
        itemsContainer.innerHTML = "<p style='text-align: center;'>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            let itemTotal = item.quantity * item.price;
            let row = document.createElement('div');
            row.className = "receipt-item-row";
            row.innerHTML = `<span>${item.name} (x${item.quantity})</span> <span>$${itemTotal}</span>`;
            itemsContainer.appendChild(row);
        });
    }

    const subtotalDisplay = document.getElementById('subtotal');
    if (subtotalDisplay) {
        subtotalDisplay.textContent = `Subtotal: $${subtotal}`;
    }

    const cartPopup = document.getElementById('cart');
    if (cartPopup) {
        cartPopup.style.display = "flex";
    }
}

function closeCart() {
    document.getElementById('cart').style.display = "none";
}

function checkoutCart() {
    const cart = JSON.parse(localStorage.getItem('cafeCart')) || [];
    if (cart.length === 0) {
        const emptyCartMsg = confirm("Your cart is empty. Do you want to continue without ordering anything?");
        if (emptyCartMsg) {
            alert("Order confirmed! See you then! 🎥");
            window.location.href = "index.html"; 
        } else {
            closeCart();    
        }
        return;
    }
    
    let subtotal = localStorage.getItem('cafeSubtotal') || 0;
    alert("Order confirmed! See you then! 🎥");
    window.location.href = "index.html"; 

}

