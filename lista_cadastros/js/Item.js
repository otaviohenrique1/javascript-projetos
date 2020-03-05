class Item {
    constructor(nome, codigo) {
        this._nome = nome;
        this._codigo = codigo;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set codigo() {
        this._codigo = codigo;
    }

    get nome() {
        return this._nome;
    }

    get codigo() {
        return this._codigo;
    }
}