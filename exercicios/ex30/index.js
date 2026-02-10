let list = document.querySelector('.list');
const btn = document.querySelector(".btn");





class ListaDeTarefas{
    constructor(lista,btn){
        this.btn=btn;
        this.list = lista;
       
        if(localStorage.getItem("id")==null){
            localStorage.setItem("id",0)
             
        }
        this.id = localStorage.getItem("id")

        this.addBtn()
      
        

    }
    criarCorpo(id){
        if(id!=null){
            if(localStorage.getItem(id)==null){
                return
            }
        }
        const li = document.createElement("li")
      //  const box = document.createElement("input")
        const samp = document.createElement("samp")
        //Elementos para criar a lista adicionado
      //  box.type="checkbox"
  // box.id="check";
    //     li.append(box);
     if(id!=undefined){  li.innerHTML+=this.addTarefas(id)

        li.id=id
     }
     else{
         li.innerHTML+=this.addTarefas()
         let id = localStorage.getItem("id")
         li.id=id
         this.addBancoDeDados(this.addTarefas(),+id)
     }
        samp.textContent="X"
        li.append(samp)
        this.list.append(li)
 
       this.addEventoRemove()
        document.querySelector("#tarefa").value="";
    }
    addBancoDeDados(tarefa,id){
        localStorage.setItem("id",+localStorage.getItem("id")+1)
       
        localStorage.setItem(id,tarefa)
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
    addTarefas(id){
        if(id!=undefined){ 

            const e =localStorage.getItem(id)
            return  e;
         }
     else{
        const tarefa = document.querySelector("#tarefa").value;
        

       return  tarefa ;
     }
     
  }
    remove_list(e){
        localStorage.removeItem( e.target.parentElement.id)   
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

window.addEventListener("load",()=>{

    const id = localStorage.getItem("id")
    
    for(let i=0;i<id;i++){
      
        l.criarCorpo(i)
       
    }
})




  
 


