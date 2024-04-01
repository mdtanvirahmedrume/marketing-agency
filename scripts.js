let navclickButton = document.getElementById("navclick");
let navCloseButton = document.getElementById("navClose");
let dropdown = document.querySelector(".dropdown-content"); // Assuming your dropdown has a class 'dropdown-content'

navclickButton.addEventListener("click", () => {
  // Hide navclickButton, Show navCloseButton
  navclickButton.classList.add("hidden");
  navCloseButton.classList.remove("hidden");
  dropdown.classList.remove("hidden");
});

navCloseButton.addEventListener("click", () => {
  // Toggle visibility of navclickButton and navCloseButton
  navclickButton.classList.remove("hidden");
  navCloseButton.classList.add("hidden");

  // Hide the dropdown
  dropdown.classList.add("hidden");
});
