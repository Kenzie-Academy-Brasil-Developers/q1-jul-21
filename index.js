/*
 getElementByID() => esse método retorna o 
 elemento que estiver contendo o nome do ID que você passar pra ele
 
*/
const starting = document.getElementById('start');
/* 
getElementsByClassName() => esse método retorna toda a coleção de elemetos
que possuem essa classe
*/

const myTimer = document.getElementsByClassName('timer');
console.log(myTimer);

const button = document.getElementsByTagName('button');
console.log(button);

const resetButton = document.querySelector('#reset');
const itemTimer = document.querySelector('.timer');
console.log(resetButton);

/**********************************************************************/

starting.addEventListener('click', function(event){
    //faz alguma coisa
    console.log('ok, encontramos o start');
});