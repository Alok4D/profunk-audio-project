// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
// });
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Toggle icon
  if (navLinks.classList.contains("open")) {
    menuToggle.textContent = "✕"; // Close icon
    menuToggle.classList.add("active");
  } else {
    menuToggle.textContent = "☰"; // Hamburger icon
    menuToggle.classList.remove("active");
  }
});
