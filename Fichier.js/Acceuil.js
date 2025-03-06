document.addEventListener("DOMContentLoaded", function() {
    const eyes = document.querySelectorAll(".eye");

    // Faire cligner les yeux plusieurs fois avant de charger le jeu
    setTimeout(() => {
        eyes.forEach(eye => eye.classList.add("blink"));
    }, 1000);

    setTimeout(() => {
        eyes.forEach(eye => eye.classList.remove("blink"));
        window.location.href = "../Fichier.html/GamingStrate.html"; // Redirige vers le jeu après l'animation
    }, 4000);
});
