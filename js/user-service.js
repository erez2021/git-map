'use strice'
var user;

// const KEY = 'userDB'

function createUser () {
    const fullName = document.querySelector('[name=fullName]').value
    const date = document.querySelector('[name=date]').value
    const email = document.querySelector('[name=email]').value
    user = {
        fullName,
        date,
        email,
    }
    saveToStorage('user', user)

}



const changeColor = ev => {
    ev.preventDefault()
    var color = document.querySelector('[name=color]').value
    console.log('saving', color);
    saveToStorage('userPrefs', { color })
    // _saveToStorage()
}


// function _saveToStorage() {
//     saveToStorage(KEY, createUser());
// }

showAge = val => document.getElementById("sAge").innerHTML = val