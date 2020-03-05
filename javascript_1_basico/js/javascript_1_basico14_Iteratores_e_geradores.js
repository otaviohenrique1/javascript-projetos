/* ----------Iteratores e geradores---------- */
console.log('----------Iteratores e geradores----------');
/*
    ----------Iterators (Iteradores)----------
    Um objeto é um iterator(iterador) quando sabe como acessar itens  numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência.
    Em JavaScript um iterator é um objeto que oferece o método next(), o qual retorna o próximo item da sequência. Este método retorna um objeto com duas
    propriedades: done e value.
    Uma vez criado, um objeto iterator pode ser usado explicitamente ao chamar repetidas vezes o método next().
*/
    // function makeIterator(array){
    //     var nextIndex = 0;
    //     return {
    //         next: function(){
    //             return nextIndex < array.length ?
    //                 {value: array[nextIndex++], done: false} :
    //                 {done: true};
    //         }
    //     }
    // }
/*
    Uma vez inicializado, o método next() pode ser chamado para acessar os pares chave/valor do objeto da vez.
*/
    // var it = makeIterator(['yo', 'ya']);
    // console.log(it.next().value); // 'yo'
    // console.log(it.next().value); // 'ya'
    // console.log(it.next().done);  // true
/*------------------------------------------------------*/
/*
    ----------Iterables (Iteráveis)Section----------
    Um objeto é iterável,iterable, se ele define seu comportamento de iteração, como no caso de quais valores percorridos em um laço do tipo for..of.
    Alguns tipos embutidos, como o Array, ou o Map, têm um comportamento iterável padrão, enquanto outros tipos (como oObject) não possuem.
    Para que um objeto seja iterable, o objeto precisa implemntar o método @@iterator, significando que o objeto (ou um dos objetos na
        cadeia de prototipagem  - prototype chain) precisa ter uma propriedade com uma chave Symbol.iterator:

    -----Iterables definidos pelo usuário-----
    Nós podemos fazer, criar, os nossos próprios iteráveis como aqui:
*/
    // var myIterable = {}
    // myIterable[Symbol.iterator] = function* () {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // };
    // [...myIterable] // [1, 2, 3]
/*
    -----Iterables Built-in (Iteráveis Embutidos)Section-----
    String, Array, TypedArray, Map e Set são iteráveis embutidos, pois o protótipo dos objetos de todos eles têm o método Symbol.iterator.

    -----Syntaxes expecting iterablesSection-----
    Algumas declarações e expressões esperam por iteradores, por exemplo o for-of loops, spread operator, yield*, e destructuring assignment.
*/
    // for(let value of ["a", "b", "c"]){
    //     console.log(value)
    // }
    // "a"
    // "b"
    // "c"
    // [..."abc"] // ["a", "b", "c"]
    // function* gen(){
    //   yield* ["a", "b", "c"]
    // }
    // gen().next() // { value:"a", done:false }
    // [a, b, c] = new Set(["a", "b", "c"])
    // a // "a"
/*------------------------------------------------------*/
/*
    ----------GeneratorsSection----------
    Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido a necessidade de manter explicito seu estado interno.
    Generators provê uma alternativa poderosa: eles te permitem definir um algorítimo iterativo escrevendo uma função simples que pode manter seu estado próprio.
    Generator é um tipo especial de função que trabalha como uma factory para iteradores. A função vira um generator se ela contém uma ou mais expressões
    yield e se ela usa a sintaxe function*.
*/
    // function* idMaker(){
    //     var index = 0;
    //     while(true)
    //         yield index++;
    // }
    // var gen = idMaker();
    // console.log(gen.next().value); // 0
    // console.log(gen.next().value); // 1
    // console.log(gen.next().value); // 2
// ...
/*------------------------------------------------------*/
/*
    ----------Generators avançadosSection----------
    Generators computam seus valores "yielded" por demanda, que os permitem representar sequencias de forma eficiente que costumam ser trabalhosas ao
    serem computadas, ou até sequencias infinitas como demonstradas acima.
    O método next() também aceita um valor que pode ser usado para modificar o estado interno de um generator. O valor passado pro next() será tratado
    como o resultado da última expressão yield que pausou o generator.
    Aqui um gerador de sequencia fibonacci usando next(x) pra restartar a sequencia:
*/
    // function* fibonacci(){
    //     var fn1 = 1;
    //     var fn2 = 1;
    //     while (true){  
    //         var current = fn2;
    //         fn2 = fn1;
    //         fn1 = fn1 + current;
    //         var reset = yield current;
    //         if (reset){
    //             fn1 = 1;
    //             fn2 = 1;
    //         }
    //     }
    // }
    // var sequence = fibonacci();
    // console.log(sequence.next().value);     // 1
    // console.log(sequence.next().value);     // 1
    // console.log(sequence.next().value);     // 2
    // console.log(sequence.next().value);     // 3
    // console.log(sequence.next().value);     // 5
    // console.log(sequence.next().value);     // 8
    // console.log(sequence.next().value);     // 13
    // console.log(sequence.next(true).value); // 1
    // console.log(sequence.next().value);     // 1
    // console.log(sequence.next().value);     // 2
    // console.log(sequence.next().value);     // 3
/*
    Nota: Como um ponto de interesse, chamando next(undefined) é o mesmo que chamar next(). Entretanto, estartar um novo generator com qualquer
    valor que não seja undefined na chamada next() terá TypeError exception.
    Você pode forçar um generator a lançar uma exception chamando o método throw()  e passando um valor de exception. Esse exception será lançado
    da suspensão atual do generator, como se o yield tivesse suspendido e lançado o valor do throw.
    Se um yield não for encontrado durante o processo de lançamento de um thrown exception, então o exception será propagado através da
    chamada do throw(), e pra subsequente chamada do next() que terá a propriedade done resultando em true.
    Generators tem o método return(value) que retorna o valor pego e finaliza o generator.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/