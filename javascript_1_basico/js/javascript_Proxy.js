/* ----------Proxy---------- */
console.log('----------Proxy----------');
/*
    ----------Proxy----------
    O objeto Proxy é usado para definir comportamentos customizados para operações fundamentais (por exemplo, pesquisa de propriedade, atribuição, enumeração,
        invocação de função, etc.).
*/
/*------------------------------------------------------*/
/*
    ----------Terminologia----------
    handler -> Objeto marcador que contém traps.
    traps -> Métodos que fornecem acesso à propriedade. Isto é análogo ao conceito de traps (armadilhas) em sistemas operacionais
    target -> Objeto que o proxy virtualiza. É frequentemente utilizado como back-end de armazenamento para o proxy. Os invariantes
    (semânticas que permanecem inalterados) em relação à não-extensibilidade do objeto ou propriedades não-configuráveis são verificados em relação ao target. 
*/
/*------------------------------------------------------*/
/*
    ----------Sintaxe----------
        var p = new Proxy(target, handler);
        Parâmetros
            target -> Um objeto target (pode ser qualquer tipo de objeto, incluindo um array, uma função ou até mesmo outro Proxy) a ser envolvido com o Proxy.
            handler -> Um objeto cujas propriedades são funções que definem o comportamento do proxy quando uma operação é realizada sobre ele. 
*/
/*------------------------------------------------------*/
/*
    ----------Métodos----------
    Proxy.revocable() -> Cria um objeto Proxy revogável. 
*/
/*------------------------------------------------------*/
/*
    ----------Métodos para manipular objetos----------
    O objeto manipulado é um objeto reservado que contém traps para Proxy.
    All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.
    handler.getPrototypeOf() -> A trap for Object.getPrototypeOf.
    handler.setPrototypeOf() -> A trap for Object.setPrototypeOf.
    handler.isExtensible() -> A trap for Object.isExtensible.
    handler.preventExtensions() -> A trap for Object.preventExtensions.
    handler.getOwnPropertyDescriptor() -> A trap for Object.getOwnPropertyDescriptor.
    handler.defineProperty() -> A trap for Object.defineProperty.
    handler.has() -> A trap for the in operator.
    handler.get() -> A trap for getting property values.
    handler.set() -> A trap for setting property values.
    handler.deleteProperty() -> A trap for the delete operator.
    handler.ownKeys() -> A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    handler.apply() -> A trap for a function call.
    handler.construct() -> A trap for the new operator.
    Some non-standard traps are obsolete and have been removed.
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    -----Exemplo básico-----
    Neste exemplo simples, o número 37 é retornado como o valor padrão quando o nome da propriedade não está no objeto. Usa-se o manipulador get.
        var handler = {
            get: function(target, name) {
                return name in target ?
                    target[name] :
                    37;
            }
        };
        var p = new Proxy({}, handler);
        p.a = 1;
        p.b = undefined;
        console.log(p.a, p.b); // 1, undefined
        console.log('c' in p, p.c); // false, 37

    -----Encaminhamento de Proxy-----
    Neste exemplo, estamos usando um objeto JavaScript nativo ao qual nosso proxy irá encaminhar todas as operações que são aplicadas para ele.
        var target = {};
        var p = new Proxy(target, {});
        p.a = 37; // Operação encaminhada para o alvo
        console.log(target.a); // 37. A operação foi devidamente encaminhada

    -----Validação-----
    Com um Proxy, você pode validar facilmente o valor passado para um objeto. Este exemplo usa o manipulador set.
        let validator = {
            set: function(obj, prop, value) {
                if (prop === 'age') {
                    if (!Number.isInteger(value)) {
                        throw new TypeError('The age is not an integer');
                    }
                    if (value > 200) {
                        throw new RangeError('The age seems invalid');
                    }
                }

                //O comportamento padrão para armazenar o valor
                obj[prop] = value;

                // Indique o sucesso
                return true;
            }
        };
        let person = new Proxy({}, validator);
        person.age = 100;
        console.log(person.age); // 100
        person.age = 'young'; // Lança uma exceção
        person.age = 300; // Lança uma exceção
    
    -----Construtor de extensão-----
    Um proxy de função poderia facilmente estender um construtor com um novo construtor. Este exemplo usa os manipuladores construct e apply.
        function extend(sup, base) {
            var descriptor = Object.getOwnPropertyDescriptor(
                base.prototype, 'constructor'
            );
            base.prototype = Object.create(sup.prototype);
            var handler = {
                    construct: function(target, args) {
                        var obj = Object.create(base.prototype);
                        this.apply(target, obj, args);
                        return obj;
                    },
                    apply: function(target, that, args) {
                        sup.apply(that, args);
                        base.apply(that, args);
                    }
            };
            var proxy = new Proxy(base, handler);
            descriptor.value = proxy;
            Object.defineProperty(base.prototype, 'constructor', descriptor);
            return proxy;
        }

        var Person = function(name) {
            this.name = name;
        };

        var Boy = extend(Person, function(name, age) {
            this.age = age;
        });

        Boy.prototype.sex = 'M';

        var Peter = new Boy('Peter', 13);
        console.log(Peter.sex);  // "M"
        console.log(Peter.name); // "Peter"
        console.log(Peter.age);  // 13

    -----DOM manipulação de nós-----
    Às vezes, você deseja alternar o atributo ou o nome da classe de dois elementos diferentes. Veja como usar o manipulador set.
        let view = new Proxy({
            selected: null
        },
        {
            set: function(obj, prop, newval) {
                let oldval = obj[prop];
                if (prop === 'selected') {
                    if (oldval) {
                        oldval.setAttribute('aria-selected', 'false');
                    }
                    if (newval) {
                        newval.setAttribute('aria-selected', 'true');
                    }
                }
                // O comportamento para armazenar o valor padrão
                obj[prop] = newval;
                // Indica o sucesso
                return true;
            }
        });

        let i1 = view.selected = document.getElementById('item-1');
        console.log(i1.getAttribute('aria-selected')); // 'true'

        let i2 = view.selected = document.getElementById('item-2');
        console.log(i1.getAttribute('aria-selected')); // 'false'
        console.log(i2.getAttribute('aria-selected')); // 'true'

    -----Correção de valor e uma propriedade extra-----
    O objeto de proxy produtos avalia o valor passado e converte-o em uma matriz, se necessário. O objeto também suporta uma propriedade adicional
    chamada latestBrowser tanto em getters como em setters.
        let products = new Proxy({
            browsers: ['Internet Explorer', 'Netscape']
        },
        {
            get: function(obj, prop) {
                // An extra property
                if (prop === 'latestBrowser') {
                    return obj.browsers[obj.browsers.length - 1];
                }

                //  O comportamento para armazenar o valor padrão
                return obj[prop];
            },
            set: function(obj, prop, value) {
                // An extra property
                if (prop === 'latestBrowser') {
                    obj.browsers.push(value);
                    return true;
                }

                // Converta o valor se não for uma matriz
                if (typeof value === 'string') {
                    value = [value];
                }

                //  O comportamento para armazenar o valor padrão
                obj[prop] = value;

                // Indicate success
                return true;
            }
        });

        console.log(products.browsers); // ['Internet Explorer', 'Netscape']
        products.browsers = 'Firefox'; // pass a string (by mistake)
        console.log(products.browsers); // ['Firefox'] <- no problem, the value is an array

        products.latestBrowser = 'Chrome';
        console.log(products.browsers); // ['Firefox', 'Chrome']
        console.log(products.latestBrowser); // 'Chrome'
    
    -----Encontrando um item de objeto em uma matriz por propriedade-----
    Esta proxy estende uma matriz com alguns recursos de utilidade. Como você vê, você pode "definir" propriedades flexíveis sem usar Object.defineProperties.
    Este exemplo pode ser adaptado para encontrar uma linha de tabela por sua célula. Nesse caso, o alvo será table.rows
        let products = new Proxy([
            { name: 'Firefox', type: 'browser' },
            { name: 'SeaMonkey', type: 'browser' },
            { name: 'Thunderbird', type: 'mailer' }
        ],
        {
            get: function(obj, prop) {
                // O comportamento para retornar o valor; Prop geralmente é um inteiro
                if (prop in obj) {
                    return obj[prop];
                }

                // Obter o número de produtos; Com products.length
                if (prop === 'number') {
                    return obj.length;
                }

                let result, types = {};

                for (let product of obj) {
                    if (product.name === prop) {
                        result = product;
                    }
                    if (types[product.type]) {
                        types[product.type].push(product);
                    } else {
                        types[product.type] = [product];
                    }
                }

                // Obtém um produto por nome
                if (result) {
                    return result;
                }

                // Obtém produtos por tipo
                if (prop in types) {
                    return types[prop];
                }

                // Obtém tipos de produto
                if (prop === 'types') {
                    return Object.keys(types);
                }

                return undefined;
            }
        });
        console.log(products[0]); // { name: 'Firefox', type: 'browser' }
        console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
        console.log(products['Chrome']); // undefined
        console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
        console.log(products.types); // ['browser', 'mailer']
        console.log(products.number); // 3
    
    -----Um exemplo completo de lista de traps-----
    Agora, para criar uma lista completa de amostra de traps, para fins didáticos, tentaremos propor um objeto não nativo que seja particularmente adequado
    para este tipo de operação: o objeto global docCookies criado por a "little framework" publicada na páginadocument.cookie.
        // var docCookies = ... get the "docCookies" object here:  
        // https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
    
        var docCookies = new Proxy(docCookies, {
            get: function (oTarget, sKey) {
                return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
            },
            set: function (oTarget, sKey, vValue) {
                if (sKey in oTarget) { return false; }
                return oTarget.setItem(sKey, vValue);
            },
            deleteProperty: function (oTarget, sKey) {
                if (sKey in oTarget) { return false; }
                return oTarget.removeItem(sKey);
            },
            enumerate: function (oTarget, sKey) {
                return oTarget.keys();
            },
            ownKeys: function (oTarget, sKey) {
                return oTarget.keys();
            },
            has: function (oTarget, sKey) {
                return sKey in oTarget || oTarget.hasItem(sKey);
            },
            defineProperty: function (oTarget, sKey, oDesc) {
                if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
                return oTarget;
            },
            getOwnPropertyDescriptor: function (oTarget, sKey) {
                var vValue = oTarget.getItem(sKey);
                return vValue ? {
                    value: vValue,
                    writable: true,
                    enumerable: true,
                    configurable: false
                } : undefined;
            },
        });
    
        // Teste Cookies
        console.log(docCookies.my_cookie1 = 'First value');
        console.log(docCookies.getItem('my_cookie1'));
        
        docCookies.setItem('my_cookie1', 'Changed value');
        console.log(docCookies.my_cookie1);
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/