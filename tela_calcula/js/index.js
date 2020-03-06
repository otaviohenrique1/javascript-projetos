const campoTextoHipotenusa = document.querySelector('#campo-texto-hipotenusa');
const campoTextoCateto1 = document.querySelector('#campo-texto-cateto1');
const campoTextoCateto2 = document.querySelector('#campo-texto-cateto2');
const campoTextoResultado = document.querySelector('#campo-texto-resultado');
const botaoCampoTextoResultado = document.querySelector('#botao-campo-texto-resultado');

botaoCampoTextoResultado.addEventListener('click', () => {
    let valorHipotenusa = campoTextoHipotenusa.value;
    let valorCateto1 = campoTextoCateto1.value;
    let valorCateto2 = campoTextoCateto2.value;
    if (valorHipotenusa == '') {
        campoTextoResultado.innerHTML = calculaTeoremaComHipotenusa(valorCateto1, valorCateto2)
    } else if (valorCateto1 == '') {
        campoTextoResultado.innerHTML = calculaTeoremaComCateto1(valorHipotenusa, valorCateto2)
    } else if (valorCateto2 == '') {
        campoTextoResultado.innerHTML = calculaTeoremaComCateto1(valorHipotenusa, valorCateto1)
    }
});

// teorema de pitagoras em javascript com html e css

function calculaTeoremaComHipotenusa(cateto1, cateto2) {
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
}

function calculaTeoremaComCateto1(hipotenusa, cateto2) {
    return Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2));
}

function calculaTeoremaComCateto1(hipotenusa, cateto1) {
    return Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2));
}

function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 75);
        ctx.fill();
    }
}

// hipotenusa = 5
// cateto1 = 3
// cateto2 = 4
// print("calculaTeoremaComHipotenusa->" + calculaTeoremaComHipotenusa(3, 4))
// print("calculaTeoremaComCateto1->" + calculaTeoremaComCateto1(5, 3))
// print("calculaTeoremaComCateto2->" + calculaTeoremaComCateto2(5, 4))