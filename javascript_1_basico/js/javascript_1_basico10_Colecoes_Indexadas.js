/* ----------Coleções Indexadas---------- */
console.log('----------Coleções Indexadas----------');
/*
    ----------Objeto Array----------
    Um array é um conjunto de valores ordenados que você o referencia com um nome e um índice. Por exemplo,
    você pode ter um array chamado emp que contém nomes de funcionários indexados por seus números de funcionários.
    Então emp[1] poderia ser o funcionário número 1, emp[2] o funcionário número 2 e assim por diante.
    JavaScript não possui um tipo de dados array específico. No entanto, você pode usar  o objeto predefinido
    Array e seus métodos para trabalhar com arrays em suas aplicações. O objeto Array tem métodos para manipular arrays
    de várias maneiras como join, reverse e sort. Ele tem uma propriedade para determinar o tamanho do array e outras
    propriedades para usar com expressões regulares.

    -----Criando um array-----
    As declarações a seguir criam arrays equivalentes:

    var arr = new Array(elemento0, elemento1, ..., elementoN);
    var arr = Array(elemento0, elemento1, ..., elementoN);
    var arr = [elemento0, elemento1, ..., elementoN];
    elemento0, elemento1, ..., elementoN é uma lista de valores para os elementos do array. Quando esses valores são especificados, o array
    é inicializado com eles como elementos deste array. A propriedade do comprimento do array é definida pelo número de argumentos.

    A sintaxe dos colchetes é chamada de "array literal" ou "inicializador de array". É uma abreviação de outras formas de criação de array
    e é a forma preferida de criação. Veja  Array literal para detalhes.

    Para criar um array com tamanho diferente de zero mas sem nenhum item, qualquer esquema abaixo pode ser utilizado:

    var arr = new Array(comprimentoDoArray);
    var arr = Array(comprimentoDoArray);

    // Estes produzem exatamente o mesmo efeito
    var arr = [];
    arr.length = comprimentoDoArray;
    Nota : No código acima, comprimentoDoArray deve ser um Número. De outra maneira, um array com um único elemento (o valor passado) será criado.
    Chamar arr.length retornará comprimentoDoArray, mas o array na verdade, contem elementos vazios (undefined). Executar um loop for...in no array,
    não retornará nenhum dos elementos do array.

    Além de poderem ser definidos como uma nova variável, como mostrado acima, arrays também podem ser atribuídos como uma propriedade de um novo objeto,
    ou de um objeto existente:

    var obj = {};
    // ...
    obj.prop = [elemento0, elemento1, ..., elementoN];

    // OU
    var obj = {prop: [elemento0, elemento1, ...., elementoN]}
    Se você deseja inicializar um array com um único elemento, e este elemento é um Número, você precisa usar a sintáxe dos colchetes. Quando um único valor
    de Número é passado para o construtor do Array(), ou para uma função, ele é interpretado como um comprimentoDoArray, e não como um elemento único.
*/
    // var arr = [42];      // Cria um array com apenas um elemento:
    //                     // o número 42.

    // var arr = Array(42); // Cria um array sem elementos
    //                     // e arr.length é definido como 42; isso é
    //                     // equivalente a:
    // var arr = [];
    // arr.length = 42;
/*
    Chamar Array(N) resulta  em um RangeError, se N é um número não inteiro cuja porção fracionária não é zero. O exemplo a seguir ilustra esse comportamento.

    var arr = Array(9.3);  // RangeError: Invalid array length
    Se o seu código precisa criar arrays com elementos singulares de um tipo de dados arbitrário, é mais seguro usar arrays literais. Ou então, crie um
    array vazio antes de adicionar um elemento singular nele.
*/
    // var arrayDeNumeros = [1, 2, 3];
    // var arrayDeString = ['a', 'b', 'c'];
/*
    -----Povoando um array-----
    Você pode povoar (inserir elementos) a um array atribuindo valores aos seus elementos.
*/
    // var emp = [];
    // emp[0] = 'Casey Jones';
    // emp[1] = 'Phil Lesh';
    // emp[2] = 'August West';
/*
    Nota : se você fornece um valor não inteiro ao operador do array, como no código acima, a propriedade será criada no objeto representando o array,
    ao invés do elemento do array.
*/
    // var arr = [];
    // arr[3.4] = 'Oranges';
    // console.log(arr.length);                // 0
    // console.log(arr.hasOwnProperty(3.4));   // verdadeiro
/*
    Você também pode povoar o array quando o cria:
*/
    // var myArray = new Array('Olá', myVar, 3.14159);
    // var myArray = ['Manga', 'Maçã', 'Laranja']
