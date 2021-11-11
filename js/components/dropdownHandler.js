// import { createDomElement } from "../utils/tools.js"
import { DATA } from "../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, removeDuplicateItemInArrayUstensils, displayContentsDropdown, displayIngrediantDataIfTrue, displayUstansilDataIfTrue, displayAppareilDataIfTrue, removeRecipes, deleteTag, tagObserver } from "../utils/tools.js"
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
    const zoneTag = document.querySelector(".zoneTag")


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
        const selectedTag = e.target.innerHTML
        const tag = createTag(e.target.innerHTML, "Ingredients")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
            const recipe = DATA[i]
                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredient = recipe.ingredients[j]
                    if (ingredient.ingredient.toLowerCase() === selectedTag.toLowerCase()) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        }
        displayRecipes(DATA)
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
        const selectedTag = e.target.innerHTML
        const tag = createTag(e.target.innerHTML, "Appareil")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
            const recipe = DATA[i]
            console.log(DATA[i]);
            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.appliance.length; j++) {
                    const appareil = recipe.appliance
                    console.log(recipe.appliance);
                    if (appareil.toLowerCase() === selectedTag.toLowerCase()) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        }
        displayRecipes(DATA)
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
        const selectedTag = e.target.innerHTML
        const tag = createTag(e.target.innerHTML, "Ustensiles")
        zoneTag.innerHTML += tag

        // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
        for (let i = 0; i < DATA.length; i++) {
            const recipe = DATA[i]
            console.log(DATA[i]);
            // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
            if (recipe.display == true) {
                for (let j = 0; j < recipe.ustensils.length; j++) {
                    const ustensile = recipe.ustensils[j]
                    console.log(recipe.ustensils[j]);
                    if (ustensile.toLowerCase() === selectedTag.toLowerCase()) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        }
        displayRecipes(DATA)
    })
}








/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  INPUT MAIN
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export const InputMainListener = () => {
    const dropdownContainerIng = document.querySelector('.dropdown--ingredients')
    const dropdownContainerApp = document.querySelector('.dropdown--appareil')
    const dropdownContainerUst = document.querySelector('.dropdown--ustensiles')
    const inputMain = document.querySelector('#inputSearch')
    const inputIng = document.querySelector('#inputInDropdownBlue')
    const inputApp = document.querySelector('#inputInDropdownGreen')
    const inputUst = document.querySelector('#inputInDropdownGreen')
    const optionContainerIng = document.querySelector('.optionContainer1')
    const optionContainerApp = document.querySelector('.optionContainer2')
    const optionContainerUst = document.querySelector('.optionContainer3')
    const listElmtIng = document.querySelector('.listElmt1')
    const listElmtApp = document.querySelector('.listElmt2')
    const listElmtUst = document.querySelector('.listElmt3')
    const zoneTag = document.querySelector(".zoneTag")
        // const arrow = dropdownContainer.querySelector('.bi-chevron-down')



    // ===================
    //      A L'INPUT
    // ===================
    inputMain.addEventListener('input', () => {
        // Si il y a plus de 2 caractères
        if (inputMain.value.length > 2) {
            const taping = inputMain.value.toLowerCase();
            const words = []

            // on récupère tous les mots des recettes qui sont uniquement en display = true
            displayIngrediantDataIfTrue(DATA, words)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(words)
            const wordsToDisplay = []

            // on le remplie l'optionContainer
            filteredArray.forEach(word => {
                if (word.toLowerCase().indexOf(taping) >= 0) {
                    wordsToDisplay.push(word)
                }
            })

            listElmtIng.innerHTML = ''
            wordsToDisplay.forEach(word => {
                listElmtIng.innerHTML += `<li class="elmt" id="${word}">${word}</li>`;
            });

        } else {

            // si y'a moins de 2 caractères
            const words = []

            // on récupère tous les mots des recettes qui sont uniquement en display = true
            displayIngrediantDataIfTrue(DATA, words)


            // on retire les doublons
            const filteredArray = removeDuplicateItemInArray(words)
            listElmtIng.innerHTML = ""

            // on le remplie l'optionContainer
            filteredArray.forEach(word => {
                    listElmtIng.innerHTML += `<li class="elmt" id="${word}">${word}</li>`
                })
                // displayRecipes(DATA)
        }
    })

    inputMain.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            const selectedTag = e.target.innerHTML
            const tag = createTag(e.target.innerHTML, "Ustensiles")
            zoneTag.innerHTML += tag

            // modifier les data pour mettre a display false les recettes qui n'ont pas le e.target.innerHTML (tag) pour chaque recette
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]
                console.log(DATA[i]);
                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                if (recipe.display == true) {
                    for (let j = 0; j < recipe.ustensils.length; j++) {
                        const ustensile = recipe.ustensils[j]
                        console.log(recipe.ustensils[j]);
                        if (ustensile.toLowerCase() === selectedTag.toLowerCase()) {
                            recipe.display = true
                            break
                        } else {
                            recipe.display = false
                        }
                    }
                }
            }
            displayRecipes(DATA)
        }

    })

}