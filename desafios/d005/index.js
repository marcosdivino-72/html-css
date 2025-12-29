

let menuOn=false
let n = getElementById("svg")



function on(){

if(menuOn==false){

 let menu =document.getElementById("menu")
 let body =document.getElementById("body")
   menu.style.display="block";
   menuOn=!menuOn
   menu.style.width="60vw";
   body.style=" overflow-y: hidden"
  

}
else{
      menu.style.display="none";
      menuOn=!menuOn
        body.style=" overflow-y: scroll "
         menu.style.width="10vw";
}
   
}
function off(){
    menuOn=false
     menu.style.display="none";
     
}
function menuoff(){
    
    if(n.display==none){


  menu.style.display="none";
  alert("ll")


    }

}