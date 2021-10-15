//1 TODO ALUNO PRECISA COMEÇAR COM 60 PONTOS DE PRESENÇA
//2 A NOTA PRECISA ESTAR ACIMA DE 55 PARA O ALUNO SER (APROVADO)
//3 SE A NOTA DO ALUNO ESTIVER ABAIXO DE 55  O ALUNO ESTÁ (REPROVADO)

//APROVADO 
//REPROVADO 
//RECUPERAÇÃO

// (54) - 55 - (56)

const newAluno = new Aluno(
    "Caio",
    "Carolino",
    25,
    "caio@kenzie.com",
    "31101996",
    "10826604936",
    23,
    "Q1"
)

function testePresenca(aluno){

    console.assert(aluno.frequencia === 60,{
        "function":'aluno.frequencia',
        "expected":"60",
        "result":aluno.frequencia,
    })
    
}
testePresenca(newAluno)

function testeNota(aluno){
    console.assert(aluno.nota === 55,{
        "function":'aluno.nota',
        "expected":"55",
        "result":aluno.nota,
    })
}
testeNota(newAluno)

function testeStatusAluno(aluno){
    console.assert(aluno.status === "Aprovado",{
        "function":'aluno.status',
        "expected":"Aprovado",
        "result":aluno.status,
    })
}
testeStatusAluno(newAluno)