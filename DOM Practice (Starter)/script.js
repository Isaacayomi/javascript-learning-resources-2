const button = document.querySelector(".btn");
const nav_items = document.querySelector(".nav-items");
const body = document.querySelector(".body");

button.addEventListener("click", function () {
  if (nav_items.classList.contains("hidden")) {
    nav_items.classList.remove("hidden");
  } else {
    nav_items.classList.add("hidden");
  }
});
