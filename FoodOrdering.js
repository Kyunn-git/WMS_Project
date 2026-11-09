function changeQty(button, amount) {
    let counter = button.parentElement;
    let quantity = counter.querySelector(".quantity");

    let currentQty = parseInt(quantity.innerText);

    currentQty += amount;

    if (currentQty < 0) {
        currentQty = 0;
    }

    quantity.innerText = currentQty;
}

function goToMenu(category) {

    let section = document.getElementById(category);

    section.scrollIntoView({
    behavior: "smooth",
    block: "start"
     });
}

function changeQty(button, delta) {
    const foodBox = button.closest('.FoodBox');
    const quantitySpan = foodBox.querySelector('.quantity');
    
    let currentQty = parseInt(quantitySpan.textContent);
    currentQty += delta;
    
    if (currentQty < 0) currentQty = 0; 
    quantitySpan.textContent = currentQty;
    
    updateCartTotal();
}


function updateCartTotal() {
    let totalItems = 0;
    let cartData = [];

    document.querySelectorAll('.FoodBox').forEach(box => {
        const qty = parseInt(box.querySelector('.quantity').textContent);
        if (qty > 0) {
            const nameText = box.querySelector('p').textContent;
            const price = box.getAttribute('data-price') || 0;
            
            totalItems += qty;
            cartData.push({ name: nameText, quantity: qty, price: price });
        }
    });

    document.getElementById('cartcount').textContent = totalItems;

    // Save cart data to localStorage for the next page/summary
    localStorage.setItem('cafeCart', JSON.stringify(cartData));
}