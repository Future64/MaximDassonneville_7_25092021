import { createDomElement } from "../tools.js"
import { listUstansils, listIngredients, listAppliance } from "../app.js"

const zoneDropdown = document.querySelector(".zoneDropdown")
const arrowInput = document.querySelectorAll(".bi-chevron-down")

// Nom des dropdowns
const dropdownIngredients = "Ingredients"
const dropdownAppareil = "Appareil"
const dropdownUstensiles = "Ustensiles"

// Creation des dropdowns
const createDropdown = (name1, name2, name3) => {
    return zoneDropdown.innerHTML = `  <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownBlue bg-primary" name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <p class="name1">${name1}</p>
                                                    <input type="text" class="inputInDropdownBlue displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer bg-primary dropdownIngredients displayNone" role="listbox"></div>
                                            </div>
                                        </div>
                                        <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownGreen " name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <p class="name2">${name2}</p>
                                                    <input type="text" class="inputInDropdownGreen displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer  dropdownAppliance displayNone" role="listbox"></div>
                                            </div>
                                        </div>
                                        <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownSalmon " name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <p class="name3">${name3}</p>
                                                    <input type="text" class="inputInDropdownSalmon displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer  dropdownUstensil displayNone" role="listbox"></div>
                                            </div>
                                        </div>`
}


createDropdown(dropdownIngredients, dropdownAppareil, dropdownUstensiles)

//Intégrations des ingrédients dans le dropdown
for (let i = 0; i < listIngredients.length; i++) {
    let ingredient = createDomElement("ingredient", "p")
    const dropdownIngredients = document.querySelector(".dropdownIngredients")
    ingredient.innerHTML = listIngredients[i]
    dropdownIngredients.append(ingredient)
}

//Intégrations des appareils dans le dropdown
for (let i = 0; i < listAppliance.length; i++) {
    let appliance = createDomElement("appliance", "p")
    const dropdownAppliance = document.querySelector(".dropdownAppliance")
    appliance.innerHTML = listAppliance[i]
    dropdownAppliance.append(appliance)
}

//Intégrations des ustensils dans le dropdown
for (let i = 0; i < listUstansils.length; i++) {
    let ustensil = createDomElement("ustensil", "p")
    const dropdownUstensil = document.querySelector(".dropdownUstensil")
    ustensil.innerHTML = listUstansils[i]
    dropdownUstensil.append(ustensil)
}


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
/*                          EVENTS                                     */
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
const dropdownBlue = document.querySelector(".dropdownBlue")
const dropdownIng = document.querySelector(".dropdownIngredients")
const dropdownGreen = document.querySelector(".dropdownGreen")
const dropApp = document.querySelector(".dropdownAppliance")
const dropdownSalmon = document.querySelector(".dropdownSalmon")
const dropdownUst = document.querySelector(".dropdownUstensil")
const inputInDropdownBlue = document.querySelector(".inputInDropdownBlue")
const inputInDropdownGreen = document.querySelector(".inputInDropdownGreen")
const inputInDropdownSalmon = document.querySelector(".inputInDropdownSalmon")
const name1 = document.querySelector(".name1")
const name2 = document.querySelector(".name2")
const name3 = document.querySelector(".name3")

const eventDropdown = (dropdownBlue, dropdownIng, inputInDropdownBlue, name1) => {
    dropdownBlue.addEventListener('click', (e) => {
        console.log(e.target);
        if (dropdownIng.classList.contains("displayNone")) {
            dropdownIng.classList.remove('displayNone')
            dropdownIng.classList.add('displayBlock')
            name1.classList.add('displayNone')
        } else {
            dropdownIng.classList.remove('displayBlock')
            dropdownIng.classList.add('displayNone')
            name1.classList.remove('displayNone')
        }

        if (inputInDropdownBlue.classList.contains("displayNone")) {
            inputInDropdownBlue.classList.remove('displayNone')
            inputInDropdownBlue.classList.add('displayBlock')
        } else {
            inputInDropdownBlue.classList.remove('displayBlock')
            inputInDropdownBlue.classList.add('displayNone')
        }
    })
}

eventDropdown(dropdownBlue, dropdownIng, inputInDropdownBlue, name1)
eventDropdown(dropdownGreen, dropApp, inputInDropdownGreen, name2)
eventDropdown(dropdownSalmon, dropdownUst, inputInDropdownSalmon, name3)