/*
    -----Referenciando os elementos do arraySection-----
    Você referencia os elementos do array através do uso de elementos numéricos ordinais. Por exemplo, suponha que você definiu o seguinte array:
*/
    // var myArray = ['Vento', 'Chuva', 'Fogo'];
/*
    Você então se refere ao primeiro elemento do array como em myArray[0] e ao segundo elemento do array como em myArray[1]. O índice do elemento começa com zero.
    Nota : o operador do array (colchetes) também é usado para acessar as propriedades do array (arrays também são objetos em JavaScript). Por exemplo,
*/
    // var arr = ['um', 'dois', 'três'];
    // arr[2];         // três
    // arr['length'];  // 3
/*
    -----Compreendendo o comprimento-----
    Sobe o ponto de vista da implementação, arrays JavaScript armazenam na realidade elementos como propriedades de objetos padrões, usando o índice do array como o
    nome da propriedade. O comprimento da propriedade é especial: ele sempre retorna o índice do último mais um (no exemplo seguinte Dusty é indexado no 30,
    então cats.length retorna 30 + 1). Lembre-se, índices de arrays JavaScript são baseados no zero: eles começam no 0, não no 1. Isso significa que  o comprimento da
    propriedade será um a mais que o maior índice armazenado no array:
*/
    // var gatos = [];
    // gatos[30] = ['Dusty'];
    // console.log(gatos.length); // 31
/*
    Você também pode atribuir um valor à propriedade length. Ao escrever um valor menor que o número de itens armazenados,
    trunca o array: escrevendo zero limpa-o completamente:
    var gatos = ['Dusty', 'Misty', 'Twiggy'];
    console.log(gatos.length); // 3

    gatos.length = 2;
    console.log(gatos); // mostra "Dusty, Misty" - Twiggy foi removido

    gatos.length = 0;
    console.log(gatos); // nada é apresentado; o array gatos está vazio

    gatos.length = 3;
    console.log(gatos); // [undefined, undefined, undefined]

    -----Iteração em arrays-----
    Uma operação comum é a de iterar sobre os valores de um array, processando cada elemento de alguma maneira. A maneira mais simples para fazer isso é como segue:
*/
    // var cores = ['vermelho', 'verde', 'azul'];
    // for (var i = 0; i < cores.length; i++) {
    //     console.log(cores[i]);
    // }
/*
    Se você sabe que nenhum dos elemnetos no seu array é avaliado como false em um contexto booleano  — se o seu array consiste apenas de nodos do DOM,
    como exemplo, você pode usar um idioma mais eficiente:
    var divs = document.getElementsByTagName('div');
    for (var i = 0, div; div = divs[i]; i++) {
        // Processa div de alguma forma
    }

    Isso evita a sobrecarga da checagem do comprimento do array, e garante que a variável div seja reatribuida ao item atual cada vez
    que o loop for adicionado por conveniência.
    O método forEach() disponibiliza um outro jeito de iterar sobre/em um array:
*/
    // var cores = ['vermelho', 'verde', 'azul'];
    // cores.forEach(function(cor) {
    //     console.log(cor);
    // });
    // vermelho
    // verde
    // azul
/*
    Alternativamente, você pode encurtar o código para o parâmetro do forEach com Arrow Functions ES6.
*/
    // var cores = ['vermelho', 'verde', 'azul'];
    // cores.forEach(cor => console.log(cor)); 
    // vermelho
    // verde
    // azul
/*
    A função passada para o forEach é executada uma vez para cada item no array, com o item do array passado como o argumento para a função.
    Valores não atribuídos não são iterados no loop forEach.
    Note que os elementos de um array que foram omitidos quando o array foi definido, não são listados quando iterados pelo forEach,
    mas são listados quando undefined foi manualmente atribuído ao elemento:
*/
    // var array = ['primeiro', 'segundo', , 'quarto'];

    // array.forEach(function(elemento) {
    // console.log(elemento);
    // })
    // // primeiro
    // // segundo
    // // quarto

    // if (array[2] === undefined) {
    //     console.log('array[2] is undefined'); // verdadeiro
    // }

    // array = ['primeiro', 'segundo', undefined, 'quarto'];

    // array.forEach(function(elemento) {
    //     console.log(elemento);
    // });
    // primeiro
    // segundo
    // undefined
    // quarto
/*
    Como elementos JavaScript são salvos como propriedades de objetos padronizados, não é aconselhável iterar sobre arrays JavaScript usando loops for...in,
    porque elementos normais e todas as propriedades numeráveis serão listadas.

    -----Métodos dos arrays-----
    O objeto Array possui os seguintes métodos:
    concat() une dois arrays e retorna um novo array.
*/
    // var myArray = new Array('1', '2', '3');
    // myArray = myArray.concat('a', 'b', 'c'); 
    // myArray agora é ["1", "2", "3", "a", "b", "c"]
