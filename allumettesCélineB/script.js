let matchesNumber = 50;

// enlever un certain nombre d'allumettes
function remove(numbRemoved) {
    matchesNumber = matchesNumber - numbRemoved;
    console.log("Il reste " + matchesNumber);
};

// demander à l'utilisateur le nombre à retirer jusqu'à ce qu'il n'y ai plus d'allumettes
while (matchesNumber>0) {
    let numbRemoved = prompt("Combien d'allumettes voulez vous retirer?");
    if (numbRemoved>matchesNumber) {
        console.log("Il ne reste pas suffisamment d'allumettes")} else {
        remove(numbRemoved);
        }
} 

