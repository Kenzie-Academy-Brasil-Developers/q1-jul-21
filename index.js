/*
 getElementByID() => esse método retorna o 
 elemento que estiver contendo o nome do ID que você passar pra ele
 
*/
const starting = document.getElementById('start');
// const starting = document.getElementById('start');
/* 
getElementsByClassName() => esse método retorna toda a coleção de elemetos
que possuem essa classe
*/

const myTimer = document.getElementsByClassName('timer');
//console.log(myTimer);
// const myTimer = document.getElementsByClassName('timer');
// const button = document.getElementsByTagName('button');
// const resetButton = document.querySelector('#reset');
// const itemTimer = document.querySelector('.timer');

const button = document.getElementsByTagName('button');
//console.log(button);
/**********************************************************************/

const resetButton = document.querySelector('#reset');
const itemTimer = document.querySelector('.timer');
//console.log(resetButton);

// starting.addEventListener('click', function(event){
    //faz alguma coisa
    // console.log('ok, encontramos o start');
// });

/**********************************************************************/
/**
 * Construir uma lista de amigos dinâmicamente
 * passo 1 - criar os elementos
 *   passo 1.1 - criar o item da lista :thumbs_up:
 *   passo 1.2 - criar o elemento que guarda o texto(h2) :thumbs_up:
 * 
 * passo 2 - passar elementos para o html
 *   passo 2.1 - capturar a ul da minha página html
 *   passo 2.2 - inserir os itens da lista na ul
 * 
 */

// Criar elementos html no js

// appendChild
/*
elemento no qual eu quero inserir outro elemento => itemLista
elemento que vai ser inserido => itemTexto
*/

const lista = document.querySelector("ul");

function criarItemLista(){
    
    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    //itemTexto.innerText = "Hudson";
    const textInput = document.querySelector("#nameList");
    itemTexto.innerText = textInput.value;

    itemLista.appendChild(itemTexto);

    lista.appendChild(itemLista);
}

function removeItemLista(event){
    //pegar o parent no html
    //pegar o último child desse parent
    //remover o último child da lista

    const parentList = document.querySelector('ul');
    const ultimoChild = parentList.lastChild;
    ultimoChild.remove();
}

function removeItemNoMeioDaLista(){
    const itemRemover = document.querySelector('ul li:nth-child(2)');
    console.log(itemRemover);

    itemRemover.remove();
}

/**
addEventListener
button.addEventListener(evento, funcao)
*/

//adiciona item na lista

const botaoAddAmigo = document.querySelector('button');

botaoAddAmigo.addEventListener('click', capturaInformacaoForm);

//remove último da lista

const botaoRemoveAmigo = document.querySelector('#remove');

botaoRemoveAmigo.addEventListener('click', removeItemLista);


/* EXEMPLO DE CURRENT TARGET E TARGET*/
//const body = document.body;
//const botao = document.querySelector('#remove');

/*body.addEventListener('click', function(event){
    console.log(event.currentTarget);   // é o elemento que está ouvindo o evento
    console.log(event.target); // é o elemento que dispara/aciona o evento
}*/


//array com informações
//objeto com informações

function adicionaArray(){
    const amigos = ['Ana', 'Joana', 'Mariana'];

    const lista = document.querySelector("ul");

    for(let i = 0; i < amigos.length; i++){
        //é onde eu vou criar os elementos do html e vou escrever nele via DOM
        const itemLista = document.createElement("li");
        const itemTexto = document.createElement("h2");

        itemTexto.innerText = amigos[i];
        console.log(amigos[i]);

        itemLista.appendChild(itemTexto);

        lista.appendChild(itemLista);

    }
}

//OBJETO
const amigo = new Object();

amigo.nome = 'Isabella';
amigo.sobrenome = 'Bertini';
amigo.idade = 27;

console.log(amigo);
console.log(amigo.nome);

//OBJETO
const listaAmigo = {
    nome: 'Isabella',
    sobrenome: 'Bertini',
    idade: 27,
    cidade: 'São Carlos',
    estado: 'SP'
}
console.log(listaAmigo);
console.log(listaAmigo.sobrenome);

const listaAmigos = [
    {
        nome: 'Isabella',
        sobrenome: 'Bertini'
    },
    {
        nome: 'Maria',
        sobrenome: 'Porcina'
    }
]

console.log(listaAmigos);

/*======================================================================================= */

function criarItemObjeto(){
    const listaAmigo = {
        nome: 'Isabella',
        sobrenome: 'Bertini',
        idade: 27,
        cidade: 'São Carlos',
        estado: 'SP'
    }
    
    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    itemTexto.innerText = listaAmigo.sobrenome + listaAmigo.nome;

    itemLista.appendChild(itemTexto);

    lista.appendChild(itemLista);
}

function capturaInformacaoForm(){
    const nomeValue = document.getElementById('nameList').value;
    const lastValue = document.getElementById('lastList').value;

    const formInfo = {
        name: nomeValue,
        sobrenome: lastValue
    }

    console.log(formInfo);

    const itemLista = document.createElement("li");
    const itemTexto = document.createElement("h2");

    itemTexto.innerText = formInfo.sobrenome + formInfo.name;

    itemLista.appendChild(itemTexto);

    lista.appendChild(itemLista);

    //DESAFIO: adicionar input pra idade, só vai adicionar na lista se a idade for > 21anos
}