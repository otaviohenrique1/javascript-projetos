/* ----------Map---------- */
console.log('----------Map----------');
/*
    ----------Map----------
    O objeto Map é um mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou um valor.
*/
/*------------------------------------------------------*/
/*
    ----------Sintaxe----------
    new Map([iterable])
    Parâmetros
        iterable -> terable é um Array ou outro objeto iterável cujos elementos são pares de chave-valor (2-element Arrays).
        Cada par de chave-valor é adicionado ao novo Map. null é tratado como undefined.
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Um objeto Map itera seus elementos em ordem de inserção — um loop for...of retorna um array de [chave, valor] para cada iteração.
    Deve-se notar que um Map que é um mapa de um objeto, especialmente, um dicionário de dicionários somente irá mapear apenas para a
    ordem de inserção -- que é aleatória e não ordenada.

    -----Igualidade de valores-----
    A igualdade das chaves é baseada no algoritmo "SameValueZero" (mesmo valor): NaN é considerado igual à NaN (mesmo que NaN !== NaN) e
    todos os outros valores são considerados iguals de acordo com a semantica do operador ===. Em versões anteriores do rascunho
    ECMAScript 2015 draft -0 and +0 eram considerados diferentes (mesmo que -0 === +0), isto foi trocado em versões posteriores e
    foi aplicado no Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) (bug 952870) e em uma build recente nightly do Chrome.

    -----Objetos e mapas comparados-----
    Objects são similares a Maps onde ambos deixam adicionar chaves para valores, recuperar estes valores, apagar chaves, e detectar quando algo
    foi adicionado em uma chave. Por causa disso (e porquê não existem alterativas pré-construidas), Objects historicamente foram usados como Maps;
    no entanto, existem diferenças importantes entre Objects e Maps que fazem o uso do Map melhor:
        -Um Object tem um prototype, então existem chaves padrão no mapa. Isto pode ser evitado usando um Map = Object.create(null) desde ES5,
        mas raramente é feito.
        -As chaves de um Object são Strings e Symbols, porém elas podem ser qualquer valor em um Map.
        -Você pode obter o tamanho de um  Map facilmente enquanto em um Object é necessário ter este controle manualmente.

    Isto não significa que você deve usar Maps em todo lugar, objetos ainda serão usados na maioria dos casos. Instancias de Map são úteis somente para coleções,
    e você deve considerar adaptar seu codigo onde você usou objetos para isto anteriormente. Objects devem ser usados como registros, com campos e métodos.
    Se você não tem certeza qual usar, pergunte-se as seguintes questões:
        -As keys são desconhecidas até o tempo de execução, você precisa procurá-las dinamicamente?
        -Todos os valores sempre serão do mesmo tipo, e podem ser usados de forma intercambiável?
        -Você precisa de keys que não são strings?
        -Os pares key-value são adicionados ou removidos frequentemente?
        -Você tem uma quantidade de pares key-value arbitrária (de troca fácil) ?
        -A coleção é iterada?
    Se você respondeu "sim" em qualquer uma dessas questões, é um sinal de que você quer utilizar um  Map. Se ao invés disto você tem um numero fixo de keys,
    trabalhe eles individualmente, e faça diferenciação entre o uso deles, você quer um objeto.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades----------
    Map.length -> O tamanho do mapa é 0.
    get Map[@@species] -> A função construtora que é usada para criar objetos derivados.
    Map.prototype -> Representa o prototype para o construtor de Map. Permite a adição de propriedades para todos os objetos Map. 
*/
/*------------------------------------------------------*/
/*
    ----------Instancias de Map----------
    Todas as instancias de Map herdam de Map.prototype.
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    -----Usando o objeto Map-----
        var myMap = new Map();
        var keyString = "uma string",
            keyObj = {},
            keyFunc = function () {};
        // configurando os valores
        myMap.set(keyString, "valor associado com 'uma string'");
        myMap.set(keyObj, "valor associado com keyObj");
        myMap.set(keyFunc, "valor associado com keyFunc");
        myMap.size; // 3
        // obtendo os valores
        myMap.get(keyString);    // "valor associado com 'uma string'"
        myMap.get(keyObj);       // "valor associado com keyObj"
        myMap.get(keyFunc);      // "valor associado com keyFunc"
        myMap.get("uma string"); // "valor associado com 'uma string'"
                                // pois keyString === 'uma string'
        myMap.get({});           // undefined, pois keyObj !== {}
        myMap.get(function() {}) // undefined, pois keyFunc !== function () {}

    -----Usando NaN como Map keys-----
    NaN pode também ser usado como key. Mesmo que NaN não seja igual a ele mesmo (NaN !== NaN)  é true, o seguinte exemplo funciona, porquê NaNs são indistinguíveis
    uma para o outro:
        var myMap = new Map();
        myMap.set(NaN, "not a number");
        myMap.get(NaN); // "not a number"
        var otherNaN = Number("foo");
        myMap.get(otherNaN); // "not a number"
    
    -----Iterando Maps com for..of-----
    Maps podem ser iterados usando um for..of :
        var myMap = new Map();
        myMap.set(0, "zero");
        myMap.set(1, "um");
        for (var [key, value] of myMap) {
            console.log(key + " = " + value);
        }
        // 0 = zero
        // 1 = um

        for (var key of myMap.keys()) {
            console.log(key);
        }
        // 0
        // 1

        for (var value of myMap.values()) {
            console.log(value);
        }
        // zero
        // um

        for (var [key, value] of myMap.entries()) {
            console.log(key + " = " + value);
        }
        // 0 = zero
        // 1 = um
    
    -----Iterando Maps com forEach()-----
    Maps podem ser iterados usando um forEach():
        myMap.forEach(function(value, key) {
            console.log(key + " = " + value);
        }, myMap)
        // Mostrará 2 logs; o primeiro com "0 = zero" e o segundo com "1 = um"
    
    -----Relação com objetos Array-----
        var kvArray = [["key1", "value1"], ["key2", "value2"]];
        // Utiliza o construtor padrão de Map para converter um Array de 2 dimensões de chave-valor Array em um mapa
        var myMap = new Map(kvArray);
        myMap.get("key1"); // retorna "value1"
        // Utiliza o operador spread para converter um mapa em um Array de 2 dimensões de chave-valor.
        console.log(uneval([...myMap])); // Mostrará exatamente o mesmo Array que kvArray
        // Ou usa o operador spread nas chaves ou valores para o iterador pegar 
        // um array com somente as chaves ou valores
        console.log(uneval([...myMap.keys()])); // Mostrará ["key1", "key2"]
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/