const listaLetrasMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
const listaLetrasMaiusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Z'];
const listaSimbolos = ['@','#','$','%','&','*','+','-','!','=','^','~','<','>'];
const listaNumeros1 = ['0','1','2','3','4','5','6','7','8','9'];
const listaNumeros2 = [0,1,2,3,4,5,6,7,8,9];

const geraCodigoNumericoString = () => {
    let codigoProduto = '';
    for (let i = 0; i < 10; i++) {
        codigoProduto = codigoProduto.concat('' + Math.floor((Math.random() * 10)));
    }
    return codigoProduto;
}

const geraCodigoNumerico = () => {
    let codigoProduto = [];
    for (let i = 0; i < 10; i++) {
        codigoProduto = codigoProduto.concat(Math.floor((Math.random() * 10)));
    }
    return codigoProduto;
}

module.exports = geraCodigoNumericoString;
module.exports = geraCodigoNumerico;

console.log(geraCodigoNumerico());
console.log(geraCodigoNumericoString());