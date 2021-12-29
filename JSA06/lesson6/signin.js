function showPass() {
    document.getElementById('exampleInputPassword1').type = "text"
    let showButton = document.getElementById('exampleCheck1')
    let typePassword = document.getElementById('exampleInputPassword1')
    if (showButton.checked) {
        typePassword.type = "text"
    } else {
        typePassword.type = "password"
    }
}


let signInForm = document.getElementById('signInForm')

signInForm.onsubmit = (e) => {
    e.preventDefault()
    let email = signInForm.email.value
    let password = signInForm.password.value
    console.log(email, password);

    localUsers = JSON.parse(localStorage.getItem("users"))
    checkAccount("#checkAccount", " ")


    for (let i = 0; i <= localUsers.length; i++) {
        if (email == localUsers[i].email || password == localUsers[i].password){
            console.log("hello");
        } else {
            checkAccount("#checkAccount", "We cannot find an account with that email address")
        }
        break
    }
}

let checkAccount = (query, content) => {
    document.querySelector(query).innerHTML = content
}