import { createCardsForDom } from "../components/view/card.js"
import { createDropdown } from "../components/view/dropdown.js"

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//                          FONCTIONS UTILES DU PROJET
/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/


// Créer un DOM Element
export const createDomElement = (className, DomElem) => {
    const elm = document.createElement(DomElem)
    elm.classList.add(className)
    return elm
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export const displayRecipes = (DATA) => {
    const zoneCards = document.querySelector(".zoneCards")

    DATA.forEach(recipe => {
        if (recipe.display == true) {
            const card = createCardsForDom(recipe)
            zoneCards.append(card)
        }
    });
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

// Fonction qui permet d'ouvrir une fenêtre
export const displayDropdown = () => {
    const zoneDropdown = document.querySelector(".zoneDropdown")

    const dropdownNames = [
        'ingredients',
        'appareil',
        'ustensiles'
    ]

    dropdownNames.forEach(name => {
        const dropdown = createDropdown(name)
        zoneDropdown.innerHTML += dropdown
    });
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const removeDuplicateItemInArray = (array) => array.filter((item, pos) => {
    return array.indexOf(item) == pos;
})