/* ----------Estrutura de dados do Javascript---------- */
console.log('----------Estrutura de dados do Javascript----------');
/*
    ----------Tipagem Dinâmica----------
    JavaScript é uma linguagem de tipagem dinâmica . Isso significa que você não necessita declarar o tipo de uma variável antes de sua atribuição.
    O tipo será automaticamente determinado quando o programa for processado. Isso também significa que você pode reatribuir uma mesma variável com um tipo diferente:
    var foo = 42;    // foo é um Number agora
    var foo = "bar"; // foo é um String agora
    var foo = true;  // foo é um Boolean agora
*/
/*------------------------------------------------------*/
/*
    Tipos de DadosSection
    A última versão ECMAScript define sete tipos de dados:
        -Seis tipos de dados são:  primitives:
            -Boolean
            -Null
            -Undefined
            -Number
            -String
            -Symbol (novo no ECMAScript 6)
        -e Object
*/
/*------------------------------------------------------*/
/*
    ----------Valores Primitivos----------
    Todos os tipos, com a exceção de objetos, definem valores imutáveis (valores que são incapazes de mudar). Por exemplo e diferentemente da linguagem C,
    Strings são imutáveis. Nós nos referimos a valores desse tipo como "valores primitivos".

    -----Tipo "Boolean"-----
    Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false).

    -----Tipo "Null"-----
    O tipo Null tem exatamente um valor: null(nulo). Veja null e Null para mais detalhes.

    -----Tipo "Undefined"-----
    Uma variável que não foi atribuída a um valor tem o valor undefined(indefinido). Veja undefined e Undefined para mais detalhes.

    -----Tipo "Number"-----
    De acordo com os padrões ECMAScript, existe somente um tipo numérico. O double-precision 64-bit binary format IEEE 754 value (número entre -(253 -1) e 253 -1).
    Não existe um tipo específico para inteiros. Além de poderem representar números de ponto-flutuante, o tipo number possui três valores simbólicos: +Infinity,
    -Infinity, e NaN (não numérico).
    Para verificar o maior ou o menor valor disponível dentro de +/-Infinity, você pode usar as constantes Number.MAX_VALUE ou Number.MIN_VALUE, e a partir do ECMAScript 6,
    você também consegue verificar se um número está dentro da região de um ponto flututante do tipo double-precision, usando Number.isSafeInteger(), como também
    Number.MAX_SAFE_INTEGER, e Number.MIN_SAFE_INTEGER. Fora dessa região, números inteiros em JavaScript não são mais precisos e serão uma aproximação de um número
    de ponto flutuante do tipo double-precision.
    O tipo number possui apenas um inteiro que tem duas representações: 0 é representado como -0 e +0. ("0" é um pseudônimo para +0). Na prática, isso não gera grandes
    impactos. Por exemplo +0 === -0  resulta em true. Entretanto, você pode notar a diferença quando realiza uma divisão por 0:
        > 42 / +0
        Infinity
        > 42 / -0
        -Infinity
    Apesar de um número frequentemente representar somente seu valor, JavaScript fornece alguns operadores binários. Estes podem ser usados para representar muitos
    valores booleanos dentro de um único número usando bit masking. Entretanto, isto é usualmente considerado uma má prática, desde que JavaScript oferece outros
    meios para representar uma configuração de booleanos ( como uma array de booleanos ou um objeto com valores booleanos assinalados em propriedades).
    Bit masking também tende a fazer o código mais difícil de ler, entender e de realizar manutenção. Isto pode ser necessário em um ambiente bastante limitado,
    como quando tentamos lidar com limitação de armazenamento ou armazenamento local ou em casos extremos quando cada bit na rede conta. Esta técnica somente
    deveria ser considerada quando é a última medida possível para otimizar o tamanho.

    -----Tipo "String"-----

    O tipo String em JavaScript é usado para representar dados textuais. Isto é um conjunto de "elementos" de valores de 16-bits unsigned integer. Cada elemento
    na string ocupa uma posição na string. O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. O comprimento de uma string é o número
    de elementos nela.
    Diferente de linguagens como C, strings em JavaScript são imutáveis. Isto significa que: uma vez criada a string, não é possível modificá-la. Entretanto, ainda
    é possível criar outra string baseada em um operador na string original. Por exemplo:
        -Uma substring da original a partir de letras individuais ou usando String.substr().
        -Uma concatenação de duas strings usando o operador (+) ou String.concat().

    -Cuidado com "stringly-typing"(digitação) no seu código-
    Pode ser tentador utilizar strings para representar dados complexos. Fazer isso traz os seguintes benefícios de curto prazo: 
        -É facil construir strings complexas com concatenação.
        -Strings são fáceis para debug (o que você vê escrito é o que está na string).
        -Strings são o denominador comum entre várias APIs (input fields, local storage values, XMLHttpRequest responses when using responseText, etc.) e pode ser
        tentador trabalhar apenas com strings.
    Com convenções, é possível representar qualquer estrutura de dados com uma string. Ainda assim, isso não faz a prática ser uma boa ideia. Por exemplo, pode-se
    emular uma lista utilizando separadores (um JavaScript array seria mais adequado). Infelizmente, se o separador faz parte de um dos elementos da "lista", então,
    a lista é quebrada. Um caractere de escape pode ser utilizado,etc. Tudo isso requer convenções e cria uma carga de manuntenção desnecessária.
    Use strings para dados textuais. Quando representar dados complexos, analise as strings e utilize abstrações apropriadas.

    -----Symbol type-----
    Symbols são novos no JavaScript ECMAScript edição 6. Um Symbol é um valor primitivo único e imutável e pode ser usado como chave de uma propriedade de
    Object (ver abaixo). em algumas linguagens de programação, Symbols são chamados de atoms(átomos). Você também pode compará-los à enumerações nomeadas(enum) em C.
    Para mais detalhes veja Symbol e o Symbol object wrapper em JavaScript.
*/
/*------------------------------------------------------*/
/*
    ----------Objetos----------
    Na ciência da computação, um objeto é um valor na memória que pode ser possivelmente referenciado por um identifier.

    -----Propriedades-----
    No JavaScript, obejtos podem ser vistos como uma coleção de propriedades. Com o object literal syntax, um comjunto limitado de propriedades podem ser inicializados;
    a partir daí propriedades e podem ser adicionadas e removidas. Estas propriedades podem assumir valores de qualquer tipo, incluindo outros objetos, o que permite
    construir estruturas de dados mais complexas. Propriedades são identificadas usando valores chave. Um valor chave pode ser uma String ou um valor Symbol.
    Existem dois tipos de propriedades de objetos que contém certos atributos: a propriedade de dados e a propriedade de acesso.

    -Propriedade de Dados-
    Associa uma chave com um valor e tem os seguintes atributos:
    Attributes of a data property
    Atributo 	        Tipo 	                        Descrição 	                                                        Valor default
    [[Value]] 	        Qualquer tipo JavaScript 	    Valor retornado por uma chamada get da propriedade. 	            Indefinido
    [[Writable]] 	    Booleano 	                    Se falso, o[[Value]] da propriedade não pode ser alterado. 	        falso
    [[Enumerable]] 	    Booleano 	                    Se true, a propriedade será enumerda em for...in loops. 	        falso
    [[Configurable]] 	Booleano 	                    Se falso, a propriedade não pode ser deletada
                                                        e atributos além de [[Value]] e [[Writable]]
                                                        não podem ser alterados. 	                                        falso

    -Propriedade de acesso-
    Associa uma chave com uma ou duas funções de acesso (get e set) para retornar ou armazenar um valor e tem os seguintes atributos:
    Atributos de uma propriedade de acesso
    Atributo 	        Tipo 	                        Descrição 	                                                        Valor default
    [[Get]] 	        Função objeto ou indefinido 	A função é chamada com uma lista de argumentos vazia
                                                        e retorna o valor da propriedade sempre que é realizado
                                                        um acesso get ao valor. Veja também: get. 	                        Indefinido
    [[Set]] 	        Função objeto ou indefinido 	A função é chamada com um argumento o valor designado
                                                        e é executada sempre que houver uma tentativa de alteração
                                                        de uma propriedade específica. Veja também: set. 	                Indefinido
    [[Enumerable]] 	    Booleano 	                    Se true, a propriedade será enumerdada em for...in loops. 	        falso
    [[Configurable]] 	Boolean 	                    Se falso, a propriedade não pode ser deletada
                                                        e não pode ser alterada para uma propriedade de dados. 	            falso

    -----Funções e objetos "normais"-----
    Um objeto do JavaScript é um mapeamento entre chaves e valores. Chaves são Strings e valores podem ser de qualquer tipo. Isso faz com que objetos sejam perfeitos
    para hashmaps.
    Funções são objetos comuns com a capacidade adicional de sereme chamadas.

    -----Datas-----
    Quando reprensentando datas, a melhor escolha é utilizar o Date utility já construído internamente no JavaScript.

    -----Coleções indexadas: Arrays e Arrays tipados-----
    Arrays são objetos comuns nos quais existe uma relação particular entre propriedades de chaveamento inteiro e a propriedade 'length'. Além disso, arrays herdam
    de Array.prototype que nos dá vários metodos úteis para manipulação de arrays. Por exemplo, indexOf (procura um valor no array) ou push (adiciona um valor no array),
    etc. Isso faz com que os Arrays sejam candidatos perfeitos para representação de listas e conjuntos.
    Typed Arrays (arrays tipados) são novos no JavaScript com ECMAScript Edition 6 e apresenta uma visão básica similar a de um array para um data buffer binário.
    A tabela a seguir mostra o equivalente aos tipos de dados em C:

    TypedArray objects
    Type 	            Value Range 	            Size in bytes 	        Description 	            Web IDL type 	        Equivalent C type
    Int8Array 	        -128 to 127 	            1 	                    8-bit two's complement
                                                                            signed integer 	            byte 	                int8_t
    Uint8Array 	        0 to 255 	                1 	                    8-bit unsigned
                                                                            integer 	                octet 	                uint8_t
    Uint8ClampedArray 	0 to 255 	                1 	                    8-bit unsigned
                                                                            integer (clamped) 	        octet 	                uint8_t
    Int16Array 	        -32768 to 32767 	        2 	                    16-bit two's complement
                                                                            signed integer 	            short 	                int16_t
    Uint16Array 	    0 to 65535 	                2 	                    16-bit unsigned integer
                                                                         	                            unsigned short          uint16_t
    Int32Array 	        -2147483648 to 
                        2147483647 	                4 	                    32-bit two's complement
                                                                            signed integer 	            long 	                int32_t
    Uint32Array 	    0 to 4294967295 	        4 	                    32-bit unsigned integer     unsigned long 	        uint32_t
    Float32Array 	    1.2x10-38 to
                        3.4x1038 	                4 	                    32-bit IEEE floating
                                                                            point number
                                                                            ( 7 significant digits
                                                                            e.g. 1.1234567) 	        unrestricted float 	    float
    Float64Array 	    5.0x10-324 to
                        1.8x10308 	                8 	                    64-bit IEEE floating
                                                                            point number
                                                                            (16 significant digits
                                                                            e.g. 1.123...15) 	        unrestricted double 	double
    
    -----Coleções chaveadas: Maps, Sets, WeakMaps, WeakSets-----
    Estas estruturas de dados pegam referências de objetos como chaves e foram introduzidas no ECMAScript Edition 6. Set e WeakSet representa um conjunto de objetos,
    enquanto Map e WeakMap associa um valor a um objeto. A diferença entre Maps e WeakMaps é que no primeiro, as chaves dos objetos podem ser enumeradas.
    Isso permite otimização de garbage collection no segundo.
    Pode-se implementar Maps e Sets no ECMAScript 5 puro. Porém, como objetos não podem ser comparados (no sentido de "menor que", por exemplo), o desempenho
    de pesquisa seria  necessariamente linear. Implementações nativas deles (incluindo WeakMaps) podem ter uma performance de pesquisa logarítmica em relação
    ao tempo constante.
    Geralmente, para vincular dados a um nó DOM, pode-se setar propriedades diretamente no objeto ou usar atributos data-*. Isso tem a desvantagem de os dados
    estarem disponíveis para qualquer script em execução no mesmo contexto. Maps e WeakMaps facilitam vincular dados privadamente a um objeto.

    -----Dados estruturados: JSON-----
    JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript but used by many programming languages.
    JSON builds universal data structures. See JSON and JSON for more details.

    -----Mais objetos na biblioteca  padrão-----
    Javascript possui uma biblioteca padrão com objetos pré-construidos.Por favor olhe a referência para descobrir mais sobre objetos.
*/
/*------------------------------------------------------*/
/*
    ----------Determinando  tipos usando o operador typeof----------
    O operador typeof pode lhe ajudar a encontrar o tipo de sua variavel. Por favor, leia a página de referência para mais detalhes e casos de uso.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/