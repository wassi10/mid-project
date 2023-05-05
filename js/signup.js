// ==== sign up js ====

const sign_up_btn = document.querySelector(".signup-button");




sign_up_btn.onclick = (e) => {

    e.preventDefault();

    // receiving input data
    const fname = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const cpass = document.getElementById("confirmpass").value;

    // conditions for input validation
    if (fname === "" && username === "" && email === "" && pass === "" && cpass === "") {
        return alert("Input fields are empty.");
    }
    else {
        if (fname === "") {
            alert("Write your good name");
        }
        else if (!isValidUsername(username) || username === "") {
            alert("Username is invalid. It should be lowercase letters or digits in range 5-20 char");
        }
        else if (!isValidEmail(email) || email === "") {
            alert("Invalid email.");
        }
        else if (!isValidPass(pass) || pass === "") {
            alert("Your password should contain 8-20 characters");
        }
        else if (pass !== cpass) {
            alert("Password is not matching");
        }
        else {
            // store user data on localstorage of browser
            localStorage.setItem("FullName", fname);
            localStorage.setItem("Username", username);
            localStorage.setItem("Email", email);
            localStorage.setItem("Password", pass);
            localStorage.setItem("ConfirmPassword", cpass);
            alert("Contratulation!!!\n You are registered now.");

            return window.location.href='login.html';
        }
    }
}


// validation code

function isValidUsername(uname) {
    const uname_pattern = /^[a-z\d_-]{5,20}$/;

    if (uname.match(uname_pattern)) {
        return true;
    } else {
        return false;
    }
}

function isValidEmail(email) {
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(email_pattern)) {
        return true;
    } else {
        return false;
    }
}

function isValidPass(pass) {
    const pass_pattern = /^[\d\w@-]{8,20}$/;

    if (pass.match(pass_pattern)) {
        return true;
    } else {
        return false;
    }
}



