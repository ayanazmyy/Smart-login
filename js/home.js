let logOutBtn = document.getElementById("logOutBtn");
let welcomeMsg = document.getElementById("welcomeMsg");

if(sessionStorage.getItem("current") == null){
    window.location = "index.html";
}

logOutBtn.addEventListener("click", function(){
    sessionStorage.clear();
    window.location = "index.html"
});



function welcome(){
    welcomeMsg.innerHTML = `Welcome, ${JSON.parse(sessionStorage.getItem("current")).name} ! :)`;
}

welcome();



