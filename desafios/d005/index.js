

let menuOn = false;
let n = document.getElementById("svg")

let menu =document.getElementById("menu")
 let body =document.getElementById("body")

function on(){

if(menuOn==false){

 
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



setInterval(() => {
  if (window.innerWidth>765){

   menu.style.display="none";
      menuOn=!menuOn
        body.style=" overflow-y: scroll "
         menu.style.width="10vw";
  }
   
  
},1);