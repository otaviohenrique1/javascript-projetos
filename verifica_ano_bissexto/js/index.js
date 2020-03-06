const campoTexto = document.querySelector('#campo-texto');
const campoTextoResultado = document.querySelector('#campo-texto-resultado');
const botaoCampoTextoResultado = document.querySelector('#botao-campo-texto-resultado');

botaoCampoTextoResultado.addEventListener('click', () => {
    let valor = campoTexto.value;
    // campoTextoResultado.innerHTML = mudaCaractereEmString(textoValor);
    campoTextoResultado.innerHTML = verificaAnoBissexto(valor);
});

function verificaAnoBissexto(ano) {
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        return ano + ' é bissexto';
    }
    return ano + ' não é bissexto';
}