users = [
    {
        Email: "vinhdq2005@gmail.com",
        Phone: 123456789,
        Password: "123456",
        Username: "vinh",
    },
    {
        Email: "noname@gmail.com",
        Phone: 987654321,
        Password: "123456",
        Username: "Noname",
    },{
        Email: "helloworld@gmail.com",
        Phone: 456321789,
        Password: "123456",
        Username: "Ronaldo",
    },
]

localStorage.setItem("users", JSON.stringify(users))

// bai 3

form = document.getElementById('form')

form.onsubmit = (e) => {
    e.preventDefault()
    let email = form.email.value
    let password = form.password.value

    setTextErr("#emailError", "")
    setTextErr("#passwordError", "")
    validate = true

    if (!email) {
        setTextErr("#emailError", "Email is required")
        validate = false
    }
    if (!password) {
        setTextErr("#passwordError", "Password is required")
        validate = false

    }

    if (validate) {
        open("https://www.youtube.com/", "_self")
    }
    console.log(email);
}

let setTextErr = (query, content) => {
    document.querySelector(query).innerHTML = content
}