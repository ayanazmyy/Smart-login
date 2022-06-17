let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let signUpBtn = document.getElementById("signUpBtn");
let existAlert = document.getElementById("existAlert");
let emptyAlert = document.getElementById("emptyAlert");


let allUsers;
if (localStorage.getItem("users") != null) {
    allUsers = JSON.parse(localStorage.getItem("users"));
} else {
    allUsers = [];
}



signUpBtn.addEventListener("click", function (e) {
    let userInfo = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }

    signUpInfo = true;
    if (localStorage.getItem("users") != null) {
        for (let i = 0; i < JSON.parse(localStorage.getItem("users")).length; i++) {
            if (emailInput.value == JSON.parse(localStorage.getItem("users"))[i].email) {
                signUpInfo = false;
                break;
            }
        }
        if (signUpInfo == true) {
            if (emailInput.value == "" | passwordInput.value == "" | nameInput.value == "") {
                emptyAlert.classList.remove("d-none");
                emptyAlert.classList.add("d-block");
            } else {
                allUsers.push(userInfo);
                localStorage.setItem("users", JSON.stringify(allUsers));
                window.location = "home.html"
                sessionStorage.setItem("current", JSON.stringify(userInfo));
                clear();
                
            }

        } else {
            if (emailInput.value == "" | passwordInput.value == "" | nameInput.value == "") {
                emptyAlert.classList.remove("d-none");
                emptyAlert.classList.add("d-block");
            } else {
                existAlert.classList.remove("d-none");
                existAlert.classList.add("d-block");
            }
        }
    } else {
        if (emailInput.value == "" | passwordInput.value == "" | nameInput.value == "") {
            emptyAlert.classList.remove("d-none");
            emptyAlert.classList.add("d-block");
        } else {
            allUsers.push(userInfo);
            localStorage.setItem("users", JSON.stringify(allUsers));
            window.location = "home.html"
            sessionStorage.setItem("current", JSON.stringify(userInfo));
            clear();
        }
    }
});

function removeAlert() {
    existAlert.classList.add("d-none");
    existAlert.classList.remove("d-block");
    emptyAlert.classList.add("d-none");
    emptyAlert.classList.remove("d-block")
}

nameInput.addEventListener("focus", removeAlert);
emailInput.addEventListener("focus", removeAlert);
passwordInput.addEventListener("focus", removeAlert);



function clear() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

