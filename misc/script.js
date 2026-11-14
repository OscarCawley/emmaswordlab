document.addEventListener('DOMContentLoaded', () => {
    const normalizePath = path => path.replace(/\/+$/, '') || '/';
    const currentPath = normalizePath(window.location.pathname);
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        if (normalizePath(link.pathname) === currentPath) {
            link.classList.add('active');
        }
    });
});

function toggleDropdown(index) {
    const dropdownContent = document.getElementById('dropdown-content-' + index);
    const arrow = document.getElementById('arrow-' + index);

    if (dropdownContent.style.maxHeight && dropdownContent.style.maxHeight !== '0px') {
        // Close the dropdown
        dropdownContent.style.maxHeight = '0px'; // Collapse to 0
        dropdownContent.style.padding = "0 10px"; // Remove vertical padding
        arrow.innerHTML = '&#9660;'; // Down arrow
    } else {
        // Open the dropdown
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // Set height dynamically
        dropdownContent.style.padding = "10px"; // Add vertical padding
        arrow.innerHTML = '&#9650;'; // Up arrow
    }
}

document.addEventListener('click', function(event) {
    const checkbox = document.getElementById('hamburger-input');
    const menuButton = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar-menu');

    if (
        event.target === checkbox ||
        menuButton.contains(event.target) ||
        sidebar.contains(event.target)
    ) {
        return;
    }

    checkbox.checked = false;
});