const user = document.getElementById("user")
const password = document.getElementById("password")
const button = document.getElementById("button")
const buttons = document.getElementById("buttons")
const p = document.getElementById("detteErEnpTag")
let passwords = localStorage.getItem("savePassword")
let username = localStorage.getItem("saveUsername")
let userValue = user.value
let passwordValue = password.value

function writeShit() {
    passwords = localStorage.getItem("savePassword")
    username = localStorage.getItem("saveUsername")

   
}

button.addEventListener("click",function(){
    userValue = user.value
    passwordValue = password.value

    localStorage.setItem("savePassword", passwordValue)
    localStorage.setItem("saveUsername", userValue)
    writeShit()
})
buttons.addEventListener("click",function(){
    passwords = localStorage.getItem("savePassword")
    username = localStorage.getItem("saveUsername")
    if (userValue==localStorage.getItem("saveUsername")){
        if (passwordValue==localStorage.getItem("saveUsername")){
            window.location.href="index.html"

        }

    }
}
)