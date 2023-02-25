const button = document.querySelector(".button")
const passwordElement = document.getElementById("password")
const passwordParentElement = document.getElementById("password-parent")

let result = ""
const passwrodLength = 10

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const latinSymbols = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m"
]
const specialSymbols = [
    "~", "!", "@", "$", "#", "%", "^", "&", "*", "-", "_", "+", "=", "/", "?"
]

const symbolsArray = [numbers, latinSymbols, specialSymbols]

button.addEventListener("click", () => {
    while(result.length <= passwrodLength) {
        let isUpperCase = Math.round(Math.random() * 3) == 2
        let currentArray = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
        if(isUpperCase) {
            result += currentArray[Math.floor(Math.random() * currentArray.length)].toString().toUpperCase()
        } else {
            result += currentArray[Math.floor(Math.random() * currentArray.length)]
        }
    }

    passwordElement.innerHTML = result
    passwordParentElement.style.display = "inline"
})