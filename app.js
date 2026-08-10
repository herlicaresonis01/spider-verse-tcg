// Fonction pour basculer entre les onglets
function switchTab(tabId, btn) {
    // 1. Cacher tous les écrans
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });

    // 2. Afficher l'écran sélectionné
    document.getElementById(tabId).classList.add('active');

    // 3. Retirer la classe active de tous les boutons de la nav
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
    });

    // 4. Activer le bouton cliqué
    btn.classList.add('active');
}

// Logique simple pour le bouton d'ouverture de booster
document.getElementById('open-booster-btn').addEventListener('click', function() {
    alert("Ouverture du Booster MARVEL ! (Le système de cartes arrive à la prochaine étape)");
});
