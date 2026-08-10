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

let playerCollection = [1, 5]; // Possède Tobey et Gwen au démarrage

function switchTab(tabId, btn) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (tabId === 'collection') {
        renderCollection();
    }
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
            <div class="rarity-tag" style="color: ${card.rarity === 'gold' ? '#f0883e' : card.rarity === 'rare' ? '#58a6ff' : '#8b949e'}">${card.rarity}</div>
        `;
        grid.appendChild(cardDiv);
    });

    document.getElementById('web-fragments').innerText = webFragments;
    document.getElementById('collection-count').innerText = `${playerCollection.length} / ${cardsDB.length}`;
}

function openBooster() {
    if (webFragments < 100) {
        alert("Fragments de Toile insuffisants !");
        return;
    }

    webFragments -= 100;
    document.getElementById('web-fragments').innerText = webFragments;

    let pulledCards = [];
    for (let i = 0; i < 3; i++) {
        const randomCard = cardsDB[Math.floor(Math.random() * cardsDB.length)];
        pulledCards.push(randomCard);
        if (!playerCollection.includes(randomCard.id)) {
            playerCollection.push(randomCard.id);
        }
    }

    const resultDiv = document.getElementById('booster-result');
    resultDiv.innerHTML = `<h3 style="color:#58a6ff; font-size:1rem; margin-bottom:10px;">✨ Résultats du Booster :</h3>`;
    
    let subGrid = document.createElement('div');
    subGrid.className = 'cards-grid';
    
    pulledCards.forEach(c => {
        subGrid.innerHTML += `
            <div class="card ${c.rarity}">
                <h4>${c.name}</h4>
                <div class="stats">ATK: ${c.attack} | DEF: ${c.defense}</div>
                <div class="rarity-tag" style="color: ${c.rarity === 'gold' ? '#f0883e' : cardRarityColor(c.rarity)}">${c.rarity}</div>
            </div>
        `;
    });
    
    resultDiv.appendChild(subGrid);
    renderCollection();
}

function cardRarityColor(rarity) {
    if(rarity === 'gold') return '#f0883e';
    if(rarity === 'rare') return '#58a6ff';
    return '#8b949e';
}

window.onload = function() {
    renderCollection();
};
