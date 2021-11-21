//Dark Mode con JQUERY ----------------------------------------------------------


const darkMode = () => {
    $("body").css("background-color", "black")
    $("h1").css("color", "white")
    $("p").css("color", "white")
    localStorage.setItem("theme", "dark")
}

const ligthMode = () => {
    $("body").css("background-color", "white")
    $("h1").css("color", "black")
    $("p").css("color", "black")
    localStorage.setItem("theme", "ligth")
}


$("#SwitchDarkmode").on("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        ligthMode()
    } else {
        darkMode()
    }
})