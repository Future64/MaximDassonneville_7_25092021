import { recipes } from "../recipes.js"
import { createDomElement, closeWindow, launch, displayDropdown } from "../tools.js"


for (let i = 0; i < recipes.length; i++) {
    const zoneCards = document.querySelector(".zoneCards")

    const cardContainer = createDomElement("cardContainer", "div");
    const cardImg = createDomElement("cardImg", "div");
    const cardBox = createDomElement("cardBox", "div");
    const bodyCard = createDomElement("bodyCard", "div");
    const titleTimeCard = createDomElement("titleTimeCard", "div");
    const titleCard = createDomElement("titleCard", "p");
    const timeCard = createDomElement("timeCard", "div");
    const clock = createDomElement("bi", "i");
    const time = createDomElement("time", "p");
    const recetteCard = createDomElement("recetteCard", "div");
    const ingredientsCard = createDomElement("ingredientsCard", "div");
    const cardResume = createDomElement("cardResume", "div");
    const resume = createDomElement("resume", "p");

    cardImg.classList.add("bg-secondary")
    cardBox.classList.add("bg-light")
    clock.classList.add("bi-clock")

    titleCard.innerHTML = recipes[i].name
    time.innerHTML = recipes[i].time + " min"
    resume.innerHTML = recipes[i].description + "."

    zoneCards.append(cardContainer)
    cardContainer.append(cardImg)
    cardContainer.append(cardBox)
    cardBox.append(bodyCard)
    bodyCard.append(titleTimeCard)
    bodyCard.append(recetteCard)
    titleTimeCard.append(titleCard)
    titleTimeCard.append(timeCard)
    timeCard.append(clock)
    timeCard.append(time)
    recetteCard.append(ingredientsCard)
    recetteCard.append(cardResume)
    cardResume.append(resume)


    for (let j = 0; j < recipes[i].ingredients.length; j++) {

        const allingredientsCard = createDomElement("allingredientsCard", "p");

        const ingredient = recipes[i].ingredients[j].ingredient
        const quantity = recipes[i].ingredients[j].quantity
        const unit = recipes[i].ingredients[j].unit

        if (quantity == null) {
            allingredientsCard.innerHTML = ingredient
            ingredientsCard.append(allingredientsCard)
        } else if (unit == null) {
            allingredientsCard.innerHTML = ingredient + " : " + quantity
            ingredientsCard.append(allingredientsCard)
        } else {
            allingredientsCard.innerHTML = ingredient + " : " + quantity + " " + unit
            ingredientsCard.append(allingredientsCard)
        }
    }
}