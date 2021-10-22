let matchesNumber = 50;

// enlever un certain nombre d'allumettes
function remove(numbRemoved) {
    matchesNumber = matchesNumber - numbRemoved;
    console.log("Il reste " + matchesNumber +  " allumettes.");
};

// demander à l'utilisateur le nombre à retirer jusqu'à ce qu'il n'y ai plus d'allumettes
// avec les règles du jeu incluses
function game () {
    while (matchesNumber>0) {
        let numbRemoved = parseInt(prompt("Combien d'allumettes voulez vous retirer? Entrez un chiffre entre 1 et 6"));
        if (numbRemoved>6 || numbRemoved<1) {
            alert("Vous devez entrer un chiffre entre 1 et 6.");
        } else if (numbRemoved > matchesNumber) {
            alert("Il ne reste pas suffisamment d'allumettes");
        } else if (numbRemoved == NaN) {
            alert("N'écrivez pas en toutes lettres les chiffres que vous souhaitez entrer") }
        else {
            remove(numbRemoved);
        }
    }; 
    console.log("La partie est terminée, vous avez gagné");
};

// la vérification sur le prompt ne fonctionne pas comme on parse le résultat, ce sera à arranger quand on rentrera avec un input directement dans le corps du html

//notion de victoire


