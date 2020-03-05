class CodigoProduto {
    static geraCodigo() {
        let codigoProduto = '';
        for (let i = 0; i < 10; i++) {
            codigoProduto = codigoProduto.concat('' + Math.floor((Math.random() * 10)));
        }
        return codigoProduto;
    }
}