// Fonction pour insérer un iframe "Croix" dans une cellule
function AddCroix() {
    const cells = document.querySelectorAll('.tic-tac-toe .cell');
    for (let cell of cells) {
        // Vérifie si la cellule est vide
        if (!cell.hasChildNodes()) {
            const iframe = document.createElement('iframe');
            iframe.src = "../Fichier.html/Croix.html";
            iframe.className = "CroixJeu";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            cell.appendChild(iframe);
            break; // Sort de la boucle après insertion
        }
    }
}

// Fonction pour insérer un iframe "Rond" dans une cellule
function AddCircle() {
    const cells = document.querySelectorAll('.tic-tac-toe .cell');
    for (let cell of cells) {
        // Vérifie si la cellule est vide
        if (!cell.hasChildNodes()) {
            const iframe = document.createElement('iframe');
            iframe.src = "../Fichier.html/Rond.html";
            iframe.className = "RondJeu";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            cell.appendChild(iframe);
            break; // Sort de la boucle après insertion
        }
    }
}
