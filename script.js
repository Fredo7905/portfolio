document.addEventListener("DOMContentLoaded", () => {
    // Gestion du formulaire de contact
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Merci pour votre message, Frédéric ! Nous vous répondrons dès que possible.");
        form.reset();
    });

    // Défilement fluide
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});




