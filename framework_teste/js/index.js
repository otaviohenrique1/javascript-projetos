/* framework javascript teste */
const campoTexto = document.querySelector('#campo-texto');
const campoTextoResultado = document.querySelector('#campo-texto-resultado');
const botaoCampoTextoResultado = document.querySelector('#botao-campo-texto-resultado');

botaoCampoTextoResultado.addEventListener('click', () => {
    let valor = campoTexto.value;
    campoTextoResultado.innerHTML = valor;
});