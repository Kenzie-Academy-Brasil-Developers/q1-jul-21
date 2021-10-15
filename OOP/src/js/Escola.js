class Escola {
    constructor(nome){
        this._nome = nome;
        this._alunos        = [];
        this._facilitadores = [];
        this._instrutores   = [];
    }

    cadastrarAluno(aluno){
        this._alunos.push(aluno)   
    }

    cadastrarFacilitadores(facilitador){
        this._facilitadores.push(facilitador)   
    }

    cadastrarInstrutores(instrutor){
        this._instrutores.push(instrutor)   
    }
    
}