import { DATA } from '../data/dataHandler.js'
import { InputMainListener } from './components/inputMainHandler.js';
import { dropDownIngredientsListener } from "./components/dropdownHandlerIngredients.js"
import { dropDownUstansilsListener } from "./components/dropdownHandlerUstansils.js"
import { dropDownAppareilListener } from "./components/dropdownHandlerAppareils.js"
import { displayDropdown, displayRecipes, removeRecipes, deleteTag, tagObserver } from './utils/tools.js';

const init = () => {

    displayRecipes(DATA);
    displayDropdown()
    InputMainListener()
    dropDownIngredientsListener()
    dropDownUstansilsListener()
    dropDownAppareilListener()
    tagObserver()
}

export default init