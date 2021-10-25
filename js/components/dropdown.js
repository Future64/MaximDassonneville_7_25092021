import { createDomElement } from "../utils/tools.js"
import { listUstansils, listIngredients, listAppliance } from "../../data/dataHandler.js"
import { ingredientBox } from "../components/ingredientsDropdown.js"


export const zoneDropdown = document.querySelector(".zoneDropdown")
export const arrowInput = document.querySelectorAll(".bi-chevron-down")


// Nom des dropdowns
export const dropdownIngredients = "Ingredients"
export const dropdownAppareil = "Appareil"
export const dropdownUstensiles = "Ustensiles"



// Creation des dropdowns
export const createDropdown = (name1, name2, name3) => {
    return zoneDropdown.innerHTML = `  <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownBlue bg-primary" name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <label for="inputInDropdownBlue">
                                                        <p class="name1">${name1}</p>
                                                    </label>
                                                    <input type="text" class="inputInDropdownBlue displayNone" id="inputInDropdownBlue">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer bg-primary dropdownIngredients displayNone" role="listbox"></div>
                                            </div>
                                        </div>
                                        <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownGreen " name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <label for="inputInDropdownGreen">
                                                        <p class="name2">${name2}</p>
                                                    </label>
                                                    <input type="text" class="inputInDropdownGreen displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer  dropdownAppliance displayNone" role="listbox"></div>
                                            </div>
                                        </div>
                                        <div class="selectContainer">
                                            <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdownSalmon " name="sort_by" id="sort_by">
                                                <div class="dropFirst">
                                                    <label for="inputInDropdownSalmon">
                                                        <p class="name3">${name3}</p>
                                                    </label>
                                                    <input type="text" class="inputInDropdownSalmon displayNone">
                                                    <i class="bi bi-chevron-down arrowClose"></i>
                                                </div>
                                                <div class="optionContainer  dropdownUstensil displayNone" role="listbox"></div>
                                            </div>
                                        </div>`
}


createDropdown(dropdownIngredients, dropdownAppareil, dropdownUstensiles)

//Intégrations des datas dans le dropdown
export const dataInDropdown = (nameElm, balise, classe, data) => {
    for (let i = 0; i < data.length; i++) {
        const createElm = createDomElement(nameElm, balise)
        const classeElm = document.querySelector("." + classe)
        const displayNone = document.querySelector(".displayNone")
        const displayBlock = document.querySelector(".displayBlock")
        const optionContainer = document.querySelector(".optionContainer")

        createElm.setAttribute("id", data[i])
        createElm.innerHTML = data[i]
        classeElm.append(createElm)
        console.log(optionContainer.contains(createElm));

    }
}


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
/*                          EVENTS                                     */
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropdownBlue = document.querySelector(".dropdownBlue")
export const dropdownIng = document.querySelector(".dropdownIngredients")
export const dropdownGreen = document.querySelector(".dropdownGreen")
export const dropApp = document.querySelector(".dropdownAppliance")
export const dropdownSalmon = document.querySelector(".dropdownSalmon")
export const dropdownUst = document.querySelector(".dropdownUstensil")
export const inputInDropdownBlue = document.querySelector(".inputInDropdownBlue")
export const inputInDropdownGreen = document.querySelector(".inputInDropdownGreen")
export const inputInDropdownSalmon = document.querySelector(".inputInDropdownSalmon")
export const name1 = document.querySelector(".name1")
export const name2 = document.querySelector(".name2")
export const name3 = document.querySelector(".name3")

export const eventDropdown = (dropdownBlue, dropdownIng, inputInDropdownBlue, name1) => {
    dropdownBlue.addEventListener('click', (e) => {
        // console.log(e.target);
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
            inputInDropdownBlue.focus()
        } else {
            inputInDropdownBlue.classList.remove('displayBlock')
            inputInDropdownBlue.classList.add('displayNone')
        }
    })
}

eventDropdown(dropdownBlue, dropdownIng, inputInDropdownBlue, name1)
eventDropdown(dropdownGreen, dropApp, inputInDropdownGreen, name2)
eventDropdown(dropdownSalmon, dropdownUst, inputInDropdownSalmon, name3)