
const ham = document.querySelector(".ham")
const navbar__menu = document.querySelector(".navbar__menu")
const close = document.querySelector(".close")

ham.addEventListener("click", function(){
    navbar__menu.style.display = "block"
    //document.querySelector(".explore").style.display = "none"

})

close.addEventListener("click", function(){
    navbar__menu.style.display = "none"
    document.querySelector(".explore").style.display = "block"

})






