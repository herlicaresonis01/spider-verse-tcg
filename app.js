let webFragments = 500;

// MÉGA BASE DE DONNÉES (50 Cartes)
const cardsDB = [
    { id: 1, name: "Spider-Man", version: "Costume Fait Maison (Tobey)", rarity: "common", attack: 10, defense: 12 },
    { id: 2, name: "Spider-Man", version: "Héros de New York (Tobey)", rarity: "rare", attack: 18, defense: 15 },
    { id: 3, name: "Spider-Man", version: "Costume Symbiote (Tobey)", rarity: "gold", attack: 24, defense: 18 },
    { id: 4, name: "Spider-Man", version: "Le Justicier (Andrew)", rarity: "common", attack: 12, defense: 10 },
    { id: 5, name: "Spider-Man", version: "The Amazing (Andrew)", rarity: "rare", attack: 19, defense: 13 },
    { id: 6, name: "Spider-Man", version: "Rage Perdue (Andrew)", rarity: "gold", attack: 23, defense: 12 },
    { id: 7, name: "Spider-Man", version: "Stark Suit (Tom)", rarity: "rare", attack: 17, defense: 17 },
    { id: 8, name: "Spider-Man", version: "Iron Spider (Tom)", rarity: "gold", attack: 22, defense: 25 },
    { id: 9, name: "Spider-Man", version: "Costume Intégré (Tom)", rarity: "mythic", attack: 28, defense: 26 },
    { id: 10, name: "Miles Morales", version: "Graffeur de Brooklyn", rarity: "common", attack: 14, defense: 12 },
    { id: 11, name: "Miles Morales", version: "Into the Spider-Verse", rarity: "rare", attack: 20, defense: 16 },
    { id: 12, name: "Gwen Stacy", version: "Spider-Gwen", rarity: "rare", attack: 18, defense: 19 },
    { id: 13, name: "Spider-Man 2099", version: "Miguel O'Hara", rarity: "gold", attack: 26, defense: 22 },
    { id: 14, name: "Spider-Punk", version: "Hobie Brown", rarity: "rare", attack: 21, defense: 14 },
    { id: 15, name: "Spider-Man Noir", version: "Détective des années 30", rarity: "rare", attack: 18, defense: 18 },
    { id: 16, name: "Cosmic Spider-Man", version: "Capitaine Univers", rarity: "mythic", attack: 35, defense: 30 },
    { id: 17, name: "Venom", version: "Hôte Imparfait", rarity: "common", attack: 16, defense: 15 },
    { id: 18, name: "Venom", version: "Protecteur Létal", rarity: "rare", attack: 22, defense: 20 },
    { id: 19, name: "Venom", version: "Eddie Brock (Film)", rarity: "gold", attack: 26, defense: 24 },
    { id: 20, name: "Venom", version: "Roi en Noir", rarity: "mythic", attack: 32, defense: 28 },
    { id: 21, name: "Bouffon Vert", version: "Norman Osborn", rarity: "gold", attack: 25, defense: 18 },
    { id: 22, name: "Doctor Octopus", version: "Otto Octavius", rarity: "rare", attack: 19, defense: 22 },
    { id: 23, name: "L'Homme-Sable", version: "Flint Marko", rarity: "rare", attack: 15, defense: 25 },
    { id: 24, name: "Nouveau Bouffon", version: "Harry Osborn", rarity: "rare", attack: 20, defense: 16 },
    { id: 25, name: "Le Lézard", version: "Dr. Connors", rarity: "rare", attack: 21, defense: 18 },
    { id: 26, name: "Electro", version: "Maxwell Dillon", rarity: "gold", attack: 27, defense: 15 },
    { id: 27, name: "Rhino", version: "Armure Mécanique", rarity: "common", attack: 18, defense: 25 },
    { id: 28, name: "Le Vautour", version: "Adrian Toomes", rarity: "rare", attack: 18, defense: 18 },
    { id: 29, name: "Mysterio", version: "Maître des Illusions", rarity: "gold", attack: 24, defense: 14 },
    { id: 30, name: "Shocker", version: "Herman Schultz", rarity: "common", attack: 15, defense: 12 },
    { id: 31, name: "Carnage", version: "Cletus Kasady", rarity: "mythic", attack: 30, defense: 15 },
    { id: 32, name: "Le Caïd", version: "Wilson Fisk", rarity: "gold", attack: 22, defense: 28 },
    { id: 33, name: "La Tache", version: "Anomalie Multiverselle", rarity: "mythic", attack: 28, defense: 28 },
    { id: 34, name: "Kraven", version: "Le Chasseur", rarity: "rare", attack: 23, defense: 16 },
    { id: 35, name: "Le Rôdeur", version: "Aaron Davis", rarity: "rare", attack: 19, defense: 17 },
    { id: 36, name: "Morbius", version: "Vampire Vivant", rarity: "rare", attack: 20, defense: 19 },
    { id: 37, name: "Scorpion", version: "Mac Gargan", rarity: "common", attack: 17, defense: 14 },
    { id: 38, name: "Tombstone", version: "Peau Impénétrable", rarity: "common", attack: 15, defense: 22 },
    { id: 39, name: "Mr. Negative", version: "Martin Li", rarity: "gold", attack: 24, defense: 20 },
    { id: 40, name: "MJ", version: "Kirsten Dunst", rarity: "common", attack: 2, defense: 5 },
    { id: 41, name: "Zendaya (MJ)", version: "Michelle Jones", rarity: "common", attack: 4, defense: 8 },
    { id: 42, name: "Ned Leeds", version: "Le Gars de la Chaise", rarity: "common", attack: 3, defense: 10 },
    { id: 43, name: "Tante May", version: "Sagesse Éternelle", rarity: "common", attack: 0, defense: 15 },
    { id: 44, name: "J. Jonah Jameson", version: "Daily Bugle", rarity: "common", attack: 10, defense: 5 },
    { id: 45, name: "Black Cat", version: "Felicia Hardy", rarity: "rare", attack: 19, defense: 15 },
    { id: 46, name: "Silver Sable", version: "Mercenaire", rarity: "rare", attack: 18, defense: 16 },
    { id: 47, name: "Capitaine Stacy", version: "NYPD", rarity: "common", attack: 12, defense: 14 },
    { id: 48, name: "Madame Web", version: "Voyante du Tissu", rarity: "gold", attack: 10, defense: 25 },
    { id: 49, name: "Agent Venom", version: "Flash Thompson", rarity: "gold", attack: 24, defense: 22 },
    { id: 50, name: "Iron Man", version: "Mentor de Peter", rarity: "mythic", attack: 28, defense: 25 }
];

