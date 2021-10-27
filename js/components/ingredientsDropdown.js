import { recipes } from "../../data/recipes.js"
import { listUstansils, listIngredients, listAppliance } from "../../data/dataHandler.js"
import { createDomElement } from "../utils/tools.js"
import { createDropdown, dataInDropdown, eventDropdown, zoneDropdown, dropdownIngredients, dropdownAppareil, dropdownUstensiles, dropdownBlue, dropdownIng, dropdownGreen, dropApp, dropdownSalmon, dropdownUst, inputInDropdownBlue, inputInDropdownGreen, inputInDropdownSalmon, name1, name2, name3 } from "./dropdownHandler.js"
import { createCardsForDom } from "../components/card-recipes.js"
import { createTag } from "../components/view/tag.js"

/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

// const elms = document.querySelectorAll(".ingredient")


// export let ingredientBox = []
// export let ingredientSelected = []

// const pushInTheBox = (word, input, box) => {
//     if (!word.indexOf(input.value)) {
//         box.push(word)

//     }
// }

// // Ecoute de l'input
// dropdownBlue.addEventListener('input', () => {
//     // Si il y a plus de 2 caractères
//     if (inputInDropdownBlue.value.length > 2) {
//         ingredientBox = []
//             //Pour chaque ingrédients...
//         listIngredients.forEach((ingredient) => {
//             pushInTheBox(ingredient, inputInDropdownBlue, ingredientBox)
//         })
//     }
//     dataInDropdown("ingredient", "p", "dropdownIngredients", ingredientBox)
// });