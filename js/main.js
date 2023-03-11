let openMenu = document.querySelector(".open-menu"),
  closeMenu = document.querySelector(".close-menu"),
  navbar = document.getElementsByTagName("nav")[0],
  layer = document.querySelector(".layer");

openMenu.addEventListener("click", () => {
  navbar.classList.add("active");
  layer.classList.add("brightless");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
  layer.classList.remove("brightless");
});
