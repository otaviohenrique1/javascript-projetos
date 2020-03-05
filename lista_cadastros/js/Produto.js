class Produto extends Item {
    constructor(nome, codigoProduto, quantidade, preco,_marca) {
        super(nome, codigoProduto);
        this._quantidade = quantidade;
        this._preco = preco;
        this._marca = marca;
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