let list = document.querySelector('.list');
const btn = document.querySelector(".btn");





class ListaDeTarefas{
    constructor(lista,btn){
        this.btn=btn;
        this.list = lista;
        this.addBtn()
      
        

    }
    criarCorpo(){
        const li = document.createElement("li")
        const box = document.createElement("input")
        const samp = document.createElement("samp")
        //Elementos para criar a lista adicionado
        box.type="checkbox"
   box.id="check";
         li.append(box);
       li.innerHTML+=this.addTarefas()
        samp.textContent="X"
        li.append(samp)
        this.list.append(li)
 
       this.addEventoRemove()
    }
    addEventoRemove(){
        const samp = document.querySelectorAll('samp')
        samp.forEach((e)=>{
               const p =e.parentNode
               if(p.parentElement==this.list){
                e.addEventListener("click",this.remove_list.bind())
               }
        })

    }
    addTarefas(){
        const tarefa = document.querySelector("#tarefa").value;
       return  tarefa ;

  }
    remove_list(e){
       e.target.parentElement.remove()    
    }
    addBtn(){
        this.btn.addEventListener("click",()=>{
               const tarefa = document.querySelector("#tarefa").value; 
               if(tarefa!=""){
                  this.criarCorpo()
               }else{
                alert("Tarefa vazia")
               }
         
         
            
        }
        );
      
    }

}

l = new ListaDeTarefas(list,btn)


l.addEventoRemove()

  
 


