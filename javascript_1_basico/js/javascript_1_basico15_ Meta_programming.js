/* ----------Iteratores e geradores---------- */
console.log('----------Iteratores e geradores----------');
/*
    ----------Proxies----------
    Introduzido em ECMAScript 6, objetos Proxy permitem que você intercepte determinadas operações e implementar comportamentos personalizados.
    Por exemplo, receber uma propriedade em um objeto:
*/
    // var handler = {
    //     get: function(target, name){
    //         return name in target ? target[name] : 42;
    // }};
    // var p = new Proxy({}, handler);
    // p.a = 1;
    // console.log(p.a, p.b); // 1, 42
/*
    O objeto Proxy define um target (um objeto vazio aqui) e um objeto handler em que um get trap é implementado. Aqui, um objeto que está em
    proxy não retornará indefinido quando receber propriedades indefinidas, mas, ao contrário, retornar o número 42.
    Exemplos adicionais estão disponíveis na página de referência de Proxy .

    -----Terminologia-----
    Os seguintes termos são usados ​​quando se fala sobre a funcionalidade de proxies.
    handler -> Espaço reservado de objeto que contenha traps.
    traps -> Os métodos que fornecem acesso de propriedade. Isto é análogo ao conceito de traps em sistemas operacionais.
    target -> Objeto que o proxy está virtualizando. Ele é frequentemente usado como backend de armazenamento para o proxy.
    Invariantes (semânticas que permanecem inalteradas) relativas a objetos que não podem ser extendidos ou propriedades que não podem ser configuradas
    são comparadas com o target. 
    invariantes -> Semânticas que permanecem inalteradas na execução de operações personalizadas são chamados de invariantes. Se você violar as invariantes
    de um manipulador, um TypeError será lançado. 
*/
/*------------------------------------------------------*/
/*
    ----------Handlers e trapsSection----------
    A tabela a seguir resume as traps disponíveis aos objetos do tipo Proxy. Veja as páginas de referência para explicações detalhadas e exemplos.
    Handler / trap 	                        Interceptions 	                            Invariants
    handler.getPrototypeOf() 	            Object.getPrototypeOf()
                                            Reflect.getPrototypeOf()
                                            __proto__
                                            Object.prototype.isPrototypeOf()
                                            instanceof
                                                                                        O método getPrototypeOf deve retornar um object ou null.
                                                                                        Se target não puder ser extendido, o método Object.getPrototypeOf(proxy)
                                                                                        deve retornar o mesmo valor que Object.getPrototypeOf(target).

    handler.setPrototypeOf() 	            Object.setPrototypeOf()
                                            Reflect.setPrototypeOf() 	
                                                                                        Se target não puder ser extendido, o parâmetro prototype dever ter o mesmo
                                                                                        valor que  Object.getPrototypeOf(target).

    handler.isExtensible() 	                Object.isExtensible()
                                            Reflect.isExtensible() 	                    Object.isExtensible(proxy) deve retornar o mesmo valor que
                                                                                        Object.isExtensible(target).

    handler.preventExtensions() 	        Object.preventExtensions()
                                            Reflect.preventExtensions() 	            Object.preventExtensions(proxy) retorna true somente se
                                                                                        Object.isExtensible(proxy) retornar false.

    handler.getOwnPropertyDescriptor() 	    Object.getOwnPropertyDescriptor()
                                            Reflect.getOwnPropertyDescriptor() 	
                                                                                        getOwnPropertyDescriptor deve retornar um object ou undefined.
                                                                                        Uma propriedade não pode ser descrita como não existente se ela existir
                                                                                        como uma propriedade própria e não configurável do objeto alvo. 
                                                                                        A property cannot be reported as non-existent, if it exists as an own
                                                                                        property of the target object and the target object is not extensible.
                                                                                        A property cannot be reported as existent, if it does not exists as an
                                                                                        own property of the target object and the target object is not extensible.
                                                                                        A property cannot be reported as non-configurable, if it does not exists as
                                                                                        an own property of the target object or if it exists as a configurable own
                                                                                        property of the target object.
                                                                                        The result of Object.getOwnPropertyDescriptor(target) can be applied to the
                                                                                        target object using Object.defineProperty and will not throw an exception.

    handler.defineProperty() 	            Object.defineProperty()
                                            Reflect.defineProperty() 	

                                                                                        A property cannot be added, if the target object is not extensible.
                                                                                        A property cannot be added as or modified to be non-configurable,
                                                                                        if it does not exists as a non-configurable own property of the target object.
                                                                                        A property may not be non-configurable, if a corresponding configurable
                                                                                        property of the target object exists.
                                                                                        If a property has a corresponding target object property then
                                                                                        Object.defineProperty(target, prop, descriptor) will not throw an exception.
                                                                                        In strict mode, a false return value from the defineProperty handler will
                                                                                        throw a TypeError exception.

    handler.has() 	                        Property query: foo in proxy
                                            Inherited property query:
                                            foo in Object.create(proxy)
                                            Reflect.has()
                                                                                        A property cannot be reported as non-existent, if it exists as a
                                                                                        non-configurable own property of the target object.
                                                                                        A property cannot be reported as non-existent, if it exists as an
                                                                                        own property of the target object and the target object is not extensible.

    handler.get() 	                        Property access: proxy[foo]
                                            and proxy.bar
                                            Inherited property access:
                                            Object.create(proxy)[foo]
                                            Reflect.get()
                                                                                        The value reported for a property must be the same as the value of the
                                                                                        corresponding target object property if the target object property is a
                                                                                        non-writable, non-configurable data property.
                                                                                        The value reported for a property must be undefined if the corresponding
                                                                                        target object property is non-configurable accessor property that has
                                                                                        undefined as its [[Get]] attribute.

    handler.set() 	                        Property assignment: proxy[foo] = bar
                                            and proxy.foo = bar
                                            Inherited property assignment:
                                            Object.create(proxy)[foo] = bar
                                            Reflect.set()
                                                                                        Cannot change the value of a property to be different from the value of the
                                                                                        corresponding target object property if the corresponding target object
                                                                                        property is a non-writable, non-configurable data property.
                                                                                        Cannot set the value of a property if the corresponding target object
                                                                                        property is a non-configurable accessor property that has undefined as
                                                                                        its [[Set]] attribute.
                                                                                        In strict mode, a false return value from the set handler will throw a
                                                                                        TypeError exception.

    handler.deleteProperty() 	            Property deletion: delete proxy[foo]
                                            and delete proxy.foo
                                            Reflect.deleteProperty() 	                A property cannot be deleted, if it exists as a non-configurable own
                                                                                        property of the target object.

    handler.enumerate() 	                Property enumeration / for...in:
                                            for (var name in proxy) {...}
                                            Reflect.enumerate() 	                    The enumerate method must return an object.

    handler.ownKeys() 	                    Object.getOwnPropertyNames()
                                            Object.getOwnPropertySymbols()
                                            Object.keys()
                                            Reflect.ownKeys()
                                                                                        The result of ownKeys is a List.
                                                                                        The Type of each result List element is either String or Symbol.
                                                                                        The result List must contain the keys of all non-configurable own
                                                                                        properties of the target object.
                                                                                        If the target object is not extensible, then the result List must
                                                                                        contain all the keys of the own properties of the target object and
                                                                                        no other values.

    handler.apply() 	                    proxy(..args)
                                            Function.prototype.apply() and
                                            Function.prototype.call()
                                            Reflect.apply() 	                        There are no invariants for the handler.apply method.

    handler.construct() 	                new proxy(...args)
                                            Reflect.construct() 	                    The result must be an Object.
*/
/*------------------------------------------------------*/
/*
    ----------Proxy RevogávelSection----------
    O método Proxy.revocable() é utilizado para criar um objeto Proxy revogável. Isso significa que o proxy pode ser revogado através da
    função revoke, desligando-o. Depois disso, qualquer operação com o proxy lançará um TypeError.
*/
    // var revocable = Proxy.revocable({}, {
    //     get: function(target, name) {
    //         return "[[" + name + "]]";
    //     }
    // });
    // var proxy = revocable.proxy;
    // console.log(proxy.foo); // "[[foo]]"
    // revocable.revoke();
    // console.log(proxy.foo); // TypeError é lançado
    // proxy.foo = 1           // TypeError novamente
    // delete proxy.foo;       // ainda um TypeError
    // typeof proxy            // "object", typeof não desencadeia nenhuma trap
