

let matchesNumber = 50;

// enlever un certain nombre d'allumettes
function remove(numbRemoved) {
    matchesNumber = matchesNumber - numbRemoved;
    console.log("Il reste " + matchesNumber +  " allumettes.");
};

// demander à l'utilisateur le nombre à retirer jusqu'à ce qu'il n'y ai plus d'allumettes
// avec les règles du jeu incluses
while (matchesNumber>0) {
    let numbRemoved = prompt("Combien d'allumettes voulez vous retirer? Entrez un chiffre entre 1 et 6");
    if (numbRemoved>6 || numbRemoved<1) {
        alert("Vous devez entrer un chiffre entre 1 et 6.");
    } else if (numbRemoved>matchesNumber) {
        alert("Il ne reste pas suffisamment d'allumettes");
    } else if(typeof(numbRemoved) != "number") {
        alert("Rentrez uniquement des chiffres s'il vous plait");
    } else {
        remove(numbRemoved);
    }
}; 

