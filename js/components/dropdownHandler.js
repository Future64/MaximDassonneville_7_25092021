// import { createDomElement } from "../utils/tools.js"
import { DATA } from "../../data/dataHandler.js"
import { removeDuplicateItemInArray } from "../utils/tools.js"


export const dropDownIngredientsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ingredients')
    const input = document.querySelector('#inputInDropdownBlue')
    const optionContainer = dropdownContainer.querySelector('.optionContainer')
    

    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        input.classList.remove('displayNone')
        const ingredients = [];

        // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
        DATA.forEach(recipe => {
            if (recipe.display == true) {
                recipe.ingredients.forEach(el => {
                    ingredients.push(el.ingredient)
                });
            }
        });
        // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(ingredients)
        // on le remplie l'optionContainer
        filteredArray.forEach(ingredient => {
            optionContainer.innerHTML += `<p>${ingredient}</p>`
        });
        // on affiche l'optionContainer
        optionContainer.classList.remove('displayNone')
    })


    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', () => {
        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            const taping = input.value.toLowerCase();
            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            const ingredients = [];
            DATA.forEach(recipe => {
                if (recipe.display == true) {
                    recipe.ingredients.forEach(el => {
                        ingredients.push(el.ingredient)
                    });
                }
            });
            
            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingredients)
            const ingredientsToDisplay = [];
            // on le remplie l'optionContainer
            filteredArray.forEach(ingredient => {
                if (ingredient.toLowerCase().indexOf(taping) >= 0) {
                    console.log(ingredient);
                    ingredientsToDisplay.push(ingredient)
                }
            });

            optionContainer.innerHTML = '';

            ingredientsToDisplay.forEach(ingredient => {
                optionContainer.innerHTML += `<p>${ingredient}</p>`;
            });
        }
        else {
            // si y'a moins de 2 caractères
            const ingredients = [];

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            DATA.forEach(recipe => {
                if (recipe.display == true) {
                    recipe.ingredients.forEach(el => {
                        ingredients.push(el.ingredient)
                    });
                }
            });
            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(ingredients)
            // on le remplie l'optionContainer
            filteredArray.forEach(ingredient => {
                optionContainer.innerHTML += `<p>${ingredient}</p>`
            });
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