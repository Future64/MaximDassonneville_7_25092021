const dropdowns = document.querySelectorAll(".dropdown")
const inputInDropdown = document.querySelectorAll(".inputInDropdown")
const optionContainer = document.querySelectorAll(".optionContainer")
const arrowInput = document.querySelectorAll(".bi-chevron-down")

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        console.log(e.target.classList);
        if (e.currentTarget.classList.contains("displayNone")) {
            e.currentTarget.classList.remove('displayNone')
            e.currentTarget.classList.add('displayBlock')

            console.log("1ere option");
            // arrowInput.classList.remove('arrowClose')
            // arrowInput.classList.add('arrowOpen')
        } else {
            e.currentTarget.classList.remove('displayBlock')
            e.currentTarget.classList.add('displayNone')
            console.log("2de option");
            // arrowInput.classList.remove('arrowOpen')
            // arrowInput.classList.add('arrowClose')
        }



    })
})