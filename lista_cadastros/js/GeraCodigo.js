class GeraCodigo {
    static geraCodigoComVariosValores(quantidadeValores) {
        let codigo = '';
        for (let i = 0; i < quantidadeValores; i++) {
            codigo = codigo.concat('' + Math.floor((Math.random() * 10)));
        }
        return codigo;
    }

    static geraCodigoComUmValor() {
        return Math.floor((Math.random() * 10));
    }
}