/*------------------------------------------------------*/
/*
    ----------ReflexãoSection----------
    Reflect é um objeto embutido que contém métodos que permitem a criação  de operações interceptáveis em JavaScript. Os métodos são
    iguais àqueles de proxy handlers. Reflect não é um objeto do tipo function.
    Reflect auxilia no encaminhamento de operações padrão do handler para o target.
    Reflect.has(), por exemplo, tem o mesmo efeito prático que o operador in, com a facilidade de ser utilizado como uma função:
*/
    // Reflect.has(Object, "assign"); // true
/*
    -----Uma função apply melhorada-----
    Em ES5, você normalmente utiliza o método Function.prototype.apply() para invocar uma função com um dado valor para this e arguments
    fornecido como um array (ou um objeto parecido com um array).
*/
    // Function.prototype.apply.call(Math.floor, undefined, [1.75]);
/*
    Com Reflect.apply essa operação se torna menos verbosa e mais fácil de compreender:
*/
    // Reflect.apply(Math.floor, undefined, [1.75]); // 1;
    // Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]); // "hello"
    // Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index; // 4
    // Reflect.apply("".charAt, "ponies", [3]); // "i"
/*
    -----Verificando se a definição da propriedade obteve sucessoSection-----
    Com Object.defineProperty, a qual returna um object em caso de sucesso ou lança um  TypeError em caso contrário, você utilizaria um
    bloco try...catch para capturar qualquer erro que tenha ocorrido ao definir uma propriedade.  Devido ao fato de Reflect.defineProperty
    retornar um status do tipo Boolean,  você pode simplesmente utilizar aqui um bloco if...else:
    if (Reflect.defineProperty(target, property, attributes)) {
        // success
    } else {
        // failure
    }
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/