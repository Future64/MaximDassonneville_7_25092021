// import { createDomElement } from "../utils/tools.js"
import { DATA } from "../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, removeDuplicateItemInArrayUstensils, displayContentsDropdown, displayIngrediantDataIfTrue, displayUstansilDataIfTrue, displayAppareilDataIfTrue, removeRecipes } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"




/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN INGREDIENTS
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropDownIngredientsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ingredients')
    const input = document.querySelector('#inputInDropdownBlue')
    const optionContainer = dropdownContainer.querySelector('.optionContainer1')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt1')
    const elmt = document.querySelectorAll('li')
    const zoneCards = document.querySelector(".zoneCards")
    const zoneTag = document.querySelector(".zoneTag")
    let tagBox = document.querySelector(".tag")
        // const circle = document.querySelector(".bi-x-circle")

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
            listElmt.innerHTML += `<li class="elmt" id="${ingredient}">${ingredient}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 530)
    })


    // ===================
    //      A L'INPUT
    // ===================
    input.addEventListener('input', () => {
        // Si il y a plus de 2 caractères
        if (input.value.length > 2) {
            const taping = input.value.toLowerCase();
            const ingred = []

            // on récupère tous les ingrédients des recettes qui sont uniquement en display = true
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
                listElmt.innerHTML += `<li class="elmt" id="${ingredient}">${ingredient}</li>`;
            });

            // DATA.forEach(recipe => {
            //     const zoneCards = document.querySelector(".zoneCards")
            //         // console.log(ingredient);
            //     if (recipe.ingredients == ingredientsToDisplay) {
            //         recipe.display = true;
            //         // removeRecipes(DATA)
            //         zoneCards.innerHTML = ""
            //         displayRecipes(DATA)
            //     } else {
            //         recipe.display = false;
            //         // removeRecipes(DATA)
            //         zoneCards.innerHTML = ""
            //         displayRecipes(DATA)
            //     }
            // })



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
                    listElmt.innerHTML += `<li class="elmt" id="${ingredient}">${ingredient}</li>`
                })
                // displayRecipes(DATA)
        }
    })


    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        const tag = createTag(e.target.innerHTML, "Ingredients")
        zoneTag.innerHTML += tag
            // DATA.setAttribute("")

        const tags = document.querySelectorAll(".tag")

        tags.forEach(t => {
            // quand on click sur la croix ça éfface les tags du Dom
            const circle = document.querySelector(".bi-x-circle")
            circle.addEventListener("click", () => {
                // console.log(t);
                // zoneTag.remove(t)
                // zoneTag.innerHTML = ""
            })
        })
    })

}






/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN APPAREIL
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropDownAppareilListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--appareil')
    const input = document.querySelector('#inputInDropdownGreen')
    const optionContainer = document.querySelector('.optionContainer2')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt2')
    const zoneTag = document.querySelector(".zoneTag")

    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const app = []

        // on récupère tous les ingrédients des uniquement ustensils qui sont en display = true
        displayAppareilDataIfTrue(DATA, app)

        // on retire les doublons
        const filteredArray = removeDuplicateItemInArray(app)

        // on le remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(appareil => {
            listElmt.innerHTML += `<li class="elmt" id="${appareil}">${appareil}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 250)
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
            displayAppareilDataIfTrue(DATA, app)

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
                listElmt.innerHTML += `<li class="elmt" id="${appareil}">${appareil}</li>`;
            });

        } else {

            // si y'a moins de 2 caractères
            const app = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayAppareilDataIfTrue(DATA, app)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(app)
            listElmt.innerHTML = ""

            // on le remplie l'optionContainer
            filteredArray.forEach(appareil => {
                listElmt.innerHTML += `<li class="elmt" id="${appareil}">${appareil}</li>`
            })
        }

    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        const tag = createTag(e.target.innerHTML, "Appareil")
        zoneTag.innerHTML += tag

        // quand on click sur la croix ça éfface les tags du Dom
        const circle = document.querySelector(".bi-x-circle")
        circle.addEventListener("click", () => {
            console.log(tag);
            // zoneTag.remove(tag)
            zoneTag.innerHTML = ""
        })
    })
}





/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  DROPDOWN USTENSILES
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const dropDownUstansilsListener = () => {
    const dropdownContainer = document.querySelector('.dropdown--ustensiles')
    const input = document.querySelector('#inputInDropdownSalmon')
    const optionContainer = document.querySelector('.optionContainer3')
    const arrow = dropdownContainer.querySelector('.bi-chevron-down')
    const listElmt = document.querySelector('.listElmt3')
    const zoneTag = document.querySelector(".zoneTag")


    // ===================
    //      AU CLICK
    // ===================
    dropdownContainer.addEventListener('click', () => {
        const ust = []

        // on récupère tous les ingrédients des uniquement ustensils qui sont en display = true
        displayUstansilDataIfTrue(DATA, ust)

        // on retire les doublons
        const filteredArray = removeDuplicateItemInArrayUstensils(ust)

        // on le remplie l'optionContainer
        listElmt.innerHTML = ""
        filteredArray.forEach(ustensil => {
            listElmt.innerHTML += `<li class="elmt" id="${ustensil}">${ustensil}</li>`
        })

        // on affiche l'optionContainer
        displayContentsDropdown(optionContainer, input, arrow, dropdownContainer, 430)
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
            const filteredArray = removeDuplicateItemInArrayUstensils(ust)
            const ingredientsToDisplay = []

            // on le remplie l'optionContainer
            filteredArray.forEach(ustensil => {
                if (ustensil.toLowerCase().indexOf(taping) >= 0) {
                    ingredientsToDisplay.push(ustensil)
                }
            })

            listElmt.innerHTML = ''
            ingredientsToDisplay.forEach(ustensil => {
                listElmt.innerHTML += `<li class="elmt" id="${ustensil}">${ustensil}</li>`;
            });

        } else {

            // si y'a moins de 2 caractères
            const ust = []

            // on récupère tous les ingrédients des uniquement recettes qui sont en display = true
            displayUstansilDataIfTrue(DATA, ust)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArrayUstensils(ust)
            listElmt.innerHTML = ""

            // on le remplie l'optionContainer
            filteredArray.forEach(ustensil => {
                listElmt.innerHTML += `<li class="elmt" id="${ustensil}">${ustensil}</li>`
            })
        }
    })

    // quand on click sur un <li> ça crée un tag
    listElmt.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        const tag = createTag(e.target.innerHTML, "Ustensiles")
        zoneTag.innerHTML += tag

        // quand on click sur la croix ça éfface les tags du Dom
        const circle = document.querySelector(".bi-x-circle")
        circle.addEventListener("click", () => {
            console.log(tag);
            // zoneTag.remove(tag)
            zoneTag.innerHTML = ""
        })
    })
}