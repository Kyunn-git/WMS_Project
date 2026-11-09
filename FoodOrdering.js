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