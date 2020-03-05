class Produto {
    constructor(nome, codigoProduto, quantidade, preco,_marca) {
        this._nome = nome;
        this._codigoProduto = codigoProduto;
        this._quantidade = quantidade;
        this._preco = preco;
        this._marca = marca;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set codigoProduto(codigoProduto) {
        this._codigoProduto = codigoProduto;
    }

    set quantidade(quantidade) {
        this._quantidade = quantidade;
    }

    set preco(preco) {
        this._preco = preco;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get nome() {
        return _nome;
    }

    get codigoProduto() {
        return _codigoProduto;
    }

    get quantidade() {
        return _quantidade;
    }

    get preco() {
        return _preco;
    }

    get marca() {
        return _marca;
    }
}