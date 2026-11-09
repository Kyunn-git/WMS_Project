document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".movie-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-target");

      items.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (selectedCategory === "all" || itemCategory === selectedCategory) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});
