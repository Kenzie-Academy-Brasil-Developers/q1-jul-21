const div = document.getElementById('div-teste');
console.log(div);

const player = {
    id: 1,
    imgPlayer: '',
    posicao: {x: '', y: ''},
    movimentaPlayer: function(){
        //movimenta, verifica... sua lógica
        console.log(this);
    },
    mudaCorPeca: function(){

    }
}

// const numero = player.id;
// const imgPlayer = player.imgPlayer;
const { id, imgPlayer, posicao } = player;

console.log(id, imgPlayer)
