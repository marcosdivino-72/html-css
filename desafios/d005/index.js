

let menuOn=false

function on(){

if(menuOn==false){

 let menu =document.getElementById("menu")
 let body =document.getElementById("body")
   menu.style.display="block";
   menuOn=!menuOn
   body.style=" overflow-y: hidden"

}
else{
      menu.style.display="none";
      menuOn=!menuOn
        body.style=" overflow-y: scroll "
}
   
}
function off(){
    menuOn=false
     menu.style.display="none";
     
}