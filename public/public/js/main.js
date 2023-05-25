// Makes navbar effect atart at 72 pixels
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 72) {
    navbar.classList.add("backdrop-filter", "backdrop-blur-lg");
  } else {
    navbar.classList.remove("backdrop-filter", "backdrop-blur-lg");
  }
});
