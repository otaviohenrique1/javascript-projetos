/* ----------Object---------- */
console.log('----------Object----------');
/*
    ----------Sumário----------
    Cria um novo objeto.

    ----------Sintáxe----------
    new Object( [ valor ] )
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    O construtor Object cria um "objeto englobador" para o valor passado. Se o valor é null ou undefined, será criado e retornado um objeto vazio,
    caso não seja passado um valor null ou undefined será retornado um objeto que corresponde ao valor passado.
    Quando chamado em um contexto sem o construtor, o Object se comporta de maneira idêntica.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades----------
    prototype -> Permite colocar propriedades adicionais para todos os objetos do tipo Object.
*/
/*------------------------------------------------------*/

/* ----------Métodos---------- */
// create (Requires JavaScript 1.8.5) -> Cria um novo Objeto com o específico objeto prototype e propriedades para o objeto que deseja ser criado, Sintaxe -> Object.create(proto[, propertiesObject]).
// function Shape() {
//     this.x = 0;
//     this.y = 0;
// }
// Shape.prototype.move = function(x, y) {
//     this.x += x;
//     this.y += y;
//     console.info('Shape moved.');
// }; 
// function Rectangle() {
//     Shape.call(this); // call super constructor.
// }
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;
// var rect = new Rectangle();
// console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
// console.log('Is rect an instance of Shape?', rect instanceof Shape);
// rect.move(1, 1);

// defineProperty (Requires JavaScript 1.8.5) -> Adiciona a propriedade nomeada, descrita por um determinado descritor para um objeto, Sintaxe -> Object.defineProperty(obj, prop, descriptor).
/* -----Criando a propriedade----- */
// var o = {};
// Object.defineProperty(o, 'a', {
//   value: 37,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });
// var bValue = 38;
// Object.defineProperty(o, 'b', {
//   get() { return bValue; },
//   set(newValue) { bValue = newValue; },
//   enumerable: true,
//   configurable: true
// });
// o.b;
// Object.defineProperty(o, 'conflict', {
//   value: 0x9f91102,
//   get() { return 0xdeadbeef; }
// });

// defineProperties (Requires JavaScript 1.8.5) -> Adiciona propriedades nomeadas, descrita por um descritor para um objeto, Sintaxe -> Object.defineProperties(obj, props).
// var obj = {};
// Object.defineProperties(obj, {
//     'property1': {
//         value: true,
//         writable: true
//     },
//     'property2': {
//         value: 'Hello',
//         writable: false
//     }
// });

// getOwnPropertyDescriptor (Requires JavaScript 1.8.5) -> Retorna o descritor de propriedades para uma determinada propriedade em um objeto, Sintaxe -> Object.getOwnPropertyDescriptor(obj, prop).
// var o, d;
// o = { get foo() { return 17; } };
// d = Object.getOwnPropertyDescriptor(o, 'foo');
// o = { bar: 42 };
// d = Object.getOwnPropertyDescriptor(o, 'bar');
// o = { [Symbol.for('baz')]: 73 }
// d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz')); 
// o = {};
// Object.defineProperty(o, 'qux', {
//   value: 8675309,
//   writable: false,
//   enumerable: false
// });
// d = Object.getOwnPropertyDescriptor(o, 'qux');

// keys (Requires JavaScript 1.8.5) -> Retorna um array contendo os nomes de todas propriedas enumeradas de um dado objeto, Sintaxe -> .Object.keys(obj)
// var arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj));
// var anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj));
// var myObj = Object.create({}, {
//   getFoo: {
//     value: function () { return this.foo; }
//   } 
// });
// myObj.foo = 1;
// console.log(Object.keys(myObj));

// getOwnPropertyNames (Requires JavaScript 1.8.5) -> Retorna um array contendo os nomes de todas as propriedades (numeradas e não numeradas) de um dado objeto, Sintaxe -> Object.getOwnPropertyNames(obj).
// var arr = ['a', 'b', 'c'];
// console.log(Object.getOwnPropertyNames(arr).sort());
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.getOwnPropertyNames(obj).sort());
// Object.getOwnPropertyNames(obj).forEach(
//   function (val, idx, array) {
//     console.log(val + ' -> ' + obj[val]);
//   }
// );
// var my_obj = Object.create({}, {
//   getFoo: {
//     value: function() { return this.foo; },
//     enumerable: false
//   }
// });
// my_obj.foo = 1;
// console.log(Object.getOwnPropertyNames(my_obj).sort());

