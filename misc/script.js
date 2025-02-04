document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'XPFHXBAC5H9LL',
        image: {
            src: 'https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif',
            alt: 'Donate with PayPal button',
            title: 'PayPal - The safer, easier way to pay online!',
        }
    }).render('#donate-button');
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

// Add a click event listener to the document
document.addEventListener('click', function(event) {
    // Get the checkbox element
    const checkbox = document.getElementById('hamburger-input');
    
    // Check if the click target is NOT the checkbox itself
    if (event.target !== checkbox) {
        // Uncheck the checkbox
        checkbox.checked = false;
    }
});