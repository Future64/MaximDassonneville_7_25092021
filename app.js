import { recipes } from "./data/recipes.js"
import { listUstansils, listIngredients, listAppliance } from "./data/dataHandler.js"
import { createDomElement } from "./js/utils/tools.js"
import { ingredientBox } from "./js/components/ingredientsDropdown.js"
import { createDropdown, dataInDropdown, eventDropdown, zoneDropdown, dropdownIngredients, dropdownAppareil, dropdownUstensiles, dropdownBlue, dropdownIng, dropdownGreen, dropApp, dropdownSalmon, dropdownUst, inputInDropdownBlue, inputInDropdownGreen, inputInDropdownSalmon, name1, name2, name3 } from "./js/components/dropdown.js"
import { createCardsForDom } from "./js/components/card-recipes.js"






//Intégrations des appareils dans le dropdown
dataInDropdown("appliance", "p", "dropdownAppliance", listAppliance)

//Intégrations des ustensils dans le dropdown
dataInDropdown("ustensil", "p", "dropdownUstensil", listUstansils)