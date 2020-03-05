/* --------------------String-------------------- */
console.log('----------String----------');
/*
    ----------Sumário----------
    O objeto global String  é um construtor para strings, ou uma sequência de caracteres.
    ------------------------------------------------------
    ----------Sintaxe----------
    As formas literais de declaração de String  são:
        'string text'
        "string text"
        "中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"
    Além da forma reular, de caracteres de impressão, caracteres especiais podem ser codificados usando a escape notation (notação com barra invertida):
    Codigo 	    Saida
    \0 	        o  caractere NULL
    \' 	        aspas simples
    \" 	        aspas duplas
    \\ 	        barra invertida
    \n 	        nova linha
    \r 	        carriage return
    \v 	        tab vertical
    \t 	        tab
    \b 	        backspace
    \f 	        form feed
    \uXXXX 	    unicode codepoint
    \xXX 	    the Latin-1 character

    Ou, usando o objeto global String diretamente:
        String(thing)
        new String(thing)
    -----Parâmetros-----
    thing -> Qualquer coisa a ser convertida para uma string. 
    ------------------------------------------------------
    ----------Descrição----------
    Strings são úteis para guardar dados que podem ser representados em forma de texto. Uma das operações mais usadas nas strings é checar seu tamanho,
    para construir e concatená-las  usando os operadores + e +=, checando pela existência ou posição de substrings com o método indexOf , ou extrair substrings
    com o método substring.
    -----Acesso à caractere-----
    Há duas maneiras de acessar um caractere individual em uma string. A primeira é o método charAt:
        return 'cat'.charAt(1); // returns "a"
    A outra maneira (introduzido no ECMAScript 5) consiste em tratar a string como um objeto Array-like, onde os caráteres individuais correspondem a um índice numérico:
        return 'cat'[1]; // returns "a"
    Para acesso de caracteres usando uma notação de colchetes, tentando deletar ou designar um valor a estas propriedades não haverá sucesso. As propriedades
    envolvidas não são nem escritas ou configuráveis. (Veja Object.defineProperty para mais informações.)
    -----Comparando strings-----
    Desenvolvedores de C têm a função strcmp() para comparar strings. No JavaScript, basta usar o operador maior que e menor que:
        var a = "a";
        var b = "b";
        if (a < b) {
            // verdadeiro
            print(a + " é menor que " + b);
        }
        else if (a > b) {
            print(a + " é maior que " + b);
        }
        else {
            print(a + " e " + b + " são iguais.");
        }
    Um resultado similar pode ser alcançado usando o método  localeCompare herdado pelas instâncias de String.
    -----Distinção entre String primitiva e objetos String-----
    Note que o JavaScript distingue entre objetos String e valores de string primitivas. (O mesmo é válido para Boolean e Numbers.)
    Strings literais (definidas por aspas duplas ou aspas simples) e strings retornadas da chamada da função String fora do contexto de uma função construtora
    (sem o uso da palavra chave new) são strings primitivas. O JavaScript converte automaticamente strings primitivas para objetos do tipo String, por isso
    é possível utilizar os métodos do objeto String através de strings primitivas. Em contextos onde um método é invocado de uma string primitiva ou uma propriedade
    é procurada, o JavaScript irá criar um objeto com a string primitiva e executar o método ou acessar a propriedade procurada.
        var s_prim = "foo";
        var s_obj = new String(s_prim);
        console.log(typeof s_prim); // Loga "string"
        console.log(typeof s_obj);  // Loga "object"
    String primitivas e objetos String também dão resultados diferentes quando usado eval. Primitivas passadas para eval são tratadas como código fonte;
    Objetos String são tratados como todos os outros objetos são, retornando o objeto. Por exemplo:
        s1 = "2 + 2";               // cria uma string primitiva
        s2 = new String("2 + 2");   // cria um objeto de String
        console.log(eval(s1));      // retorna o número 4
        console.log(eval(s2));      // retorna a string "2 + 2"
    Por estas razões, o código pode quebrar quando encontra objetos String quando espera na verdade uma string primitiva, apesar de que geralmente autores
    não precisam se preocupar com a distinção.
    Um objeto String pode ser convertido sempre para sua contraparte primitiva com o método valueOf.
        console.log(eval(s2.valueOf())); // retorna o número 4
    Note: Para uma outra possível abordagem para strings em JavaScript, favor ler o artigo sobre StringView – a C-like representation of strings based on typed arrays.
    ------------------------------------------------------
    ----------Propriedades----------
    String.prototype -> Permite a adição de propriedades a um objeto String.
    Properties inherited from Function:
        arity, caller, constructor, length, name
    ------------------------------------------------------
    Métodos
    String.fromCharCode() -> Retorna uma string criada usando a sequência especificada de valores Unicode.
    String.fromCodePoint() -> Retorna uma string criada usando a sequência especificada de posições de código.
    Methods inherited from Function:
        apply, call, toSource, toString
    ------------------------------------------------------
    ----------Métodos genéricos de Strings----------
    Métodos de instância String também estão disponíveis no Firefox a partir de JavaScript 1.6 (embora não faça parte dos padrões ECMAScript) no objeto String
    para aplicar métodos String a qualquer objeto:
        var num = 15;
        alert(String.replace(num, /5/, '2'));
    Genéricos também estão disponíveis em métodos Array.
    O seguinte é uma implementação para fornecer suporte a navegadores sem suporte:
        // globals define
        // Assume que todos os métodos de instância String fornecidos
        // já presentes (podem ser usadas implementações para este se não disponível)
        (function () {
            'use strict';
            var i,
                // Nós também poderíamos construir o array de métodos com os seguintes,
                // mas o método getOwnPropertyNames() não é implementável:
                // Object.getOwnPropertyNames(String).filter(function (methodName)
                //  {return typeof String[methodName] === 'function'});
                methods = [
                    'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
                    'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
                    'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
                    'toLocaleUpperCase', 'localeCompare', 'match', 'search',
                    'replace', 'split', 'substr', 'concat', 'slice'
                ],
                methodCount = methods.length,
                assignStringGeneric = function (methodName) {
                    var method = String.prototype[methodName];
                    String[methodName] = function (arg1) {
                        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
                    };
                };
            for (i = 0; i < methodCount; i++) {
                assignStringGeneric(methods[i]);
            }
        }());
    ------------------------------------------------------
    ----------Instâncias de String----------
    -----Propriedades-----
    String.prototype.constructor -> Especifica a função que cria o protótipo de um objeto.
    String.prototype.length -> Reflete o comprimento da string.
    N -> Usado para acessar o caractere na posição N onde N é um número inteiro entre 0 e um menor que o valor da length. Estas propriedades são apensa de leitura. 
    -----Métodos-----
    -Métodos não relacionados ao HTML-
    String.prototype.charAt() -> Retorna o caractere (exatamente uma unidade de código UTF-16) no índice especificado.
    String.prototype.charCodeAt() -> Retorna um número que é o valor da unidade de código UTF-16 em dado índice.
    String.prototype.codePointAt() -> Retorna um número inteiro não negativo Number que é o valor de posição de código da posição de código inicial em dado índice.
    String.prototype.concat() -> Combina o texto de duas strings e retorna uma nova string.
    String.prototype.includes() -> Determina se uma string deve ser encontrada dentro de outra string.
    String.prototype.endsWith() -> Determina se uma string termina com os caracteres de outra string.
    String.prototype.indexOf() -> Retorna o índice dentro do objeto String chamado da primeira ocorrência do valor especificado, ou -1 se não encontrado.
    String.prototype.lastIndexOf() -> Retorna o índice dentro do objeto String chamado da última ocorrência do valor especificado, ou -1 se não encontrado.
    String.prototype.localeCompare() -> Retorna um número indicando se uma string de referência vem antes ou depois ou é o mesmo que uma string dada em ordem
    de classificação.
    String.prototype.match() -> Usado para combinar uma expressão regular com uma string.
    String.prototype.normalize() -> Retorna o Formulário de Normalização Unicode do valor string chamado.
    String.prototype.padEnd() -> Empacota a string atual desde o final com uma string dada para criar uma nova string de um dado comprimento.
    String.prototype.padStart() -> Empacota a string atual desde o início com uma string dada para criar uma nova string de um dado comprimento.
    String.prototype.quote() -> Envolve a cadeia entre aspas duplas ("" ").
    String.prototype.repeat() -> Retorna uma string consistindo elementos do objeto repetido pelas vezes definidas.
    String.prototype.replace() -> Usado para encontrar uma combinação entre uma expressão regular e uma string, e para substituir uma substring combinada com
    uma nova substring.
    String.prototype.search() -> Executa a procura por uma combinação entre uma expressão regular e uma string especificada.
    String.prototype.slice() -> Extrai uma seção de uma string e retorna uma nova string.
    String.prototype.split() -> Separa um objeto String em um array de strings separando a string em substrings.
    String.prototype.startsWith() -> Determina se uma string começa com os caracteres de outra string.
    String.prototype.substr() -> Retorna os caracteres em uma string começando no local especificado através do número especificado de caracteres.
    String.prototype.substring() -> Retorna os caracteres em uma string entre dois índices na string.
    String.prototype.toLocaleLowerCase() -> Os caracteres dentro de uma string são convertidos para letras minúsculas enquanto respeita a localidade atual.
    Para a maioria das línguas, irá retornar o mesmo que toLowerCase().
    String.prototype.toLocaleUpperCase() -> Os caracteres dentro de uma string são convertidas para letra maiúscula enquanto respeita a localidade atual.
    Para a maioria das línguas, irá retornar o mesmo que toUpperCase().
    String.prototype.toLowerCase() -> Retorna o valor da string de chamada convertido em minúsculas.
    String.prototype.toSource() -> Retorna um objeto literal representando o objeto especificado; Você pode usar esse valor para criar um novo objeto.
    Substitui o metodo:Object.prototype.toSource()
    String.prototype.toString() -> Retorna uma string que representa o objeto especificado. Substitui o metodo:Object.prototype.toString()
    String.prototype.toUpperCase() -> Retorna o valor da string de chamada convertido em maiúscula.
    String.prototype.trim() -> Retira o espaço em branco desde o início e o fim da string. Parte do padrão ECMAScript 5.
    String.prototype.trimLeft() -> Retira o espaço em branco do lado esquerdo da string.
    String.prototype.trimRight() -> Retira o espaço em branco do lado esquerdo da string.
    String.prototype.valueOf() -> Retorna o valor primitivo do objeto especificado. Substitui o metodo: Object.prototype.valueOf() 
    String.prototype[@@iterator]() -> Retorna um novo objeto  Iterator que repete sobre os pontos de código de um valor String, retornando cada ponto
    de código como um valor String. 
    ------------------------------------------------------
    ----------Exemplos----------
    -----Conversão de String-----
    É possível usar String como uma alternativa "mais segura" toString, como embora normalmente ainda chama o toString subjacente, também funciona para null e undefined.
    Por exemplo:
        var outputStrings = [];
        for (let i = 0, n = inputValues.length; i < n; ++i) {
            outputStrings.push(String(inputValues[i]));
        }
*/    
/*------------------------------------------------------*/
/*
    --------------------String.length--------------------
    ----------String.length----------
    A length é a propriedade de um objeto String representa o comprimento de uma string no codigo UTF-16
    ------------------------------------------------------
    ----------Sintaxe----------
        str.length
    ------------------------------------------------------
    ----------Descrição----------
    Essa propriedade retorna o número de unidades de código presentes na string. UTF-16, a codificação utilizada pelo JavaScript, utiliza uma unidade de código de
    16-bits para representar os caracteres mais comuns, mas precisa usar duas unidades para caracteres menos usados, então é possível que o valor retornado por
    length não seja exatamente o número de caracteres na string.

    ECMASCript 2016 (ed. 7) estabeleceu um comprimento máximo de 2^53 - 1 elementos. Anteriormente, nenhum comprimento máximo foi especificado.
    Para uma string vazia, length é 0.
    A propriedade estática String.length retorna o valor 1.
    ------------------------------------------------------
    ----------Exemplos----------
    -----Uso básico-----
        var x = 'Mozilla';
        var empty = '';
        console.log('Mozilla possui ' + x.length + ' unidades de código de comprimento');
        //  "Mozilla possui 7 unidades de código de comprimento"
        console.log('A string vazia possui um comprimento de ' + empty.length);
        //  "A string vazia possui um comprimento de 0"
*/
/*------------------------------------------------------*/
/*
    --------------------String.fromCharCode()--------------------
    ----------String.fromCharCode()----------
    O método String.fromCharCode() retorna uma string criada ao usar uma sequencia específica de valores Unicode.
    ------------------------------------------------------
    ----------Sintaxe----------
        String.fromCharCode(num1[, ...[, numN]])
    -----Parâmetros-----
    num1, ..., numN -> Uma sequência de números que são valores Unicode.
    -----Valor do Return-----
    Uma string contendo os caracteres correspondentes a sequência de valores Unicode.
    ------------------------------------------------------
    ----------Descrição----------
    Esse método retorna uma string e não um objeto String.
    Como fromCharCode() é um método estático de String, você sempre o usará como String.fromCharCode(), ao invés de um método de um objeto String que você tenha criado.
    ------------------------------------------------------
    ----------Exemplos----------
    -----Usando fromCharCode()-----
    O seguinte exemplo retorna a string "ABC".
        String.fromCharCode(65, 66, 67);  // "ABC"
    ------------------------------------------------------
    ----------Fazendo-o funcionar com valores maiores----------
    Embora os valores Unicode mais comuns possam ser representados com um número de 16 bits (como experado durante a padronização do JavaScript) e o fromCharCode()
    possa ser usado para retornar um único caracter dos valores mais comuns (por exemplo: valores UCS-2 que são os melhores subconjuntos do UTF-16 com os caractres
        mais comuns), a fim de resolver TODOS os valores Unicode legais (até 21 bits) o método fromCharCode() sozinho é inadequado. Como os caracteres de ponto de
        código mais alto usam 2 (valor menor) numeros "substitutos" para formar um único caracter, String.fromCodePoint() (parte do padrão ES2015) pode ser usado
        para retornar tal par e ainda representar adequadamente esses caracteres de valores altos.
*/
/*------------------------------------------------------*/
/*
    --------------------String.prototype.charCodeAt()--------------------
    ----------String.prototype.charCodeAt()----------
    O método charCodeAt() retorna um inteiro entre 0 e 65535 representando a unidade de código UTF-16 em seu dado índice (a unidade de código UTF-16 corresponde
        ao ponto de código Unicode para pontos de códigos representáveis em uma única unidade de código UTF-16 , mas também pode ser a primeira unidade de código
        de um par substituto não representável em uma única unidade de código UTF-16. Exemplo: pontos de código Unicode  > 0x10000). Se você quer o valor do ponto
        de código inteiro, use codePointAt().
    ------------------------------------------------------
    ----------Sintaxe----------
        str.charCodeAt(índice)
    -----Parâmetros-----
    índice -> Um integer maior ou igual a 0 e menor que o comprimento da string; se não for um número, o padrão será 0.
    -----Valor de Retorno-----
    Um número representando o valor de unidade de código UTF-16 do caracter no dado índice; NaN se o índice estiver fora do alcance.
    ------------------------------------------------------
    ----------Descrição----------
    Pontos de código Unicode variam de 0 a 1114111 (0x10FFFF). Os primeiros 128 pontos de código Unicode são uma correspondência direta a codificação de caracteres ASCII.
    Para informações sobre Unicode, veja o  JavaScript Guide.
    Note que o charCodeAt() sempre irá retornar um valor menor do que 65536. Isso ocorre pois os pontos de código mais altos são representados por um par de
    pseudo-caracteres "substitutos" (de menor valor) que são usados para compreender o caracter real. Por isso, para examinar  ou reproduzir o caracter completo
    para caracteres individuais de valor 65536 e acima, para esses caracteres é necessário recuperar não apenas o charCodeAt(i), mas também o charCodeAt(i+1)
    (como se examinando/reproduzindo a string com duas letras), ou usar o codePointAt(i). Veja o exemplo 2 e 3 abaixo.
    charCodeAt() retorna NaN se o dado índice for menor que 0 ou é maior ou igual ao comprimento da string.
    Compatibilidade com versões anteriores: Em versões históricas (como JavaScript 1.2) o método charCodeAt() returna um número indicando o valor de conjunto de
    códigos ISO-Latin-1 do caracter no dado índice. O conjunto de códigos ISO-Latin-1 varia de 0 a 255. Os primeiros 128 são uma correspondência direta ao conjunto
    de caracteres ASCII.
    ------------------------------------------------------
    ----------Exemplos----------
    -----Usando charCodeAt()-----
    O exemplo a seguir retorna 65, o valor Unicode para A.
        'ABC'.charCodeAt(0); // retorna 65
    -----Corrigindo o charCodeAt() para manipular caracteres de Plano Multilingual não Básico se sua presença na string é desconhecida-----
    Essa versão talvez seja usada em loops for e afins quando não sabemos se caracteres de Plano Multilingual não Básico existem antes da posição do índice especificado.
        function fixedCharCodeAt(str, idx) {
            // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
            // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
            idx = idx || 0;
            var code = str.charCodeAt(idx);
            var hi, low;
            // Substituto elevado (poderia mudar o último hex para 0xDB7F para tratar
            // substitutos privados elevados como caracteres únicos)
            if (0xD800 <= code && code <= 0xDBFF) {
                hi = code;
                low = str.charCodeAt(idx + 1);
                if (isNaN(low)) {
                    throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
                }
                return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
            }
            if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
                // Retornamos false para permitir os loops pularem essa iteração já que já deveria 
                //ter tratado os substitutos elevados acima, na iteração anterior
                return false;
                //   hi = str.charCodeAt(idx - 1);
                //   low = code;
                //   return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
            }
            return code;
        }
    -----Corrigindo o charCodeAt() para manipular caracteres de Plano Multilingual não Básico se sua presença na string é desconhecida-----
        function knownCharCodeAt(str, idx) {
            str += '';
            var code,
                end = str.length;
            var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
            while ((surrogatePairs.exec(str)) != null) {
                var li = surrogatePairs.lastIndex;
                if (li - 2 < idx) {
                    idx++;
                }
                else {
                    break;
                }
            }
            if (idx >= end || idx < 0) {
                return NaN;
            }
            code = str.charCodeAt(idx);
            var hi, low;
            if (0xD800 <= code && code <= 0xDBFF) {
                hi = code;
                low = str.charCodeAt(idx + 1);
                // Vá um adiante, já que um dos "characters" é parte de um par substituto
                return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
            }
            return code;
        }
*/
/*------------------------------------------------------*/
/*
    --------------------String.fromCodePoint()--------------------
    ----------String.fromCodePoint()----------
    O método estático String.fromCodePoint() retorna uma seqüência de caracteres criado usando a seqüência especificada de pontos de código
    ------------------------------------------------------
    ----------Syntax----------
        String.fromCodePoint(num1[, ...[, numN]])
    -----Parâmetros-----
    num1, ..., numN -> Uma sequência de pontos de código.
    -----Exceções-----
    RangeError -> O RangeError é lançado se um ponto de código Unicode inválido é dado (por exemplo, "RangeError: NaN não é um ponto de código válido").
    ------------------------------------------------------
    ----------Descrição----------
    Because fromCodePoint() is a static method of String, you always use it as String.fromCodePoint(), rather than as a method of a String object you created.
    Porque fromCodePoint() é um método estático de String você sempre usá-lo como String.fromCodePoint() em vez de como um método de uma String ou do objeto que você criou.
    ------------------------------------------------------
    ----------Exemplos----------
    -----Usando fromCodePoint()-----
        String.fromCodePoint(42);       // "*"
        String.fromCodePoint(65, 90);   // "AZ"
        String.fromCodePoint(0x404);    // "\u0404"
        String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
        String.fromCodePoint(194564);   // "\uD87E\uDC04"
        String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
        String.fromCodePoint('_');      // RangeError
        String.fromCodePoint(Infinity); // RangeError
        String.fromCodePoint(-1);       // RangeError
        String.fromCodePoint(3.14);     // RangeError
        String.fromCodePoint(3e-2);     // RangeError
        String.fromCodePoint(NaN);      // RangeError
        // String.fromCharCode() alone cannot get the character at such a high code point
        // The following, on the other hand, can return a 4-byte character as well as the
        // usual 2-byte ones (i.e., it can return a single character which actually has
        // a string length of 2 instead of 1!)
        console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
    ------------------------------------------------------
    ----------Polyfill----------
    O método String.fromCodePoint  foi adicionado ao padrão ECMAScript na versão 6 e pode não ser suportado em todos os navegadores da Web ou em todos os ambientes ainda.
    Use o código abaixo para um polyfill:
    // ! http://mths.be/fromcodepoint v0.1.0 by @mathias
    if (!String.fromCodePoint) {
        (function() {
            var defineProperty = (function() {
                // IE 8 only supports `Object.defineProperty` on DOM elements
                try {
                    var object = {};
                    var $defineProperty = Object.defineProperty;
                    var result = $defineProperty(object, object, object) && $defineProperty;
                } catch(error) {}
                return result;
            }());
            var stringFromCharCode = String.fromCharCode;
            var floor = Math.floor;
            var fromCodePoint = function() {
                var MAX_SIZE = 0x4000;
                var codeUnits = [];
                var highSurrogate;
                var lowSurrogate;
                var index = -1;
                var length = arguments.length;
                if (!length) {
                    return '';
                }
                var result = '';
                while (++index < length) {
                    var codePoint = Number(arguments[index]);
                    if (
                        !isFinite(codePoint) ||       // `NaN`, `+Infinity`, or `-Infinity`
                        codePoint < 0 ||              // not a valid Unicode code point
                        codePoint > 0x10FFFF ||       // not a valid Unicode code point
                        floor(codePoint) != codePoint // not an integer
                    ) {
                        throw RangeError('Invalid code point: ' + codePoint);
                    }
                    if (codePoint <= 0xFFFF) { // BMP code point
                        codeUnits.push(codePoint);
                    } else { // Astral code point; split in surrogate halves
                        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                        codePoint -= 0x10000;
                        highSurrogate = (codePoint >> 10) + 0xD800;
                        lowSurrogate = (codePoint % 0x400) + 0xDC00;
                        codeUnits.push(highSurrogate, lowSurrogate);
                    }
                    if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                        result += stringFromCharCode.apply(null, codeUnits);
                        codeUnits.length = 0;
                    }
                }
                return result;
            };
            if (defineProperty) {
                defineProperty(String, 'fromCodePoint', {
                    'value': fromCodePoint,
                    'configurable': true,
                    'writable': true
                });
            } else {
                String.fromCodePoint = fromCodePoint;
            }
        }());
    }
*/
/*------------------------------------------------------*/
/*
    --------------------String.prototype.concat()--------------------
    ----------String.prototype.concat()----------
    O Método concat() combina o texto de duas ou mais strings e retorna uma nova string.
    ------------------------------------------------------
    ----------Sintaxe----------
        str.concat(string2, string3[, ..., stringN])
    -----Parâmetros-----
    string2...stringN -> Strings para concatenar essa string.
    ------------------------------------------------------
    ----------Descrição----------
    A função concat() combina o texto de duas ou mais strings e retorna uma nova string. As alterações de texto de uma string, não afetam a outra string.
    ------------------------------------------------------
    ----------Exemplos----------
    -----Usando concat()-----
    O Exemplo a seguir combina strings em uma nova string.
        var hello = 'Hello, ';
        console.log(hello.concat('Kevin', ' tenha um bom dia.'));
        // Hello, Kevin tenha um bom dia.
    ------------------------------------------------------
    Performance
    É altamente recomendável que operadores de atribuição (+, +=) sejam usados ao invés do método concat(). Veja esse  teste de perfomance.
*/
/*------------------------------------------------------*/
/*
    --------------------String.prototype.includes()--------------------
    ----------String.prototype.includes()----------
    O método includes() determina se uma string pode ser encontrada dentro de outra string, retornando true ou false, conforme apropriado.
    ------------------------------------------------------
    ----------Sintaxe----------
        str.includes(searchString[, position])
    -----Parâmetros-----
    searchString -> A string que será pesquisada dentro desta string.
    position -> Opcional. O indíce da posição da string que iniciará a busca; padrão 0. 
    ------------------------------------------------------
    ----------Descrição----------
    Este método permite determinar se uma string contém outra string.
    -----Case-sensitivity-----
    O método includes() é case sensitive. Por exemplo, a seguinte expressão retorna false:
        'Bandeira do Brasil'.includes('brasil'); // returns false
    ------------------------------------------------------
    ----------Exemplos----------
    -----Utilizando includes()-----
        var str = 'Ser, ou não ser, eis a questão.';
        console.log(str.includes('Ser'));         // true
        console.log(str.includes('questão'));     // true
        console.log(str.includes('não existe'));  // false
        console.log(str.includes('Ser', 1));      // false
        console.log(str.includes('SER'));         // false
    ------------------------------------------------------
    ----------Implementação----------
    Este método foi adicionado à especificação ECMAScript 6 e pode não estar disponível em todas as implementações JavaScript. No entanto, você pode facilmente implementar
    este método:
        if (!String.prototype.includes) {
            String.prototype.includes = function() {'use strict';
                return String.prototype.indexOf.apply(this, arguments) !== -1;
            };
        }
*/
/*------------------------------------------------------*/
/*
    --------------------String.prototype.endsWith()--------------------
    ----------String.prototype.endsWith()----------
    O método endsWith() determina se uma string termina com os caracteres da string especificada, retornando true ou false.
    ------------------------------------------------------
    ----------Sintaxe----------
        str.endsWith(stringSendoBuscada[, tamanho])
    -----Parâmetros-----
    stringSendoBuscada -> Os caracteres a serem pesquisados no final da string.
    tamanho -> Opcional. Se fornecido substitui o tamanho considerado da string passada. Se omitido, o valor padrão é o tamanho da string.
    -----Valor de Retorno-----
    true -> se os caracteres passados forem encontrados no final da string; de outra forma, false.
    ------------------------------------------------------
    ----------Descrição----------
    Este método permite que você determine se uma string termina ou não com outra string. Este método é case-sensitive.
    ------------------------------------------------------
    ----------Exemplos----------
    -----Usando endsWith()-----
        var str = 'To be, or not to be, that is the question.';
        console.log(str.endsWith('question.')); // true
        console.log(str.endsWith('to be'));     // false
        console.log(str.endsWith('to be', 19)); // true
    ------------------------------------------------------
    ----------Polyfill----------
    Este método foi adicionada a especificação ECMAScript 6 e talvez não esteja disponível em todos as implementações JavaScript ainda. No entanto, voccê pode
    "polyfill" String.prototype.endsWith() com o seguinte snippet:
    if (!String.prototype.endsWith)
        String.prototype.endsWith = function(searchStr, Position) {
            // This works much better than >= because
            // it compensates for NaN:
            if (!(Position < this.length))
                Position = this.length;
            else
                Position |= 0; // round position
            return this.substr(Position - searchStr.length,
                                searchStr.length) === searchStr;
    };
*/
/*------------------------------------------------------*/
/*
    --------------------String.prototype.indexOf()--------------------
    ----------Sumário----------
    O método indexOf() retorna o índice da primeira ocorrência do valor especificado em searchValue dentro do objeto String para o qual foi chamado,
    começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado.
    ------------------------------------------------------
    ----------Sintaxe----------
        str.indexOf(searchValue[, fromIndex])
    -----Parâmetros-----
    searchValue -> Uma string represantando o valor a ser buscado.
    fromIndex -> A posição da string original a partir da qual a busca deve começar. Pode ser qualquer número inteiro. O valor padrão é 0. Se fromIndex < 0 a string
    toda é percorrida (equivalente a passar 0). Se fromIndex >= str.length, o método irá retornar -1. 
    ------------------------------------------------------
    ----------Descrição----------
    Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0, e o índice do último caractere de uma string chamada stringName
    é stringName.length - 1.
        "Blue Whale".indexOf("Blue");     // retorna  0
        "Blue Whale".indexOf("Blute");    // retorna -1
        "Blue Whale".indexOf("Whale", 0); // retorna  5
        "Blue Whale".indexOf("Whale", 5); // retorna  5
        "Blue Whale".indexOf("", 9);      // retorna  9
        "Blue Whale".indexOf("", 10);     // retorna 10
        "Blue Whale".indexOf("", 11);     // retorna 10
    -----Sensível a maiúsculas e minúsculas-----
    O método indexOf é sensível a letras maiúsculas e minúsculas. Por exemplo, a expressão a seguir retorna -1:
        "Blue Whale".indexOf("blue") // retorna -1
    -----Verificando ocorrências-----
    Note que um retorno '0' não implica em true e '-1' não implica em false. Portanto, ao verificar se uma string específica está contida em outra string,
    a maneira correta de verificar seria:
        "Blue Whale".indexOf("Blue") != -1; // true
        "Blue Whale".indexOf("Bloe") != -1; // false
    ------------------------------------------------------
    ----------Exemplos----------
    -----Exemplo: Usando indexOf e lastIndexOf-----
    O exemplo a seguir usa indexOf e lastIndexOf para localizar valores dentro da string "Brave new world".
        var anyString = "Brave new world";
        console.log("O índice do primeiro w partindo do começo é " + anyString.indexOf("w")); // Exibe 8
        console.log("O índice do primeiro w partindo do final é " + anyString.lastIndexOf("w"));  // Exibe 10
        console.log("O índice de 'new' partindo do começo é " + anyString.indexOf("new"));    // Exibe 6
        console.log("O índice de 'new' partindo do final é " + anyString.lastIndexOf("new")); // Exibe 6
    -----Exemplo: indexOf e sensibilidade a maiúsculas e minúsculas-----
    O exemplo a seguir definie duas variáveis string. As variáveis contém a mesma string, exceto que a segunda string tem letras maiúsculas.
    O primeiro método log exibe 19. Porém, como o método indexOf é sensível a caixa, a string "cheddar" não é encontrada em myCapString,
    portanto o segundo método log exibe -1.
        var myString    = "brie, pepper jack, cheddar";
        var myCapString = "Brie, Pepper Jack, Cheddar";
        console.log('myString.indexOf("cheddar") é ' + myString.indexOf("cheddar")); // Exibe 19
        console.log('myCapString.indexOf("cheddar") é ' + myCapString.indexOf("cheddar")); // Exibe -1

    -----Exemplo: Usando indexOf para contar as ocorrências de uma letra numa string.-----
    O exemplo a seguir atribui à variável count o número de ocorrências da letra x na string str:
        count = 0;
        pos = str.indexOf("x");
        while ( pos != -1 ) {
            count++;
            pos = str.indexOf( "x",pos + 1 );
        }
*/
/*------------------------------------------------------*/
/*
    --------------------String.prototype.replace()--------------------
    ----------String.prototype.replace()----------
    ----------Resumo----------
    O método replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto. O padrão pode ser uma string ou uma RegExp,
    e o substituto pode ser uma string ou uma função a ser chamada por cada combinação.
    ------------------------------------------------------
    ----------Sintaxe----------
        str.replace(regexp|substr, newSubStr|function)
    -----Parâmetros-----
    regexp -> Um objeto RegExp ou literal. A correspondência ou correspondências são substituídas por newSubStr ou o valor retornado pela função especificada.
    substr -> Um String que deve ser substituído por newSubStr. Ele é tratado como uma string textual e não é interpretado como uma expressão regular.
    Apenas a primeira ocorrência será substituída
    newSubStr -> A String que substitui a substring recebida do parâmetro #1. Uma série de padrões de substituições especiais são suportados;
    veja a seção "Especificando uma string como parâmetro" abaixo.
    Função -> A função (function) chamada cria uma nova substring (para ser colocada no lugar da substring recebida pelo parametro #1).
    The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.
    flags
        Nota: O argumento flags não funciona no v8 Core (Chrome e NodeJs). Uma string especificando uma combinação de flags de expressão regular.
        O uso do parâmetro flags no método String.prototype.replace() é não-padrão. Ao invés de usar este parâmetro, use um objeto RegExp com a flags correspondente.
        O valor deste parâmetro se for utilizado deve ser uma string consistindo de um ou mais dos seguintes caracteres para afetar a operação, tais como descrito:
        g -> combinação global
        i -> ignorar caso
        m -> combinação em várias linhas
        y -> sticky

    -----Retornos-----
    Uma nova string com algum ou todas as combinações do padrão substituído pelo substituidor.
    ------------------------------------------------------
    ----------Descrição----------
    Este método não muda o objeto String. Ele simplesmente retorna uma nova string.
    Para realizar uma pesquisa global e substituir, incluir a chave g na expressão regular ou se o primeiro parâmetro é uma string, inclua g no parâmetro flags.
    -----Especificando uma string como parâmetro-----
    A string substituidora pode incluir o seguinte padrão de substituição especial:
    Padrão 	        Insere
    $$ 	            Insere um "$".
    $& 	            Insere a string casada.
    $` 	            Insere a porção da string que precede a substring combinada.
    $' 	            Insere a porção da string que segue a substring combinada.
    $n ou $nn 	    Onde n ou nn são dígitos decimais, insere a n-ésima substring entre parêntesis casada, dado que o primeiro argumento foi um objeto RegExp.
    -----Especificando uma função como parâmetro-----
    Você pode especificar uma função no segundo parâmetro. Neste caso, a função será chamada depois que a combinação for feita. O resultado da função (valor de retorno)
    será usado como a string substituta. (Atenção: os padrões de substituição citados acima não se aplicam neste caso). Note que a função será chamada
    múltiplas vezes para combinação que deve ser substituída se a expressão regular no primeiro parâmetro tiver a regra global.
        Os parâmetros da função são:
        Nome possível 	    Valor
        match 	            A substring encontrada. Corresponde ao $& acima
        p1, p2, ... 	    O enésimo parâmetro entre parenteses da Regex no primeiro parâmetro na função replace() RegExp. (Corresponde a $1, $2, etc. acima.)
        Por exemplo, se /(\a+)(\b+)/, for o primeiro parâmetro, p1 é a combinação para \a+, e p2 para \b+.
        offset 	            O offset da string encontrada em relação ao resto da string. Por exemplo, se a string for 'abcd' e a string a ser encontrada for 'bc',
        então este parâmetro terá o valor 1.
        string 	            A string completa que está sendo examinada.
    (O número exato de argumentos dependerá se o primeiro parâmetro for RegExp e de quantas combinações entre parênteses houver.)
    O exemplo a seguir irá setar newString para 'abc - 12345 - #$*%':
        function replacer(match, p1, p2, p3, offset, string) {
            // p1 is nondigits, p2 digits, and p3 non-alphanumerics
            return [p1, p2, p3].join(' - ');
        }
        var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    ------------------------------------------------------
    ----------Exemplos----------
    -----Definindo expressão regular com replace()-----
    No exemplo a seguir foi definida uma expressão regular com flag 'ignore' na função replace().
        var str = 'Twas the night before Xmas...';
        var newstr = str.replace(/xmas/i, 'Christmas');
        console.log(newstr);  // Twas the night before Christmas...
    O resulto é 'Twas the night before Christmas...'
    -----Usando global e ignore com replace()-----
    Substituir globalmente só pode ser feito com uma expressão regular. No exemplo a seguir, a expressão regular inclui as flags global e ignore case que permite
    a função replace() substituir cada 'apples' por 'oranges' na string.
        var re = /apples/gi;
        var str = 'Apples are round, and apples are juicy.';
        var newstr = str.replace(re, 'oranges');
        console.log(newstr);  // oranges are round, and oranges are juicy.
    O resultado é: 'oranges are round, and oranges are juicy'.
    -----Trocando palavras em uma String-----
    O script a seguir troca as palavras da string. Para o texto ser substituido, o script usa os padrões $1 e $2.
        var re = /(\w+)\s(\w+)/;
        var str = 'John Smith';
        var newstr = str.replace(re, '$2, $1');
        console.log(newstr);  // Smith, John
    O resultado é: 'Smith, John'.
    -----Usando uma função que modifica os caracteres coincidentes-----
    Neste exemplo, todas as ocorrências de letras maiúsculas na string são convertidas para lower case, e um hífen é inserido antes da ocorrência.
    O importante aqui é que é necessário uma operação adicional no item antes dele ser retornado como substituído.
    A função de substituição aceita a string coincidida como parâmetro, e usa ela para transformar o case e concatenar um hífen antes de retornar.
        function styleHyphenFormat(propertyName) {
            function upperToHyphenLower(match, offset, string) {
                return (offset ? '-' : '') + match.toLowerCase();
            }
            return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
        }
    Então a chamada: styleHyphenFormat('borderTop') retorna 'border-top'.
    Como queremos transformar o resultado do match antes da substituição final, nós devemos usar uma função. Isto força que a transformação seja feita
    antes da chamada do método toLowerCase(). Se tivéssemos tentado isto sem a função, o método toLowerCase() não teria efeito.
    var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // não funciona
    isso acontece porque '$&'.toLowerCase() será executada antes (resultando no mesmo '$&') em vez de usar os caracteres da string a ser transformada.
    -----Substituindo graus Fahrenheit para Celsius-----
    O exemplo a seguir substitui graus Fahrenheit para Celsius. O grau Fahrenheit deve ser um número terminado com F. A função retorna o número em Celsius
    terminando em C. Por exemplo, se a entrada for 212F, a função deve retornar 100C. Se o número é 0F, a função retorna -17.77777777777778C.
    A expressão regular test checa por números que terminem com F. O número de graus Fahrenheit é acessível pela função pelo segundo parâmetro,
    p1. A função calcula o Celsius baseado no Fahrenheit passado via string para a função f2c(). A f2c() então retorna o número em Celsius.
    function f2c(x) {
        function convert(str, p1, offset, s) {
            return ((p1 - 32) * 5/9) + 'C';
        }
        var s = String(x);
        var test = /(-?\d+(?:\.\d*)?)F\b/g;
        return s.replace(test, convert);
    }
    -----Use uma função com expressão regular para evitar loops for-----
    O exemplo seguinte pega um padrão de string e converte em um array de objetos.
    Entrada:
    Uma string com caracteres: x, - e _
        x-x_
        x---x---x---x---
        x-xxx-xx-x-
        x_x_x___x___x___
    Saída:
    Um array de objetos. Um 'x' denota um estado 'on', um '-' (hífen) denota um estado 'off'  e um '_' (underline) denota o comprimento do estado 'on'.
        [
        { on: true, length: 1 },
        { on: false, length: 1 },
        { on: true, length: 2 }
        ...
        ]
    Código:
        var str = 'x-x_';
        var retArr = [];
        str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
            if (p1) { retArr.push({ on: true, length: p1.length }); }
            if (p2) { retArr.push({ on: false, length: 1 }); }
        });
        console.log(retArr);
    O código gera um array de 3 objetos como desejado sem usar uma função de loop.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/