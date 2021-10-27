// import { createDomElement } from "../utils/tools.js"
import { DATA } from "../../data/dataHandler.js"
import { removeDuplicateItemInArray, displayContentsDropdown, displayIngrediantDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"

const ingredientInDom = document.querySelectorAll("p")
    // console.log(ingredientInDom)

export const dropDownIngredientsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ingredients')
    const input = document.querySelector('#inputInDropdownBlue')
    const optionContainer = dropdownContainer.querySelector('.optionContainer')
    const dropdown = document.querySelector('.dropdown')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')

    const listElmt = document.querySelector('.listElmt')
    const elmt = document.querySelectorAll('.li')


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const ingred = []

        // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
        displayIngrediantDataIfTrue(DATA, ingred)
            // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(ingred)
            // on le remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(ingredient => {
            listElmt.innerHTML += `<li class="elmt">${ingredient}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdown)
    })


    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', () => {
        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            const taping = input.value.toLowerCase();
            const ingred = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayIngrediantDataIfTrue(DATA, ingred)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingred)
            const ingredientsToDisplay = []
                // on le remplie l'optionContainer
            filteredArray.forEach(ingredient => {
                if (ingredient.toLowerCase().indexOf(taping) >= 0) {
                    ingredientsToDisplay.push(ingredient)
                }
            })

            listElmt.innerHTML = ''

            ingredientsToDisplay.forEach(ingredient => {
                listElmt.innerHTML += `<li class="elmt">${ingredient}</li>`;
            });
        } else {
            // si y'a moins de 2 caractères
            const ingred = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayIngrediantDataIfTrue(DATA, ingred)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingred)
            listElmt.innerHTML = ""
                // on le remplie l'optionContainer
            filteredArray.forEach(ingredient => {
                listElmt.innerHTML += `<li class="elmt">${ingredient}</li>`
            })
        }

    })
}





// export const dropDownAplianceListener = () => {
// const dropdownContainer = document.querySelector('.dropdown--ingredients')

// dropdownContainer.addEventListener('click', () => {
//     const optionContainer = dropdownContainer.querySelector('.optionContainer')
//     const ingredients = [];

//     // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
//     DATA.forEach(recipe => {
//         if (recipe.display == true) {
//             recipe.ingredients.forEach(el => {
//                 ingredients.push(el.ingredient)
//             });
//         }
//     });

//     // on retire les doublons
//     const filteredArray = removeDuplicateItemInArray(ingredients)

//     // on le remplie l'optionContainer
//     filteredArray.forEach(ingredient => {
//         optionContainer.innerHTML += `<p>${ingredient}</p>`
//     });

//     // on affiche l'optionContainer
//     optionContainer.classList.remove('displayNone')
// })
// }

// export const dropDownUstencilListener = () => {
// const dropdownContainer = document.querySelector('.dropdown--ingredients')

// dropdownContainer.addEventListener('click', () => {
//     const optionContainer = dropdownContainer.querySelector('.optionContainer')
//     const ingredients = [];

//     // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
//     DATA.forEach(recipe => {
//         if (recipe.display == true) {
//             recipe.ingredients.forEach(el => {
//                 ingredients.push(el.ingredient)
//             });
//         }
//     });

//     // on retire les doublons
//     const filteredArray = removeDuplicateItemInArray(ingredients)

//     // on le remplie l'optionContainer
//     filteredArray.forEach(ingredient => {
//         optionContainer.innerHTML += `<p>${ingredient}</p>`
//     });

//     // on affiche l'optionContainer
//     optionContainer.classList.remove('displayNone')
// })
// }


























// //Intégrations des datas dans le dropdown
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




// ingredientInDom.forEach(ing => {
//     ing.addEventListener('click', () => {
//         console.log("coucou");
//     })
// })

// /*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
// /*                          EVENTS                                     */
// /*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

// export const dropdownBlue = document.querySelector(".dropdownBlue")
// export const dropdownIng = document.querySelector(".dropdownIngredients")
// export const dropdownGreen = document.querySelector(".dropdownGreen")
// export const dropApp = document.querySelector(".dropdownAppliance")
// export const dropdownSalmon = document.querySelector(".dropdownSalmon")
// export const dropdownUst = document.querySelector(".dropdownUstensil")
// export const inputInDropdownBlue = document.querySelector(".inputInDropdownBlue")
// export const inputInDropdownGreen = document.querySelector(".inputInDropdownGreen")
// export const inputInDropdownSalmon = document.querySelector(".inputInDropdownSalmon")
// export const name1 = document.querySelector(".name1")
// export const name2 = document.querySelector(".name2")
// export const name3 = document.querySelector(".name3")

// export const eventDropdown = (dropdownBlue, dropdownIng, inputInDropdownBlue, name1) => {
//     dropdownBlue.addEventListener('click', (e) => {
//         // console.log(e.target);
//         if (dropdownIng.classList.contains("displayNone")) {
//             dropdownIng.classList.remove('displayNone')
//             dropdownIng.classList.add('displayBlock')
//             name1.classList.add('displayNone')
//         } else {
//             dropdownIng.classList.remove('displayBlock')
//             dropdownIng.classList.add('displayNone')
//             name1.classList.remove('displayNone')
//         }

//         if (inputInDropdownBlue.classList.contains("displayNone")) {
//             inputInDropdownBlue.classList.remove('displayNone')
//             inputInDropdownBlue.classList.add('displayBlock')
//             inputInDropdownBlue.focus()
//         } else {
//             inputInDropdownBlue.classList.remove('displayBlock')
//             inputInDropdownBlue.classList.add('displayNone')
//         }
//     })
// }

// eventDropdown(dropdownBlue, dropdownIng, inputInDropdownBlue, name1)
// eventDropdown(dropdownGreen, dropApp, inputInDropdownGreen, name2)
// eventDropdown(dropdownSalmon, dropdownUst, inputInDropdownSalmon, name3)