// getPrototypeOf (Requires JavaScript 1.8.1) -> Retorna o prototype de um dado objeto, Sintaxe -> Object.getPrototypeOf(obj).
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto;

// preventExtensions (Requires JavaScript 1.8.5) -> Evita qualquer tipo de extensão de um dado objeto. (Evita que o objeto seja herdado), Sintaxe -> Object.preventExtensions(obj).
// var obj = {};
// var obj2 = Object.preventExtensions(obj);
// var empty = {};
// Object.isExtensible(empty);
// Object.preventExtensions(empty);
// Object.isExtensible(empty);
// var nonExtensible = { removable: true };
// Object.preventExtensions(nonExtensible);
// Object.defineProperty(nonExtensible, 'new', {
//   value: 8675309
// });
// function fail() {
//   'use strict';
//   nonExtensible.newProperty = 'FAIL';
// }
// fail();

// isExtensible (Requires JavaScript 1.8.5) -> Determina se a extensão de um determinado objeto é permitida. (Diz se o bjeto pode ser herdado), Sintaxe -> Object.isExtensible(obj).
// var empty = {};
// Object.isExtensible(empty);
// Object.preventExtensions(empty);
// Object.isExtensible(empty);
// var sealed = Object.seal({});
// Object.isExtensible(sealed);
// var frozen = Object.freeze({});
// Object.isExtensible(frozen);

// seal (Requires JavaScript 1.8.5) -> Evita que outros códigos deletem propriedades de um determinado objeto, Sintaxe -> Object.seal(obj).
// var obj = {
//     prop: function() {},
//     foo: 'bar'
// };
// obj.foo = 'baz';
// obj.lumpy = 'woof';
// delete obj.prop;
// var o = Object.seal(obj);
// o === obj;
// Object.isSealed(obj);
// obj.foo = 'quux';
// Object.defineProperty(obj, 'foo', {
//     get: function() { return 'g'; }
// });
// obj.quaxxor = 'the friendly duck';
// delete obj.foo;
// function fail() {
//     'use strict';
//     delete obj.foo;
//     obj.sparky = 'arf';
// }
// fail();
// Object.defineProperty(obj, 'ohai', {
//     value: 17
// });
// Object.defineProperty(obj, 'foo', {
//     value: 'eit'
// });

// is -> Compara se dois valores são iguais, Sintaxe -> Object.is(value1, value2);.
// Object.is('foo', 'foo');
// Object.is(window, window);
// Object.is('foo', 'bar');
// Object.is([], []);
// var test = { a: 1 };
// Object.is(test, test);
// Object.is(null, null);
// Object.is(0, -0);
// Object.is(-0, -0);
// Object.is(NaN, 0/0);

// isSealed (Requires JavaScript 1.8.5) -> Diz se determinado objeto foi "selado", ou seja, se outros códigos não podem deletar propriedades deles, Sintaxe -> Object.isSealed(obj).
// var empty = {};
// Object.isSealed(empty);
// Object.preventExtensions(empty);
// Object.isSealed(empty);
// var hasProp = { fee: 'fie foe fum' };
// Object.preventExtensions(hasProp);
// Object.isSealed(hasProp);
// Object.defineProperty(hasProp, 'fee', {
//     configurable: false
// });
// Object.isSealed(hasProp);
// var sealed = {};
// Object.seal(sealed);
// Object.isSealed(sealed);
// Object.isExtensible(sealed);
// Object.isFrozen(sealed);
// var s2 = Object.seal({ p: 3 });
// Object.isFrozen(s2);
// var s3 = Object.seal({ get p() { return 0; } });
// Object.isFrozen(s3);

// freeze (Requires JavaScript 1.8.5) -> "Congela" um objeto: outros códigos não conseguem deletar ou alterar nenhuma propriedade do objeto, Sintaxe -> Object.freeze(obj).
/* -----Freezing Objects----- */
// var obj = {
//     prop: function() {},
//     foo: 'bar'
// };
// obj.foo = 'baz';
// obj.lumpy = 'woof';
// delete obj.prop;
// var o = Object.freeze(obj);
// o === obj;
// Object.isFrozen(obj);
// obj.foo = 'quux';
// obj.quaxxor = 'the friendly duck';
// function fail(){
//     'use strict';
//     obj.foo = 'sparky';
//     delete obj.foo;
//     delete obj.quaxxor;
//     obj.sparky = 'arf';
// }
//     fail();
// Object.defineProperty(obj, 'ohai', { value: 17 });
// Object.defineProperty(obj, 'foo', { value: 'eit' });
// Object.setPrototypeOf(obj, { x: 20 })
// obj.__proto__ = { x: 20 }

