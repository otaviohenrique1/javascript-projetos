let primeiroValorSorteio = document.querySelector('#primeiro-valor-sorteio');
let segundoValorSorteio = document.querySelector('#segundo-valor-sorteio');
let terceiroValorSorteio = document.querySelector('#terceiro-valor-sorteio');
let quartoValorSorteio = document.querySelector('#quarto-valor-sorteio');
let quintoValorSorteio = document.querySelector('#quinto-valor-sorteio');
let sextoValorSorteio = document.querySelector('#sexto-valor-sorteio');

let campoPrimeiroValorAposta = document.querySelector('#primeiro-valor-aposta');
let campoSegundoValorAposta = document.querySelector('#segundo-valor-aposta');
let campoTerceiroValorAposta = document.querySelector('#terceiro-valor-aposta');
let campoQuartoValorAposta = document.querySelector('#quarto-valor-aposta');
let campoQuintoValorAposta = document.querySelector('#quinto-valor-aposta');
let campoSextoValorAposta = document.querySelector('#sexto-valor-aposta');

let campoResultado = document.querySelector('#campo-resultado');
let mensagemResultado = new Mensagem();
let mensagemValidacao = new Mensagem();

let valorPrimeiroAposta;
let valorSegundoAposta;
let valorTerceiroAposta;
let valorQuartoAposta;
let valorQuintoAposta;
let valorSextoAposta;

let validacaoCamposVazios;
let validacaoQuantidadeCaracteres;
let validacaoValoresMenoresQueUm;
let validacaoValoresMaioresQueSessenta;

const botaoCadastrar = document.querySelector('#sorteia');
botaoCadastrar.addEventListener('click', () => {
    valorPrimeiroAposta = campoPrimeiroValorAposta.value;
    valorSegundoAposta = campoSegundoValorAposta.value;
    valorTerceiroAposta = campoTerceiroValorAposta.value;
    valorQuartoAposta = campoQuartoValorAposta.value;
    valorQuintoAposta = campoQuintoValorAposta.value;
    valorSextoAposta = campoSextoValorAposta.value;

    validacaoCamposVazios = validaCamposVazios(valorPrimeiroAposta, valorSegundoAposta, valorTerceiroAposta, valorQuartoAposta, valorQuintoAposta, valorSextoAposta);
    validacaoValoresMenoresQueUm = validaCampoComValorMenorQueUm(valorPrimeiroAposta, valorSegundoAposta, valorTerceiroAposta, valorQuartoAposta, valorQuintoAposta, valorSextoAposta);
    validacaoValoresMaioresQueSessenta = validaValoresMaioresQueSessenta(valorPrimeiroAposta, valorSegundoAposta, valorTerceiroAposta, valorQuartoAposta, valorQuintoAposta, valorSextoAposta);

    var primeiroCampoErros = validaCampoComMensagemDeErro(valorPrimeiroAposta);
    var segundoCampoErros = validaCampoComMensagemDeErro(valorSegundoAposta);
    var terceiroCampoErros = validaCampoComMensagemDeErro(valorTerceiroAposta);
    var quartoCampoErros = validaCampoComMensagemDeErro(valorQuartoAposta);
    var quintoCampoErros = validaCampoComMensagemDeErro(valorQuintoAposta);
    var sextoCampoErros = validaCampoComMensagemDeErro(valorSextoAposta);

    if (primeiroCampoErros.length > 0) {
        alert('primeiro campo' +primeiroCampoErros);
        return;
    } else if (segundoCampoErros.length > 0) {
        alert('segundo campo' +segundoCampoErros);
        return;
    } else if (terceiroCampoErros.length > 0) {
        alert('terceiro campo' +terceiroCampoErros);
        return;
    } else if (quartoCampoErros.length > 0) {
        alert('quarto campo' +quartoCampoErros);
        return;
    } else if (quintoCampoErros.length > 0) {
        alert('quinto campo' +quintoCampoErros);
        return;
    } else if (sextoCampoErros.length > 0) {
        alert('sexto campo' +sextoCampoErros);
        return;
    } else {
        let primeiroValor = NumeroAleatorio.geraNumero();
        let segundoValor = NumeroAleatorio.geraNumero();
        let terceiroValor = NumeroAleatorio.geraNumero();
        let quartoValor = NumeroAleatorio.geraNumero();
        let quintoValor = NumeroAleatorio.geraNumero();
        let sextoValor = NumeroAleatorio.geraNumero();

        primeiroValorSorteio.innerHTML = primeiroValor;
        segundoValorSorteio.innerHTML = segundoValor;
        terceiroValorSorteio.innerHTML = terceiroValor;
        quartoValorSorteio.innerHTML = quartoValor;
        quintoValorSorteio.innerHTML = quintoValor;
        sextoValorSorteio.innerHTML = sextoValor;

        let camparaResultados = camparaNumeros(primeiroValor, valorPrimeiroAposta) || camparaNumeros(segundoValor, valorSegundoAposta) || 
            camparaNumeros(terceiroValor, valorTerceiroAposta) || camparaNumeros(quartoValor, valorQuartoAposta) ||
            camparaNumeros(quintoValor, valorQuintoAposta) || camparaNumeros(sextoValor, valorSextoAposta);

        if (camparaResultados) {
            mensagemResultado.setMensagem('Ganhou');
        } else {
            mensagemResultado.setMensagem('Perdeu');
        }
    }
});

