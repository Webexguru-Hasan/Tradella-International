
// Visited-page-functionality-here

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll(".main-header__nav-link");

    navLinks.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});



