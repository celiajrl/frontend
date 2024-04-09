// frontend/src/js/home.js
$(document).ready(function () {
    // Handle clicks on the sidebar
    $('.sidebar ul li a').on('click', function (event) {
        event.preventDefault();
        // Get the section id from the href
        var sectionId = $(this).attr('href').substring(1);
        // Load the content of the section into the main content
        loadContent(sectionId);
    });

    // Function to load the content of the section
    function loadContent(sectionId) {
        // Logic to load the content here
        // For example, you can use AJAX to load content from the server
        console.log('Loading content of section: ' + sectionId);
        // You can use a switch to handle different sections and load the corresponding content
    }
});
