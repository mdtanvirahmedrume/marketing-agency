// Assuming your navigation menu has a class called 'dropdown-content'
const dropdownMenu = document.querySelector('.dropdown-content');
const navclickButton = document.getElementById('navclick');
const navCloseButton = document.getElementById('navClose');

navclickButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden'); // Show/hide the menu
    navCloseButton.classList.remove('hidden'); // Show the cross SVG
    navclickButton.classList.add('hidden'); // Hide the menu icon
});

navCloseButton.addEventListener('click', () => {
    dropdownMenu.classList.add('hidden'); // Hide the menu
    navCloseButton.classList.add('hidden'); // Hide the cross SVG
    navclickButton.classList.remove('hidden'); // Show the menu icon
});