function camparaNumeros(numeroSorteio, numeroAposta) {
    return numeroSorteio === numeroAposta;
}

const botaoResultado = document.querySelector('#resultado');
botaoResultado.addEventListener('click', () => {
    valorPrimeiroAposta = campoPrimeiroValorAposta.value;
    valorSegundoAposta = campoSegundoValorAposta.value;
    valorTerceiroAposta = campoTerceiroValorAposta.value;
    valorQuartoAposta = campoQuartoValorAposta.value;
    valorQuintoAposta = campoQuintoValorAposta.value;
    valorSextoAposta = campoSextoValorAposta.value;
    
    validacaoCamposVazios = validaCamposVazios(valorPrimeiroAposta, valorSegundoAposta, valorTerceiroAposta, valorQuartoAposta, valorQuintoAposta, valorSextoAposta);
    validacaoValoresMenoresQueUm = validaCampoComValorMenorQueUm(valorPrimeiroAposta, valorSegundoAposta, valorTerceiroAposta, valorQuartoAposta, valorQuintoAposta, valorSextoAposta);
    validacaoValoresMaioresQueSessenta = validaValoresMaioresQueSessenta(valorPrimeiroAposta, valorSegundoAposta, valorTerceiroAposta, valorQuartoAposta, valorQuintoAposta, valorSextoAposta);

    if (validacaoCamposVazios) {
        campoResultado.innerHTML = '';
    } else {
        if (validacaoValoresMenoresQueUm) {
            campoResultado.innerHTML = '';
        } else {
            if (validacaoValoresMaioresQueSessenta) {
                campoResultado.innerHTML = '';
            } else {
                campoResultado.innerHTML = mensagemResultado.getMensagem();
            }
        }
    }
});

const botaoLimpar = document.querySelector('#limpar');
botaoLimpar.addEventListener('click', () => {
    limpaCampos();
});

function limpaCampos() {
    primeiroValorSorteio.innerHTML = '';
    segundoValorSorteio.innerHTML = '';
    terceiroValorSorteio.innerHTML = '';
    quartoValorSorteio.innerHTML = '';
    quintoValorSorteio.innerHTML = '';
    sextoValorSorteio.innerHTML = '';

    campoPrimeiroValorAposta.value = '';
    campoSegundoValorAposta.value = '';
    campoTerceiroValorAposta.value = '';
    campoQuartoValorAposta.value = '';
    campoQuintoValorAposta.value = '';
    campoSextoValorAposta.value = '';

    campoResultado.innerHTML = '';
}

function validaCamposVazios(validaPrimeiroValor, validaSegundoValor, validaTerceiroValor,
    validaQuartoValor, validaQuintoValor, validaSextoValor) {
    return validaPrimeiroValor == '' || validaPrimeiroValor.length < 0 || 
        validaSegundoValor == '' || validaSegundoValor.length < 0 ||
        validaTerceiroValor == '' ||validaTerceiroValor.length < 0 ||
        validaQuartoValor == '' || validaQuartoValor.length < 0 ||
        validaQuintoValor == '' || validaQuintoValor.length < 0 ||
        validaSextoValor == '' || validaSextoValor.length < 0;
}

function validaCampoComValorMenorQueUm(validaPrimeiroValor, validaSegundoValor, validaTerceiroValor,
    validaQuartoValor, validaQuintoValor, validaSextoValor) {
    return validaPrimeiroValor < 1 || validaSegundoValor < 1 || validaTerceiroValor < 1 ||
        validaQuartoValor < 1 || validaQuintoValor < 1 || validaSextoValor < 1;
}

function validaValoresMaioresQueSessenta(validaPrimeiroValor, validaSegundoValor, validaTerceiroValor,
    validaQuartoValor, validaQuintoValor, validaSextoValor) {
    return validaPrimeiroValor > 60 || validaSegundoValor > 60 || validaTerceiroValor > 60 ||
        validaQuartoValor > 60 || validaQuintoValor > 60 || validaSextoValor > 60;
}

function validaCampoVazio(valorAposta) {
    return valorAposta == '' || valorAposta.length < 0;
}

function validaValorMenorQueUm(valorAposta) {
    return valorAposta < 1;
}

function validaValorMaiorQueSessenta(valorAposta) {
    return valorAposta > 60;
}

function validaCampoComMensagemDeErro(nomeCampo, valorAposta) {
    let erros = [];
    if (validaCampoVazio(valorAposta)) {
        erros.push(nomeCampo + ' esta vazio');
    }
    if (validaValorMenorQueUm(valorAposta)) {
        erros.push('Valor menor que 1 no ' + nomeCampo);
    }
    if (validaValorMaiorQueSessenta(valorAposta)) {
        erros.push('Valor maior que 60 no ' + nomeCampo);
    }
    return erros;
}