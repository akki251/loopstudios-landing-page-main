var hamber = document.querySelector(".hamber-icon");
var baseNav = document.querySelector(".base-nav");
var close = document.querySelector(".close-icon");
hamber.addEventListener("click", () => {
  baseNav.classList.add("nav-open");
 
});

close.addEventListener("click", () => {
  baseNav.classList.remove("nav-open");
});
