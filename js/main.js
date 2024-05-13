
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




const scrollProgressElement = document.querySelector("#scroll-progress");
const scrollTopButton = document.querySelector("#scroll-top-btn");

function scrollProgress() {
    const totalBodyHeight = document.body.scrollHeight;
    const currentDistance = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.clientHeight;

    const scrollPercentage = (currentDistance / (totalBodyHeight - windowHeight)) * 100;

    scrollProgressElement.style.width = scrollPercentage.toFixed(2) + '%';;

    // Change scroll bar color based on scroll position
    if (scrollPercentage < 25) {
        scrollProgressElement.style.backgroundColor = '#E1AC0A';
    } else if (scrollPercentage < 50) {
        scrollProgressElement.style.backgroundColor = '#007DFF';
    } else if (scrollPercentage < 75) {
        scrollProgressElement.style.backgroundColor = '#fff';
    } else {
        scrollProgressElement.style.backgroundColor = '#007DFF';
    }

    // Show/hide scroll-to-top button
    if (currentDistance > windowHeight) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', scrollProgress);



