let a = document.querySelector(".burger__menu-header--close")
let b = document.querySelector(".burger__menu")
let c = document.querySelector(".header__img")


function burgeropen(){
    if (c){
        b.style.display = "block"
    }
    }
function burgerclose(){
if (a){
    b.style.display = "none"
}
}
