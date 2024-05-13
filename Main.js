
$(function () {
    // Function to load header and footer
    function loadHeaderFooter() {
      
        $.get("/Components/Header/Navbar.html", function (data) {
            $("#header").html(data);
        });
       

        $.get("/Components/Footer/Footer.html", function (data) {
            $("#footer").html(data);
        });
    }
    // Call the function when the page loads
    loadHeaderFooter();
});

var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel)