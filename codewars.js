
//CODEWARS

//montar um array com a contagem de pontos
// x > y ? 3
// x < y ? 0
// x = y ? 1
//Total de 10 partidas  

//quantidade de resultados no array = resultGame.length

function points(games) {
  
    let total = 0;
    let point = 0;
    const resultGame = ["1:0", "2:3", "0:0"];
    //3 + 0 + 1
    
    for (i = 0; i < 3; i++){
        let partida = resultGame[i];
       
        //aqui cria um array com as informações
        const times = partida.split(':');

        //const [timeA, timeB] = partida.split(':');
        //o código a cima cria duas variáveis com os valores vindos do aplit,
        //uma outra forma de acessar esses valores é acessando a posição do array
        //lembrando que split() cria um array com o resultado
        //seguindo exemplo times = [1,0] | times = [2,3] | times = 0,0

        if(times[0] > times[1]){
            point = 3;

            total += point;
        } else if(times[0] < times[1]){
            point = 0;

            total += 0;
        } else if(times[0] === times[1]){
            point = 1;

            total += point;        
        }
    }
    return total;
   
  }

  points(["1:0", "2:3", "0:0"]);