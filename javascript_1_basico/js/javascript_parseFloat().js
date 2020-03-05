/* ----------parseFloat()---------- */
console.log('----------parseFloat()----------');
/*
    ----------parseFloat()----------
    A função parseFloat() analisa um argumento string e retorna um número de ponto flutuante.

    ------------------------------------------------------

    ----------Síntaxe----------
    parseFloat(string)
    -----Parâmetros-----
        string -> Uma string que representa o valor a ser analisado.

    ------------------------------------------------------

        ----------Descrição----------
    parseFloat é uma função top-level e não está associada a nenhum objeto.
    parseFloat analisa um argumento string, e retorna um numero de ponto flutuante. Se ele encontrar um carácter diferente de um sinal (+ ou -),
    numeral (0-9), um ponto decimal, ou um expoente, ele retorna o valor até esse ponto e ignora esse caractere e todos os caracteres seguintes.
    Espaços a direita e a esquerda são permitidos.
    Se o primeiro carácter não puder ser convertido para um número, parseFloat retorna NaN.
    Para propósitos aritméticos, o valor NaN não é um número de qualquer raiz. Você pode chamar a função isNaN para determinar se o resultado do parseFloat é NaN.
    Se NaN for passado em operações aritméticas, a operação também retornará NaN.
    parseFloat também pode analisar e retornar o valor Infinity. Você pode usar a função isFinite para determinar se a função é um
    número finito (not Infinity, -Infinity, ou NaN).

    ------------------------------------------------------

    ----------Exemplos----------
    -----parseFloat retornando um número-----
    O exemplo a seguir sempre retorna 3.14
        parseFloat("3.14");
        parseFloat("314e-2");
        parseFloat("0.0314E+2");
        parseFloat("3.14more non-digit characters");

    -----parseFloat retornando NaN-----
    O exemplo a seguir retorna NaN
        parseFloat("FF2");

    -----A função stricter parse-----
    As vezes é útil ter uma maneira mais rigorosa para analisar valores float, expressões regulares podem ajudar:
        var filterFloat = function (value) {
            if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)){
                return Number(value);
            }
            return NaN;
        }

        console.log(filterFloat('421'));               // 421
        console.log(filterFloat('-421'));              // -421
        console.log(filterFloat('+421'));              // 421
        console.log(filterFloat('Infinity'));          // Infinity
        console.log(filterFloat('1.61803398875'));     // 1.61803398875
        console.log(filterFloat('421e+0'));            // NaN
        console.log(filterFloat('421hop'));            // NaN
        console.log(filterFloat('hop1.61803398875'));  // NaN

    Observe que este código é somente um exemplo; ele não aceita números válidos, tais como 1. ou 0,5.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/