

const cadastro = document.getElementById("add");
/*const tarefa_inclusa = document.getElementById("tarefa_inclusa");*/
const tarefas = document.getElementById("tarefas")
const input = document.getElementById("input");
const erro =document.querySelector(".erro");
const tarefas_realizdas = document.getElementById(" tarefas_realizdas");
const limpar_lista =document.getElementById("limpar_lista");

limpar_lista.addEventListener ('click', () => limpar_tarefas_realizadas());
cadastro.addEventListener('click',() => incluir_tarefas());

const data = new Date();
const data_termino = new Date();


function incluir_tarefas (){
    const div = document.createElement("div");
    div.classList.add("div");
    const list_tarefas = document.createElement("div");
    list_tarefas.classList.add("list_tarefas");
    list_tarefas.setAttribute("id","list_tarefas");
    const check = document.createElement("button");
    check.classList.add("v");
    check.textContent ="V";
    check.addEventListener('click',() => checar_tarefa(div));
    check.addEventListener('click',() => remove_tarefas(list_tarefas));
    const tarefa_inclusa = document.createElement("label");
    tarefa_inclusa.classList.add("tarefa_inclusa");
    tarefa_inclusa.textContent = input.value;
    const new_date = document.createElement("label");
    new_date.classList.add("new_date");
    new_date.textContent = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} às ${data.getHours()}:${data.getMinutes()}`;
    const limpar = document.createElement("button");
    limpar.textContent = "x";
    limpar.classList.add("x");
    limpar.addEventListener('click',() => remove_tarefas(list_tarefas)); 
    list_tarefas.appendChild(div);
    tarefas.appendChild(list_tarefas); 
    div.appendChild(new_date);
    list_tarefas.appendChild(check);
    div.appendChild(tarefa_inclusa);
    list_tarefas.appendChild(limpar);
    limpaInput();
    
    
   
}


function checar_tarefa(a,b,div){
 
  tarefas_realizdas.appendChild(a,b);
  const new_date_termino = document.createElement("p");
  new_date_termino.classList.add("new_date_termino");
  new_date_termino.textContent = `Finalizado: ${data_termino.getDate()}/${data_termino.getMonth()+1}/${data_termino.getFullYear()} às ${data_termino.getHours()}:${data_termino.getMinutes()}`;
  tarefas_realizdas.appendChild(new_date_termino);
  
  remove_tarefas();
     

}


function remove_tarefas (list_tarefas){
    tarefas.removeChild (list_tarefas);
    
}

function limpar_tarefas_realizadas(list_tarefas){
    while (tarefas_realizdas.firstChild) {
        tarefas_realizdas.removeChild(tarefas_realizdas.firstChild);
      }
    tarefas_realizdas.removeChild(list_tarefas);
}

function limpaInput(){
    input.value = "";
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        incluir_tarefas();
        limpaInput();
    }
});