document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".movie");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

      const chosenCategory = button.getAttribute("data-target");

      items.forEach(item => {
        const movieCategory = item.getAttribute("data-category");

        if (chosenCategory === "all" || movieCategory === chosenCategory) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});
