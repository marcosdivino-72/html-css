const canvas = document.querySelector("canvas")
const cxt = canvas.getContext("2d")
cxt.fillStyle="blue"

let  snake=[{x:100,y:100},{x:130,y:100}]
let desenhar=()=>{
   
   snake.forEach(e => {
    cxt.fillRect(e.x,e.y,30,30) 
    console.log(snake[0].x)
   });

}

let move= ()=>{
   let head = snake[snake.length-1]
   snake[0].x=0
   cxt.clearRect(0,0,600,600)
}

desenhar()
move()
desenhar()