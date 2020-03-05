let numero_vitorias = 0; // Numero de vitorias do usuario
let numero_777_sorteados = 0; // Numero de 7-7-7 sorteados pelo usuario
let numero_trios_sorteados = 0; // Numero de trios de numeros sorteados pelo usuario
let numero_duplas_sorteados = 0; // Numero de duplas de numeros sorteados pelo usuario
let numero_partidas = 0; // Numero de partidas realizadas pelo usuario
let primeiroValor;
let segundoValor;
let terceiroValor;
const resultadoAposta = document.querySelector('#resultado-aposta');
const valorApostado = document.querySelector('#valor-apostado');
const botaoResultadoAposta = document.querySelector('#botao-resultado-aposta');
const limparPlacar = document.querySelector('#limpar-placar');
const primeiroValorCampo = document.querySelector('#primeiro-valor');
const segundoValorCampo = document.querySelector('#segundo-valor');
const terceiroValorCampo = document.querySelector('#terceiro-valor');
const valorVitorias = document.querySelector('#valor-vitorias');
const valorEspeciais = document.querySelector('#valor-especiais');
const valorTriplas = document.querySelector('#valor-triplas');
const valorDuplas = document.querySelector('#valor-duplas');
const valorJogadas = document.querySelector('#valor-jogadas');
const iniciaAposta = document.querySelector('#inicia-aposta');
const aposta = document.querySelector('#aposta');
const limpar = document.querySelector('#limpar');
const ajuda = document.querySelector('#ajuda');
const lista = document.querySelector('#lista');
let mensagemResultado = new Resultado();
const totalMoedasCampo = document.querySelector('#total-moedas');
const campoValorAposta = document.querySelector('#valor-aposta');
const formulario = document.querySelector('#formulario');
let validaCampoValorAposta2 = formulario.valor_aposta.length == 0;
let textoCampoValorAposta;
let numeroCampoValorAposta;
let valorMoedas;

/* Exibe o resultado da aposta que pode ser um premio */
botaoResultadoAposta.addEventListener('click', () => {
    alert(mensagemResultado.getResultado());
});

/* Inicia a partida */
iniciaAposta.addEventListener('click', () => {
    if (document.formulario.valor_aposta.value == '' ||
    document.formulario.valor_aposta.length <= 0) {
        alert('Aposte um valor para poder jogar');
        resultadoAposta.innerHTML = '******';
    } else {
        if (isNaN(numeroCampoValorAposta) === true) {
            alert('campo aceita somente numeros');
        } else {
            textoCampoValorAposta = formulario.valor_aposta.value;
            numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
            if (numeroCampoValorAposta <= 0) {
                alert('Para poder jogar mais, aposte mais valores');        
            } else {
                primeiroValor = Operacoes.geraNumeroAleatorio();
                segundoValor = Operacoes.geraNumeroAleatorio();
                terceiroValor = Operacoes.geraNumeroAleatorio();
                primeiroValorCampo.innerHTML = primeiroValor;
                segundoValorCampo.innerHTML = segundoValor;
                terceiroValorCampo.innerHTML = terceiroValor;
        
                if (primeiroValor == segundoValor ||
                    primeiroValor == terceiroValor ||
                    segundoValor == terceiroValor) {
                    resultadoAposta.innerHTML = 'Ganhou';
                    botaoResultadoAposta.disabled = false;
                    mensagemResultado.setResultado('Ganhou');
                    numero_vitorias += 1;
                    numero_duplas_sorteados += 1;
                    numero_partidas += 1;
                    valorMoedas = (valorMoedas - 1);
                    totalMoedasCampo.innerHTML = valorMoedas;
                    textoCampoValorAposta = formulario.valor_aposta.value;
                    numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
                    numeroCampoValorAposta = (numeroCampoValorAposta - 100);
                    textoCampoValorAposta = formulario.valor_aposta.value = numeroCampoValorAposta;
        
                    if (primeiroValor == segundoValor && primeiroValor == terceiroValor && segundoValor == terceiroValor) {
                        if (primeiroValor == 7 && segundoValor == 7 && terceiroValor == 7) {
                            resultadoAposta.innerHTML = 'Ganhou!!!!!!!';
                            botaoResultadoAposta.disabled = false;
                            mensagemResultado.setResultado('Ganhou!!!!!!!');
                            numero_vitorias += 1;
                            numero_777_sorteados += 1;
                            numero_trios_sorteados += 1;
                            numero_partidas += 1;
                            valorMoedas = (valorMoedas - 1);
                            totalMoedasCampo.innerHTML = valorMoedas;
                            textoCampoValorAposta = formulario.valor_aposta.value;
                            numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
                            numeroCampoValorAposta = (numeroCampoValorAposta - 100);
                            textoCampoValorAposta = formulario.valor_aposta.value = numeroCampoValorAposta;
                        } else {
                            resultadoAposta.innerHTML = 'Ganhou';
                            botaoResultadoAposta.disabled = false;
                            mensagemResultado.setResultado('Ganhou');
                            valorMoedas = (valorMoedas - 1);
                            totalMoedasCampo.innerHTML = valorMoedas;
                            textoCampoValorAposta = formulario.valor_aposta.value;
                            numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
                            numeroCampoValorAposta = (numeroCampoValorAposta - 100);
                            textoCampoValorAposta = formulario.valor_aposta.value = numeroCampoValorAposta;
                            numero_vitorias += 1;
                            numero_trios_sorteados += 1;
                            numero_partidas += 1;
                        }
                    }
                } else {
                    resultadoAposta.innerHTML = 'Tente outra vez';
                    botaoResultadoAposta.disabled = false;
                    mensagemResultado.setResultado('Tente outra vez');
                    valorMoedas = (valorMoedas - 1);
                    totalMoedasCampo.innerHTML = valorMoedas;
                    textoCampoValorAposta = formulario.valor_aposta.value;
                    numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
                    numeroCampoValorAposta = (numeroCampoValorAposta - 100);
                    textoCampoValorAposta = formulario.valor_aposta.value = numeroCampoValorAposta;
                    numero_partidas += 1;
                }

                valorVitorias.innerHTML = numero_vitorias;
                valorEspeciais.innerHTML =  numero_777_sorteados;
                valorTriplas.innerHTML = numero_trios_sorteados;
                valorDuplas.innerHTML = numero_duplas_sorteados;
                valorJogadas.innerHTML = numero_partidas;
            }
        }
    }
});

