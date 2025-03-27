document.addEventListener("DOMContentLoaded", () => {
    // Gestion du formulaire de contact (si tu l’ajoutes plus tard)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Merci pour votre message, Frédéric ! Nous vous répondrons dès que possible.");
            form.reset();
        });
    }

    // Défilement fluide des ancres
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}





