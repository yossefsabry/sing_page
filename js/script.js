let info = document.querySelectorAll(".info");
let SignIn = document.getElementById("SignIn")
let LogoIn = document.getElementById("LogoIn")
let form = document.querySelectorAll("form")


SignIn.addEventListener("click", changeSignIn)

// remove all the active class form all elements
function changeSignIn() {
    info.forEach(item => {
        item.classList.remove("infoActive")
        info[1].classList.add("infoActive")
    })
    form.forEach(item => {
        item.classList.remove("active")
        form[0].classList.add("activeLeft")
    })

    document.body.style.background = "#068eb8"

}



LogoIn.addEventListener("click", changeLogoIn)

// remove all the active class form all elements
function changeLogoIn() {
    info.forEach(item => {
        item.classList.remove("infoActive")
        info[0].classList.add("infoActive")
    })
    form.forEach(item => {
        item.classList.remove("activeLeft")
        form[1].classList.add("active")
    })
    document.body.style.background = "#ee1414c8"

}