/* Aposta algum valor */
aposta.addEventListener('click', (event) => {
    event.preventDefault();
    textoCampoValorAposta = formulario.valor_aposta.value;
    numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
    if (isNaN(numeroCampoValorAposta) === true) {
        alert('campo aceita somente numeros');
    } else {
        if (document.formulario.valor_aposta.value == '' ||
            document.formulario.valor_aposta.length <= 0) {
            alert('Aposte um valor para poder jogar');
            resultadoAposta.innerHTML = '******';
        } else {
            // console.log(formulario.valor_aposta.value);
            try {
                try {
                    textoCampoValorAposta = formulario.valor_aposta.value;
                    numeroCampoValorAposta = parseFloat(textoCampoValorAposta.trim());
                    if (numeroCampoValorAposta < 100) {
                        alert('Digite um valor acima de 100 para iniciar o jogo no caca niquel');
                        resultadoAposta.innerHTML = '******';
                    } else {
                        valorApostado.innerHTML = numeroCampoValorAposta;
                        valorMoedas = (numeroCampoValorAposta/100);
                        totalMoedasCampo.innerHTML = valorMoedas;
                    }
                } catch (erro) {
                    alert('Digite numeros inteiros somente');
                    formulario.valor_aposta.value ='';
                    resultadoAposta.innerHTML = '******';
                }
            } catch (erro) {
                alert('Esse campo aceita apenas numeros');
                formulario.valor_aposta.value ='';
                resultadoAposta.innerHTML = '******';
            }
        }
    }
});

/* Limpa o placar */
limparPlacar.addEventListener('click', () => {
    numero_vitorias = 0;
    numero_777_sorteados = 0;
    numero_trios_sorteados = 0;
    numero_duplas_sorteados = 0;
    numero_partidas = 0;
    valorVitorias.innerHTML = '******';
    valorEspeciais.innerHTML = '******';
    valorTriplas.innerHTML = '******';
    valorDuplas.innerHTML = '******';
    valorJogadas.innerHTML = '******';
});

/* Limpa os campos e os numeros */
limpar.addEventListener('click', (event) => {
    event.preventDefault();
    primeiroValorCampo.innerHTML = '';
    segundoValorCampo.innerHTML = '';
    terceiroValorCampo.innerHTML = '';
    valorApostado.innerHTML = '******';
    resultadoAposta.innerHTML = '******';
    formulario.valor_aposta.value = '';
    totalMoedasCampo.innerHTML = '******';
});

/* Exibe a ajuda */
ajuda.addEventListener('click', () => {
    alert(Ajuda.exibeAjuda());
});

/* Lista de apostas */
lista.addEventListener('click', () => {
    alert(Lista.exibeLista());
});