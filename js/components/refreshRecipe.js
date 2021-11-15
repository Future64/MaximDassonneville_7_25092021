import { DATA } from "../../data/dataHandler.js"
import { displayRecipes, removeDuplicateItemInArray, removeDuplicateItemInArrayUstensils, displayContentsDropdown, displayIngrediantDataIfTrue, displayUstansilDataIfTrue, displayAppareilDataIfTrue, removeRecipes, deleteTag, tagObserver } from "../utils/tools.js"
import { createTag } from "../components/view/tag.js"


export const refresh = () => {
    const zoneTag = document.querySelector(".zoneTag")
    const tags = document.querySelectorAll(".tagTxt")

    // tags.forEach(tag => {

    //     console.log(tag);

    //     // Si il y a plus de 2 caractères
    //     if (!tag === undefined) {
    //         DATA.forEach(recipe => { recipe.display = false })
    //         displayRecipes(DATA)

    //         // chercher dans les ingredients
    //         for (let i = 0; i < DATA.length; i++) {
    //             const recipe = DATA[i]
    //                 // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
    //             for (let j = 0; j < recipe.ingredients.length; j++) {
    //                 const ingredient = recipe.ingredients[j]
    //                 if (ingredient.ingredient.toLowerCase().includes(tag.innerHTML.toLowerCase())) {
    //                     recipe.display = true
    //                     break
    //                 } else {
    //                     recipe.display = false
    //                 }
    //             }

    //             // chercher dans les ustencils
    //             for (let j = 0; j < recipe.ustensils.length; j++) {
    //                 const ustensil = recipe.ustensils[j]
    //                 if (ustensil.toLowerCase().includes(tag.innerHTML.toLowerCase())) {
    //                     recipe.display = true
    //                     break
    //                 } else {
    //                     recipe.display = false
    //                 }
    //             }

    //             // chercher dans les appareils
    //             const appliance = recipe.appliance
    //             if (appliance.toLowerCase().includes(tag.innerHTML.toLowerCase())) {
    //                 recipe.display = true
    //             } else {
    //                 recipe.display = false
    //             }

    //             // chercher dans les descriptions
    //             const description = recipe.description
    //             if (description.toLowerCase().includes(tag.innerHTML.toLowerCase())) {
    //                 recipe.display = true
    //             } else {
    //                 recipe.display = false
    //             }

    //         }
    //     } else {
    //         // on affiche toutes les cards => display:true
    //         DATA.forEach(recipe => { recipe.display = true })
    //     }
    //     displayRecipes(DATA)
    // })
}