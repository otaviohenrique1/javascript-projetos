class Cliente {
    constructor(nome, dataNascimento, rg, cpf, endereco, bairro, cidade, estado, pais, nacionalidade) {
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._rg = rg;
        this._cpf = cpf;
        this._endereco = endereco;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
        this._pais =  pais;
        this._nacionalidade = nacionalidade;
    }
    
    get nome() {
        return this._nome;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    get rg() {
        return this._rg;
    }

    get cpf() {
        return this._cpf;
    }

    get endereco() {
        return this._endereco;
    }

    get bairro() {
        return this._bairro;
    }

    get cidade() {
        return this._cidade;
    }

    get estado() {
        return this._estado;
    }

    get pais() {
        return this._pais;
    }

    get nacionalidade() {
        return this._nacionalidade;
    }
}

/*
var cliente = new Cliente("nome", "dataNascimento", "rg", "cpf", "endereco", "bairro", "cidade", "estado", "pais", "nacionalidade");
*/