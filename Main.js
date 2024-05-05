
$(function () {
    // Function to load header and footer
    function loadHeaderFooter() {
        // Load header
        $.get("header.html", function (data) {
            $("#header").html(data);
        });
        // Load footer
        $.get("footer.html", function (data) {
            $("#footer").html(data);
        });
    }
    // Call the function when the page loads
    loadHeaderFooter();
});