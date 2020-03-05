/* ----------Números e datas---------- */
console.log('----------Expressões e operadores----------');
/* ----------Números---------- */
/*
    Em Javascript, todos os números são implementados em double-precision 64-bit binary format IEEE 754 (Por exemplo, um número entre -(253 -1) e 253 -1).
    Não havendo especificação de tipo Integer. Além de ser capaz de representar números de ponto flutuante, o tipo de número tem três valores simbólicos:
    +Infinity, -Infinity, and NaN (not-a-number).  Veja também Estruturas e Tipos de Dados em Javascript em contexto com outros tipos primitivos em JavaScript.
    Você pode usar quatro tipos de números literais: decimal, binário, octal, e hexadecimal.
    
    -----Números Decimais-----
    1234567890
    42
    // Cuidado quando usar zeros à esquerda:
    0888 // 888 interpretado como decimal
    0777 // interpretado como octal  em modo no-strict (511 em decimal)

    Note que literais decimais podem começar com zero (0)  seguido por outro digito decimal, porém se o próximo dígito depois do primeiro zero for menor do que 8,
    o número será analisado como um número octal.
*/
var j_1 = 1234567890;
var j_2 = 42;
var j_3 = 0888;
var j_4 = 0777;
/*
    -----Números Binários-----
    A sintaxe para números Binários, usa um zero à esquerda seguido de uma letra minúscula ou maiúscula "B" (0b or 0B). Se os dígitos depois de 0b não forem 0 ou 1,
    a seguinte exceção SyntaxError é lançada: "Missing binary digits after 0b".
*/
// var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
// var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
// var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
/*
    -----Números Binários-----
    A sintaxe dos números octais usa um zero na frente. Se os dígitos depois do 0 estiverem fora do alcance 0 a 7, o número será interpretado como um número decimal.
*/
// var n = 0755; // 493
// var m = 0644; // 420
/*
    Modo estrito no ECMAScript 5 proíbe a sintaxe octal. A sintaxe Octal não é parte do ECMAScript 5, mas é suportada por todos os navegadores prefixando o
    número octal com zero: 0644 === 420 e "\045" === "%". Em ECMAScript 6 números Octais são suportados prefixando o número com "0o" isto é.
*/
// var a = 0o10; // ES6: Octal
/*
    -----Numeros hexadecimais-----
    A sintaxe numérica Hexadecimal usa um 0 na frente seguido por uma letra "X" maiúscula ou minúscula (0x ou 0X). Se os dígidos depois do 0x estiverem
    fora do alcance (0123456789ABCDF), o seguinte erro de sintaxe (SyntaxError) ocorrerá: "Identifier starts immediately after numeric literal" (O identificador
        começa imediatamente depois do literal numérico).
    0xFFFFFFFFFFFFFFFFF // 295147905179352830000
    0x123456789ABCDEF   // 81985529216486900
    0XA                 // 10
    
    -----Exponenciação-----
    1E3   // 1000
    2e6   // 2000000
    0.1e2 // 10
*/
/*------------------------------------------------------*/
/*
    ----------Objeto Number----------
    Um objeto built-in Number tem propriedades para constantes numéricas, tais como valor máximo, não número e infinito. Você não pode alterar os valores
    dessas propriedades e elas são usadas assim:
*/
// var maiorNum = Number.MAX_VALUE; //Valor máximo
// var menorNum = Number.MIN_VALUE; //Valor mínimo
// var infiniteNum = Number.POSITIVE_INFINITY; //Infinito positivo
// var negInfiniteNum = Number.NEGATIVE_INFINITY; //Infinito negativo
// var notANum = Number.NaN; //Não é numeral
/*
    Você sempre se refere a uma propriedade do objeto predefinido Number como mostrado acima, e não como uma propriedade de um objeto Number que você mesmo criou.
    A tabela à seguir sumariza as propriedades do objeto Number.

    Propriedades de Number
    Propriedade	                    Descrição
    Number.MAX_VALUE	            O maior número representável.
    Number.MIN_VALUE	            O menor número representável.
    Number.NaN	                    Valor "not a number" especial
    Number.NEGATIVE_INFINITY	    Valor especial infinito negativo; retornado em overflow
    Number.POSITIVE_INFINITY	    Valor especial infinito positivo; retornado em overflow
    Number.EPSILON	                Diferença entre um e o menor valor maior do que um que pode ser representado como um Number.
    Number.MIN_SAFE_INTEGER	        Mínimo safe integer em JavaScript.
    Number.MAX_SAFE_INTEGER	        Máximo safe integer em JavaScript.
    
    Métodos de Number
    Método	                        Descrição
    Number.parseFloat()	            Analisa um argumento string e retorna um número float.
                                    O mesmo que a função global parseFloat().
    Number.parseInt()	            Analisa um argumento string e retorna um inteiro da raiz ou base especificada.
                                    O mesmo que a função globalparseInt().
    Number.isFinite()	            Determina se o valor passado é um número finito.
    Number.isInteger()	            Determina se o valor passado é um inteiro.
    Number.isNaN()	                Determina se o valor passado é NaN. A versão mais robusta da original isNaN().
    Number.isSafeInteger()	        Determina se o valor passado é um safe integer.

    O protótipo Number provê métodos para resgatar informações de objetos Number em vários formatos. A tabela a seguir sumariza os métodos de Number.prototype.

    Métodos de Number.prototype
    Método	                        Descrição
    toExponential()	                Retorna uma string representando o número em uma notação exponencial.
    toFixed()	                    Retorna uma string representando o número em notação com ponto-fíxo.
    toPrecision()	                Retorna uma string representando o número em uma precisão especificada na notação de ponto-fíxo.
*/
/*------------------------------------------------------*/
/*
    ----------Objeto Math----------
    O objeto Math tem propriedades e métodos para constantes matemáticas e funções. Por exemplo, o PI do objeto Math tem o valor de pi (3,141...), que você usaria em
    uma aplicação como
        Math.PI
    Similarmente, funções matemáticas padrão são métodos do Math. Isto inclui funções trigonométricas, logarítmicas, exponenciais, e outras funções. Por exemplo,
    se você quiser usar a função trigonométrica seno, basta escrever
        Math.sin(1.56)

    Note que todos os métodos trigonométricos pegam argumentos em radianos.

    A tabela a seguir sumariza os métodos do objeto Math.

    Métodos de Math
    Método	                                                    Descrição
    abs()	                                                    Valor absoluto
    sin(), cos(), tan()     	                                Funções trigonométricas padrão; Argumentos em radianos
    asin(), acos(), atan(), atan2()	                            Funções trigonométricas inversas; retorna valores em radianos
    sinh(), cosh(), tanh()	                                    Funções trigonométricas hiperbólicas; retorna valores em radianos.
    asinh(), acosh(), atanh()	                                Funções trigonométricas hiperbólicas inversas; retorna valores em radianos.
    pow(), exp(), expm1(), log10(), log1p(), log2()             Funções exponenciais e logarítmicas.
    floor(), ceil()	                                            Retorna o maior/menor inteiro que é menor/maior inteiro que ou igual ao argumento.
    min(), max()	                                            Retorna menor ou maior (respectivamente) de uma lista separada por vírgula de argumentos numéricos
    random()	                                                Retorna um número aleatório entre 0 e 1.
    round(), fround(), trunc(),	                                Funções de arredondamento e truncamento.
    sqrt(), cbrt(), hypot()	                                    Raiz quadrada, raiz cúbica, raiz quadrada da soma de argumentos ao quadrado.
    sign()	                                                    O sinal de um número, indicando se o número é positivo, negativo ou zero.
    clz32(), imul()	                                            Número de zeros à esquerda na representação binária de 32-bits.
                                                                The result of the C-like 32-bit multiplication of the two arguments.

    Diferentemente de muitos outros objetos, você nunca cria um objeto Math por conta própria. Você sempre deve utilizar o objeto Math nativo.
*/
/*------------------------------------------------------*/
/*
    ----------Objeto Date----------
    JavaScript não possui dados do tipo data. No entanto, você pode usar o objeto Date e seus métodos para trabalhar com datas e horas nas suas aplicações.
    O objeto Date tem um grande número de métodos para setar, recuperar e manipular datas. Ele não tem nenhuma propriedade.
    JavaScript manipula datas de maneira semelhante ao Java. As duas linguagens tem muitos dos mesmos métodos para lidar com datas e ambas armazenam datas
    como números em milisegundos, desde 1 de janeiro de 1970, às 00:00:00 ( January 1, 1970, 00:00:00).
    A abrangência do objeto Date é de -100,000,000 dias até 100,000,000 dias relativos a 01 de janeiro de 1970 UTC.
    Para criar um objeto Date:
        var dateObjectName = new Date([parameters]);
    onde dateObjectName é o nome do objeto Date que está sendo criado; ele pode ser um novo objeto ou uma propriedade de um objeto existente.
    A chamada de Date sem a palavra reservada new, simplesmente converte a data para uma representação dela como string.
    Os parâmetros do código acima podem ser qualquer um a seguir:
        -Nada: cria a data e hora de hoje. Por exemplo, today = new Date();.
        -Uma string representando uma data da seguinte forma: "Mês dia, ano, horas:minutos:segundos". Por exemplo, Xmas95 = new Date("25 de dezembro de 1995, 13:30:00").
        Se você omitir as horas, minutos ou segundos, o valor será setado para zero.
        -Um conjunto de valores inteiros para ano, mês e dia. Por exemplo, var Xmas95 = new Date(1995, 11, 25).
        -Um conjunto de valores inteiros par ano, mês, dia, hora, minuto e segundos. Por exemplo, var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);.

    -----Métodos do objeto Date-----
    Os métodos do objeto Date para manipular data e hora pertencem às seguintes categorias:
        -Métodos "set", para setar valores de data e hora em objetos Date.
        -Métodos "get", para recuperar valores de data e hora de objetos Date.
        -Métodos "to", para retornar valores de string de objetos Date.
        -Métodos parse e UTC, para parsear string de Data.

    Com os métods "get" e "set", você pode recuperar e setar segundos, minutos, horas, dia e mês, dia da semana, meses e anos, separadamente. Existe um método getDay
    que retorna o dia da semana, mas não existe um método setDay correspondente, porque o dia da semana é setado automaticamente. Estes métodos utilizam números inteiros
    para representar estes valores da seguinte maneira:
        -Segundos e minutos: de 0 a 59
        -Horas: de 0 a 23
        -Dia: 0 (Domingo) a 6 (Sábado)
        -Data: 1 a 31 (dia do mês)
        -Meses: 0 (Janeiro) a 11 (Dezembro)
        -Ano: anos desde 1900

    Por exemplo, suponha que você queira definir a seguinite data:
        var Xmas95 = new Date("December 25, 1995");
    Então Xmas95.getMonth() retorna 11 e Xmas95.getFullYear() retorna 1995.
    Os métodos getTime e setTime são úteis para comparar datas. O método getTime retorna o número dos milisegundos desde 1 de janeiro de 1970, às 00:00:00 para um
    objeto Date.
    Por exemplo, o código a seguir mostra os números dos dias que ainda faltam do ano vigente:
*/
// var hoje = new Date();
// var fimAno = new Date(1995, 11, 31, 23, 59, 59, 999); // Seta dia e mês
// fimAno.setFullYear(hoje.getFullYear()); // Seta o ano para esse ano
// var msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
// var diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia;
// var diasRestantes = Math.round(diasRestantes); //retorna os dias restantes no ano
/*
    Este exemplo cria um objeto Date chamado hoje que contém a data de hoje. Ele, então, cria o objeto Date chamado fimAno e seta o ano para o ano vigente.
    Então, usando o número de milisegundos por dia, ele computa o número de dias entre hoje e fimAno, usando getTime e arredondando os números de dias.
    O método parse é útil para associar valores de strings de data para objetos Date existentes. Por exemplo, o código a seguir usa parse e setTime para
    assocair um valor de data ao objeto IPOdate:
*/
// var IPOdate = new Date();
// IPOdate.setTime(Date.parse("Aug 9, 1995"));
/*
    No exemplo a seguir, a função  JSClock() retorna o tempo no formato de um relógio digital.
*/
// function JSClock() {
//     var tempo = new Date();
//     var hora = tempo.getHours();
//     var minuto = tempo.getMinutes();
//     var segundo = tempo.getSeconds();
//     var temp = "" + ((hora > 12) ? hora - 12 : hora);
//     if (hora == 0)
//         temp = "12";
//     temp += ((minuto < 10) ? ":0" : ":") + minuto;
//     temp += ((segundo < 10) ? ":0" : ":") + segundo;
//     temp += (hora >= 12) ? " P.M." : " A.M.";
//     return temp;
// }
/*
    A função JSClock primeiro cria um objeto new Date chamado tempo; já que nenhum argumento é passado, tempo é criado com data e hora atuais.
    Ela então chama os métodos getHours, getMinutes e getSeconds e associa o valor à hora, minuto e segundo atuais à hora, minuto e segundo.
    As próximas quatro declarações constroem uma string baseada em time. A primeira declaração cria uma variável temp, associando um valor utilizando
    uma expressão condicional; se hora é maior que 12, (hora - 12), senão simplesmente hora, a não ser que hora seja 0 que, nesse caso, será 12.
    A próxima declaração anexa um valor minuto a temp. Se o valor de minuto for menos que 10, a expressão condicional acrescenta uma string com um 0 na frente;
    senão ela acrescenta uma string com dois pontos. Então a declaração anexa um valor segundo a temp do mesmo jeito.
    Finalmente, a expressão condicional anexa "P.M." a temp se hora for 12 ou maior; senão ela anexa "A.M." a temp.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/