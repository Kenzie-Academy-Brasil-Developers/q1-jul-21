class Pessoa {
    constructor(nome, sobreNome, idade, email, datanascimento, cpf){
        this._nome           = nome,
        this._sobreNome      = sobreNome,
        this._idade          = idade,
        this._email          = email,
        this._datanascimento = datanascimento,
        this._cpf            = cpf
    }

    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    set cpf(cpf){

        if(true){
            this._cpf = cpf
        }
        else{
            throw Error("CPF invalido")
        }
        
    }

    get cpf(){
        return this._cpf
    }

    set idade(idade){

        if(idade >= 18){
            this._idade = idade
        }
        else{
            throw Error("Menor idade")
        }
        
    }

    get idade(){
        return this._idade
    }

    set sobreNome(sobreNome){

        this._sobreNome = sobreNome
    
    }

    get sobreNome(){
        return this._sobreNome
    }

    nomeCompleto(){
        return `${this._nome} ${this._sobreNome}`
    }

    apresentar(){
        return `Meu nome e ${this._nome}`
    }
}








