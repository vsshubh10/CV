document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace(".html", "");
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
