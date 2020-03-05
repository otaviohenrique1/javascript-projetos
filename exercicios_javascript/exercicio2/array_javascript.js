/* -----Array----- */
const stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numerosArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log('tamano do array stringArray: ' + stringArray.length);
console.log('tamano do array numerosArray: ' + numerosArray.length);

let a = '';
for (const x in stringArray) {
    a = a.concat('[' + stringArray[x] + ']');
}
console.log(a);

let b = '';
for (const y in numerosArray) {
    b = b.concat('[' + numerosArray[y] + ']');
}
console.log(b);

/*
    -----Array.every()-----
    Possibilita testar todos os elementos do seu array. Caso algum dos elementos não passe pela condição definida por você, o retorno será false.
    Obs.: Caso seja informado um array vazio o retorno padrão deve ser TRUE
*/
// ES5
function comparaNumero(numero) {
    return numero >= 9;
}
const maiorNumero = numerosArray.every(comparaNumero);

// ES6
const comparaNumero2 = (numero) => numero >= 9;
const maiorNumero2 = numerosArray.every(comparaNumero2);

console.log(maiorNumero);
console.log(maiorNumero2);

/*
    -----Array.includes()-----
    Possibilita verificar se um element existe ou não no array definido.
*/
console.log(stringArray.includes('a'));
console.log(numerosArray.includes(90));

/*
    -----Array.filter()-----
    Este método possibilita a criação de filtros de forma rápida e fácil em seus arrays.
*/
// ES5
function filtraLetra(letra) {
    return letra.indexOf('k') === 0;
}

// ES6
const filtraLetra2 = (letra) => letra.indexOf('k') === 0;
const filtraLetraArray = stringArray.filter(filtraLetra2);

console.log(filtraLetraArray);

/*
    -----Array.find()-----
    Faça uma busca em seu array de um ou mais elementos que se encaixam no filtro definido por você.
    Obs.: Caso não houvessem elementos a serem retornados, obteríamos o retorno undefined.
*/
// ES5
function procuraLetraA(letra) {
    return letra === 'a';
}

// ES6
const procuraLetraA2 = (letra) => letra === 'a';
const procuraLetraStringArray = stringArray.find(procuraLetraA2);

console.log(filtraLetraArray);

/*
    -----Array.map()-----
    Este método percorre todos os elementos do array, executando funções para cada elemento e retornando um novo array como resultado.
*/
// ES5
function novoArray(numero) {
    return numero + 10;
}

// ES6
const novoArray2 = (numero) => numero + 10;
const novoNumerosArray = numerosArray.map(novoArray2);

console.log(novoNumerosArray);

/*
    -----Array.some()-----
    Este método verifica se ao menos um elemento satisfaz a condição definida por você.
*/
// ES5
function validaLetra(letra) {
    return letra === 'a' || letra === 'b';
}

// ES6
const validaLetra2 = (letra) => (letra === 'a' || letra === 'b');
const validaLetraAouB = stringArray.some(validaLetra2);

console.log(validaLetraAouB);

/*
    -----Array.reduce()-----
    Você pode utilizar o método reduce para alguns casos, sendo um deles para facilitar cálculos.
*/
// ES5
function calculaNumerosArray(accumulator, numero) {
    return accumulator + numero;
}

// ES6
const calculaNumerosArray2 = (accumulator, numero) => accumulator + numero;
const calculaNumeros = numerosArray.reduce(calculaNumerosArray2);

console.log(calculaNumeros);