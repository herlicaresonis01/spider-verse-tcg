// Données du jeu & Cartes
let webFragments = 150;

const cardsDB = [
    { id: 1, name: "Spider-Man (Tobey)", rarity: "rare", attack: 18, defense: 15 },
    { id: 2, name: "Spider-Man (Andrew)", rarity: "rare", attack: 19, defense: 13 },
    { id: 3, name: "Spider-Man (Tom)", rarity: "gold", attack: 22, defense: 20 },
    { id: 4, name: "Miles Morales", rarity: "rare", attack: 20, defense: 16 },
    { id: 5, name: "Gwen Stacy", rarity: "common", attack: 14, defense: 12 },
    { id: 6, name: "Bouffon Vert", rarity: "gold", attack: 24, defense: 18 },
    { id: 7, name: "Doctor Octopus", rarity: "rare", attack: 17, defense: 19 }
];

// État de la collection du joueur (IDs possédés)
let playerCollection = [1, 5]; // Possède Tobey et Gwen au début

// Navigation entre les onglets
function switchTab(tabId, btn) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if(tabId === 'collection') {
        renderCollection();
    }
}

// Affichage de la collection
function renderCollection() {
    const grid = document.getElementById('collection-grid');
    grid.innerHTML = '';

    cardsDB.forEach(card => {
        const isOwned = playerCollection.includes(card.id);
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.rarity} ${isOwned ? '' : 'locked'}`;
        
        cardDiv.innerHTML = `
            <h4>${isOwned ? card.name : "???"}</h4>
            <div class="stats">${isOwned ? `ATK: ${card.attack} | DEF: ${card.defense}` : "Non débloqué"}</div>
            <div class="stats" style="text-transform:uppercase; font-size:0.7rem; margin-top:4px;">[${card.rarity}]</div>
        `;
        grid.appendChild(cardDiv);
    });

    document.getElementById('web-fragments').innerText = webFragments;
}

// Système d'ouverture de booster
function openBooster() {
    if (webFragments < 100) {
        alert("Pas assez de Fragments de Toile !");
        return;
    }

    webFragments -= 100;
    document.getElementById('web-fragments').innerText = webFragments;

    // Tirer 3 cartes aléatoires
    let pulledCards = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * cardsDB.length);
        const card = cardsDB[randomIndex];
        pulledCards.push(card);
        if (!playerCollection.includes(card.id)) {
            playerCollection.push(card.id);
        }
    }

    // Afficher le résultat
    const resultDiv = document.getElementById('booster-result');
    resultDiv.innerHTML = `<h3 style="margin:15px 0 10px 0; color:#58a6ff;">Cartes obtenues :</h3>`;
    
    pulledCards.forEach(c => {
        resultDiv.innerHTML += `
            <div class="card ${c.rarity}" style="margin-bottom: 8px;">
                <h4>${c.name}</h4>
                <div class="stats">ATK: ${c.attack} | DEF: ${c.defense} - [${c.rarity}]</div>
            </div>
        `;
    });
}

// Initialisation au chargement
window.onload = function() {
    renderCollection();
};