/*
    join(deliminator = ',') une todos os elementos de um array dentro de um string.
*/
    // var myArray = new Array('Vento', 'Chuva', 'Fogo');
    // var lista = myArray.join(' - '); // lista é "Vento - Chuva - Fogo"
/*
    push() adiciona um ou mais elementos no fim de um array e retorna o comprimento resultante do array.
*/
    // var myArray = new Array('1', '2');
    // myArray.push('3'); // myArray é agora ["1", "2", "3"]
/*
    pop() remove o último elemento de um array e retorna esse elemento.
*/
    // var myArray = new Array('1', '2', '3');
    // var ultimo = myArray.pop(); 
    // myArray é agora ["1", "2"], ultimo = "3"
/*
    shift() remove o primeiro elemento de um array e retorna esse elemento.
*/
    // var myArray = new Array('1', '2', '3');
    // var primeiro = myArray.shift(); 
    // myArray agora é ["2", "3"], primeiro é "1"
/*
    unshift() adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
*/
    // var myArray = new Array('1', '2', '3');
    // myArray.unshift('4', '5'); 
    // myArray torna-se ["4", "5", "1", "2", "3"]
/*
    slice(start_index, upto_index) extrai uma seção de um array e retorna um novo array.
*/
    // var myArray = new Array('a', 'b', 'c', 'd', 'e');
    // myArray = myArray.slice(1, 4); // inicia no índice 1 e extrai todos os elementos
                                // até o índice 3, retornado [ "b", "c", "d"]
/*
    splice(index, count_to_remove, addElement1, addElement2, ...) remove elementos de um array e (opcionalmente) o substitui, e retorna os itens que
    foram removidos do array.
*/
    // var myArray = new Array('1', '2', '3', '4', '5');
    // myArray.splice(1, 3, 'a', 'b', 'c', 'd'); 
    // myArray é agora ["1", "a", "b", "c", "d", "5"]
    // Este código iniciou no índice um (ou onde o "2" estava),
    // removeu 3 elementos a partir dali, e então inseriu todos os elementos
    // consecutivos em seus lugares.
/*
    reverse() transpõe (inverte) os elementos de um array, in situ: o primeiro elemento do array se torna o último e o último torna-se o primeiro,
    e retorna uma referência para o array.
*/
    // var myArray = new Array('1', '2', '3');
    // myArray.reverse(); 
    // transpõe o array de modo que myArray = [ "3", "2", "1" ]
/*
    sort() ordena os elementos de um array in situ, e retorna uma referência para o array.
*/
    // var myArray = new Array('Neve', 'Chuva', 'Fogo');
    // myArray.sort(); 
    // ordena o array de modo que myArray = [ "Chuva", "Fogo", "Neve" ]
/*
    sort() também pode 'pegar' uma função callback para determinar como os elementos do array são comparados.
    O método sort, assim como outros métodos abaixo que tomam um callback são conhecidos como métodos iterativos, porque eles iteram sobre o array de alguma forma.
    Cada um pega um segundo argumento opcional chamado thisObject. Se fornecido, thisObject se torna o valor da palavra chave this dentro do corpo da função callback.
    Se não fornecido, como em outros casos onde uma função é invocada fora do contexto explícito de um objeto, this fará referência ao objeto global (window).
    A função callback é na verdade chamada com três argumentos. O primeiro é o valor do item corrente, o segundo é o índice do array e o terceiro é uma referência
    ao próprio array. Funções javaScript ignoram qualquer argumento que não são nomeados na lista de parâmetros, portanto é seguro prover uma função callback que
    toma somente um único argumento, como a função alert.
    A função abaixo compara dois valores e retorna um dos tres valores: -1, 0 ou 1.
    Por exemplo, o seguinte trecho de código vai ordenar pela última letra da string:
*/
    // var sortFn = function(a, b){
    //   if (a[a.length - 1] < b[b.length - 1]) return -1;
    //   if (a[a.length - 1] > b[b.length - 1]) return 1;
    //   if (a[a.length - 1] == b[b.length - 1]) return 0;
    // }
    // myArray.sort(sortFn); 
    // ordena o array de modo que myArray = ["Chuva","Neve","Fogo"]
