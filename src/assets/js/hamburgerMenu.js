const navList = document.getElementById("nav-list");
document.getElementById("hamburger").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("hamburger--is-toggled");
  navList.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});
