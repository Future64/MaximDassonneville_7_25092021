import { recipes } from "./recipes.js"

const ustansiblesContainer = document.querySelector(".ustansiblesContainer")

const ustansilsNotSorted = []

for (let i = 0; i < recipes.length; i++) {

    for (let j = 0; j < recipes[i].ustensils.length; j++) {
        ustansilsNotSorted.push(recipes[i].ustensils[j])
    }
}


const listUstansils = ustansilsNotSorted.filter(function(ele, pos) {
    return ustansilsNotSorted.indexOf(ele) == pos;
})

console.log(listUstansils);

ustansiblesContainer.innerHTML = listUstansils