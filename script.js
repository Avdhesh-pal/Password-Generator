let passLength = 8;
let isLower = false;
let isUpper = false;
let isNumber = false;
let isSymbols = false;
const passwordEl = document.getElementById("password");
const passLengthEl = document.getElementById("passLength");

const genBtnEl = document.getElementById("genBtn");
const passRangeEl = document.getElementById("passRange");
const notificationEl = document.getElementById("notification");

passRange.addEventListener("input", (event) => { // when input is selected 
    passLength = event.target.value;
    passLengthEl.innerText = passLength;
});
genBtnEl.addEventListener("click", (event) => {// when generate button is click
    const lowerCaseCheckEl = document.getElementById("lowercase");
    const upperCaseCheckEl = document.getElementById("uppercase");
    const numberCheckEl = document.getElementById("numbers");
    const symbolsCheckEl = document.getElementById("symbols");
    isLower = lowerCaseCheckEl.checked;
    isUpper = upperCaseCheckEl.checked;
    isNumber = numberCheckEl.checked;
    isSymbols = symbolsCheckEl.checked
    if (!isLower && !isUpper && !isNumber && !isSymbols) {
        passwordEl.innerText = "Please select at least one checkbox!";
        passwordEl.style.fontSize = "1rem";
        return;
    } else {
        passwordEl.style.fontSize = "2.5rem";
    }
    const lowercase = isLower ? "abcdefghijklmnopqrstuvwxyz" : "";
    const uppercase = isUpper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const number = isNumber ? "0123456789" : "";
    const character = isSymbols ? `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~` : "";
    const allCharacter = lowercase + uppercase + number + character;
    let password = "";
    for (let i = 0; i < passLength; i++) {
        password += allCharacter.charAt(Math.floor(Math.random() * allCharacter.length));
    }
    passwordEl.innerText = password;
    console.log("password", password);
})