let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
     const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
     const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     const numeric = "0123456789"
     const simbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

     const data = lowerAlphabet + upperAlphabet + numeric + simbol
     let generator = '';

     for (let index = 0; index < len; index++) {
          generator += data[~~(Math.random() * data.length)];
     }
     return generator
}

function getPassword() {
     const newPassword = generatePassword(passwordLength.value)
     password.value = newPassword
     setTimeout(()=>{
          alert("Password has been generate!")
     },1000)
}


function savePassword() {
     let title = password.value
     saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya:${title}`))
     saveButton.setAttribute('download', 'MyPasswordGenerator.txt')
     setTimeout(()=>{
          alert("Password berhasil disimpan!")
     },1000)
}