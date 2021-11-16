import { DATA } from "../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"



/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */
//                                  INPUT MAIN
/*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡ */

export var InputMainListener = () => {
    var inputMain = document.querySelector('#inputSearch')

    // ===================
    //      A L'INPUT
    // ===================
    inputMain.addEventListener('input', function() {
        var mainInputValue = inputMain.value.toLowerCase();

        // Si il y a plus de 2 caractères
        if (inputMain.value.length > 2) {
            for (var i = 0; i < DATA.length; i++) {
                var recipe = DATA[i]
                recipe.display = false
            }

            displayRecipes(DATA)

            // chercher dans les ingredients
            for (var k = 0; k < DATA.length; k++) {
                var recipe = DATA[k]

                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                for (var l = 0; l < recipe.ingredients.length; l++) {
                    var ingredient = recipe.ingredients[l]

                    if (ingredient.ingredient.toLowerCase().indexOf(mainInputValue) >= 0) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }

                // chercher dans les ustencils
                for (var j = 0; j < recipe.ustensils.length; j++) {
                    var ustensil = recipe.ustensils[j]

                    if (ustensil.toLowerCase().indexOf(mainInputValue) >= 0) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }

                // chercher dans les appareils
                var appliance = recipe.appliance

                if (appliance.toLowerCase().indexOf(mainInputValue) >= 0) {
                    recipe.display = true
                } else {
                    recipe.display = false
                }

                // chercher dans les descriptions
                var titre = recipe.name
                var description = recipe.description

                if (titre.toLowerCase().indexOf(mainInputValue) >= 0) {
                    recipe.display = true
                } else if (description.toLowerCase().indexOf(mainInputValue) >= 0) {
                    recipe.display = true
                } else {
                    recipe.display = false
                }
            }
        } else {

            // on affiche toutes les cards => display:true
            for (var q = 0; q < DATA.length; q++) {
                var recipe = DATA[q]
                recipe.display = true
            }
        }

        displayRecipes(DATA)
    })
}