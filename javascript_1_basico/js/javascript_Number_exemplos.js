/* --------------------Número-------------------- */
console.log('----------Número----------');
/*
    ----------Sumário----------
    O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos.
    Um objeto Number é criado utilizando o construtor Number().

    ----------Construtor----------
    new Number(value);

    -----Parâmetros-----
        value
            O valor numérico do objeto sendo criado. 
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Os principais usos para o objeto Number são:
        -Se o objeto não pode ser convertido para um número, é retornado NaN.
        -Fora do contexo de um construtor (Ex., Sem o operador new, Number pode ser utilizador para realizar uma converção de tipo.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades----------
*/
//Number.EPSILON -> O menor intervalo entre dois números representáveis.
var result = Math.abs(0.2 - 0.3 + 0.1);
console.log(result);
console.log(result < Number.EPSILON);

//Number.MAX_SAFE_INTEGER -> O inteiro máximo seguro em JavaScript (2 elevado a 53 -1).
let x1 = Number.MAX_SAFE_INTEGER + 1;
let y1 = Number.MAX_SAFE_INTEGER + 2;
console.log(Number.MAX_SAFE_INTEGER);
console.log(x); console.log(x === y);

//Number.MAX_VALUE -> O maior número representável positivo.
function multiply(x, y) {
    if (x * y > Number.MAX_VALUE) {
        return ("Process as Infinity");
    }
    return (x * y);
}
console.log(multiply(1.7976931348623157e+308, 1));
console.log(multiply(1.7976931348623157e+308, 2));

//Number.MIN_SAFE_INTEGER -> O inteiro mínimo seguro em JavaScript (-(2 elevado a 53 -1)).
var x = Number.MIN_SAFE_INTEGER - 1;
var y = Number.MIN_SAFE_INTEGER - 2;
console.log(Number.MIN_SAFE_INTEGER);
console.log(x);
console.log(x === y);

//Number.MIN_VALUE -> O número mínimo representável positivo - isto é, o número positivo mais próximo de zero (sem ser zero na verdade).
function multiply(x, y) {
    if (x * y < Number.MIN_VALUE) {
        return "Process as -Infinity";
    }
    return (x * y);
}
console.log(multiply(5e-324, 1));
console.log(multiply(-1.7976931348623157e+308, 2));

//Number.NaN -> Valor especial que não é número.

//Number.NEGATIVE_INFINITY -> Valor especial representando infinito negativo; retornado no "overflow".
var smallNumber = (-Number.MAX_VALUE) * 2;
if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}

//Number.POSITIVE_INFINITY -> Valor especial representando infinito; retornado no "overflow".
var bigNumber = Number.MAX_VALUE * 2;
if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}

/*
    --------------------Number.prototype--------------------
    Number.prototype -> Permite a adição de propriedades a um objeto Number.
    A propriedade Number.prototype representa o protótipo para o construtor Number.

    ----------Descrição----------
    Todas instâncias Number herdam de Number.prototype. O objeto 'prototype' do
    construtor Number pode ser modificado para afetar todas instâncias Number.

    ----------Propriedades----------
    Number.prototype.constructor
    Retorna a função que criou esta instância do objeto. Por padrão, este é o objeto Number.
*/
/* ----------Métodos---------- */
//Number.prototype.toExponential() -> Retorna uma 'string' representando o número em notação exponencial, Sintaxe -> numObj.toExponential([fractionDigits]).
/* ----------Utilizando toExponential---------- */
var numObj = 77.1234;
console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1

//Number.prototype.toFixed() -> Retorna uma 'string' representando o número em notação em ponto fixo, Sintaxe -> numObj.toFixed([dígitos]).
/* ----------Utilizando toFixed---------- */
var numObj = 12345.6789;
numObj.toFixed();       // Retorna '12346': note o arredondamento, não possui nenhuma parte fracionária
numObj.toFixed(1);      // Retorna '12345.7': note o arredondamento
numObj.toFixed(6);      // Retorna '12345.678900': note que adicionou zeros
(1.23e+20).toFixed(2);  // Retorna '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Retorna '0.00'
2.34.toFixed(1);        // Retorna '2.3'
2.35.toFixed(1);        // Retorna '2.4'. Note que arredonda para cima neste caso.
-2.34.toFixed(1);       // Retorna -2.3 (devido à precedência do operador, literais de números negativos não retornam uma string...)
(-2.34).toFixed(1);     // Retorna '-2.3' (...a menos que se utilize parênteses)

