const button = document.querySelector(".button")
const passwordElement = document.getElementById("password")
const passwordParentElement = document.getElementById("password-parent")
const passwordLengthElement = document.getElementById("password_length")
const numbersCheckbox = document.getElementById("numbers_checkbox")
const lettersCheckbox = document.getElementById("letters_checkbox")
const specialSymbolsCheckbox = document.getElementById("special_symbols_checkbox")

let result = ""
let passwordLength = 8

passwordLengthElement.addEventListener("change", (e) => {
    passwordLength = Number(e.target.value)
})

let numbers = [""]
let latinSymbols = [""]
let specialSymbols = [""]

button.addEventListener("click", () => {
    if(numbersCheckbox.checked) {
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    } else {
        numbers = [""]
    }
    if(lettersCheckbox.checked) {
        latinSymbols = [
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
            "z", "x", "c", "v", "b", "n", "m"
        ]
    } else {
        latinSymbols = [""]
    }
    if(specialSymbolsCheckbox.checked) {
        specialSymbols = [
            "~", "!", "@", "$", "#", "%", "^", "&", "*", "-", "_", "+", "=", "/", "?"
        ]
    } else {
        specialSymbols = [""]
    }

    const symbolsArray = [numbers, latinSymbols, specialSymbols]

    if(!numbersCheckbox.checked && !lettersCheckbox.checked && !specialSymbolsCheckbox.checked) {
        alert("Пароль должен включать в себя какие-либо символы")
    } else {
        while(result.length <= passwordLength) {
            let isUpperCase = Math.round(Math.random() * 3) == 2
            let currentArray = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
            if(isUpperCase) {
                result += currentArray[Math.floor(Math.random() * currentArray.length)].toString().toUpperCase()
            } else {
                result += currentArray[Math.floor(Math.random() * currentArray.length)]
            }
        }
    }

    passwordElement.innerHTML = result
    passwordParentElement.style.display = "inline"

    result = ""
})