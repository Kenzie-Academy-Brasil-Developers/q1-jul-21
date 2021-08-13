//Descrevendo nos minimos detalhes o que o codigo a baixo faz

//Funcao que soma valores

//Busca sem filtro

//Busca com filtro


// Receita de Bolo

/*
Ingredientes:

3ovos
1 xicara de acucar
2 xicara de farinha de trigo
1 xicara de gordura
1 xicara de leite
1 colher de fermento


Misture todos os ingredientes secos, menos o fermento e separe-os em uma 
vasilha para usar depois. Em seguida misture todos os ingredientes molhados,
e liquidifique-os. Após obter uma mistura homogenea, derramea aos poucos
sobre os ingredientes secos e vá obtendo uma mistura única. Após misturar tudo 
e ter a certeza de que todos os ingredientes se misturaram adicione o fermento.
Mexa com delicadeza e coloque em uma forma redonda de apróximadamente 20cm de diametro.
Asse em forno pré aquecido em 180C por aproximadamente 40min.


*/

//COLOCAR O FORNO PARA PRE AQUECER
//Separar os utensilios 
//Verificar se eu tenho os ingredientes
//Separar os ingrediente secos dos molhados
//Misturar os ingredientes secos *sem o fermento
//Misturar os ingredientes molhados
//Bater os ingredientes molhados no liquidificador
//Verificar se está homogeneo
//Derramar a mistura nos ingredientes secos
//Verificar se está homogeneo e adicionar o fermento
//Colocar na forma redonda de 20cm
//Verifica se o forno está na temperatura correta e colocar a forma
//Depois de 40min tirar o bolo do forno


// ??? Qual fermento eu uso?? - PESQUISO
// ??? Untar a forma - POR QUE VOCÊ NÃO PESQUISOU O SUFICIENTE SOBRE O ASSUNTO
// ??? E se a farinha já tiver fermento?? - PESQUISO



//Receba um conjunto de informações com os ingredientes do bolo
//dependendo do sabor adicione a cobertura que combina.
//Se for bolo de chocolate adicione brigadeiro, se for bolo
//de baunilha adicione beijinho, qualquer outro sabor ficará sem cobertura


// chocolate => brigadeiro
// baunilha => beijinho
// restante => nada


// cake[0] = ovo 
// ovo = chocolate? não

//cake[1] = farinha
// farinha = chocolate? não

//cake[6] = chocolate
// chocolate = chocolate? sim
const cake = ['ovo','farinha','chocolate','acucar','gordura','fermento','leite'];

// && = chocolate && morango = 
// || = chocolate || morango = 

function receita(ingredientes){
    //ingredientes[2] == 'chocolate ?
    let cobertura;

    if(ingredientes.includes('chocolate')){
        if(ingredientes.includes('morango')){
            cobertura = 'merengue';
        }else{
            cobertura = 'brigadeiro';
        }
    } else if(ingredientes.includes('baunilha')){
        cobertura = 'beijinho';
    } else if (ingredientes.includes('chocolate') && 
                ingredientes.includes('morango') || 
                ingredientes.includes('limao')){
        cobertura = 'merengue';
    }else{
        cobertura = 'nada';
    }

    console.log(cobertura);
}

receita(cake);



//funcão (Parametro ou informações que a função precisa para funcionar)