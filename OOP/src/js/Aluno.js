class Aluno extends Pessoa{
    constructor(nome, sobreNome, idade, email, datanascimento, cpf,matricula,quarter){
        super(nome, sobreNome, idade, email, datanascimento, cpf)

        this._matricula = matricula
        this._quarter   = quarter
        this._nota      = 55
        this._status    = "Aprovado"
        this._frequencia = 60
        
    }

    set matricula(matricula){
        this._matricula = matricula
    }

    get matricula(){
        return this._matricula
    }

    set frequencia(frequencia){
        this._frequencia = frequencia
    }

    get frequencia(){
        return this._frequencia
    }

    set nota(nota){
        this._nota = nota
    }

    get nota(){
        return this._nota
    }

    set status(status){
        this._status = status
    }

    get status(){
        return this._status
    }
    
    //ESTOU SOBRE ESCREVENDO MÉTODO DA CLASSE PAI
    nomeCompleto(){

        //ALUNO CAIO CAROLINO 
        let apresentacao = super.nomeCompleto()
        return `Aluno ${apresentacao}`

    }

}








