/*
 getElementByID() => esse método retorna o 
 elemento que estiver contendo o nome do ID que você passar pra ele
 
*/
// const starting = document.getElementById('start');
/* 
getElementsByClassName() => esse método retorna toda a coleção de elemetos
que possuem essa classe
*/

// const myTimer = document.getElementsByClassName('timer');
// const button = document.getElementsByTagName('button');
// const resetButton = document.querySelector('#reset');
// const itemTimer = document.querySelector('.timer');

/**********************************************************************/

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

    itemTexto.innerText = "Hudson"; 

    itemLista.appendChild(itemTexto);

    lista.appendChild(itemLista);
}

// criarItemLista();

/**

addEventListener

button.addEventListener(evento, funcao)

*/

const botaoAddAmigo = document.querySelector('button');

botaoAddAmigo.addEventListener('click', criarItemLista);
