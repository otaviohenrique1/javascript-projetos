const botaoResultado = document.querySelector('#resultado');
const botaoLimpar = document.querySelector('#limpar');
const campoPortugues = document.querySelector('#campo-palavra-portugues');
const campoIngles = document.querySelector('#campo-palavra-ingles');

botaoResultado.addEventListener('click', () => {
    if (campoPortugues.value.lenght <= 0 || campoPortugues.value === '') {
        alert('Campo palavra portugues vazio');
    } else {
        // alert('Dicionario javascript');
        // campoIngles.value = campoPortugues.value;
        let palavraPesquisada = campoPortugues.value;
        for (const palavra in dicionarioPalavras) {
            if (dicionarioPalavras.hasOwnProperty(palavraPesquisada)) {
                campoIngles.value = campoPortugues.value;
            } else {
                console.log('Palavra nao foi encontrada');
            }
            // console.log(dicionarioPalavras[palavra]);
        }
    }
});

botaoLimpar.addEventListener('click', () => {
    campoPortugues.value = '';
    campoIngles.value = '';
});