/*
    Number.prototype.toLocaleString() -> Retorna uma 'string'  com uma representação sensível ao idioma deste número. Substitui o método
    Object.prototype.toLocaleString(), Sintaxe -> numObj.toLocaleString([locales [, options]]).
    
    Exemplos
    -Usando toLocaleString-
    No uso básico sem a especificação de uma localização, o método retornará uma string formatada com a localização e as opções padrão.
    var numero = 3500;
    console.log(numero.toLocaleString()); // Mostra "3,500" se a localização for U.S. English

    -Verificando o suporte dos argumentos locales e options-
    Os argumentos locales e options não são suportados por todos os navegadores ainda. Para verificar pelo suporte das implementações do ES5.1 e
    posteriores, a requisição de tags de linguagem ilegais são rejeitadas com uma exceção RangeError pode ser usada da seguinte forma:
    function toLocaleStringSupportsLocales() {
        var numero = 0;
        try {
            numero.toLocaleString('i');
        } catch (e) {
            return e.name === 'RangeError';
        }
        return false;
    }
    Antes da ES5.1, implementações que não exigiam um tratamento de erro se toLocaleString fosse chamada com argumentos.
    Uma verificação que funciona em todos os casos, incluindo aqueles que suportam ECMA-262 antes da edição 5.1, é testar pelas especificações
    de característicadas da ECMA-402 que exigem suporte de opções regionais para Number.prototype.toLocaleString diretamente:
    function toLocaleStringSupportsOptions() {
        return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
    }
    Estes testes para um objeto Intl global, verifica se ele não é null e se uma propriedade NumberFormat é uma função.

    -Usando locales-
    Este exemplo mostra algumas variações de formatos de números localizados. A fim de obter o formato da linguagem utilizada na interface do usuário
    da sua aplicação, tenha certeza de especificar a língua (e possivelmente algumas línguas reservas) usando o argumento locales:
    var numero = 123456.789;
    console.log(numero.toLocaleString('de-DE'));
    console.log(numero.toLocaleString('ar-EG'));
    console.log(numero.toLocaleString('en-IN'));
    console.log(numero.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
    console.log(numero.toLocaleString(['ban', 'id']));
    
    -Usando options-
    Os resultados obtidos por toLocaleString pode ser personalizado usando o argumento options:
    var numero = 123456.789;
    console.log(numero.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
    console.log(numero.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
    console.log(numero.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
*/

//Number.prototype.toPrecision() -> Retorna uma 'string' representando o número para uma precisão específica em notação ponto fixo ou exponencial, Sintaxe -> numObj.toPrecision([precision]).
/* ----------Utilizando toPrecision---------- */
var numObj = 5.123456;
console.log(numObj.toPrecision());    // logs '5.123456'
console.log(numObj.toPrecision(5));   // logs '5.1235'
console.log(numObj.toPrecision(2));   // logs '5.1'
console.log(numObj.toPrecision(1));   // logs '5'
numObj = 0.000123
console.log(numObj.toPrecision());    // logs '0.000123'
console.log(numObj.toPrecision(5));   // logs '0.00012300'
console.log(numObj.toPrecision(2));   // logs '0.00012'
console.log(numObj.toPrecision(1));   // logs '0.0001' 
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'

/*
    Number.prototype.toSource() -> Retorna uma objeto literal representando um objeto específicado Number; você pode usar este valor
    para criar um novo objeto. Substitui o método Object.prototype.toSource(), Sintaxe -> numObj.toSource() Number.toSource().
*/

/*
    Number.prototype.toString() -> Retorna uma 'string' representando o objeto especificado na raiz especificada (base).
    Substitui o método Object.prototype.toString(), Sintaxe -> numObj.toString([radix]).
*/

/* ----------Utilizando toString---------- */
var count = 10;
console.log(count.toString());    // displays '10'
console.log((17).toString());     // displays '17'
var x = 6;
console.log(x.toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'
console.log((-10).toString(2));   // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'

//Number.prototype.valueOf() -> Retorna o valor primitivo do objeto especificado. Substitui o método Object.prototype.valueOf(), Sintaxe -> numObj.valueOf().
/* ----------Utilizando valueOf---------- */
var numObj = new Number(10);
console.log(typeof numObj); // object
var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
/*------------------------------------------------------*/

/*
    ----------Instâncias Number----------
    Toda instância Number herdam de Number.prototype. O objeto 'prototype' do construtor Number pode ser modificado para afetar todas as instâncias Number.
*/
/* -----Métodos----- */
// Number.prototype.toExponential() -> Returns a string representing the number in exponential notation, Sintaxe -> numObj.toExponential([fractionDigits]).
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
console.log(expo(123456, 2)); //Resultado: "1.23e+5"
console.log(expo('123456')); //Resultado: "1.23456e+5"
console.log(expo('oink')); //Resultado: "NaN"
/* -----toExponential----- */
var numObj = 77.1234;
console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1

// Number.prototype.toFixed() -> Returns a string representing the number in fixed-point notation, Sintaxe -> numObj.toFixed([digits]).
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456)); //Resultado: "123.46"
console.log(financial(0.004)); //Resultado: "0.00"
console.log(financial('1.23e+5')); //Resultado: "123000.00"  
/* -----toFixed----- */
var numObj = 12345.6789;
numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2);  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Returns '0.00'
2.34.toFixed(1);        // Returns '2.3'
2.35.toFixed(1);        // Returns '2.4'. Note it rounds up
2.55.toFixed(1);        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1);       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1);     // Returns '-2.3' (...unless you use parentheses)

