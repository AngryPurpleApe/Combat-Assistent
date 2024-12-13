window.onload = function() {
    createWizards();
    createMonsterGroups();
}

function createWizards() {
    const wizardsContainer = document.getElementById("wizardsContainer");
    let wizardCount = prompt("How many Wizards are there?", "1");

    if (isNaN(wizardCount) || wizardCount <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    for (let i = 1; i <= wizardCount; i++) {
        let wizardName = prompt(`What is the name of Wizard ${i}?`, `Wizard ${i}`);
        let spellLevel = prompt(`What level of spells can ${wizardName} cast?`, "1");

        if (isNaN(spellLevel) || spellLevel <= 0) {
            alert("Please enter a valid number.");
            continue;
        }

        const wizardDiv = document.createElement("div");
        wizardDiv.className = "wizard";
        wizardDiv.innerHTML = `<h2>${wizardName}</h2>`;

        const lifeCounter = createCounter(`${wizardName}-Life`, "Life Points", "life-counter");
        wizardDiv.appendChild(lifeCounter);

        for (let j = 1; j <= spellLevel; j++) {
            const spellCounter = createCounter(`${wizardName}-Spell-${j}`, `Spell Level ${j}`, "spell-counter");
            wizardDiv.appendChild(spellCounter);
        }

        wizardsContainer.appendChild(wizardDiv);
    }
}

function createMonsterGroups() {
    const groupsContainer = document.getElementById("groupsContainer");
    let groupCount = prompt("How many Monster Groups are there?", "1");

    if (isNaN(groupCount) || groupCount <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    for (let i = 1; i <= groupCount; i++) {
        let groupName = prompt(`What is the name of Monster Group ${i}?`, `Group ${i}`);
        let monsterCount = prompt(`How many monsters are there in ${groupName}?`, "1");

        if (isNaN(monsterCount) || monsterCount <= 0) {
            alert("Please enter a valid number.");
            continue;
        }

        const groupDiv = document.createElement("div");
        groupDiv.className = "group";
        groupDiv.innerHTML = `<h2>${groupName}</h2>`;
        
        for (let j = 1; j <= monsterCount; j++) {
            const monsterCounter = createCounter(`${groupName}-${j}`, `${groupName} ${j}`, "life-counter");
            groupDiv.appendChild(monsterCounter);
        }
        groupsContainer.appendChild(groupDiv);
    }
}

function createCounter(entityId, label, className) {
    const counterDiv = document.createElement("div");
    counterDiv.className = `counter ${className}`;
    counterDiv.innerHTML = `
        <h3>${label}</h3>
        <div class="life-value" id="lifeCounter-${entityId}">0</div>
        <div class="buttons">
            <button onclick="changeLife('${entityId}', -5)">-5</button>
            <button onclick="changeLife('${entityId}', -1)">-1</button>
            <button onclick="changeLife('${entityId}', 1)">+1</button>
            <button onclick="changeLife('${entityId}', 5)">+5</button>
        </div>
    `;
    return counterDiv;
}

function changeLife(entityId, amount) {
    const lifeCounter = document.getElementById(`lifeCounter-${entityId}`);
    let currentLife = parseInt(lifeCounter.textContent);
    currentLife += amount;
    lifeCounter.textContent = currentLife;
}