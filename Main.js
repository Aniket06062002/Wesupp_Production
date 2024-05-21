
$(function () {
    // Function to load header and footer
    function loadHeaderFooter() {
      
        $.get("/Components/Header/Navbar.html", function (data) {
            $("#header").html(data);
        });
       
        $.get("/Components/Footer/Footer.html", function (data) {
            $("#footer").html(data);
        });

        $.get("/Components/Vision/vision.html", function (data) {
            $("#VisionMission").html(data);
        });

        $.get("/Components/Services/ServiseswithBtn.html", function (data) {
            $("ServisesWithBtn").html(data);
        });
        
        $.get("/Components/Services/ServiceComponent.html", function (data) {
            $("ServiceComponent").html(data);
        });
    }
    // Call the function when the page loads
    loadHeaderFooter();
});

var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel)