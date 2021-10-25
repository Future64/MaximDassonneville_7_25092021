import { DATA } from '../data/dataHandler.js'
import { dropDownIngredientsListener } from './components/dropdownHandler.js';
import { displayDropdown, displayRecipes } from './utils/tools.js';

const init = () => {

    displayRecipes(DATA);
    displayDropdown()
    dropDownIngredientsListener()
    // dropDownUstencilsListener()
    // dropDownAplianceListener()
}

export default init