// import { recipes } from "./data/recipes.js"
// import { listUstansils, listIngredients, listAppliance } from "./data/dataHandler.js"
// import { createDomElement } from "./js/utils/tools.js"
// import { createDropdown, dataInDropdown, eventDropdown, zoneDropdown, dropdownIngredients, dropdownAppareil, dropdownUstensiles, dropdownBlue, dropdownIng, dropdownGreen, dropApp, dropdownSalmon, dropdownUst, inputInDropdownBlue, inputInDropdownGreen, inputInDropdownSalmon, name1, name2, name3 } from "./js/components/dropdown.js"
// import { createCardsForDom } from "./js/components/card-recipes.js"

export const dropdownBlue = document.querySelector(".dropdownBlue")

dropdownBlue.addEventListener('input', (evt) => {
    console.log(evt); // Do something
});