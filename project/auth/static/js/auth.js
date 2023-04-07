const CheckConfirmPassword = () => {
    const submit_btn = document.getElementById("register_submit")
    
    let pwd1 = document.getElementById("user_pwd").value
    let pwd2 = document.getElementById("confirm_pwd").value

    // console.log(pwd1, pwd2)

    if (pwd1 == pwd2) {
        // console.log("Passwords match!")
        submit_btn.disabled = false
        submit_btn.title = "Create Account"
    } else {
        submit_btn.disabled = true
        submit_btn.title = "Passwords don't match!"

        // console.log("Passwords don't match!")
    }
}

const CheckType = () => {
    let type = document.getElementById("user_type").value
    let dob = document.getElementById("DoB")
    if (type == "guest") {
        dob.disabled = false
    } else {
        dob.disabled = true
    }
}