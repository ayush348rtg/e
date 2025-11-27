const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const options = document.querySelectorAll(".menu-option");

function toggleMenu() {
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Close menu when clicking outside
overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Handle active state on click
options.forEach(option => {
  option.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page reload
    options.forEach(opt => opt.classList.remove("active")); // remove active from all
    option.classList.add("active"); // add active to clicked
  });
});