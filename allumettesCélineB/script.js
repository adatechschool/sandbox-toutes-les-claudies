let matchesNumber = 50;

// enlever un certain nombre d'allumettes
function remove(numbRemoved) {
    matchesNumber = matchesNumber - numbRemoved;
};

// demander à l'utilisateur le nombre à retirer jusqu'à ce qu'il n'y ai plus d'allumettes
// avec les règles du jeu incluses
function game () {
    while (matchesNumber>0) {
        //First player 
        let pOneRemoved = parseInt(prompt("Combien d'allumettes voulez vous retirer? Entrez un chiffre entre 1 et 6"));
        if (pOneRemoved>6 || pOneRemoved<1) {
            alert("Vous devez entrer un chiffre entre 1 et 6.");
        } else if (pOneRemoved > matchesNumber) {
            alert("Il ne reste pas suffisamment d'allumettes");
        } else if (pOneRemoved == NaN) {
            alert("N'écrivez pas en toutes lettres les chiffres que vous souhaitez entrer") }
        else {
            remove(pOneRemoved);
            console.log(`Vous avez retiré ${pOneRemoved} allumettes, il en reste ${matchesNumber}`)
        };
        // vérification victoire joueur
        if(matchesNumber == 0) {
            console.log("La partie est terminée et vous avez gagné")
            break;
        }

        // Second player aka l'ordi
        if (matchesNumber<6) {
            let pTwoRemoved = (Math.floor(Math.random() * (matchesNumber - 1)) + 1);
            remove(pTwoRemoved);
            console.log(`L'ordinateur a retiré ${pTwoRemoved} allumettes, il en reste ${matchesNumber}`)  
        } else {
            let pTwoRemoved = (Math.floor(Math.random() * (6 - 1)) + 1);
            remove(pTwoRemoved);
            console.log(`L'ordinateur a retiré ${pTwoRemoved} allumettes, il en reste ${matchesNumber}`)
        };
        // vérification victoire ordinateur
        if(matchesNumber == 0) {
            console.log("La partie est terminée, l'ordinateur a gagné")
            break;
        }
    }; 
};

// la vérification sur le prompt ne fonctionne pas comme on parse le résultat, ce sera à arranger quand on rentrera avec un input directement dans le corps du html

//notion de victoire


