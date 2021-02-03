'use strice'


// const KEY = 'userDB'

const createUser = () => {
    const fullName = document.querySelector('[name=fullName]').value
    const date = document.querySelector('[name=date]').value
    const email = document.querySelector('[name=email]').value
    const user = {
        fullName,
        date,
        email,
    }
    saveToStorage('user', user)
    // _saveToStorage()
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