/* ----------Boolean---------- */
console.log('----------Boolean----------');
/*
    ----------Boolean----------
    O objeto Boolean é um objeto wrapper para um valor booleano.
*/
/*------------------------------------------------------*/
/*
    ----------Sintaxe----------
    new Boolean([value])
    Parâmetros
        value -> Opcional. O valor inicial do objeto Boolean. 
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    O valor passado como primeiro parâmetro é convertido para um valor boleano, se necessário. Se o valor é omitido ou é 0, -0, null, false, NaN, undefined ou é uma
    string vazia(""), o objeto terá um valor inicial de false. Todos outros valores, incluindo qualquer objeto ou string "false",  criam um objeto com valor inicial true.
    Não confunda os valores primitivos Boolean true e false com os valores true and false do objeto Boolean.
    Qualquer objeto cujo o valor não é undefined ou null, incluindo um objeto Boolean que o valor seja false, é avaliado para true quando passa por uma declaração
    condicional. Por exemplo, a condição a seguir if a declaração é avaliada como true:
    var x = new Boolean(false);
        if (x) {
            // esse código é executado
        }
    Esse comportamento não se aplica aos primitivos Boolean. Por exemplo, a condição a seguir if a declaração é avaliada como false:
        var x = false;
        if (x) {
            // esse código não é executado
        }
    Não use um objeto Boolean para converter um valor não-boleano para um valor boleano. Ao invés disso use Boolean como uma função para executar essa tarefa:
        var x = Boolean(expression);     // preferido
        var x = new Boolean(expression); // não use
    Se você especificar qualquer objeto, incluindo um objeto Boolean cujo valor é false, como valor inicial de um objeto Boolean,
    o novo objeto Boolean terá o valor de true.
        var myFalse = new Boolean(false);   // valor inicial false
        var g = new Boolean(myFalse);       // valor inicial true
        var myString = new String('Hello'); // objeto String
        var s = new Boolean(myString);      // valor inicial true
    Não use um um objeto Boolean no lugar de um primitivo Boolean.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades----------    
        Boolean.length -> Propriedade Length cujo valor é 1.
        Boolean.prototype -> Representa o protótipo para o construtor Boolean. 
*/
/*------------------------------------------------------*/
/*
    ----------Instâncias Boolean----------
    Todas instâncias Boolean herdam de Boolean.prototype. Assim como todos os construtores, o protótipo do objeto dita as propriedades e métodos herdados.

    -----Propriedades-----
    Boolean.prototype.constructor -> Returns the function that created an instance's prototype. This is the Boolean function by default.

    -----Métodos-----
    Boolean.prototype.toSource() -> Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object.
    Overrides the Object.prototype.toSource() method.
    Boolean.prototype.toString() -> Returns a string of either "true" or "false" depending upon the value of the object. Overrides the Object.prototype.toString() method.
    Boolean.prototype.valueOf() -> Returns the primitive value of the Boolean object. Overrides the Object.prototype.valueOf() method. 
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    -----Criando objetos Boolean com um valor inicial false-----
        var bNoParam = new Boolean();
        var bZero = new Boolean(0);
        var bNull = new Boolean(null);
        var bEmptyString = new Boolean('');
        var bfalse = new Boolean(false);
    -----Criando objetos Boolean com um valor inicial true-----
        var btrue = new Boolean(true);
        var btrueString = new Boolean('true');
        var bfalseString = new Boolean('false');
        var bSuLin = new Boolean('Su Lin');
        var bArrayProto = new Boolean([]);
        var bObjProto = new Boolean({});
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/