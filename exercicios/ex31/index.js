let list = document.querySelector('.list');
const btn = document.querySelector(".btn");
let text = document.querySelector("#tarefa").value
const t = document.querySelector("#t")
let fala = t.value


class ListaDeTarefas{
    constructor(lista,btn,tarefa){
        this.btn=btn;
        this.list = lista;
        this.tarefa = tarefa

    }
    addTarefas(){
       const p = document.createElement("p");
     
       console.log(fala+"ola")
       p.textContent=
       this.tarefa;
       this.list.append(p)
       console.log(text)
     
    }
    addBtn(){
        this.btn.addEventListener("click",()=>{
            this.addTarefas()
        }
        );
    }

}

l = new ListaDeTarefas(list,btn,fala)
l.addBtn()


 
 