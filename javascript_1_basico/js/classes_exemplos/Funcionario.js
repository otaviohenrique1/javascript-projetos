class Funcionario extends Cliente {
    constructor(nome, dataNascimento, rg, cpf, endereco, bairro, cidade, estado, pais, nacionalidade,
        cargo, salario, login, senha, nivelAcessoSistema, horarioEntrada, horarioSaida, cargaHoraria) {
        super(nome, dataNascimento, rg, cpf, endereco, bairro, cidade, estado, pais, nacionalidade,
            cargo, salario, login, senha, nivelAcessoSistema, horarioEntrada, horarioSaida, cargaHoraria);
        this._cargo = cargo;
        this._salario = salario;
        this._login = login;
        this._senha = senha;
        this._nivelAcessoSistema = nivelAcessoSistema;
        this._horarioEntrada = horarioEntrada;
        this._horarioSaida = horarioSaida;
        this._cargaHoraria = cargaHoraria;
    }
    
    get cargo() {
        return this._cargo;
    }

    get salario() {
        return this._salario;
    }

    get login() {
        return this._login;
    }

    get senha() {
        return this._senha;
    }

    get nivelAcessoSistema() {
        return this._nivelAcessoSistema;
    }

    get horarioEntrada() {
        return this._horarioEntrada;
    }

    get horarioSaida() {
        return this._horarioSaida;
    }

    get cargaHoraria() {
        return this._cargaHoraria;
    }
}

/*
var funcionario = new Funcionario("nome", "dataNascimento", "rg", "cpf", "endereco", "bairro", "cidade", "estado", "pais", "nacionalidade",
    "cargo", "salario", "login", "senha", "nivelAcessoSistema", "horarioEntrada", "horarioSaida", "cargaHoraria");
*/