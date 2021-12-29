
function showPass() {
    document.getElementById('exampleInputPassword1').type = "text"
    let showButton = document.getElementById('exampleCheck1')
    let typePassword = document.getElementById('exampleInputPassword1')
    let cfPassword = document.getElementById('exampleInputPassword2')

    if (showButton.checked) {
        typePassword.type = "text"
        cfPassword.type= "text"
    } else {
        typePassword.type = "password"
        cfPassword.type= "password"
    }
}

let signUpForm = document.getElementById('signUpForm')

let users = []
let userFormLocal = JSON.parse(localStorage.getItem("users"))
if (userFormLocal) {
    users = userFormLocal
}

signUpForm.onsubmit = (e) => {
    e.preventDefault()
    let email = signUpForm.email.value
    let password = signUpForm.password.value
    let confirmPassword = signUpForm.confirmPassword.value
    
    setTextErr("#emailErr", " ")
    setTextErr("#passwordErr", " ")
    setTextErr("#confirmPasswordErr", " ")

    let validate = true

    if (!email) {
        setTextErr("#emailErr", "Email is required")
        validate = false
    }
    if (!password) {
        setTextErr("#passwordErr", "Password is required")
        validate = false
    }
    if (!confirmPassword) {
        setTextErr("#confirmPasswordErr", "Confirm password is required")
        validate = false
    }
    if (password.length < 6) {
        setTextErr("#passwordErr", "Password must be at least 6 characters")
        validate = false
    } else {
        if (confirmPassword != password) {
            setTextErr("#confirmPasswordErr", "Password does not match")
            validate = false
        }
    }
    if (validate) {
        let user = {
            email: email,
            password: password,
        }
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
    }
}

let setTextErr = (query, content) => {
    document.querySelector(query).innerHTML = content
}
