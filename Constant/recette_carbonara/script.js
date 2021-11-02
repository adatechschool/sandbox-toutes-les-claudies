const ingrédients = [
  "Pâtes",
  "Oeuf",
  "Sel",
  "Poivre",
  "Lardon",
  "Oignon",
  "Parmesan",
];

const combienDIngrédients = `${ingrédients.length} ingrédients sont nécessaires pour cette recette. La crème fraîche n'en fait PAS partie.`;

const ingrédientsTriés = [...ingrédients].sort();

let paragrapheCombienIngrédients = document.querySelector('#cb_ingrédients');
paragrapheCombienIngrédients.textContent = combienDIngrédients;

let listeIngrédients = document.querySelector('#ingrédients');

for (let i = 0 ; i < ingrédientsTriés.length ; i++) {
    let newLi = document.createElement('li');
    newLi.textContent = ingrédientsTriés[i];
    listeIngrédients.appendChild(newLi);
}