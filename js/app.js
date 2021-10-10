import { recipes } from "./recipes.js"

export const ustansilsNotSorted = []
export const ingredientsNotSorted = []
export const applianceNotSorted = []

//Pour chaque recettes du Json, on pousse tout les éléments dans leurs tableaux dédiés...
for (let i = 0; i < recipes.length; i++) {

    //...on pousse tout les ustansiles dans le tableau "ustansilsNotSorted"
    for (let j = 0; j < recipes[i].ustensils.length; j++) {
        ustansilsNotSorted.push(recipes[i].ustensils[j])
    }

    //...on pousse tout les ingredients dans le tableau "ingredientsNotSorted"
    for (let k = 0; k < recipes[i].ingredients.length; k++) {
        for (let l = 0; l < recipes[i].ingredients[k].ingredient.length; l++) {
            ingredientsNotSorted.push(recipes[i].ingredients[k].ingredient)
        }
    }

    //...on pousse tout les appliances dans le tableau "applianceNotSorted"
    for (let o = 0; o < recipes[i].appliance.length; o++) {
        applianceNotSorted.push(recipes[i].appliance)
    }
}

// Nouveau tableau avec les doublons suprimés
export const listUstansils = ustansilsNotSorted.filter(function(ele, pos) {
    return ustansilsNotSorted.indexOf(ele) == pos;
})

// Nouveau tableau avec les doublons suprimés
export const listIngredients = ingredientsNotSorted.filter(function(ele, pos) {
    return ingredientsNotSorted.indexOf(ele) == pos;
})

// Nouveau tableau avec les doublons suprimés
export const listAppliance = applianceNotSorted.filter(function(ele, pos) {
    return applianceNotSorted.indexOf(ele) == pos;
})