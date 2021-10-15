class Facilitador extends Pessoa{
    constructor(nome, sobreNome, idade, email, datanascimento, cpf, turma, horario = "09: ás 18"){
        super(nome, sobreNome, idade, email, datanascimento, cpf)

        this._turma       = turma;
        this._remuneracao = 10000;
        this._coach       = []
        this._horario     = horario
      
    }

}

