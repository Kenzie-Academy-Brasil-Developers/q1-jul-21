//PESSOA
//const hudson = new Pessoa("Hudson","Carolino",25,"hudson@kenzie.com.br", "31/10/1996","10826604939")

//ALUNO
const caio = new Aluno(
    "Caio",
    "Carolino",
    25,
    "caio@kenzie.com",
    "31101996",
    "10826604936",
    23,
    "Q1"
)

//CLASSE ESCOLA
//kenzie 
const kenzie = new Escola("Kenzie")
console.log(kenzie)

//CLASSE FACILITADOR
//maria
const maria = new Facilitador(
    "Maria",
    "Porcina", 
    21, 
    "maria@kenzie.com",
    "11/10/2000", 
    "10826604837",8, "09 ás 18:00"
    
)
kenzie.cadastrarFacilitadores(maria)
//hudson
const hudson = new Facilitador(
    "Hudson",
    "Carolino", 
    24, 
    "huddson@kenzie.com",
    "31/10/1996", 
    "10826604837",8, "09 ás 18:00"
    
)
kenzie.cadastrarFacilitadores(hudson)
//luciano
const luciano = new Facilitador(
    "Luciano",
    "Feder", 
    27, 
    "luciano@kenzie.com",
    "31/10/1994", 
    "10826604837",8, "09 ás 18:00"
)
kenzie.cadastrarFacilitadores(luciano)
//CLASSE ALUNO
//bruno 
//Arthur
//Erick

