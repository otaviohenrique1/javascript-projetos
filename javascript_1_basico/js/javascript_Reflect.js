/* ----------Reflect---------- */
console.log('----------Reflect----------');
/*
    ----------Reflect----------
    Reflect é um objeto nativo que prover métodos para operações JavaScript interceptáveis. Os métodos são os mesmos que o dos manipuladores de Proxy.
    Reflect não é um objeto de função, então não é construtível.
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Ao contrário da maioria dos objetos globais, Reflect não é um construtor. Você não pode usá-lo com o operador new ou invocar o objeto Reflect como uma função.
    Todas as propriedades e métodos do Reflect são estáticos (igual o objeto Math).
*/
/*------------------------------------------------------*/
/*
    ----------Métodos----------
    O objeto Reflect prover as seguintes funções estáticas que possuem os mesmos nomes que os métodos do manipulador de proxy. Alguns desses métodos
    são iguais aos métodos correspondentes no Object.
    Reflect.apply() -> Chama uma função de destino com os argumentos, conforme especificado pelo parâmetro args. Veja também Function.prototype.apply().
    Reflect.construct() -> O operador new como uma função. Equivalente a chamada new target(...args).
    Reflect.defineProperty() -> Similar ao Object.defineProperty(). Retorna um Boolean.
    Reflect.deleteProperty() -> O operador delete como uma função. Equivalente a chamada delete target[name].
    Reflect.get() -> Uma função que retorna o valor das propriedades.
    Reflect.getOwnPropertyDescriptor() -> Similar ao Object.getOwnPropertyDescriptor(). Retorna um descritor de propriedade da propriedade dada se existir
    no objeto, undefined caso contrário.
    Reflect.getPrototypeOf() -> Igual ao Object.getPrototypeOf().
    Reflect.has() -> O operador in como função. Retorna um booleano indicando se existe uma propriedade própria ou herdada.
    Reflect.isExtensible() -> Igual ao Object.isExtensible().
    Reflect.ownKeys() -> Retorna uma matriz das chaves de propriedade do próprio objeto de destino (não herdadas).
    Reflect.preventExtensions() -> Similar ao Object.preventExtensions(). Retorna um Boolean.
    Reflect.set() -> Uma função que atribui valores a propriedades. Retorna um Boolean que é verdadeiro se a atualização foi bem sucedida.
    Reflect.setPrototypeOf() -> Uma função que define o protótipo de um objeto. 
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/