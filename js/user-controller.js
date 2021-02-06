

function onCreateUser(ev) {
    ev.preventDefault()
    createUser()
    var elUserName = document.querySelector('h5')
    console.log('fullName:', user.fullName)
    elUserName.innerText  = user.fullName
    document.querySelector('[name=modal]').style.display = 'block'    
    var form = document.getElementById("frmRegister");
form.reset();
}