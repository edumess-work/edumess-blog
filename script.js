const themeToogle = document.getElementById("theme-toogle");
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode")

}

themeToogle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else{
        localStorage.setItem("theme", "light")
    }
})


