// import { createDomElement } from "../utils/tools.js"
import { DATA } from "../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, displayContentsDropdown, displayIngrediantDataIfTrue, displayUstansilDataIfTrue, displayAppareilDataIfTrue } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"

console.log(DATA);

export const dropDownIngredientsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ingredients')
    const input = document.querySelector('#inputInDropdownBlue')
    const optionContainer = dropdownContainer.querySelector('.optionContainer1')
    const dropdown = document.querySelector('.dropdown--ingredients')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')

    const listElmt = document.querySelector('.listElmt1')
    const elmt = document.querySelectorAll('.li')
    const zoneCards = document.querySelector(".zoneCards")

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
                // zoneCards.innerHTML = ''
            ingredientsToDisplay.forEach(ingredient => {
                listElmt.innerHTML += `<li class="elmt">${ingredient}</li>`;
            });
            console.log(ingredientsToDisplay);
            // displayRecipes(ingred)
        } else {
            // si y'a moins de 2 caractères
            const ingred = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayIngrediantDataIfTrue(DATA, ingred)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingred)
            listElmt.innerHTML = ""
                // zoneCards.innerHTML = ''
                // on le remplie l'optionContainer
            filteredArray.forEach(ingredient => {
                    listElmt.innerHTML += `<li class="elmt">${ingredient}</li>`
                })
                // displayRecipes(ingred)
        }

    })
}

/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropDownAppareilListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--appareil')
    const input = document.querySelector('#inputInDropdownGreen')
    const optionContainer = document.querySelector('.optionContainer2')
    const dropdown = document.querySelector('.dropdown--appareil')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')

    const listElmt = document.querySelector('.listElmt2')
    const elmt = document.querySelectorAll('.li')


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const app = []

        // on récupère tous les ingrédients des uniquement ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, app)
            // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(app)
            // on le remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(appareil => {
            listElmt.innerHTML += `<li class="elmt">${appareil}</li>`
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
            const app = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, app)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(app)
            const ingredientsToDisplay = []
                // on le remplie l'optionContainer
            filteredArray.forEach(appareil => {
                if (appareil.toLowerCase().indexOf(taping) >= 0) {
                    ingredientsToDisplay.push(appareil)
                }
            })

            listElmt.innerHTML = ''

            ingredientsToDisplay.forEach(appareil => {
                listElmt.innerHTML += `<li class="elmt">${appareil}</li>`;
            });
        } else {
            // si y'a moins de 2 caractères
            const app = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, app)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(app)
            listElmt.innerHTML = ""
                // on le remplie l'optionContainer
            filteredArray.forEach(appareil => {
                listElmt.innerHTML += `<li class="elmt">${appareil}</li>`
            })
        }

    })
}


/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropDownUstansilsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ustensiles')
    const input = document.querySelector('#inputInDropdownSalmon')
    const optionContainer = document.querySelector('.optionContainer3')
    const dropdown = document.querySelector('.dropdown--ustensiles')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')

    const listElmt = document.querySelector('.listElmt3')
    const elmt = document.querySelectorAll('.li')


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const ust = []

        // on récupère tous les ingrédients des uniquement ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, ust)
            // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(ust)
            // on le remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(ustensil => {
            listElmt.innerHTML += `<li class="elmt">${ustensil}</li>`
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
            const ust = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ust)
            const ingredientsToDisplay = []
                // on le remplie l'optionContainer
            filteredArray.forEach(ustensil => {
                if (ustensil.toLowerCase().indexOf(taping) >= 0) {
                    ingredientsToDisplay.push(ustensil)
                }
            })

            listElmt.innerHTML = ''

            ingredientsToDisplay.forEach(ustensil => {
                listElmt.innerHTML += `<li class="elmt">${ustensil}</li>`;
            });
        } else {
            // si y'a moins de 2 caractères
            const ust = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ust)
            listElmt.innerHTML = ""
                // on le remplie l'optionContainer
            filteredArray.forEach(ustensil => {
                listElmt.innerHTML += `<li class="elmt">${ustensil}</li>`
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
// export const dataInDropdown = (nameElm, balise, classe, data) => {
//     for (let i = 0; i < data.length; i++) {
//         const createElm = createDomElement(nameElm, balise)
//         const classeElm = document.querySelector("." + classe)
//         const displayNone = document.querySelector(".displayNone")
//         const displayBlock = document.querySelector(".displayBlock")
//         const optionContainer = document.querySelector(".optionContainer")

//         createElm.setAttribute("id", data[i])
//         createElm.innerHTML = data[i]
//         classeElm.append(createElm)
//         console.log(optionContainer.contains(createElm));

//     }
// }




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