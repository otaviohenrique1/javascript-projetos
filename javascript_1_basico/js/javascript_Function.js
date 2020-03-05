/* ----------Function---------- */
console.log('----------Function----------');
/*
    ----------Resumo----------
    O construtor Function cria um novo objeto Function. Em JavaScript cada função é, na verdade, um objeto Function.
*/
/*------------------------------------------------------*/
/*
    ----------Sintaxe----------
    new Function ([arg1[, arg2[, ...argN]],] functionBody)

    -----Parâmetros-----
    arg1, arg2, ... argN -> Nomes para serem usandos pela função como nomes formais de argumentos. Cada um deve ser uma string que corresponde para uma válida identidade JavaScript ou uma lista de certas strings separadas com uma vírgula; por exemplo "x", "theValue". our "a,b".
    functionBody -> Uma string que contém as instruções JavaScript que compõem a definição da função. 
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Objetos Function criados com o construtor Function são parseados quando a função é criada. Isto é menos efficiente que criar com uma expressão de função ou um declaração de função e chamando-a dentro do seu código, porque tais funções são parseadas com o resto do código.
    Todos os argumentos passados para a função são tratados como os nomes dos indetificadores dos parâmetros na função a ser criada, na mesma ordem na qual eles foram passados.
    Nota: Funções criadas com o construtor Function não criam closures para o seu contexto de criação; elas sempre são criadas no escopo global. Quando executadas, elas terão acesso apenas às suas variáveis locais ou globais, não terão acesso às variáveis do escopo na qual o construtor Function foi chamado. Isto é diferente de usar eval com o código de uma expressão de função.
    Invocar o construtor Function como uma função (sem usar o operador new) tem o mesmo efeito de chamá-la como um construtor.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades e Métodos da Function----------
    O objeto global Function não tem métodos ou propriedades próprias, no entanto, como ela é uma função, ela herda alguns métodos e propriedades através do prototype chain do Function.prototype.
*/
/*------------------------------------------------------*/
/*
    ----------Function prototype object----------
    -----Propriedades-----
    Function.arguments -> An array corresponding to the arguments passed to a function. This is deprecated as property of Function. Use the arguments object available within the function instead.
    Function.caller -> Specifies the function that invoked the currently executing function.
    Function.length -> Specifies the number of arguments expected by the function.
    Function.name -> The name of the function.
    Function.displayName -> The display name of the function.
    Function.prototype.constructor -> Specifies the function that creates an object's prototype. See Object.prototype.constructor for more details.

    -----Métodos-----
    Function.prototype.apply() -> Calls a function and sets its this to the provided value, arguments can be passed as an Array object.
    Function.prototype.bind() -> Creates a new function which, when called, has its this set to the provided value, with a given sequence of arguments preceding any provided when the new function was called.
    Function.prototype.call() -> Calls (executes) a function and sets its this to the provided value, arguments can be passed as they are.
    Function.prototype.isGenerator() -> Returns true if the function is a generator; otherwise returns false.
    Function.prototype.toSource() -> Returns a string representing the source code of the function. Overrides the Object.prototype.toSource method.
    Function.prototype.toString() -> Returns a string representing the source code of the function. Overrides the Object.prototype.toString method. 
*/
/*------------------------------------------------------*/
/*
    -----Function instances-----
    Function instances inherit methods and properties from Function.prototype. As with all constructors, you can change the constructor's prototype object to make changes to all Function instances.
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos:----------
    -----Exemplos: Especificando argumentos com o construtor Function-----
    O código a seguir cria um objeto Function que recebe dois argumentos.
        // O exemplo pode ser executado direto no seu console JavaScript
        // Cria uma função que recebe 2 argumentos e retorna a soma entre os dois:
        var adder = new Function('a', 'b', 'return a + b');
        // Chamada da função
        adder(2, 6);
        // > 8
    Os argumentos "a" e "b" são os argumentos que serão usados no corpo da função, "return a + b".

    -----Exemplo: Um atalho recursivo para modificar o DOM em massa-----
    Creating functions with the Function constructor is one of the ways to dynamically create an indeterminate number of new objects with some executable code into the global scope from a function. The following example (a recursive shortcut to massively modify the DOM) is impossible without the invocation of the Function constructor for each new query if you want to avoid closures.
        <!doctype html>
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>MDN Example - a recursive shortcut to massively modify the DOM</title>
        <script type="text/javascript">
        var domQuery = (function() {
        var aDOMFunc = [
            Element.prototype.removeAttribute,
            Element.prototype.setAttribute,
            CSSStyleDeclaration.prototype.removeProperty,
            CSSStyleDeclaration.prototype.setProperty
        ];

        function setSomething(bStyle, sProp, sVal) {
            var bSet = Boolean(sVal), fAction = aDOMFunc[bSet | bStyle << 1],
                aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
                aNodeList = bStyle ? this.cssNodes : this.nodes;

            if (bSet && bStyle) { aArgs.push(''); }
            for (
            var nItem = 0, nLen = this.nodes.length;
            nItem < nLen;
            fAction.apply(aNodeList[nItem++], aArgs)
            );
            this.follow = setSomething.caller;
            return this;
        }

        function setStyles(sProp, sVal) { return setSomething.call(this, true, sProp, sVal); }
        function setAttribs(sProp, sVal) { return setSomething.call(this, false, sProp, sVal); }
        function getSelectors() { return this.selectors; };
        function getNodes() { return this.nodes; };

        return (function(sSelectors) {
            var oQuery = new Function('return arguments.callee.follow.apply(arguments.callee, arguments);');
            oQuery.selectors = sSelectors;
            oQuery.nodes = document.querySelectorAll(sSelectors);
            oQuery.cssNodes = Array.prototype.map.call(oQuery.nodes, function(oInlineCSS) { return oInlineCSS.style; });
            oQuery.attributes = setAttribs;
            oQuery.inlineStyle = setStyles;
            oQuery.follow = getNodes;
            oQuery.toString = getSelectors;
            oQuery.valueOf = getNodes;
            return oQuery;
        });
        })();
        </script>
        </head>

        <body>

        <div class="testClass">Lorem ipsum</div>
        <p>Some text</p>
        <div class="testClass">dolor sit amet</div>

        <script type="text/javascript">
        domQuery('.testClass')
        .attributes('lang', 'en')('title', 'Risus abundat in ore stultorum')
        .inlineStyle('background-color', 'black')('color', 'white')('width', '100px')('height', '50px');
        </script>
        </body>

        </html>
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/