/*
    se a for menor que b pelo sistema de ordenação, retorna -1 (ou qualquer número negativo)
    se a for maior que b pelo sistema de ordenação, retorna 1 (ou qualquer número positivo)
    se a e b forem considerados equivalentes, returnará 0.
    indexOf(searchElement[, fromIndex]) busca searchElement no array e retorna o índice da primeira ocorrência.
*/
    // var a = ['a', 'b', 'a', 'b', 'a'];
    // console.log(a.indexOf('b'));    // mostra 1
    // Agora tente novamente, iniciando após o último resultado de busca
    // console.log(a.indexOf('b', 2)); // mostra 3
    // console.log(a.indexOf('z'));    // mostra -1, porque 'z' não foi encontrado
/*
    lastIndexOf(searchElement[, fromIndex]) funciona como indexOf, mas começa no fim e busca de trás para a frente.
*/
    // var a = ['a', 'b', 'c', 'd', 'a', 'b'];
    // console.log(a.lastIndexOf('b'));    // mostra 5
    // Agora tente novamente, iniciando antes do último resultado de busca
    // console.log(a.lastIndexOf('b', 4)); // mostra 1
    // console.log(a.lastIndexOf('z'));    // mostra -1
/*
    forEach(callback[, thisObject]) executa um callback em cada item do array e retorna undefined.
*/
    // var a = ['a', 'b', 'c'];
    // a.forEach(function(element) { console.log(elemento); });
    // mostra cada item por vez
/*
    map(callback[, thisObject]) retorna um novo array do valor retornado da execução do callback em cada item do array.
*/
    // var a1 = ['a', 'b', 'c'];
    // var a2 = a1.map(function(item) { return item.toUpperCase(); });
    // console.log(a2); // logs ['A', 'B', 'C']
/*
    filter(callback[, thisObject]) retorna um novo array contendo os items verdadeiros ao executar o callback.
*/
    // var a1 = ['a', 10, 'b', 20, 'c', 30];
    // var a2 = a1.filter(function(item) { return typeof item === 'number'; });
    // console.log(a2); // mostra [10, 20, 30]
/*
    every(callback[, thisObject]) retorna verdadeiro se o callback retornar verdadeiro para cada item no array.
*/
    // function isNumber(valor) {
    //     return typeof valor === 'number';
    // }
    // var a1 = [1, 2, 3];
    // console.log(a1.every(isNumber)); // mostra true
    // var a2 = [1, '2', 3];
    // console.log(a2.every(isNumber)); // mostra false
/*
    some(callback[, thisObject]) retorna verdadeiro se o callback retornar verdadeiro para pelo menos um item no array.
*/
    // function isNumber(valor) {
    //     return typeof valor === 'number';
    // }
    // var a1 = [1, 2, 3];
    // console.log(a1.some(isNumber)); // mostra true
    // var a2 = [1, '2', 3];
    // console.log(a2.some(isNumber)); // mostra true
    // var a3 = ['1', '2', '3'];
    // console.log(a3.some(isNumber)); // mostra false
/*
    reduce(callback[, initialValue]) aplica callback(firstValue, secondValue) para reduzir a lista de itens para um único valor e retorna este valor.
*/
    // var a = [10, 20, 30];
    // var total = a.reduce(function(primeiro, segundo) { return primeiro + segundo; }, 0);
    // console.log(total) // mostra 60
/*
    reduceRight(callback[, initalvalue]) funciona como reduce(), mas inicia com o último elemento.
    reduce e reduceRight são os métodos iterativos menos óbvios dos arrays. Eles devem ser usados para algorítmos que combinam dois valores de maneira recursiva
    com a finalidade de reduzir uma sequência para um único valor.

    -----Arrays multidimensionais-----
    Arrays podem ser aninhados, significando que um array pode conter outro array como seu elemento. Usando essa característica dos arrays JavaScript,
    arrays multidimensionais pode ser criados.
    O código a seguir cria dois arrays multidimensionais:
*/
// var a = new Array(4);
// for (i = 0; i < 4; i++) {
//     a[i] = new Array(4);
//     for (j = 0; j < 4; j++) {
//         a[i][j] = '[' + i + ',' + j + ']';
//     }
// }
/*
    Esse exemplo cria um array com as seguintes linhas:

    Linha 0: [0,0] [0,1] [0,2] [0,3]
    Linha 1: [1,0] [1,1] [1,2] [1,3]
    Linha 2: [2,0] [2,1] [2,2] [2,3]
    Linha 3: [3,0] [3,1] [3,2] [3,3]

    -----Arrays e expressões regulares-----
    Quando um array é o resultado de uma equivalência entre uma expressão regular e um string, o array retorna propriedades e elementos que disponibilizam
    a informação sobre a correspondência.
    Um array é o valor retornado de RegExp.exec(), String.match(), e String.split(). Para informações sobre o uso de arrays com expressões regulares,
    veja Expressões Regulares.

    -----Trabalhando com objetos array-like-----
    Alguns objetos JavaScript, como a NodeList retornada pelo document.getElementsByTagName() ou o objeto acessível dentro do arguments de uma função,
    se parecem e se comportam superficialmente como arrays, mas não compartilham de todos os seus métodos. O objeto arguments fornece um atributo length
    mas não implementa o método forEach(), por exemplo.
    Métodos Array prototype podem ser chamados contra outros objetos array-like. Por exemplo:
*/
    // function printArguments() {
    //     Array.prototype.forEach.call(arguments, function(item) {
    //         console.log(item);
    //     });
    // }
