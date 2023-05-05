// ==== login js ====
console.log("hellow");

const login_btn = document.querySelector(".login-button");

login_btn.onclick = (e) => {

    console.log("function");
    e.preventDefault();

    // get user data from localstorage of browser
    const email_data = localStorage.getItem("Email");
    const pass_data = localStorage.getItem("Password");

    // get login data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // conditions
    if(email === "" && password === ""){
        alert("Input fields is empty.");
    }else{
        if(email == email_data && password == pass_data){
            alert("Successful\nYou are signed in.");
            return window.location.href='index.html';
        }else{
            alert("Oops..! \nSomething is wrong.");
        }
    }

}