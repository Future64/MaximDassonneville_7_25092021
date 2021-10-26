export const createDropdown = (name) => {
    return `  
    <div class="selectContainer">
        <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdown--${name}" name="sort_by" id="sort_by">
            <div class="dropFirst">
                <label for="inputInDropdownBlue">
                    <p class="name1">${name}</p>
                </label>
                <input type="text" class="inputInDropdownBlue displayNone" id="inputInDropdownBlue" placeholder="Rechercher...">
                <i class="bi bi-chevron-down arrowClose"></i>
            </div>
            <div class="optionContainer bg-primary dropdownIngredients displayNone" role="listbox"></div>
        </div>
    </div>
    `
}