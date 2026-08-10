let webFragments = 300; // On commence avec 300 pour tester un peu plus

// Base de données de 30 cartes
const cardsDB = [
    { id: 1, name: "Spider-Man (Tobey)", rarity: "rare", attack: 18, defense: 15 },
    { id: 2, name: "Spider-Man (Andrew)", rarity: "rare", attack: 19, defense: 13 },
    { id: 3, name: "Spider-Man (Tom)", rarity: "gold", attack: 22, defense: 20 },
    { id: 4, name: "Miles Morales", rarity: "rare", attack: 20, defense: 16 },
    { id: 5, name: "Gwen Stacy", rarity: "common", attack: 14, defense: 12 },
    { id: 6, name: "Bouffon Vert", rarity: "gold", attack: 24, defense: 18 },
    { id: 7, name: "Doctor Octopus", rarity: "rare", attack: 17, defense: 19 },
    { id: 8, name: "Spider-Man 2099", rarity: "gold", attack: 25, defense: 22 },
    { id: 9, name: "Spider-Punk", rarity: "rare", attack: 21, defense: 14 },
    { id: 10, name: "Spider-Man Noir", rarity: "rare", attack: 18, defense: 18 },
    { id: 11, name: "Peni Parker", rarity: "common", attack: 12, defense: 20 },
    { id: 12, name: "Spider-Ham", rarity: "common", attack: 10, defense: 10 },
    { id: 13, name: "Venom", rarity: "gold", attack: 26, defense: 24 },
    { id: 14, name: "Carnage", rarity: "mythic", attack: 30, defense: 15 },
    { id: 15, name: "Le Caïd", rarity: "rare", attack: 16, defense: 25 },
    { id: 16, name: "Electro", rarity: "common", attack: 18, defense: 10 },
    { id: 17, name: "L'Homme-Sable", rarity: "rare", attack: 15, defense: 22 },
    { id: 18, name: "Mysterio", rarity: "rare", attack: 19, defense: 17 },
    { id: 19, name: "Le Vautour", rarity: "common", attack: 15, defense: 14 },
    { id: 20, name: "Kraven", rarity: "rare", attack: 20, defense: 15 },
    { id: 21, name: "Le Lézard", rarity: "common", attack: 17, defense: 16 },
    { id: 22, name: "Rhino", rarity: "rare", attack: 14, defense: 26 },
    { id: 23, name: "La Tache (Spot)", rarity: "mythic", attack: 28, defense: 28 },
    { id: 24, name: "Mary Jane", rarity: "common", attack: 5, defense: 5 },
    { id: 25, name: "Tante May", rarity: "common", attack: 2, defense: 10 },
    { id: 26, name: "Ned Leeds", rarity: "common", attack: 4, defense: 8 },
    { id: 27, name: "Black Cat", rarity: "rare", attack: 18, defense: 12 },
    { id: 28, name: "Silver Sable", rarity: "rare", attack: 17, defense: 16 },
    { id: 29, name: "Symbiote Spidey", rarity: "gold", attack: 25, defense: 19 },
    { id: 30, name: "Cosmic Spider-Man", rarity: "mythic", attack: 35, defense: 30 }
];

let playerCollection = [1, 5]; // Tobey et Gwen par défaut

// Gestion des UI
function switchTab(tabId, btn) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (tabId === 'collection') renderCollection();
}

