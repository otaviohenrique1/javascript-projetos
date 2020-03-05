class Operacoes {
    /* Gera numero inteiro aleatorio */
    static geraNumeroAleatorio() {
        return Math.floor((Math.random() * 7) + 1);
    }
}

class Ajuda {
    static exibeAjuda() {
        /* Template string */
        return `
            No campo Valor da aposta digite valor para
            apostar. Esse valor sera um convertido em
            moedas para serem utilizadas nas jogadas.
            Para consultar a lista de apostas aperte
            Lista. Aperte Inicio/Start para comecar a
            jogar no Caca Niquel.
            --- Legenda do Placar ---
            -Vitorias: quantidade de vitorias do usuario.
            -Especiais: Quantidade de 7-7-7 sorteados
            pelo usuario.
            -Triplas: Quantidade de trios de numeros
            sorteados pelo usuario.
            -Duplas: Quantidade de duplas de numeros
            sorteadas pelo usuario.
            -Jogadas: Partidas realizdas pelo usuario.
        `;
    }
}

class Lista {
    static exibeLista() {
        /* Template string */
        return `
            Lista de apostas:
            100 = 1 Moeda
            1000 = 10 Moedas
            10000 = 100 Moedas
            100000 = 1000 Moedas
            100000 = 10000 Moedas
            1000000 = 100000 Moedas
            10000000 = 1000000 Moedas
        `;
    }
}

let _mensagem;
class Mensagem {
    setMensagem(mensagem) {
        _mensagem = mensagem;
    }

    getMensagem() {
        return _mensagem;
    }
}

class MensagemController {
    static criaMensagem(mensagem) {
        mensagemResultado.setMensagem(mensagem);
        alert(mensagemResultado.getMensagem());
    }
}