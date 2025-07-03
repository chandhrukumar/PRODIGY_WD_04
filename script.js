// Change nav background on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#222"; // darker background
        header.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.backgroundColor = "#333"; // default color
        header.style.boxShadow = "none";
    }
});

// Hover effect using JavaScript (optional if you don't use CSS :hover)
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#00ffff"; // highlight color
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "white"; // default color
    });
});
