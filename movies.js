document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".movie");
  const noMoviesMsg = document.getElementById("noMoviesMsg");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

      const chosenCategory = button.getAttribute("data-target");

      if (chosenCategory === "upcoming") {
        items.forEach(item => item.classList.add("hidden"));
        
        if (noMoviesMsg) {
          noMoviesMsg.classList.remove("hidden");
          noMoviesMsg.classList.remove("fade"); 
          void noMoviesMsg.offsetWidth;        
          noMoviesMsg.classList.add("fade");    
        }
      } else {
        if (noMoviesMsg) {
          noMoviesMsg.classList.add("hidden");
          noMoviesMsg.classList.remove("fade");
        }   

      items.forEach(item => {
        const movieCategory = item.getAttribute("data-category");

        if (chosenCategory === "all" || movieCategory === chosenCategory) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
        });
      }
    });
  });
});
