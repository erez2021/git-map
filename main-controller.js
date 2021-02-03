'use strict'


function init() {
    changeBgc()
}



function changeBgc() {
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = loadFromStorage('userPrefs').color
}