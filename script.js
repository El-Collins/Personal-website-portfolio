// JavaScript (script.js)

// Smooth scrolling when clicking on navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission handling
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form inputs
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // You can perform additional form handling here, such as sending the form data to a server

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  alert("Form submitted successfully!");
});