function renderCollection() {
    const grid = document.getElementById('collection-grid');
    grid.innerHTML = '';

    cardsDB.forEach(card => {
        const isOwned = playerCollection.includes(card.id);
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.rarity} ${isOwned ? '' : 'locked'}`;
        cardDiv.innerHTML = `
            <h4>${isOwned ? card.name : "???"}</h4>
            <div class="stats">${isOwned ? `ATK: ${card.attack} | DEF: ${card.defense}` : "🔒 Verrouillé"}</div>
            <div class="rarity-tag" style="color: ${cardRarityColor(card.rarity)}">${card.rarity}</div>
        `;
        grid.appendChild(cardDiv);
    });

    updateFragmentsUI();
    document.getElementById('collection-count').innerText = `${playerCollection.length} / ${cardsDB.length}`;
}

// Custom Modal au lieu des alert()
function showModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('custom-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('active');
}

// Mise à jour de la monnaie avec petit effet visuel
function updateFragmentsUI() {
    const fragEl = document.getElementById('web-fragments');
    fragEl.innerText = webFragments;
    fragEl.parentElement.classList.add('bump');
    setTimeout(() => fragEl.parentElement.classList.remove('bump'), 200);
}

// Algorithme de Gacha (Drop Rates)
function pullRandomCard() {
    const rand = Math.random() * 100;
    let targetRarity;
    
    // Taux : 60% Common, 30% Rare, 8% Gold, 2% Mythic
    if (rand < 60) targetRarity = "common";
    else if (rand < 90) targetRarity = "rare";
    else if (rand < 98) targetRarity = "gold";
    else targetRarity = "mythic";

    const pool = cardsDB.filter(c => c.rarity === targetRarity);
    if(pool.length === 0) return cardsDB[Math.floor(Math.random() * cardsDB.length)]; // Securité
    return pool[Math.floor(Math.random() * pool.length)];
}

// Ouverture Cinématique
function openBooster() {
    if (webFragments < 100) {
        showModal("Fonds Insuffisants", "Vous n'avez pas assez de Fragments de Toile (100 requis).");
        return;
    }

    // Animation du bouton
    const btn = document.getElementById('open-btn');
    btn.classList.add('shaking');
    setTimeout(() => btn.classList.remove('shaking'), 400);

    webFragments -= 100;
    updateFragmentsUI();

    const resultDiv = document.getElementById('booster-result');
    resultDiv.innerHTML = `<h3 style="color:#f0f6fc; margin-bottom:15px; font-size:1.1rem; text-align:center;">Ouverture en cours...</h3>`;
    
    let subGrid = document.createElement('div');
    subGrid.className = 'cards-grid';
    resultDiv.appendChild(subGrid);

    document.getElementById('booster-actions').style.display = 'none';

    // Tirer 3 cartes
    let pulledCards = [pullRandomCard(), pullRandomCard(), pullRandomCard()];
    let totalScrap = 0;

    // Apparition carte par carte (Cinématique)
    pulledCards.forEach((c, index) => {
        setTimeout(() => {
            let isDuplicate = playerCollection.includes(c.id);
            let dupMsg = "";

            if (isDuplicate) {
                // Système de recyclage des doublons
                let scrap = c.rarity === 'common' ? 10 : (c.rarity === 'rare' ? 25 : (c.rarity === 'gold' ? 50 : 100));
                totalScrap += scrap;
                dupMsg = `<div class="dup-msg">Doublon ! +${scrap} 🕸️</div>`;
            } else {
                playerCollection.push(c.id);
            }

            subGrid.innerHTML += `
                <div class="card ${c.rarity} revealed" style="animation-delay: 0s;">
                    <h4>${c.name}</h4>
                    <div class="stats">ATK: ${c.attack} | DEF: ${c.defense}</div>
                    <div class="rarity-tag" style="color: ${cardRarityColor(c.rarity)}">${c.rarity}</div>
                    ${dupMsg}
                </div>
            `;

            // Si c'est la dernière carte, on met à jour les fragments gagnés via doublons
            if (index === 2) {
                setTimeout(() => {
                    if(totalScrap > 0) {
                        webFragments += totalScrap;
                        updateFragmentsUI();
                        showModal("Recyclage Terminé", `Vos doublons ont été convertis en ${totalScrap} Fragments de toile !`);
                    }
                    document.getElementById('booster-actions').style.display = 'block';
                    renderCollection();
                }, 800); // Attendre un peu après la dernière carte
            }

        }, (index + 1) * 600); // 600ms entre chaque carte
    });
}

function clearBooster() {
    document.getElementById('booster-result').innerHTML = '';
    document.getElementById('booster-actions').style.display = 'none';
}

function cardRarityColor(rarity) {
    if(rarity === 'mythic') return '#ff0055';
    if(rarity === 'gold') return '#f0883e';
    if(rarity === 'rare') return '#58a6ff';
    return '#8b949e';
}

window.onload = function() {
    renderCollection();
};
