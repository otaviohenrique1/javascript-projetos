/* ----------Formatando texto---------- */
console.log('----------Formatando texto----------');
/*
    ----------Strings----------
    O tipo String do JavaScript é usado para representar informações de texto. É um conjunto de "elementos" composto por valores inteiros de 16-bits sem sinal.
    Cada elemento dentro da String ocupa uma posição dentro dessa String. O primeiro elemento está no índice 0, o próximo no índice 1, e assim sucessivamente.
    O tamanho de uma String é a quantidade de elementos que ela possui. Você pode criar strings usando strings literais ou objetos string.

    -----Strings literais-----
    Você pode criar strings usando aspas simples ou aspas duplas:
        'foo'
        "bar"
    Strings mais avançadas podem ser criadas usando sequências de escape:
    
    -----Sequências de escape hexadecimais-----
    O número depois de \x é interpretado como um número hexadecimal.
        '\xA9' // "©"

    -----Sequências de escape unicode-----
    As sequências de escape unicode requerem no mínimo quatro caracteres depois do \u.
        '\u00A9' // "©"
    
    -----Sequências de escape Unicode code point-----
    É novo no ECMAScript 6. Com essas sequências, cada caractere pode ser "escapado" usando números hexadecimais, sendo possível usar pontos de código Unicode
    de até 0x10FFFF. Com escapes Unicode simples muitas vezes é necessário escrever as metades substitutas separadamente para obter o mesmo resultado.
    Veja também String.fromCodePoint() or String.prototype.codePointAt().
        '\u{2F804}'
        // o mesmo com escapes Unicode simples
        '\uD87E\uDC04'
    
    -----Objetos String-----
    O objeto String é como uma "capa" ao redor do tipo primitivo string.
    var s = new String("foo"); // Cria um objeto String
    console.log(s); // Exibe no console: { '0': 'f', '1': 'o', '2': 'o'}
    typeof s; // Retorna 'object'

    Você pode chamar qualquer um dos métodos do objeto String em cima de uma string literal — JavaScript automaticamente converte a string literal em um objeto
    String temporário, chama o método, e então descarta o objeto String temporário. Você pode também usar a propriedade String.length com uma string literal.
    Você deve usar strings literais a menos que você realmente precise usar um objeto String, pois objetos String podem ter comportamentos inesperados. Por exemplo:
        var s1 = "2 + 2"; // Cria uma string literal
        var s2 = new String("2 + 2"); // Creates um objeto String
        eval(s1); // Retorna o número 4
        eval(s2); // Retorna a string "2 + 2"
    Um objeto String possui uma propriedade, length, que indica o número de caracteres na string. Por exemplo, o código a seguir atribui o valor 11 à variável x,
    pois "Olá, mundo!" possui 11 caracteres:
        var minhaString = "Olá, mundo!";
        var x = minhaString.length;
    Um objeto String possui uma variedade de métodos: por exemplo aqueles que retornam uma variação da própria string, como substring e toUpperCase.
    A tabela a seguir lista os métodos de objetos String.

    -----Métodos de String-----
    Método	                                            Descrição
    charAt, charCodeAt, codePointAt	                    Retorna o código do caractere ou o caractere em uma posição específica na string.
    indexOf, lastIndexOf	                            Retorna a posição de uma substring específica na string ou a última posição da substring específica, respectivamente.
    startsWith, endsWith, includes	                    Retorna se uma string começa, termina ou contém uma outra string específica.
    concat	                                            Concatena o texto de duas strings e retorna uma nova string.
    fromCharCode, fromCodePoint	                        Cria uma string a partir de uma sequência específica de valores Unicode. Esse é um método da classe String,
                                                        não de uma instância do tipo String.
    split	                                            Separa um objeto String em um array de strings, separando a string em substrings.
    slice	                                            Extrai uma seção de uma string e retorna uma nova string.
    substring, substr	                                Retorna um subconjunto específico de uma string, definindo os índices inicial e final, ou definindo um índice
                                                        e um tamanho.
    match, replace, search	                            Trabalha com expressões regulares.
    toLowerCase, toUpperCase	                        Retorna a string com todos caracteres em minúsculo, ou maiúsculo, respectivamente.
    normalize	                                        Retorna a Forma Normalizada Unicode (Unicode Normalization Form) da string que chama o método.
    repeat	                                            Retorna uma string contendo os elementos do objeto repetidos pela quantidade de vezes dada.
    trim	                                            Retira espaços em branco no começo e no final da string.
    
    charAt -> O método charAt() retorna o caractere especificado a partir de uma string.
        Sintaxe:
            str.charAt(index)
            Parâmetros:
                index -> Um inteiro entre 0 e o primeiro inteiro menor que o comprimento da string. Se nenhum índice é fornecido, charAt() usará 0 como índice. 
            Valor retornado -> Uma string representando o caractere no índice especificado; uma string vazia se index está fora do intervalo de índices da string str.
        Exemplo 1 - Mostrando caracteres em diferente localizações em uma string:
            O exemplo a seguir mostra caracteres em diferentes locais em uma string "Brave new world":
            var anyString = 'Brave new world';
                console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
                console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
                console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
                console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
                console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
                console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
            Estas linhas mostram o seguinte:
                The character at index 0   is 'B'
                The character at index 1   is 'r'
                The character at index 2   is 'a'
                The character at index 3   is 'v'
                The character at index 4   is 'e'
                The character at index 999 is ''

    charCodeAt -> O método charCodeAt() retorna um inteiro entre 0 e 65535 representando a unidade de código UTF-16 em seu dado índice (a unidade de código UTF-16
        corresponde ao ponto de código Unicode para pontos de códigos representáveis em uma única unidade de código UTF-16 , mas também pode ser a primeira unidade
        de código de um par substituto não representável em uma única unidade de código UTF-16. Exemplo: pontos de código Unicode  > 0x10000). Se você quer o valor
        do ponto de código inteiro, use codePointAt().
        Sintaxe:
            str.charCodeAt(índice)
            Parâmetros:
                índice -> Um integer maior ou igual a 0 e menor que o comprimento da string; se não for um número, o padrão será 0. 
            Valor retornado -> Um número representando o valor de unidade de código UTF-16 do caracter no dado índice; NaN se o índice estiver fora do alcance.
        Exemplo 1 - Usando charCodeAt():
            O exemplo a seguir retorna 65, o valor Unicode para A.
            'ABC'.charCodeAt(0); // retorna 65

    codePointAt -> The codePointAt() method returns a non-negative integer that is the Unicode code point value.
        Sintaxe:
            str.codePointAt(pos)
            Parameters:
                pos -> Position of an element in the String to return the code point value from. 
            Return value -> A number representing the code point value of the character at the given index; undefined if there is no element at pos. 
        Exemplo 1 - Using codePointAt():
            'ABC'.codePointAt(1);          // 66
            '\uD800\uDC00'.codePointAt(0); // 65536
            'XYZ'.codePointAt(42); // undefined

    indexOf -> O método indexOf() retorna o índice da primeira ocorrência do valor especificado em searchValue dentro do objeto String para o qual foi chamado,
    começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado.
        Sintaxe:
            str.indexOf(searchValue[, fromIndex])
            Parâmetros:
                searchValue -> Uma string represantando o valor a ser buscado.
                fromIndex -> A posição da string original a partir da qual a busca deve começar. Pode ser qualquer número inteiro. O valor padrão é 0. Se fromIndex < 0
                a string toda é percorrida (equivalente a passar 0). Se fromIndex >= str.length, o método irá retornar -1.

        Exemplo 1 - Usando indexOf e lastIndexOf:
            O exemplo a seguir usa indexOf e lastIndexOf para localizar valores dentro da string "Brave new world".
                var anyString = "Brave new world";
                console.log("O índice do primeiro w partindo do começo é " + anyString.indexOf("w")); // Exibe 8
                console.log("O índice do primeiro w partindo do final é " + anyString.lastIndexOf("w")); // Exibe 10
                console.log("O índice de 'new' partindo do começo é " + anyString.indexOf("new")); // Exibe 6
                console.log("O índice de 'new' partindo do final é " + anyString.lastIndexOf("new")); // Exibe 6
        Exemplo 2 - indexOf e sensibilidade a maiúsculas e minúsculas:
            O exemplo a seguir definie duas variáveis string. As variáveis contém a mesma string, exceto que a segunda string tem letras maiúsculas. O primeiro método
            log exibe 19. Porém, como o método indexOf é sensível a caixa, a string "cheddar" não é encontrada em myCapString, portanto o segundo método log exibe -1.
                var myString    = "brie, pepper jack, cheddar";
                var myCapString = "Brie, Pepper Jack, Cheddar";
                console.log('myString.indexOf("cheddar") é ' + myString.indexOf("cheddar")); // Exibe 19
                console.log('myCapString.indexOf("cheddar") é ' + myCapString.indexOf("cheddar")); // Exibe -1

        Exemplo 3 - Usando indexOf para contar as ocorrências de uma letra numa string:
            O exemplo a seguir atribui à variável count o número de ocorrências da letra x na string str:
                count = 0;
                pos = str.indexOf("x");
                while ( pos != -1 ) {
                    count++;
                    pos = str.indexOf( "x",pos + 1 );
                }

    lastIndexOf -> O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String, pesquisando de trás para frente a partir
    de fromIndex. Retorna -1 se o valor não for encontrado.
        Sintaxe:
            str.lastIndexOf(searchValue[, fromIndex])
            Parêmtros:
                searchValue -> Uma string representado o valor a ser procurado. Se searchValue for uma string vazia, fromIndex é retornado.
                fromIndex Optional -> O índice no qual a pesquisa será iniciada de trás para frente. Qualquer número inteiro é válido. O valor padrão é str.length - 1,
                então toda a string é pesquisada. Se fromIndex >= str.length, toda string é pesquisada. Se fromIndex < 0, o comportamento será o mesmo que seria com o
                índice 0.
        Exemplo 1 - Usando indexOf() e lastIndexOf():
            O seguinte exemplo usa indexOf() e lastIndexOf() para localizar valores nas string "Brave new world".
                var anyString = 'Brave new world';
                console.log('O índice do primeiro w a partir do começo é ' + anyString.indexOf('w')); // logs 8
                console.log('O índice do primeiro w a partir do final é ' + anyString.lastIndexOf('w')); // logs 10
                console.log('O índice de "new" a partir do começo é ' + anyString.indexOf('new')); // logs 6
                console.log('O índice de "new" a partir do final é ' + anyString.lastIndexOf('new')); // logs 6

    startsWith -> O método startsWith() determina se uma string começa com os mesmo caracteres de outra string, retorn true ou false conforme apropriado.
        Sintaxe:
            str.startsWith(searchString[, position])
            Parametros:
                searchString -> Os caracteres a serem produrado no a partir do início da string.
                position -> Opcional. A posição nessa string que o método irá buscar pela searchString; o valor padrão é  0.
        Exemplo 1 - Usando startsWith():
            var str = 'To be, or not to be, that is the question.';
            console.log(str.startsWith('To be'));         // true
            console.log(str.startsWith('not to be'));     // false
            console.log(str.startsWith('not to be', 10)); // true

    endsWith -> O método endsWith() determina se uma string termina com os caracteres da string especificada, retornando true ou false.
        Sintaxe:
            str.endsWith(stringSendoBuscada[, tamanho])
            Parâmetros:
                stringSendoBuscada -> Os caracteres a serem pesquisados no final da string.
                tamanho -> Opcional. Se fornecido substitui o tamanho considerado da string passada. Se omitido, o valor padrão é o tamanho da string.
            Valor de Retorno -> true se os caracteres passados forem encontrados no final da string; de outra forma, false.

        Exemplo 1 - Usando endsWith():
            var str = 'To be, or not to be, that is the question.';
            console.log(str.endsWith('question.')); // true
            console.log(str.endsWith('to be'));     // false
            console.log(str.endsWith('to be', 19)); // true

    includes -> O método includes() determina se uma string pode ser encontrada dentro de outra string, retornando true ou false, conforme apropriado.
        Sintaxe:
            str.includes(searchString[, position])
            Parâmetros:
                searchString -> A string que será pesquisada dentro desta string.
                position -> Opcional. O indíce da posição da string que iniciará a busca; padrão 0. 

        Exemplo 1 - Utilizando includes():
            var str = 'Ser, ou não ser, eis a questão.';
            console.log(str.includes('Ser'));         // true
            console.log(str.includes('questão'));     // true
            console.log(str.includes('não existe'));  // false
            console.log(str.includes('Ser', 1));      // false
            console.log(str.includes('SER'));         // false

    concat -> O Método concat() combina o texto de duas ou mais strings e retorna uma nova string.
        Sintaxe:
            str.concat(string2, string3[, ..., stringN])
            Parâmetros:
                string2...stringN -> Strings para concatenar essa string. 
        Exemplo 1 - Usando concat():
            O Exemplo a seguir combina strings em uma nova string.
                var hello = 'Hello, ';
                console.log(hello.concat('Kevin', ' tenha um bom dia.'));
                // Hello, Kevin tenha um bom dia.

    fromCharCode -> O método String.fromCharCode() retorna uma string criada ao usar uma sequencia específica de valores Unicode.
        Sintaxe:
            String.fromCharCode(num1[, ...[, numN]])
            Parâmetros:
                num1, ..., numN -> Uma sequência de números que são valores Unicode.
            Valor do Return -> Uma string contendo os caracteres correspondentes a sequência de valores Unicode.
        Exemplo 1 - Usando fromCharCode():
            O seguinte exemplo retorna a string "ABC".
            String.fromCharCode(65, 66, 67);  // "ABC"

    fromCodePoint -> O método estático String.fromCodePoint() retorna uma seqüência de caracteres criado usando a seqüência especificada de pontos de código
        Sintaxe:
            String.fromCodePoint(num1[, ...[, numN]])
            Parâmetros:
                num1, ..., numN -> Uma sequência de pontos de código.
            Exceções:
                RangeError -> O RangeError é lançado se um ponto de código Unicode inválido é dado (por exemplo, "RangeError: NaN não é um ponto de código válido"). 
        Exemplo 1 - Usando fromCodePoint():
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

    split -> O método split() divide um objeto String em um array de strings ao separar a string em substrings.
        Sintaxe:
            str.split([separador[, limite]])
            Parâmetros:
                separador -> Opcional. Especifica o(s) caracter(es) a serem usados para separar a string. O separador é tratado como uma string ou uma expressão regular.
                Se o separador é omitido ou não ocorre na string, o array retornado irá conter um elemento consistindo da string inteira. Se o separador for
                uma string vazia, str será convertido em um array de caracteres.
                limite -> Opcional. Integer especificando um limite no número de divisões a serem encontradas. O método split() ainda dividirá em cada ocorrência do
                separador, até que o número de itens divididos corresponda ao limite ou que a string fique aquém do separador.
            Valor de Retorno -> Um array de strings dividido em cada ponto onde o separador ocorre na string informada.

        Exemplo 1 - Usando split():
            O exemplo a seguir define uma função que divide uma string em um array de strings usando o separador especificado. Depois de dividir a string,
            a função exibe mensagens indicando a string original (antes da divisão), o separador usado, o número de elementos no array e os elementos individuais do array.
                function splitString(stringToSplit, separator) {
                    var arrayOfStrings = stringToSplit.split(separator);
                    console.log('A string original é: "' + stringToSplit + '"');
                    console.log('O separador é: "' + separator + '"');
                    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
                }
                var tempestString = 'Oh brave new world that has such people in it.';
                var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
                var space = ' ';
                var comma = ',';
                splitString(tempestString, space);
                splitString(tempestString);
                splitString(monthString, comma);
            Esse exemplo produz a saída a seguir:
                A string original é: "Oh brave new world that has such people in it."
                O separador é: " "
                O array possui 10 elementos: Oh / brave / new / world / that / has / such / people / in / it.
                A string original é: "Oh brave new world that has such people in it."
                O separador é: "undefined"
                O array possui 1 elementos: Oh brave new world that has such people in it.
                A string original é: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
                O separador é: ","
                O array possui 12 elementos: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec

    slice -> O método slice() extrai uma sessão de uma string e retorna uma nova  string.
        Sintaxe:
            str.slice(inicioSlice[, fimSlice])
            Paramêtros:
                inicioSlice -> O indíce base-zero que se inicia a extração. Se negativo, é considerado como sourceLength + beginSlice onde sourceLength é o tamanho
                da string (por exemplo, se inicioSlice é -3 é tratado como sourceLength - 3).
                fimSlice -> Opcional. O indíce base-zero no qual termina a extração. Se omitido, slice() extrairá até o fim da string. Se negativo, é tratado como
                sourceLength + fimSlice where sourceLength é o tamanho da string (por exemplo, se fimSlice é -3 é tratado como sourceLength - 3). 

        Exemplo 1 - Usando slice() para criar uma nova string:
            O exemplo a seguir usa slice() para criar uma nova string.
                var str1 = 'The morning is upon us.';
                var str2 = str1.slice(4, -2);
                console.log(str2); // OUTPUT: morning is upon u
        
        Exemplo 2 - Usando slice() com indíces negativos:
            O exemplo a seguir usa o slice() com indíces negativos.
                var str = 'The morning is upon us.';
                str.slice(-3);     // returns 'us.'
                str.slice(-3, -1); // returns 'us'
                str.slice(0, -1);  // returns 'The morning is upon us'

    substring -> O método substring() retorna um subconjunto de uma string entre um indice e outro, ou até o final da string.
        Sintaxe:
            str.substring(indexInicio[, indexFim])
            Parâmetros:
                indexInicio -> Um inteiro entre 0 e o  comprimento da string, especificando a posição na string do primeiro caractere a ser incluído na substring retornada.
                indexFim -> (opcional) Um inteiro entre 0 e o comprimento da string, especificando a posição na string do primeiro caractere a não ser mais incluído
                na substring retornada. 

        Exemplo 1 - Usando substring:
            O seguinte exemplo usa substring() para mostrar caracteres da palavra 'Mozilla':
                // assumes a print function is defined
                var anyString = "Mozilla";
                // Mostra "Moz"
                console.log(anyString.substring(0,3));
                console.log(anyString.substring(3,0));
                // Mostra "lla"
                console.log(anyString.substring(4,7));
                console.log(anyString.substring(7,4));
                // Mostra "Mozill"
                console.log(anyString.substring(0,6));
                // Mostra "Mozilla"
                console.log(anyString.substring(0,7));
                console.log(anyString.substring(0,10));

        Exemplo 2 - Substituíndo uma substring com uma string:
            O seguinte exemplo substitui uma substring dentro de uma string. Ela irá substituir ambos caracteres e substrings individualmente.
            A função invocada na linha final do exemplo altera a string "Brave New World" para "Brave New Web".
            function replaceString(oldS, newS, fullS) {
                // Replaces oldS with newS in the string fullS
                for (var i = 0; i < fullS.length; i++) {
                    if (fullS.substring(i, i + oldS.length) == oldS) {
                    fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
                    }
                }
                return fullS;
            }
            replaceString("World", "Web", "Brave New World");
            
            Note que isto pode resultar em um loop infinito se oldS for um substring de newS -- por exemplo, se você tentou substituir "World" com "OtherWorld".
            O melhor método para substituir strings é o seguinte:

            function replaceString(oldS, newS,fullS){
                return fullS.split(oldS).join(newS);
            }

            O código acima serve como um exemplo para operações com substring. Se voce precisa substituir substrings, na maioria das vezes você vai
            querer usar String.prototype.replace().

    substr -> O método substr() retorna os caracteres em uma string começando na localização especificada através do número especificado de caracteres.
        Sintaxe:
            str.substr(start[, length])
            Parametros:
                start -> Local para começar a extrair os caracteres. Se um número negativo é passado, é tratado como strLength - start onde strLength é o
                tamanho da string. Por exemplo, str.substr(-3) é tratado como str.substr(str.length - 3)
                length -> O número de caracteres a serem extraídos. Se esse argumento for undefined, todos os caracteres do start ao fim da string serão extraídos.
            Valor de retorno -> Uma nova string contendo a seção extraída da string fornecida. Se o length for 0 ou um número negativo, uma string vazia é retornada.

        Exemplo 1 - Using substr():
            var str = 'abcdefghij';
            console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
            console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
            console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
            console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
            console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
            console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '

    match -> O método match() recupera as correspondências ao testar uma string com uma expressão regular.
        Sintaxe:
            str.match(regexp);
            Parâmetros:
                regexp -> Um objeto de expressão regular. Se o objeto passado não for um RegExp, será convertido para um novo RegExp usando new RegExp (obj).
            O valor de retorno:
                array -> Um Array contendo os resultados encontrados ou null se não encontrar valores que correspondam ao RexExp passado. 

        Exemplo 1 - Usando match:
            No exemplo a seguir, match é usado para encontrar o "Capítulo", seguido de um ou mais caracteres numéricos, seguido por um ponto decimal e caracteres
            numéricos 0 ou mais vezes. A expressão inclui a flag i para que diferenças de maiúscula/minúscula sejam ignoradas.
                var str = "For more information, see Chapter 3.4.5.1";
                var re = /(chapter \d+(\.\d)*)/i;
                var found = str.match(re);
                console.log(found);
                // logs ["Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1"]
                // "Chapter 3.4.5.1" é a primeira correspondência e o primeiro valor 
                //  lembrado a partir de (Chapter \d+(\.\d)*).
                // ".1" é o útlimo valor de (\.\d).
        
        Exemplo 2 - Usando global e ignorar bandeiras(flags) de caso com match:
            O exemplo seguinte demonstra o uso de bandeiras de casos globais e ignoram com match. Todas as letras de A a E e A a E são devolvidos,
            cada um o seu próprio elemento na matriz
                var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var regexp = /[A-E]/gi;
                var matches_array = str.match(regexp);
                console.log(matches_array); 
                // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

        Exemplo 3 - Usando match() sem parâmetros:
            var str = "Nada virá de nada.";
            str.match();  // retorna [""]

        Exemplo 4 - Um objeto não-RegExp como parâmetro:
            Quando o parâmetro é uma string ou número, é implicitamente convertido para um RegExp ao usar new RegExp(obj). Se é um número positivo com um sinal positivo,
            o  método RegExp() irá ignorar o sinal positivo.
                var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
                    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
                    str3 = "The contract was declared null and void.";
                str1.match("number");   // "number" is a string. returns ["number"]
                str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
                str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
                str1.match(+Infinity);  // returns ["Infinity"]
                str1.match(-Infinity);  // returns ["-Infinity"]
                str2.match(65);         // returns ["65"]
                str2.match(+65);        // A number with a positive sign. returns ["65"]
                str3.match(null);       // returns ["null"]

    replace -> O método replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto. O padrão pode ser uma string
    ou uma RegExp, e o substituto pode ser uma string ou uma função a ser chamada por cada combinação.
        Sintaxe:
            str.replace(regexp|substr, newSubStr|function)
            Parâmetros:
                regexp -> Um objeto RegExp ou literal. A correspondência ou correspondências são substituídas por newSubStr ou o valor retornado pela função especificada.
                substr -> Um String que deve ser substituído por newSubStr. Ele é tratado como uma string textual e não é interpretado como uma expressão regular.
                Apenas a primeira ocorrência será substituída
                newSubStr -> A String que substitui a substring recebida do parâmetro #1. Uma série de padrões de substituições especiais são suportados;
                veja a seção "Especificando uma string como parâmetro" abaixo.
                Função -> A função (function) chamada cria uma nova substring (para ser colocada no lugar da substring recebida pelo parametro #1).
                The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.
                flags:
                    Nota: O argumento flags não funciona no v8 Core (Chrome e NodeJs). Uma string especificando uma combinação de flags de expressão regular.
                    O uso do parâmetro flags no método String.prototype.replace() é não-padrão. Ao invés de usar este parâmetro, use um objeto RegExp com a
                    flags correspondente. O valor deste parâmetro se for utilizado deve ser uma string consistindo de um ou mais dos seguintes caracteres
                    para afetar a operação, tais como descrito:
                    g -> combinação global
                    i -> ignorar caso
                    m -> combinação em várias linhas
                    y -> sticky
            Retornos -> Uma nova string com algum ou todas as combinações do padrão substituído pelo substituidor.

        Exemplo 1 - Definindo expressão regular com replace():
            No exemplo a seguir foi definida uma expressão regular com flag 'ignore' na função replace().
                var str = 'Twas the night before Xmas...';
                var newstr = str.replace(/xmas/i, 'Christmas');
                console.log(newstr);  // Twas the night before Christmas...
            O resulto é 'Twas the night before Christmas...'
        
        Exemplo 2 - Trocando palavras em uma String:
            O script a seguir troca as palavras da string. Para o texto ser substituido, o script usa os padrões $1 e $2.
                var re = /(\w+)\s(\w+)/;
                var str = 'John Smith';
                var newstr = str.replace(re, '$2, $1');
                console.log(newstr);  // Smith, John
            O resultado é: 'Smith, John'.

        Exemplo 3 - Substituindo graus Fahrenheit para Cels:
            O exemplo a seguir substitui graus Fahrenheit para Celsius. O grau Fahrenheit deve ser um número terminado com F. A função retorna o número
            em Celsius terminando em C. Por exemplo, se a entrada for 212F, a função deve retornar 100C. Se o número é 0F, a função retorna -17.77777777777778C.
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

    search -> O método search() executa uma busca de uma expressão regular neste objeto  String.
        Sintaxe:
            str.search(regexp)
            Parâmetros:
                regexp -> Um objeto contendo uma expressão regular. Se um objeto obj for passado como argumento e não for do tipo RegExp, ele é implicitamente
                convertido para um objeto RegExp através da instrução new RegExp(obj).
            Valor retornado -> O índice no string do primeiro trecho que satisfez a expressão regular; se não encontrado, -1.

        Exemplo 1 - Usando search():
            O seguinte exemplo efetua o log de uma mensagem que depende do sucesso do teste.
                function testinput(re, str) {
                    var midstring;
                    if (str.search(re) != -1) {
                        midstring = ' contem ';
                    } else {
                        midstring = ' nao contem ';
                    }
                    console.log(str + midstring + re);
                }

    toLowerCase -> O método toLowerCase() retorna a string chamada convertida para minúsculo.
        Sintaxe:
            str.toLowerCase()
            Valor retornado -> Uma nova string representando o valor chamado convertido para minúsculo.
        Exemplo 1 - Usando toLowerCase():
            console.log('ALFABETO'.toLowerCase()); // 'alfabeto'

    toUpperCase -> O método toUpperCase() retorna o valor da string chamada convertida para maiúscula.
        Sintaxe:
            str.toUpperCase()
        Exemplo 1 - Usando toUpperCase():
            console.log('alfabeto'.toUpperCase()); // 'ALFABETO'

    normalize -> O métodonormalize() retorna a Forma de Normalização Unicode (Unicode Normalization Form) de uma dada string (se o valor não é uma string,
        ele será convertido para uma primeiramente).
        Sintaxe:
            str.normalize([form])
            Parâmetros:
                form -> Um dentre os seguintes valores: "NFC", "NFD", "NFKC", ou "NFKD", especificando o formato de normalização. Se o valor for omitido ou undefined,
                "NFC" é utilizado.
                        -NFC — Formato de Normalização Canônico de Composição. 
                        -NFD — Formato de Normalização Canônico de Decomposição.
                        -NFKC — Formato de Normalização de Compatibilidade de Composição.
                        -NFKD — Formato de Normalização de Compatibilidade de Decomposição.
            Retorno -> Uma string contendo a Forma de Normalização Unicode da string dada.
            Erros lançados:
                RangeError -> Em erro RangeError é lançado seform não é um dos valores especificados acima. 
        Exemplo 1 - Utilizando normalize():
            // String Inicial
            // U+1E9B: CARACTERE LATINO - LETRA S COMPRIDA COM PONTO ACIMA
            // U+0323: COMBINANDO PONTO ABAIXO
            var str = '\u1E9B\u0323';
            // Formato de Normalização Canônico de Composição (NFC)
            // U+1E9B: CARACTERE LATINO - LETRA S COMPRIDA COM PONTO ACIMA 
            // U+0323: COMBINANDO PONTO ABAIXO
            str.normalize('NFC'); // '\u1E9B\u0323'
            str.normalize();      // igual à linha de cima
            // Formato de Normalização Canônico de Decomposição (NFD)
            // U+017F: CARACTERE LATINO - LETRA S COMPRIDA
            // U+0323: COMBINANDO PONTO ABAIXO
            // U+0307: COMBINANDO PONTO ACIMA
            str.normalize('NFD'); // '\u017F\u0323\u0307'
            // Formato de Normalização de Compatibilidade de Composição. (NFKC)
            // U+1E69: CARACTERE LATINO - LETRA S COMPRIDA COM PONTO ACIMA E ABAIXO
            str.normalize('NFKC'); // '\u1E69'
            // Formato de Normalização de Compatibilidade de Decomposição (NFKD)
            // U+0073: CARACTERE LATINO - LETRA S COMPRIDA
            // U+0323: COMBINANDO PONTO ABAIXO 
            // U+0307: COMBINANDO PONTO ACIMA
            str.normalize('NFKD'); // '\u0073\u0323\u0307'

    repeat -> O método repeat() constrói e retorna uma nova string com o determinado número de cópias concatenadas da string na qual ele foi chamado.
        Sintaxe:
            str.repeat(count);
            Parâmetros:
                count -> Um número inteiro entre 0 e +∞: [0, +∞), indicando o número de vezes que uma string deve ser repetida na string recém-criada que será retornada.
            Valor retornado -> Uma nova string contendo o número especificado de cópias de determinada string.
            Exceções:
                -RangeError: o número de repetições não pode ser negativo.
                -RangeError: o número de repetições deve ser menor que infinito e não deve estourar o tamanho máximo de uma string.

        Exemplo 1:
            'abc'.repeat(-1);   // RangeError
            'abc'.repeat(0);    // ''
            'abc'.repeat(1);    // 'abc'
            'abc'.repeat(2);    // 'abcabc'
            'abc'.repeat(3.5);  // 'abcabcabc' (o número será convertido para inteiro)
            'abc'.repeat(1/0);  // RangeError
            ({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
            // 'abcabc' (repeat() é um método genérico)

    trim -> O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto. É considerado espaço em branco (espaço, tabulação,
        espaço fixo/rígido, etc.) e todo sinal de fim de linha de texto (LF, CR, etc.).
        Sintaxe:
            str.trim()
        Exemplo 1 - Usando trim():
            O exemplo a seguir exibe a seqüência minúscula 'foo':
                //.trim() removendo whitespace dos dois lados
                var orig = '   foo  ';
                console.log(orig.trim()); // 'foo'
                // Outro exemplo de .trim() removendo whitespace de
                // apenas um lado.
                var orig = 'foo    ';
                console.log(orig.trim()); // 'foo'  

    -----Template strings com várias linha-----
    Template strings são strings literais que permitem expressões no seu conteúdo. Você pode usar os recursos de strings com multiplas linhas e interpolações de
    string com as template strings.
    Template strings são declaradas com o acento grave (``) ao invés de aspas simples ou aspas duplas. Essas strings podem conter place holders. Os place holders
    são indicados pelo cifrão e com chaves ( ${expressao} ).

    -----Várias linhas (Multi-lines)-----
    Qualquer caractere de nova linha ( '\n' ) inserido na string também faz parte das template string. Usando strings normais, você teria que usar a sintaxe
    a seguir para conseguir uma string de várias linhas
        console.log("linha de texto 1\n\
        linha de texto 2");
        // "linha de texto 1
        // linha de texto 2"
    Para obter o mesmo efeito com strings multi-lines, você pode agora escrever:
        console.log(`linha de texto 1
        linha de texto 2`);
        // "linha de texto 1
        // linha de texto 2"
    Para obter o mesmo efeito com strings multi-lines, você pode agora escrever:

    -----Expressões inseridas-----
    Para conseguir inserir expressões com strings normais, você teria que usar a seguinte sintaxe:
        var a = 5;
        var b = 10;
        console.log("Quinze é " + (a + b) + " e\nnão " + (2 * a + b) + ".");
        // "Quinze é 15 e
        // não 20."
    Agora, com template strings, você tem a capacidade de usar uma forma mais simples e legível para fazer essas substituições:
        var a = 5;
        var b = 10;
        console.log(`Quinze é ${a + b} e\nnão ${2 * a + b}.`);
        // "Quinze é 15 e 
        // não 20."
    Para mais informações, leia sobre Template strings na referência JavaScript.
*/
/*------------------------------------------------------*/
/*
    ----------Internacionalização----------
    O objeto Intl é o namespace para a API de Internacionalização do ECMAScript, que oferece comparação de strings sensíveis à linguagem, formatação de números,
    e formatação de datas e horas. Os construtores para os objetos Collator, NumberFormat, e DateTimeFormat são propriedades do objeto Intl.

    -----Formatação de data e hora-----
    O objeto DateTimeFormat é útil para a formatação de data e hora. O código a seguir formata uma data em inglês no formato que é utilizado nos Estados Unidos.
    (O resultado é diferente em outro fuso horário).
    var msPorDia = 24 * 60 * 60 * 1000; // número de milisegundos em um dia
    // July 17, 2014 00:00:00 UTC.
    var july172014 = new Date(msPorDia * (44 * 365 + 11 + 197));
    var opcoes = { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
    var americanDateTime = new Intl.DateTimeFormat("en-US", opcoes).format;
    console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT

    -----Formatação de números-----
    O objeto NumberFormat é útil para formatar números, por exemplo unidade monetária.
    var precoGasolina = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 3 });
    console.log(precoGasolina.format(5.259)); // $5.259
    var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", { style: "currency", currency: "CNY" }); 
    console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五

    -----Collation-----
    O objeto Collator é usado para comparar e ordenar strings.
    Por exemplo, existem atualmente duas ordens diferentes de classificação no Alemão: listaTelefônica e dicionário. A ordenação da listaTelefônica enfatiza o som,
    e é como se "ä", "ö", e assim por diante, fossem expandidos para "ae", "oe", e assim sucessivamente, para definir a ordem.
    var nomes = ["Hochberg", "Hönigswald", "Holzman"];
    var phonebookAlemao = new Intl.Collator("de-DE-u-co-phonebk");
    // como se ordenasse ["Hochberg", "Hoenigswald", "Holzman"]:
    console.log(names.sort(phonebookAlemao.compare).join(", "));
    // imprime "Hochberg, Hönigswald, Holzman"

    Algumas palavras do alemão são conjugadas com tremas extras, mas no dicionário essas palavras são ordenadas ignorando os tremas (exceto quando ordenando palavras
    que tem apenas o trema como diferença: schon antes de schön).
    var dicionarioAlemao = new Intl.Collator("de-DE-u-co-dict");
    // como se ordenasse ["Hochberg", "Honigswald", "Holzman"]:
    console.log(names.sort(dicionarioAlemao.compare).join(", "));
    // imprime "Hochberg, Holzman, Hönigswald"    

    Para mais informação sobre a API Intl, veja também Introducing the JavaScript Internationalization API (em inglês).
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/