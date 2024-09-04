document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for each menu image
    document.querySelector('a[href="vegetarian-menu.html"]').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "vegetarian-menu.html"; // Navigate to vegetarian menu
    });

    document.querySelector('a[href="non-vegetarian-menu.html"]').addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "non-vegetarian-menu.html"; // Navigate to non-vegetarian menu
    });

    document.querySelector('a[href="desserts-menu.html"]').addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "desserts-menu.html"; // Navigate to desserts menu
    });
});
