// for (let linha = 1; linha <= 3; linha++) {
//     for (let coluna = 1; coluna < 3; coluna++) {
//         console.log('[' + ((linha + coluna) * 5) + ']' + '\n');
//     }
// }

// const resultado = document.querySelector('#area-matriz');

// function geraLinha(coluna) {
//     let k = '';
//     for (let linha = 1; linha <= 3; linha++) {
//         k = k.concat('<td>' + ((linha * coluna) + 10) + '</td>');
//     }
//     return k;
// }

// function geraColuna() {
//     let y = '';
//     for (let coluna = 1; coluna <= 3; coluna++) {
//         y = y.concat('<tr>' + geraLinha(coluna) + '</tr>');
//     }
//     return y;
// }

// resultado.innerHTML = geraColuna();

const resultado = document.querySelector('#area-matriz');
function geraColuna(coluna) {
    let k = '';
    for (let linha = 1; linha <= 3; linha++) {
        k = k.concat('<td>' + (linha + coluna) + '</td>');
    }
    return k;
}
function geraLinha() {
    let y = '';
    for (let coluna = 1; coluna <= 3; coluna++) {
        y = y.concat('<tr>' + geraColuna(coluna) + '</tr>');
    }
    return y;
}
resultado.innerHTML = geraLinha();

// const resultado = document.querySelector('#area-matriz');
// function geraColuna(coluna) {
//     let k = '';
//     for (let linha = 1; linha <= 3; linha++) {
//         if (coluna === linha) {
//             k = k.concat('<td>' + 1 + '</td>');
//         } else {
//             k = k.concat('<td>' + 0 + '</td>');
//         }
//     }
//     return k;
// }
// function geraLinha() {
//     let y = '';
//     for (let coluna = 1; coluna <= 3; coluna++) {
//         y = y.concat('<tr>' + geraColuna(coluna) + '</tr>');
//     }
//     return y;
// }
// resultado.innerHTML = geraLinha();

class Matriz {
    static geraColunaMatriz(linha, valorColuna) {
        let k = '';
        for (let coluna = 1; coluna <= valorColuna; coluna++) {
            k = k.concat('<td>' + (coluna + linha) + '</td>');
        }
        return k;
    }

    static geraLinhaMatriz(valorLinha, valorColuna) {
        let y = '';
        for (let linha = 1; linha <= valorLinha; linha++) {
            y = y.concat('<tr>' + Matriz.geraColunaMatriz(linha, valorColuna) + '</tr>');
        }
        return y;
    }

    static geraMatriz(elementoTabela, valorLinha, valorColuna) {
        const resultado = document.querySelector(elementoTabela);
        resultado.innerHTML = Matriz.geraLinhaMatriz(valorLinha, valorColuna);
    }
}

Matriz.geraMatriz('#area-matriz2', 3, 3);