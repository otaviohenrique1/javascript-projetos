class Operacoes {
    static soma(valor1, valor2) {
        return valor1 + valor2;
    }

    static subtracao(valor1, valor2) {
        return valor1 - valor2;
    }

    static divisao(valor1, valor2) {
        return valor1 / valor2;
    }

    static multiplicacao(valor1, valor2) {
        return valor1 * valor2;
    }

    static sinal(valor) {
        return (valor * -1);
    }

    static porcentagem(valor) {
        return (valor/100);
    }

    static inverso(valor) {
        return (1/valor);
    }

    static numeropi() {
        return Math.PI;
    }

    static potencia2(valor1) {
        return Math.pow(valor1, 2);
    }
    
    static potencia3(valor) {
        return Math.pow(valor, 3);
    }

    static potenciax(valor1, valor2) {
        return Math.pow(valor1, valor2);
    }

    static raiz2(valor) {
        return Math.sqrt(valor);
    }

    static raiz3(valor) {
        return Math.pow(valor, 1/3);
    }

    static raizx(valor1, valor2) {
        return Math.pow(valor1, 1/valor2);
    }

    static fatorial(valor) {
        let resultado = 0;
        resultado = valor;
        let num = valor;
        let txx = 1;
        for (let i = 2; i < num; i++) {
            txx = txx * i;
        }
        resultado = txx;
        return resultado;
    }

    static expoente(valor1, valor2) {
        return (valor1 * (Math.pow(10, valor2)));
    }
}