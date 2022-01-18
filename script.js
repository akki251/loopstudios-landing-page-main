var hamber = document.querySelector(".hamber-icon");
var baseNav = document.querySelector(".base-nav");
var close = document.querySelector(".close-icon");
var navopen = document.querySelector(".nav-open");
var navItems = document.querySelectorAll(".nav-list-items");

console.log(navopen);
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    baseNav.classList.remove("nav-open");
  });
}

hamber.addEventListener("click", () => {
  baseNav.classList.add("nav-open");
});

close.addEventListener("click", () => {
  baseNav.classList.remove("nav-open");
});
