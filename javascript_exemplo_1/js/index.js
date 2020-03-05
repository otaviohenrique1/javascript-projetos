/*
    Math.random() -> gera numero aleatorio
    Math.floor() -> arredonda numero com virgula
*/
// function geraNumeroAleratorio() {
//     document.getElementById("resultado-numero-aleatorio").innerHTML = Math.random();
// }

// function geraNumeroArredondado() {
//     document.getElementById("resultado-numero-arredondado").innerHTML = Math.floor((Math.random() * 10) + 1);
// }

/*
class criaNumeroAleratorio {
    static criaNumeroAleratorio() {
        return Math.floor((Math.random() * 10) + 1); // Retorna um numero aleatorio entre 1 e 10
    }
}

function numeroAleatorio() {
    document.getElementById("resultado").innerHTML = criaNumeroAleratorio.criaNumeroAleratorio();
}
*/

// let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// letras.forEach(letra => {
//     let x = '';
//     x = x.concat('[' + letra + ']');
//     console.log(x);
// });

// function mudaCaractereEmString(palavra, caractereAntigo, caractereNovo) {
//     let novaPalavra = palavra.replace(caractereAntigo, caractereNovo);
//     return novaPalavra;
// }

// function mudaCaractereEmArrayDeString(palavra, caractereAntigo, caractereNovo) {
//     for (let i = 0; i < palavra.length; i++) {
//         let novaPalavra = palavra[i].replace(caractereAntigo, caractereNovo);
//     }
//     return novaPalavra;
// }

// let palavra = 'abcdef';
// palavra.split('');

const campoTexto = document.querySelector('#campo-texto');
const campoTextoResultado = document.querySelector('#campo-texto-resultado');
const botaoCampoTextoResultado = document.querySelector('#botao-campo-texto-resultado');

botaoCampoTextoResultado.addEventListener('click', () => {
    let textoValor = campoTexto.value;
    campoTextoResultado.innerHTML = mudaCaractereEmString(textoValor);
});

function mudaCaractereEmString(palavra) {
    return palavra.replace(/\s/g, '_');
}
// mudaCaractereEmString('asd asd dasd asd');