// let resultado = document.querySelector('#tabela');
// let k = '';
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 1 + ' x ' + i + ' = ' + (1 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 2 + ' x ' + i + ' = ' + (2 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 3 + ' x ' + i + ' = ' + (3 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 4 + ' x ' + i + ' = ' + (4 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 5 + ' x ' + i + ' = ' + (5 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 6 + ' x ' + i + ' = ' + (6 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 7 + ' x ' + i + ' = ' + (7 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 8 + ' x ' + i + ' = ' + (8 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 9 + ' x ' + i + ' = ' + (9 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }
// for (let i = 0; i <= 10; i++) {
//     k = k.concat('[' + 10 + ' x ' + i + ' = ' + (10 * i) + ']' + '<br>');
//     resultado.innerHTML = k;
// }

// for(let i = 1; i <= 3; i++) {
//     for(let j = 1; j <= 3; j++) {
//         console.log('[' + i + ']' + '[' + j + ']');
//     }
// }

// for(let i = 1; i <= 3; i++) {
//     for(let j = 1; j <= 3; j++) {
//         k = k.concat('[' + i + ' x ' + j + ' = ' + (i * j) + ']' + '<br>');
//         resultado.innerHTML = k;
//     }
// }

// function geraTabuada(valor) {
//     let k = '';
//     for (let i = 0; i <= 10; i++) {
//         return k = k.concat('[' + 10 + ' x ' + i + ' = ' + (10 * i) + ']' + '<br>');
//     }
// }

// class CalculaTabuada {
//     static calcula(valor) {
//         for (let i = 0; i <= 10; i++) {
//             k = k.concat('[' + 10 + ' x ' + i + ' = ' + (valor * i) + ']' + '<br>');
//             resultado.innerHTML = k;
//         }
//     }
// }

// let resultado = document.querySelector('#tabela');
// function geraColunaTabuada(valor) {
//     let k = '';
//     for (let i = 1; i <= 10; i++) {
//         k = k.concat('[' + valor + ' x ' + i + ' = ' + (valor * i) + ']');
//     }
//     return k;
// }

// function geraTabuada() {
//     let y = '';
//     for (let i = 1; i < 10; i++) {
//         y = y.concat('[' + '<br>' + geraColunaTabuada(i) + '<br>' + ']' + '<br>');
//     }
//     return y;
// }
// resultado.innerHTML = geraTabuada();

// let resultado = document.querySelector('#tabela');
// function geraLinhaTabuada(valor) {
//     let k = '';
//     for (let i = 1; i <= 10; i++) {
//         k = k.concat('[' + valor + ' x ' + i + ' = ' + (valor * i) + ']');
//     }
//     return k;
// }

// function geraTabuada() {
//     let y = '';
//     for (let i = 1; i <= 10; i++) {
//         y = y.concat(geraLinhaTabuada(i) + '<br>');
//     }
//     return y;
// }
// resultado.innerHTML = geraTabuada();

// const resultado = document.querySelector('#tabela');
// function geraLinhaTabuada(valor) {
//     let k = '';
//     for (let i = 1; i <= 10; i++) {
//         // k = k.concat('[' + valor + ' x ' + i + ' = ' + (valor * i) + ']');
//         k = k.concat('[' + (valor * i) + ']');
//     }
//     return k;
// }

// function geraTabuada() {
//     let y = '';
//     for (let i = 1; i <= 10; i++) {
//         y = y.concat(geraLinhaTabuada(i) + '<br>');
//     }
//     return y;
// }
// resultado.innerHTML = geraTabuada();

// function criaTh(dados) {
//     let th = document.createElement('th');
//     th.textContent = dados;
//     return th;
// }

// function criaTd(dados) {
//     let td = document.createElement('td');
//     td.textContent = dados;
//     return td;
// }

const resultado = document.querySelector('#tabela');

function geraLinhaTabuada(valor) {
    let k = '';
    for (let i = 1; i <= 10; i++) {
        k = k.concat('<td>' + (valor * i) + '</td>');
    }
    return k;
}

const primeiraLinhaTabuada = document.querySelector('#titulo-tabela');
function geraPrimeiraLinhaTabuada() {
    let x = '';
    for (let i = 1; i <= 10; i++) {
        x = x.concat('<th>' + i + '</th>');
    }
    return '<tr>' + '<th>x</th>' + x + '</tr>';
}

function geraTabuada() {
    let y = '';
    for (let i = 1; i <= 10; i++) {
        y = y.concat('<tr>' + '<th>' + i + '</th>' + geraLinhaTabuada(i) + '</tr>');
    }
    return y;
}

primeiraLinhaTabuada.innerHTML = geraPrimeiraLinhaTabuada();
resultado.innerHTML = geraTabuada();

function criaTh(dados) {
    let th = document.createElement('th');
    th.textContent = dados;
    return th;
}

function criaTd(dados) {
    let td = document.createElement('td');
    td.textContent = dados;
    return td;
}