let playerCollection = [1, 4, 28, 38, 42]; // J'ai ajouté Vautour et Tombstone pour que tu puisses tester direct

// --- LA FONCTION MAGIQUE QUI TESTE TOUTES LES EXTENSIONS ---
function getSmartImageTag(id, isOwned) {
    const fallback = `https://via.placeholder.com/150x190/161b22/8b949e?text=ID+${id}`;
    if (!isOwned) return `<img src="${fallback}">`;
    
    // Tente png -> jpg -> jpeg -> webp -> JPG majuscule -> fallback
    return `<img src="images/${id}.png" 
        onerror="this.onerror=null; 
        this.src='images/${id}.jpg'; 
        this.onerror=function(){ this.src='images/${id}.jpeg'; 
        this.onerror=function(){ this.src='images/${id}.webp'; 
        this.onerror=function(){ this.src='images/${id}.JPG'; 
        this.onerror=function(){ this.src='${fallback}'; 
        }; }; }; };">`;
}

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
    const sortedCards = [...cardsDB].sort((a, b) => a.id - b.id);

    sortedCards.forEach(card => {
        const isOwned = playerCollection.includes(card.id);
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.rarity} ${isOwned ? '' : 'locked'}`;
        
        cardDiv.innerHTML = `
            <div class="card-image-container">
                ${getSmartImageTag(card.id, isOwned)}
            </div>
            <div>
                <h4>${isOwned ? card.name : "???"}</h4>
                <div class="card-version">${isOwned ? card.version : "Donnée Inconnue"}</div>
            </div>
            <div class="stats">${isOwned ? `ATK: ${card.attack} | DEF: ${card.defense}` : "🔒 Verrouillé"}</div>
            <div class="rarity-tag" style="color: ${cardRarityColor(card.rarity)}">${card.rarity}</div>
        `;
        grid.appendChild(cardDiv);
    });

    updateFragmentsUI();
    document.getElementById('collection-count').innerText = `${playerCollection.length} / ${cardsDB.length}`;
}

function showModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('custom-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('active');
}

function updateFragmentsUI() {
    const fragEl = document.getElementById('web-fragments');
    fragEl.innerText = webFragments;
    fragEl.parentElement.classList.add('bump');
    setTimeout(() => fragEl.parentElement.classList.remove('bump'), 200);
}

function pullRandomCard() {
    const rand = Math.random() * 100;
    let targetRarity = rand < 60 ? "common" : rand < 90 ? "rare" : rand < 98 ? "gold" : "mythic";
    const pool = cardsDB.filter(c => c.rarity === targetRarity);
    return pool.length === 0 ? cardsDB[Math.floor(Math.random() * cardsDB.length)] : pool[Math.floor(Math.random() * pool.length)];
}

function openBooster() {
    if (webFragments < 100) {
        showModal("Fonds Insuffisants", "Vous n'avez pas assez de Fragments de Toile (100 requis).");
        return;
    }

    const btn = document.getElementById('open-btn');
    btn.classList.add('shaking');
    setTimeout(() => btn.classList.remove('shaking'), 400);

    webFragments -= 100;
    updateFragmentsUI();

    const resultDiv = document.getElementById('booster-result');
    resultDiv.innerHTML = `<h3 style="color:#f0f6fc; margin:15px 0 10px 0; font-size:1.1rem; text-align:center;">Scanner Multiversel en cours...</h3>`;
    
    let subGrid = document.createElement('div');
    subGrid.className = 'cards-grid';
    resultDiv.appendChild(subGrid);

    document.getElementById('booster-actions').style.display = 'none';

    let pulledCards = [pullRandomCard(), pullRandomCard(), pullRandomCard()];
    let totalScrap = 0;

    pulledCards.forEach((c, index) => {
        setTimeout(() => {
            let isDuplicate = playerCollection.includes(c.id);
            let dupMsg = "";

            if (isDuplicate) {
                let scrap = c.rarity === 'common' ? 10 : (c.rarity === 'rare' ? 25 : (c.rarity === 'gold' ? 60 : 150));
                totalScrap += scrap;
                dupMsg = `<div class="dup-msg">Doublon ! +${scrap} 🕸️</div>`;
            } else {
                playerCollection.push(c.id);
            }

            subGrid.innerHTML += `
                <div class="card ${c.rarity} revealed">
                    <div class="card-image-container">
                        ${getSmartImageTag(c.id, true)}
                    </div>
                    <div>
                        <h4>${c.name}</h4>
                        <div class="card-version">${c.version}</div>
                    </div>
                    <div class="stats">ATK: ${c.attack} | DEF: ${c.defense}</div>
                    <div class="rarity-tag" style="color: ${cardRarityColor(c.rarity)}">${c.rarity}</div>
                    ${dupMsg}
                </div>
            `;

            if (index === 2) {
                setTimeout(() => {
                    if(totalScrap > 0) {
                        webFragments += totalScrap;
                        updateFragmentsUI();
                        showModal("Recyclage Terminé", `Vos doublons ont été convertis en ${totalScrap} Fragments de toile !`);
                    }
                    document.getElementById('booster-actions').style.display = 'block';
                    renderCollection();
                }, 800);
            }
        }, (index + 1) * 600);
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

window.onload = renderCollection;
