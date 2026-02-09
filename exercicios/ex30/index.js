let list = document.querySelector('.list');
const btn = document.querySelector(".btn");
const text = document.querySelector("#tafera")

class ListaDeTarefas{
    constructor(lista,btn,tarefa){
        this.btn=btn;
        this.list = lista;
        this.tarefa = tarefa

    }
    addTarefas(){
       const p = document.createElement("p");
     
    }
    addBtn(){
        this.btn= addEventListener("click",this.addTarefas);
    }

}

l = new ListaDeTarefas(list,btn,text)
l.addBtn()
 let p = document.createElement("p").innerHTML="ola"
let pi = document.createElement("p").innerHTML="ola";
let piu = document.createElement('div').innerHTML="ola"
 
  list.append(p)
  list.append(pi)
  list.append(piu)
 


