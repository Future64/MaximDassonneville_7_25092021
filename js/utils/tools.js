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

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export const displayContentsDropdown = (optionContainer, input, arrow, dropdown) => {

    if (optionContainer.classList.contains("displayNone")) {
        optionContainer.classList.remove('displayNone')
        optionContainer.classList.add('displayFlex')
        input.classList.remove('displayNone')
        input.classList.add('displayBlock')
        input.focus()
        arrow.classList.remove('arrowClose')
        arrow.classList.add('arrowOpen')
        dropdown.style.width = "530px"
    } else {
        optionContainer.classList.remove('displayFlex')
        optionContainer.classList.add('displayNone')
        input.classList.remove('displayBlock')
        input.classList.add('displayNone')
        arrow.classList.remove('arrowOpen')
        arrow.classList.add('arrowClose')
        dropdown.style.width = "170px"
    }
}

/*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

export let displayIngrediantDataIfTrue = (data, tab) => {
    data.forEach(recipe => {
        if (recipe.display == true) {
            recipe.ingredients.forEach(el => {
                tab.push(el.ingredient)
            });
        }
    })
}