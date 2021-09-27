const dropdowns = document.querySelectorAll(".dropdown")
const inputInDropdown = document.querySelectorAll(".inputInDropdown")
const arrowInput = document.querySelectorAll(".bi-chevron-down")

// dropdowns.forEach(dropdown => {
//     dropdown.addEventListener('click', () => {
//         console.log("coucou");
//         inputInDropdown.forEach(input => {
//             if (input.classList.contains("displayNone")) {
//                 input.classList.remove('displayNone')
//                 input.classList.add('displayBlock')

//                 arrowInput.classList.add('arrowOpen')
//                 arrowInput.classList.remove('arrowClose')
//             } else {
//                 input.classList.remove('displayBlock')
//                 input.classList.add('displayNone')

//                 arrowInput.classList.add('arrowClose')
//                 arrowInput.classList.remove('arrowOpen')
//             }
//         })
//     })

// })