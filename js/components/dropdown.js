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
                                                    <p>${name1}</p>
                                                    <input type="text" class="inputInDropdown displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer bg-primary dropdownIngredients displayNone" role="listbox"></div>
                                            </div>
                                        </div>
                                        <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownGreen " name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <p>${name2}</p>
                                                    <input type="text" class="inputInDropdown displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer  dropdownAppliance displayNone" role="listbox"></div>
                                            </div>
                                        </div>
                                        <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownSalmon " name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <p>${name3}</p>
                                                    <input type="text" class="inputInDropdown displayNone">
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


const eventDropdown = (dropdownBlue, dropdownIng) => {
    dropdownBlue.addEventListener('click', (e) => {
        console.log(e.target);
        if (dropdownIng.classList.contains("displayNone")) {
            dropdownIng.classList.remove('displayNone')
            dropdownIng.classList.add('displayBlock')

            // arrowInput.classList.add('arrowOpen')
            // arrowInput.classList.remove('arrowClose')
        } else {
            dropdownIng.classList.remove('displayBlock')
            dropdownIng.classList.add('displayNone')

            // arrowInput.classList.remove('arrowOpen')
            // arrowInput.classList.add('arrowClose')
        }
    })
}

eventDropdown(dropdownBlue, dropdownIng)
eventDropdown(dropdownGreen, dropApp)
eventDropdown(dropdownSalmon, dropdownUst)