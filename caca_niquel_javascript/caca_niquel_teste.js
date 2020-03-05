class Operacoes {
    /* Gera numero inteiro aleatorio */
    static geraNumeroAleatorio() {
        return Math.floor((Math.random() * 7) + 1);
    }
}

let numero_vitorias = 0; // Numero de vitorias do usuario
let numero_777_sorteados = 0; // Numero de 7-7-7 sorteados pelo usuario
let numero_trios_sorteados = 0; // Numero de trios de numeros sorteados pelo usuario
let numero_duplas_sorteados = 0; // Numero de duplas de numeros sorteados pelo usuario
let numero_partidas = 0; // Numero de partidas realizadas pelo usuario

let primeiroValor;
let segundoValor;
let terceiroValor;
for (let i = 0; i < 100; i++) {
    primeiroValor = Operacoes.geraNumeroAleatorio();
    segundoValor = Operacoes.geraNumeroAleatorio();
    terceiroValor = Operacoes.geraNumeroAleatorio();

    if (primeiroValor == segundoValor ||
        primeiroValor == terceiroValor ||
        segundoValor == terceiroValor) {
        numero_vitorias += 1;
        numero_duplas_sorteados += 1;
        numero_partidas += 1;
        if (primeiroValor == segundoValor && primeiroValor == terceiroValor && segundoValor == terceiroValor) {
            if (primeiroValor == 7 && segundoValor == 7 && terceiroValor == 7) {
                numero_vitorias += 1;
                numero_777_sorteados += 1;
                numero_trios_sorteados += 1;
                numero_partidas += 1;
            } else {
                numero_vitorias += 1;
                numero_trios_sorteados += 1;
                numero_partidas += 1;
            }
        }
    } else {
        numero_partidas += 1;
    }

    console.log("Numero de vitorias do usuario -> " + numero_vitorias);
    console.log("Numero de 7-7-7 sorteados pelo usuario -> " + numero_777_sorteados);
    console.log("Numero de trios de numeros sorteados pelo usuario -> " + numero_trios_sorteados);
    console.log("Numero de duplas de numeros sorteados pelo usuario -> " + numero_duplas_sorteados);
    console.log("Numero de partidas realizadas pelo usuario -> " + numero_partidas);    
}
