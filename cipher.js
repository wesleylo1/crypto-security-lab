// cipher: move 13 letters to the right from the given letter. Wrap around Z. 
// 	example: A -> C, B -> D

// I love cryptography! => v ybir pelcgbtencul!



const alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]

let code = 'I love cryptography!'
let newPhrase = ''

function cipher(string) {
    string = string.toUpperCase()
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        const letter = alphabet.includes(char)
        if (letter === false) {
            newPhrase += char
        } else {
            const charIndex = alphabet.findIndex((c) => c === char)
            newPhrase += alphabet[charIndex + 13] || alphabet[charIndex - 13]
        }
    }
    console.log(newPhrase)
}

cipher(code)
