const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuToggle.textContent = "✕";
    menuToggle.classList.add("active");
  } else {
    menuToggle.textContent = "☰";
    menuToggle.classList.remove("active");
  }
});