/* -----Freezing Arrays----- */
// let a = [0];
// Object.freeze(a);
// a[0]=1;
// a.push(2);
// function fail() {
//   "use strict"
//   a[0] = 1;
//   a.push(2);
// }
// fail();

// isFrozen (Requires JavaScript 1.8.5) -> Diz se um objeto está ou não congelado, Sintaxe -> Object.isFrozen(obj).
// Object.isFrozen({});    
// var vacuouslyFrozen = Object.preventExtensions({});
// Object.isFrozen(vacuouslyFrozen);
// var oneProp = { p: 42 };
// Object.isFrozen(oneProp);
// Object.preventExtensions(oneProp);
// Object.isFrozen(oneProp);
// delete oneProp.p;
// Object.isFrozen(oneProp);
// var nonWritable = { e: 'plep' };
// Object.preventExtensions(nonWritable);
// Object.defineProperty(nonWritable, 'e', {
//     writable: false
// });
// Object.isFrozen(nonWritable);
// Object.defineProperty(nonWritable, 'e', {
//   configurable: false
// });
// Object.isFrozen(nonWritable);
// var nonConfigurable = { release: 'the kraken!' };
// Object.preventExtensions(nonConfigurable);
// Object.defineProperty(nonConfigurable, 'release', {
//     configurable: false
// });
// Object.isFrozen(nonConfigurable);
// Object.defineProperty(nonConfigurable, 'release', {
//     writable: false
// });
// Object.isFrozen(nonConfigurable);
// var accessor = { get food() { return 'yum'; } };
// Object.preventExtensions(accessor);
// Object.isFrozen(accessor);
// Object.defineProperty(accessor, 'food', {
//     configurable: false
// });
// Object.isFrozen(accessor);
// var frozen = { 1: 81 };
// Object.isFrozen(frozen);
// Object.freeze(frozen);
// Object.isFrozen(frozen);
// Object.isExtensible(frozen);
// Object.isSealed(frozen);
/*------------------------------------------------------*/
/*
    ----------Instâncias de Object----------
    Todos os objetos em javascript são herdeiros de Object; todos os objetos herdam métodos e propriedades de Object.prototype, porém eles podem ser sobrescritos.
    Por example,  outros construtores prototypes podem sobrescrever a propriedade constructor e fornecer seu próprio método toString. Mudanças no Object objeto
    prototype são propagadas para todos os objetos até que as propriedade e métodos modificados sejam sobrescritos na corrente prototype mais a frente.

    -----Properties-----
    Object.prototype.constructor -> Specifies the function that creates an object's prototype.
    Object.prototype.__proto__ -> Points to the object which was used as prototype when the object was instantiated.
    Object.prototype.__noSuchMethod__ ->  Allows a function to be defined that will be executed when an undefined object member is called as a method.

    -----Methods-----
    Object.prototype.__defineGetter__() -> Associates a function with a property that, when accessed, executes that function and returns its return value.
    Object.prototype.__defineSetter__() -> Associates a function with a property that, when set, executes that function which modifies the property.
    Object.prototype.__lookupGetter__() -> Returns the function associated with the specified property by the __defineGetter__() method.
    Object.prototype.__lookupSetter__() -> Returns the function associated with the specified property by the __defineSetter__() method.
    Object.prototype.hasOwnProperty() -> Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
    Object.prototype.isPrototypeOf() -> Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
    Object.prototype.propertyIsEnumerable() -> Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
    Object.prototype.toSource() ->  Returns string containing the source of an object literal representing the object that this method is called upon; you can use this value to create a new object.
    Object.prototype.toLocaleString() -> Calls toString(). -> Object.prototype.toString() -> Returns a string representation of the object.
    Object.prototype.unwatch() ->  Removes a watchpoint from a property of the object.
    Object.prototype.valueOf() -> Returns the primitive value of the specified object.
    Object.prototype.watch() -> Adds a watchpoint to a property of the object.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/