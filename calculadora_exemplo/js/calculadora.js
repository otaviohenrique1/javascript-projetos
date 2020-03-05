const visor = document.querySelector('#visor');
const n9 = document.querySelector('#numero9');
const n8 = document.querySelector('#numero8');
const n7 = document.querySelector('#numero7');
const n6 = document.querySelector('#numero6');
const n5 = document.querySelector('#numero5');
const n4 = document.querySelector('#numero4');
const n3 = document.querySelector('#numero3');
const n2 = document.querySelector('#numero2');
const n1 = document.querySelector('#numero1');
const n0 = document.querySelector('#numero0');
const adicao = document.querySelector('#adicao');
const subtracao = document.querySelector('#subtracao');
const divisao = document.querySelector('#divisao');
const multiplicacao = document.querySelector('#multiplicacao');
const igual = document.querySelector('#igual');
const ponto = document.querySelector('#ponto');
const deletar = document.querySelector('#deletar');
const apagar = document.querySelector('#apagar');
const porcentagem = document.querySelector('#porcentagem');
const sinal = document.querySelector('#sinal');
const inverso = document.querySelector('#inverso');
const raiz2 = document.querySelector('#raiz2');
const raiz3 = document.querySelector('#raiz3');
const raizx = document.querySelector('#raizx');
const potencia2 = document.querySelector('#potencia2');
const potencia3 = document.querySelector('#potencia3');
const potenciax = document.querySelector('#potenciax');
const numeropi = document.querySelector('#numeropi');
const fatorial = document.querySelector('#fatorial');
const expoente = document.querySelector('#expoente');

let tela = [];
let validaTela = visor.textContent == '';
// let zeraTela;
let opcao = '';
let valor1;
let valor2;
let resultado = 0;

function validaTextoTela() {
    if (validaTela) {
        visor.innerHTML = '';
    }
    if (visor.textContent === '0.0') {
        visor.innerHTML = '';
    }
    if (visor.textContent === '+' ||
        visor.textContent === '-' ||
        visor.textContent === '/' ||
        visor.textContent === '*' ||
        visor.textContent === 'r' ||
        visor.textContent === '^' ||
        visor.textContent === 'e') {
        visor.innerHTML = '';
    }
    // if (zeraTela = 1) {
    //     visor.innerHTML = '';        
    // }
}

n9.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '9';
    // zeraTela = 0;
});

n8.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '8';
    // zeraTela = 0;
});

n7.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '7';
    // zeraTela = 0;
});

n6.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '6';
    // zeraTela = 0;
});

n5.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '5';
    // zeraTela = 0;
});

n4.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '4';
    // zeraTela = 0;
});

n3.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '3';
    // zeraTela = 0;
});

n2.addEventListener('click', () => {
    validaTextoTela();    
    visor.innerHTML = visor.textContent + '2';
    // zeraTela = 0;
});

n1.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '1';
    // zeraTela = 0;
});

n0.addEventListener('click', () => {
    validaTextoTela();
    visor.innerHTML = visor.textContent + '0';
    // zeraTela = 0;
});

adicao.addEventListener('click', () => {
    valor1 = parseFloat(visor.textContent);
    visor.innerHTML = '';
    visor.innerHTML = visor.textContent + '+';
    opcao = '+';
    // zeraTela = 1;
});

subtracao.addEventListener('click', () => {
    valor1 = parseFloat(visor.textContent);
    visor.innerHTML = '';
    visor.innerHTML = visor.textContent + '-';
    opcao = '-';
    // zeraTela = 1;
});

divisao.addEventListener('click', () => {
    valor1 = parseFloat(visor.textContent);
    visor.innerHTML = '';
    visor.innerHTML = visor.textContent + '/';
    opcao = '/';
    // zeraTela = 1;
});

multiplicacao.addEventListener('click', () => {
    valor1 = parseFloat(visor.textContent);
    visor.innerHTML = '';
    visor.innerHTML = visor.textContent + '*';
    opcao = '*';
    // zeraTela = 1;
});

igual.addEventListener('click', () => {
    valor2 = parseFloat(visor.textContent);
    switch (opcao) {
        case '+':
            resultado = Operacoes.soma(valor1, valor2);
            visor.innerHTML = resultado;
            // zeraTela = 1;
            break;

        case '-':
            resultado = Operacoes.subtracao(valor1, valor2);
            visor.innerHTML = resultado;
            // zeraTela = 1;
            break;

        case '/':
            resultado = Operacoes.divisao(valor1, valor2);
            visor.innerHTML = resultado;
            // zeraTela = 1;
            break;

        case '*':
            resultado = Operacoes.multiplicacao(valor1, valor2);
            visor.innerHTML = resultado;
            // zeraTela = 1;
            break;
        
        case '^':
            resultado = Operacoes.potenciax(parseFloat(valor1), parseFloat(valor2));
            visor.innerHTML = resultado;
            // zeraTela = 1;
            break;

        case 'r':
            resultado = Operacoes.raizx(parseFloat(valor1), parseFloat(valor2));
            visor.innerHTML = resultado;
            // zeraTela = 1;
            break;

        default:
            break;
    }
});

ponto.addEventListener('click', () => {
    visor.innerHTML = visor.textContent + '.';
});

deletar.addEventListener('click', () => {
    visor.innerHTML = '';
});

apagar.addEventListener('click', () => {
    visor.innerHTML = '0.0';
});

porcentagem.addEventListener('click', () => {
    visor.innerHTML = Operacoes.porcentagem(parseFloat(visor.textContent));
});

sinal.addEventListener('click', () => {
    visor.innerHTML = Operacoes.sinal(parseFloat(visor.textContent));
});

inverso.addEventListener('click', () => {
    visor.innerHTML = Operacoes.inverso(parseFloat(visor.textContent));
});

raiz2.addEventListener('click', () => {
    visor.innerHTML = Operacoes.raiz2(parseFloat(visor.textContent));
});

raiz3.addEventListener('click', () => {
    visor.innerHTML = Operacoes.raiz3(parseFloat(visor.textContent));
});

raizx.addEventListener('click', () => {
    visor.innerHTML = 'r';
});

potencia2.addEventListener('click', () => {
    visor.innerHTML = Operacoes.potencia2(parseFloat(visor.textContent));
});

potencia3.addEventListener('click', () => {
    visor.innerHTML = Operacoes.potencia3(parseFloat(visor.textContent));
});

potenciax.addEventListener('click', () => {
    visor.innerHTML = '^';
});

numeropi.addEventListener('click', () => {
    visor.innerHTML = Operacoes.numeropi();
});

fatorial.addEventListener('click', () => {
    visor.innerHTML = Operacoes.fatorial(parseFloat(visor.textContent));
});

expoente.addEventListener('click', () => {
    visor.innerHTML = Operacoes.expoente(parseFloat(valor1), parseFloat(valor2));
});