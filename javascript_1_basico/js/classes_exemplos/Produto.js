class Produto {
    constructor(codigo, nome, preco, empresa, quantidade, tipo_produto) {
        this._codigo = codigo;
        this._nome = nome;
        this._preco = preco;
        this._empresa = empresa;
        this._quantidade = quantidade;
        this._tipo_produto = tipo_produto;
    }

    get codigo() {
        return this._codigo;
    }

    get nome() {
        return this._nome;
    }
    
    get preco() {
        return this._preco;
    }

    get empresa() {
        return this._empresa;
    }

    get quantidade() {
        return this._quantidade;
    }

    get tipo_produto() {
        return this._tipo_produto;
    }
}