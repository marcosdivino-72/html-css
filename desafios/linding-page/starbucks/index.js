
const menu_mobile = document.querySelector("#btn-mobile")
const nav_list = document.querySelector('#nav-list')
const icon = document.querySelector("#btn-mobile i")

menu_mobile.addEventListener("click",()=>{
    nav_list.classList.toggle("show")
    icon.classList.toggle("fa-times")
    icon.classList.toggle("fa-bars")
   
})