/*
    Métodos Array prototype também podem ser usados em strings, desde que eles forneçam acesso sequencial a seus caracteres de maneira similar às arrays:
*/
    // Array.prototype.forEach.call('uma string', function(chr) {
    //     console.log(chr);
    // });
/*------------------------------------------------------*/
/*
    ----------Arrays TipadosSection----------
    Arrays tipados no JavaScript são objetos array-like e provêm um mecanismo para acessar dados binários crus. Como você já sabe, objetos Array crescem e encolhem
    dinamicamente e podem ter um valor JavaScript. O motor do JavaScript executa otimizações para que os arrays sejam rápidos. Contudo, à medida que as aplicações
    web se tornam cada vez mais poderosas,
    com a adição de funcionalidades como manipulação de áudio e vídeo, acesso a dados crus usando WebSockets, etc., ficou claro que existem momentos em que seria útil
    para o código JavaScript ser capaz de rapida e facilmente manipular dados binários crus em arrays tipados.

    -----Buffers e views: arquitetura do array tipadoSection-----
    Para alcançar máxima flexibilidade e eficiência, as views de array tipado do JavaScript dividem a implementação em buffers e views.
    Um buffer (implementado pelo objeto ArrayBuffer) é um objeto que representa um monte de dados; não possui nenhum formato específico e não oferece nenhum mecanismo
    para acessar seu conteúdo. Para acessar a memória contida em um buffer, você precisa usar uma view. Uma view provê um contexto — ou seja, um tipo de dado, um offset inicial
    e número de elementos — que transforma o dado em um array tipado real.

    -----ArrayBufferSection-----
    O ArrayBuffer é um tipo de dado usado para representar um buffer de dados binários de tamanho fixo genérico. Você não pode manipular diretamente o conteúdo de um ArrayBuffer;
    ao invés disso, você deve criar uma view de array tipado ou uma DataView que represente o buffer em um formato específico, e use esta view para ler e modificar o conteúdo do buffer.

    -----Views de arrays tipadosSection-----
    Views de arrays tipados possuem nomes autodescritivos e provêm views para todos os tipos numéricos usuais como Int8, Uint32, Float64 e assim por diante. Existe uma view de array tipado especial,
    o Uint8ClampedArray. Ela fixa os valores entre 0 e 255. Isto é útil para Canvas data processing, por exemplo.

    Type	                Value Range	                    Size in bytes	        Description	                                                Web IDL type	                    Equivalent C type
    Int8Array	            -128 to 127	                    1	                    8-bit two's complementsigned integer	                    byte	                            int8_t
    Uint8Array	            0 to 255	                    1	                    8-bit unsigned integer	                                    octet	                            uint8_t
    Uint8ClampedArray	    0 to 255	                    1	                    8-bit unsigned integer (clamped)	                        octet	                            uint8_t
    Int16Array	            -32768 to 32767	                2	                    16-bit two's complement signed integer	                    short	                            int16_t
    Uint16Array	            0 to 65535	                    2	                    16-bit unsigned integer	                                    unsigned short	                    uint16_t
    Int32Array	            -2147483648 to 2147483647	    4	                    32-bit two's complement signed integer	                    long	                            int32_t
    Uint32Array	            0 to 4294967295	                4	                    32-bit unsigned integer	                                    unsigned long	                    uint32_t
    Float32Array	        1.2x10-38 to 3.4x1038	        4	                    32-bit IEEE floating point number
                                                                                    ( 7 significant digits e.g. 1.1234567)	                    unrestricted float	                float
    Float64Array	        5.0x10-324 to 1.8x10308	        8	                    64-bit IEEE floating point number
                                                                                    (16 significant digits e.g. 1.123...15)	                    unrestricted double	                double

    Para mais informações, veja Arrays tipados no JavaScript e documentos de referência para os diferentes objetos TypedArray.
*/
/*------------------------------------------------------*/
    // let x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // for(let k in x) {
    //     console.log(x[k]);
    // }
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/