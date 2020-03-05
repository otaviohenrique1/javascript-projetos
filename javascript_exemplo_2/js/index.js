const campoTexto = document.querySelector('#campo-texto');
const campoTextoResultado = document.querySelector('#campo-texto-resultado');
const botaoCampoTextoResultado = document.querySelector('#botao-campo-texto-resultado');

botaoCampoTextoResultado.addEventListener('click', () => {
    let textoValor = campoTexto.value;
    // campoTextoResultado.innerHTML = mudaCaractereEmString(textoValor);
    campoTextoResultado.innerHTML = mudaCaractereEmString2(textoValor);
});

const expressao1 = /\s/g;
const expressao2 = /\/\s/g;
const expressao3 = /\/\s\.\-/g;

function mudaCaractereEmString(palavra) {
    return palavra.replace(expressao1, '_');
}
// mudaCaractereEmString('asd asd dasd asd');

function mudaCaractereEmString2(palavra) {
    function espacoEmBrancoEmString(palavra) {
        return barraEmString(palavra.replace(/\s/g, '_'));
    }
    function barraEmString(palavra) {
        return pontoEmString(palavra.replace(/\//g, '_'));
    }
    function pontoEmString(palavra) {
        return palavra.replace(/\./g, '_');
    }
    return espacoEmBrancoEmString(palavra);
}
// mudaCaractereEmString2('asd as . d d / akl jki jls . / d asd');

function espacoEmBrancoEmString2(palavra) {
    return palavra.replace(/\s/g, '_');
}

function barraEmString2(palavra) {
    return palavra.replace(/\//g, '_');
}

function pontoEmString2(palavra) {
    return palavra.replace(/\./g, '_');
}

function tracoEmString2(palavra) {
    return palavra.replace(/\-/g, '_');
}