// Number.prototype.toLocaleString() -> Returns a string with a language sensitive representation of this number. Overrides the Object.prototype.toLocaleString() method, Sintaxe -> numObj.toLocaleString([locales [, options]]).
function eArabic(x){
    return x.toLocaleString('ar-EG');
}
console.log(eArabic(123456.789));
console.log(eArabic("123456.789"));
console.log(eArabic(NaN));

// Number.prototype.toPrecision() -> Returns a string representing the number to a specified precision in fixed-point or exponential notation, Sintaxe -> .
/* -----toLocaleString----- */
var number = 3500;
console.log(number.toLocaleString());

/* -----Checking for support for locales and options arguments----- */
function toLocaleStringSupportsLocales() {
    var number = 0;
    try {
        number.toLocaleString('i');
    } catch (e) {
        return e.name === 'RangeError';
    }
    return false;
}
function toLocaleStringSupportsOptions() {
    return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}

/* -----locales----- */
var number = 123456.789;
console.log(number.toLocaleString('de-DE'));
console.log(number.toLocaleString('ar-EG'));
console.log(number.toLocaleString('en-IN'));
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
console.log(number.toLocaleString(['ban', 'id']));

/* -----options----- */
var number = 123456.789;
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

// Number.prototype.toSource() -> Returns an object literal representing the specified Number object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method, Sintaxe -> numObj.toSource() Number.toSource().

// Number.prototype.toString() -> Returns a string representing the specified object in the specified radix (base). Overrides the Object.prototype.toString() method, Sintaxe -> numObj.toString([radix]).
function hexColour(c) {
    if (c < 256) {
      return Math.abs(c).toString(16);
    }
    return 0;
}
console.log(hexColour(233)); //Resultado: "e9"
console.log(hexColour('11')); //Resultado: "b"
/* -----toString----- */
var count = 10;
console.log(count.toString());    // displays '10'
console.log((17).toString());     // displays '17'
console.log((17.2).toString());   // displays '17.2'
var x = 6;
console.log(x.toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'
console.log((-10).toString(2));   // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'

// Number.prototype.valueOf() -> Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method, Sintaxe -> numObj.valueOf().
var numObj = new Number(42);
console.log(typeof numObj); //Resultado: "object"
var num = numObj.valueOf();
console.log(num); //Resultado: 42
console.log(typeof num); //Resultado: "number"
/* -----valueOf----- */
var numObj = new Number(10);
console.log(typeof numObj); // object
var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
/*------------------------------------------------------*/
/* ----------Exemplos---------- */
/* -----Exemplo: Usando o objeto Number para atribuir valores a variáveis numéricas----- */
/* 
    O seguinte exemplo usa as propriedades do objeto Number para atribuir valores a várias variáveis numéricas:
*/
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

/* -----Exemplo: Intervalo inteiro para Number----- */
/*
    O seguinte exemplo mostra os valores inteiros mínimo e máximo que podem ser representados como objeto Number (para mais detalhes,
    referir-se ao padrão EcmaScript standard (EcmaScript standard), capítulo 8.5 O tipo de número (The Number Type):
*/
var maxInt = 9007199254740992;
var minInt = -9007199254740992;
/*
    Ao analisar dados que foram serializados para JSON, valores inteiros que caem fora desse intervalo podem ser corrompidos quando
    o analisador JSON os converte ao tipo Number. Usando String em vez disso é uma possível alternativa para se evitar um resultado indesejado.
*/

/* -----Exemplo: Usando Number para converter um objeto Date----- */
/*
    O exemplo a seguir converte o objeto Date para um valor numérico usando Number como uma função:
*/
var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
/*
    Isto resulta em "819199440000".
*/

/* -----Converte 'string' numérica em números----- */
Number('123')     // 123
Number('12.3')    // 12.3
Number('')        // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/