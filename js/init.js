import { DATA } from '../data/dataHandler.js'
import { dropDownIngredientsListener, dropDownUstansilsListener, dropDownAppareilListener } from './components/dropdownHandler.js';
import { displayDropdown, displayRecipes, removeRecipes, deleteTag, tagObserver } from './utils/tools.js';

const init = () => {

    displayRecipes(DATA);
    displayDropdown()
    dropDownIngredientsListener()
    dropDownUstansilsListener()
    dropDownAppareilListener()
    tagObserver()
}

export default init