// Liste pour stocker l'historique
let history = [];

// Récupération DOM
const form = document.getElementById("calcForm");
const errorMsg = document.getElementById("error-msg");
const result = document.getElementById("result");
const historyList = document.getElementById("historyList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupération des valeurs
    let A = document.getElementById("numberA").value;
    let B = document.getElementById("numberB").value;
    let op = document.getElementById("operation").value;

    // Validation
    errorMsg.textContent = "";
    result.textContent = "";

    if (A === "" || B === "") {
        errorMsg.textContent = "Veuillez remplir tous les champs !!";
        return;
    }

    A = parseFloat(A);
    B = parseFloat(B);

    if (op === "/" && B === 0) {
        errorMsg.textContent = "Erreur : Division par zéro impossible.";
        return;
    }

    // Calcul de résultat
    let res;
    switch (op) {
        case "+": res = A + B; break;
        case "-": res = A - B; break;
        case "*": res = A * B; break;
        case "/": res = A / B; break;
    }

    result.textContent = "Résultat : " + res;

    // Ajout à l’historique
    const line = `${A} ${op} ${B} = ${res}`;
    history.push(line);

    updateHistory();
});

// Fonction mise à jour DOM de l’historique
function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
