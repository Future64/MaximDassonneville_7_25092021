import { recipes } from "../../data/recipes.js"
import { listUstansils, listIngredients, listAppliance } from "../../data/dataHandler.js"
import { createDomElement } from "../utils/tools.js"
import { createDropdown, dataInDropdown, eventDropdown, zoneDropdown, dropdownIngredients, dropdownAppareil, dropdownUstensiles, dropdownBlue, dropdownIng, dropdownGreen, dropApp, dropdownSalmon, dropdownUst, inputInDropdownBlue, inputInDropdownGreen, inputInDropdownSalmon, name1, name2, name3 } from "../components/dropdown.js"
import { createCardsForDom } from "../components/card-recipes.js"

/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

const displayNone = document.querySelector(".displayNone")
const displayBlock = document.querySelector(".displayBlock")
const elm = document.querySelector(".ingredient")

export let ingredientBox = []

const pushInTheBox = (word, input, box) => {
    if (!word.indexOf(input.value)) {
        box.push(word)
    }
}

// Ecoute de l'input
dropdownBlue.addEventListener('input', () => {
    // Si il y a plus de 2 caractères
    if (inputInDropdownBlue.value.length > 2) {
        ingredientBox = []
            //Pour chaque ingrédients...
        listIngredients.forEach((ingredient) => {
            pushInTheBox(ingredient, inputInDropdownBlue, ingredientBox)
        })
        console.log(ingredientBox);
        dataInDropdown("ingredient", "p", "dropdownIngredients", ingredientBox)

    }
});