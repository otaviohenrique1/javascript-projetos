/* ----------JSON---------- */
console.log('----------JSON----------');
/*
    ----------Resumo----------
    O Objeto JSON contém métodos para parsing JavaScript Object Notation (JSON) e conversão de valores para JSON. Ele não pode ser chamado ou construído e,
    além de suas propriedades de dois métodos, ele não possui uma funcionalidade interessante.

    ------------------------------------------------------

    ----------Descrição----------
    -----JavaScript Object Notation-----
    JSON é uma sintaxe para objetos de serialização, matrizes, números, strings, booleanos, e null. Baseia-se em sintaxe Javascript, mas é distinta: alguns
    Javascript não é JSON, e alguns JSON não é Javascript. Veja também JSON: O subconjunto de Javascript que não é.
    
    JavaScript e JSON diferenças
    JavaScript tipo 	JSON diferenças
    Objetos e Arrays 	Os nomes das propriedades devem ser strings com aspas duplas; as vírgulas à direita são proibidas.
    Números 	        Zeros à esquerda são proibidos; um ponto decimal deve ser seguido por pelo menos um dígito.
    Strings 	        Apenas um conjunto limitado de caracteres pode ser escapado; certos caracteres de controle são proibidos; o separador de linha
    Unicode (U+2028) e o separador de parágrafo (U+2029) caracteres são permitidos; strings devem ter aspas duplas.Veja o exemplo a seguir, onde JSON.parse()
    funciona bem e um SyntaxError é lançado ao avaliar o código como JavaScript: var code = '"\u2028\u2029"'; JSON.parse(code); // works fine eval(code); // fails

    A sintaxe completa do JSON é a seguinte:
    JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

    JSONNumber = - PositiveNumber
            or PositiveNumber
    PositiveNumber = DecimalNumber
                or DecimalNumber . Digits
                or DecimalNumber . Digits ExponentPart
                or DecimalNumber ExponentPart
    DecimalNumber = 0
                or OneToNine Digits
    ExponentPart = e Exponent
                or E Exponent
    Exponent = Digits
            or + Digits
            or - Digits
    Digits = Digit
        or Digits Digit
    Digit = 0 through 9
    OneToNine = 1 through 9

    JSONString = ""
            or " StringCharacters "
    StringCharacters = StringCharacter
                    or StringCharacters StringCharacter
    StringCharacter = any character
                    except " or \ or U+0000 through U+001F
                or EscapeSequence
    EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
                or \u HexDigit HexDigit HexDigit HexDigit
    HexDigit = 0 through 9
            or A through F
            or a through f

    JSONObject = { }
            or { Members }
    Members = JSONString : JSON
        or Members , JSONString : JSON

    JSONArray = [ ]
            or [ ArrayElements ]
    ArrayElements = JSON
                or ArrayElements , JSON
    
    Espaços em branco insignificante pode estar presente em qualquer lugar exceto dentro de um JSONNumber (números devem conter nenhum espaço em branco)
    ou JSONString (onde ele é interpretado como o personagem correspondente na seqüência, ou faria com que um erro). O caractere de tabulação (U+0009),
    retorno de carro (U+000D), alimentação de linha (U+000A), e espaço (U+0020) caracteres são os únicos caracteres em branco válidos.

    ------------------------------------------------------

    ----------Métodos----------
    JSON.parse() -> Analisar uma seqüência como JSON, opcionalmente transformar o valor produzido e suas propriedades, e retornar o valor.
    JSON.stringify() -> Retorna uma string JSON correspondente ao valor especificado, incluindo, opcionalmente, apenas determinados propriedades ou substituir
    valores de propriedade de uma maneira definida pelo usuário. 

    ------------------------------------------------------

    ----------Polyfill----------
    O objeto JSON não é suportado em navegadores mais antigos. Você pode contornar isso inserindo o seguinte código no início de seus scripts, permitindo o
    uso de JSON objeto de implementações que não suportam nativamente-lo (como Internet Explorer 6).
    O algoritmo a seguir é uma imitação do objeto nativo JSON:
        if (!window.JSON) {
            window.JSON = {
                parse: function(sJSON) { return eval('(' + sJSON + ')'); },
                stringify: (function () {
                    var toString = Object.prototype.toString;
                    var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
                    var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
                    var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
                    var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
                    return function stringify(value) {
                        if (value == null) {
                            return 'null';
                        } else if (typeof value === 'number') {
                            return isFinite(value) ? value.toString() : 'null';
                        } else if (typeof value === 'boolean') {
                            return value.toString();
                        } else if (typeof value === 'object') {
                            if (typeof value.toJSON === 'function') {
                                return stringify(value.toJSON());
                            } else if (isArray(value)) {
                                var res = '[';
                                for (var i = 0; i < value.length; i++) {
                                    res += (i ? ', ' : '') + stringify(value[i]);
                                }
                                return res + ']';
                            } else if (toString.call(value) === '[object Object]') {
                                var tmp = [];
                                for (var k in value) {
                                    if (value.hasOwnProperty(k)) {
                                        tmp.push(stringify(k) + ': ' + stringify(value[k]));
                                    }
                                }
                                return '{' + tmp.join(', ') + '}';
                            }
                        }
                        return '"' + value.toString().replace(escRE, escFunc) + '"';
                    };
                })()
            };
        }
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/