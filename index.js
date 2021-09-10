/**********************TO-D0-LIST********************************/

//criar uma lista dinamica via input - OK
//armazenar o valor em um array - OK
//QUANDO der check - tem que mudar o css - OK
//poder excluir item da lista - OK

const toDoList = [];
const list  = document.getElementById("listItem");
const botaoAdiciona = document.querySelector('button');

//CRIA ITEM NA LISTA
function criaItemLista(){

    const valueList = document.getElementById("itemList");

    const itemLista = document.createElement("li");
    const itemInput = document.createElement("input");
    itemInput.type = "checkbox";
    const itemLabel = document.createElement("label");
    const itemSpan = document.createElement("span");
    itemSpan.innerText = "x";

    itemLista.appendChild(itemSpan);

    const nameValue = valueList.value;
    itemLabel.innerText = nameValue;

    itemLista.appendChild(itemInput);
    itemLista.appendChild(itemLabel);
    
    list.appendChild(itemLista);

    //ADICIONA ITEM NO ARRAY
    toDoList.push(nameValue);
}

//ADICIONA A CLASS QUANDO CHECKED
function checked(event){
    const checkElement = event.target;

    checkElement.parentNode.classList.toggle("feito");
}

//EXCLUI ITEM DA LISTA
function identificarItem(event){
    const span = event.target;
   
    if(span.tagName === "SPAN"){
        removerItem(span);
    }
}

function removerItem(span){
    span.parentElement.remove();
}

botaoAdiciona.addEventListener('click', criaItemLista);

list.addEventListener("click", checked);

list.addEventListener("click", identificarItem);

//DESAFIO => RETIRAR O ITEM EXCLUIDO DO ARRAY