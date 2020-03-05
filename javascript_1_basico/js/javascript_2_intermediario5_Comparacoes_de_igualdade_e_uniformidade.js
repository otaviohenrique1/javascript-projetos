/* ----------Comparações de igualdade e uniformidade---------- */
console.log('----------Comparações de igualdade e uniformidade----------');
/*
    ----------Comparações de igualdade e uniformidade----------
    JavaScript fornece três diferentes operações de comparação de valores:
        -igualdade estrita (ou "três iguais" ou "identidade") usando ===,
        -igualdade ampla ("dois iguais") usando ==,
        -e Object.is (novo no ECMAScript 6).
    A escolha de qual operação usar depende da ordem de comparação que você está procurando executar.

    Em resumo, dois iguais irá realizar uma conversão de tipo ao comparar duas coisas; três iguais irá fazer a mesma comparação, sem conversão de tipo
    (simplesmente retornando false se os tipos forem diferentes); e Object.is irá se comportar da mesma forma que três iguais, mas com tratamento especial
    para NaN e -0 e +0 de modo que os dois últimos não são referidos como sendo o mesmo, enquanto Object.is(NaN, NaN) será true.
    (Comparando NaN com NaN ordinariamente - ou seja, usando tanto iguais duplo ou iguais triplo - avalia como false, porque IEEE 754 diz isso.)
    Note que a distinção entre todos eles têm a ver com seu manuseio dos primitivos; nenhum deles compara se os parâmetros são conceitualmente semelhante
    em estrutura. Para qualquer objetos não-primitivo x e y que têm a mesma estrutura, mas são objetos distintos entre si, todas as formas acima será avaliada como falsa.
*/
/*------------------------------------------------------*/
/*
    ----------Igualdade estrita usando ===----------
    Igualdade estrita compara dois valores para a igualdade. Nenhum valor é convertido implicitamente para algum outro valor antes de serem comparados.
    Se os valores tem tipos diferentes, os valores são considerados não-iguais. Caso contrário, se os valores têm o mesmo tipo e não são números,
    eles são considerados iguais, se tiverem o mesmo valor. Finalmente, se ambos os valores são números, eles são considerados iguais se ambos não são NaN e são
    do mesmo valor, ou se um é +0 e outro é -0.
        var num = 0;
        var obj = new String("0");
        var str = "0";
        console.log(num === num); // true
        console.log(obj === obj); // true
        console.log(str === str); // true
        console.log(num === obj); // false
        console.log(num === str); // false
        console.log(obj === str); // false
        console.log(null === undefined); // false
        console.log(obj === null); // false
        console.log(obj === undefined); // false
    Igualdade estrita é quase sempre a operação de comparação correta a se usar. Para todos os valores, exceto os números, ele usa a semântica óbvia: um valor
    é apenas igual a ele mesmo. Para os números que ele usa uma semântica ligeiramente diferente para encobrir dois casos extremamente diferentes. A primeira é
    que o zero de ponto flutuante é positiva ou negativamente assinada. Isso é útil em representar certas soluções matemáticas, mas como a maioria das situações
    não se preocupam com a diferença entre +0 e -0, igualdade estrita trata-os como o mesmo valor. A segunda é que ponto flutuante inclui o conceito de um valor
    não-numérico, NaN, para representar a solução para certos problemas matemáticos mal definidos: infinito negativo adicionado ao infinito positivo, por exemplo.
    Igualdade estrita trata NaN como desigual a qualquer outro valor - incluindo o próprio. (O único caso em que (x! == X) é true é quando x é NaN.)
*/
/*------------------------------------------------------*/
/*
    ----------Igualdade ampla usando ==----------
    Igualdade ampla compara dois valores para a igualdade, após converter ambos os valores para um tipo comum.   Após as conversões (um ou ambos os lados podem
    sofrer conversões), a comparação de igualdade final é realizada exatamente como === executa.  Igualdade ampla é simétrica: A == B sempre tem semântica
    idêntica à B == A para quaisquer valores de A e B.
    A comparação de igualdade é realizado da seguinte forma para os operandos dos vários tipos:
                                        Operand B
  	  	                Undefined 	    Null 	        Number 	            String 	            Boolean 	        Object
Operand A 	Undefined 	true 	        true 	        false 	            false 	            false 	            IsFalsy(B)
            Null 	    true 	        true 	        false 	            false 	            false 	            IsFalsy(B)
            Number 	    false 	        false 	        A === B 	        A ===
                                                                            ToNumber(B) 	    ToNumber(B)
                                                                                                === A 	            ToPrimitive(B) == A
            String 	    false 	        false 	        B === 
                                                        ToNumber(A) 	    A === B 	        ToNumber(A)
                                                                                                === ToNumber(B) 	ToPrimitive(B) == A
            Boolean 	false 	        false 	        ToNumber(A)
                                                        === B 	            ToNumber(A) ===
                                                                            ToNumber(B) 	    A === B 	        false
            Object 	    IsFalsy(A) 	    IsFalsy(A) 	    ToPrimitive(A)
                                                        == B 	            ToPrimitive(A)
                                                                            == B 	            false 	            A === B
    Na tabela acima, ToNumber(A) tenta converter seu argumento para um número antes de comparação. Seu comportamento é equivalente a +A (o operador + unário).
    ToPrimitive(A) tenta converter seu argumento de objeto para um valor primitivo, tentando invocar sequências diferentes de A.toString e A.valueOf métodos em A.
    Tradicionalmente, e de acordo com ECMAScript, todos os objetos são amplamente desiguais a undefined e null. Mas a maioria dos navegadores permitem uma classe
    muito limitada de objetos (especificamente, o objeto document.all para qualquer página), em alguns contextos, para agir como se eles emulassem o valor undefined.
    Igualdade ampla é um desses contexto. Portanto, o método IsFalsy(A) é avaliada como verdadeira se, e somente se, A for um objeto que emula undefined. Em todos os
    outros casos, um objeto não é amplamente igual a undefined ou null.
        var num = 0;
        var obj = new String("0");
        var str = "0";
        console.log(num == num); // true
        console.log(obj == obj); // true
        console.log(str == str); // true
        console.log(num == obj); // true
        console.log(num == str); // true
        console.log(obj == str); // true
        console.log(null == undefined); // true
        // both false, except in rare cases
        console.log(obj == null);
        console.log(obj == undefined);
    
    Alguns desenvolvedores consideram que nunca é uma boa idéia, praticamente, usar a igualdade ampla. O resultado de uma comparação usando a igualdade estrita é
    mais fácil de prever, e como nenhum tipo de coerção ocorre, a avaliação pode ser mais rápida.
*/
/*------------------------------------------------------*/
/*
    ----------Igualdade de mesmo valor----------
    Igualdade de mesmo valor aborda um caso de uso final: determinar se dois valores são funcionalmente idêntico em todos os contextos. (Este caso de uso demonstra
        uma instância de Liskove substitution principle. Princípio de substituição de Liskove.) Uma instância ocorre quando é feita uma tentativa de transformar uma
        propriedade imutável:
        // Add an immutable NEGATIVE_ZERO property to the Number constructor.
        Object.defineProperty(Number, "NEGATIVE_ZERO",
                            { value: -0, writable: false, configurable: false, enumerable: false });

        function attemptMutation(v)
        {
            Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
        }
        Object.defineProperty irá disparar uma exceção ao tentar alterar uma propriedade imutável que realmente iria alterá-lo, mas ele não faz nada se nenhuma mudança
        real for solicitada.  Se v for -0, nenhuma mudança foi solicitada, e nenhum erro será disparado.   Mas se v for +0, Number.NEGATIVE_ZERO não teria mais o seu
        valor imutável.   Internamente, quando uma propriedade imutável é redefinida, o valor recém-especificado é comparado com o valor atual usando a igualdade de
        mesmo valor.
    Igualdade de mesmo valor é fornecida pelo método Object.is.

    Object.defineProperty irá disparar uma exceção ao tentar alterar uma propriedade imutável que realmente iria alterá-lo, mas ele não faz nada se nenhuma mudança real
    for solicitada.  Se v for -0, nenhuma mudança foi solicitada, e nenhum erro será disparado.   Mas se v for +0, Number.NEGATIVE_ZERO não teria mais o seu valor imutável.   Internamente, quando uma propriedade imutável é redefinida, o valor recém-especificado é comparado com o valor atual usando a igualdade de mesmo valor.
    Igualdade de mesmo valor é fornecida pelo método Object.is.
*/
/*------------------------------------------------------*/
/*
    ----------Igualdade abstrata, igualdade estrita, e de mesmo valor na especificação----------
    No ES5, a comparação efetuada por == é descrita em Seção 11.9.3, O Algoritmo da Igualdade Abstrata. A comparação === está em 11.9.6, O Algoritmo de Igualdade Estrita.
    (Veja estes. Eles são breve e legível. Dica: leia o algoritmo de igualdade estrita primeiro.) ES5 também descreve, em Seção 9.12, o Algoritmo de Mesmo Valor para uso
    internamente pelo motor de JS. É em grande parte o mesmo que o Algoritmo de Igualdade Estrita, exceto que 11.9.6.4 e 9.12.4 diferem em manipulação do Number.
    ES6 simplesmente se propõe a expor este algoritmo através de Object.is.
    Podemos ver que com iguais duplos e triplos, com exceção de fazer uma verificação de tipo inicial 11.9.6.1, o Algoritmo de Igualdade Estrita é um subconjunto do
    Algoritmo Igualdade Abstrata, porque 11.9.6.2-7 correspondem a 11.9.3.1.a -f.
*/
/*------------------------------------------------------*/
/*
    ----------Um modelo para a compreensão comparações de igualdade?----------
    Antes do ES6, você poderia dizer, de iguais duplos e iguais triplos, que um é uma versão "melhorada" do outro. Por exemplo, alguém poderia dizer que dois iguais é
    uma versão estendida de três iguais, porque o anterior faz tudo o que este último faz, mas com conversão de tipo nos seus operandos. Por exemplo, 6 == "6".
    (Alternativamente, alguém poderia dizer que dois iguais é a linha de base, e três iguais são uma versão melhorada, porque requer dois operandos para ser do
        mesmo tipo, por isso adiciona uma restrição extra. Qual deles é o melhor modelo para compreensão depende como você optar por ver as coisas.)
    No entanto, esta forma de pensar sobre os operadores de igualdade embutida não é um modelo que pode ser esticado para permitir um lugar para Object.is de ES6
    neste "espectro". Object.is não é simplesmente "mais frouxo" que dois iguais ou "mais rigorosa" do que três iguais, nem se encaixa em algum lugar entre eles
    (ex: sendo tanto mais rigorosas que dois iguais, mas mais flexível do que três iguais). Podemos ver a partir da tabela de comparações de igualdade abaixo que
    isto é devido à forma que Object.is manipula NaN. Observe que, se Object.is(NaN, NaN) avalia como false, nós poderiamos dizer que ele se encaixa no espectro
    amplo/estrito como um forma ainda mais rigorosa das três iguais, um que distingue entre -0 e +0. A manipulação do NaN significa que este é não-verdadeiro,
    entretanto. Infelizmente, Object.is simplesmente tem que ser pensado em termos de suas características específicas, ao invés de sua amplitude ou rigorosidade
    no que diz respeito aos operadores de igualdade.

    Sameness Comparisons
    x 	                        y 	                        == 	                        === 	                        Object.is
    undefined 	                undefined 	                true 	                    true 	                        true
    null 	                    null 	                    true 	                    true 	                        true
    true 	                    true 	                    true 	                    true 	                        true
    false 	                    false 	                    true 	                    true 	                        true
    "foo" 	                    "foo" 	                    true 	                    true 	                        true
    { foo: "bar" } 	            x 	                        true 	                    true 	                        true
    0 	                        0 	                        true 	                    true 	                        true
    +0 	                        -0 	                        true 	                    true 	                        false
    0 	                        false 	                    true 	                    false 	                        false
    "" 	                        false 	                    true 	                    false 	                        false
    "" 	                        0 	                        true 	                    false 	                        false
    "0" 	                    0 	                        true 	                    false 	                        false
    "17" 	                    17 	                        true 	                    false 	                        false
    [1,2] 	                    "1,2" 	                    true 	                    false 	                        false
    new String("foo") 	        "foo" 	                    true 	                    false 	                        false
    null 	                    undefined 	                true 	                    false 	                        false
    null 	                    false 	                    false 	                    false 	                        false
    undefined 	                false 	                    false 	                    false 	                        false
    { foo: "bar" } 	            { foo: "bar" } 	            false 	                    false 	                        false
    new String("foo") 	        new String("foo") 	        false 	                    false 	                        false
    0 	                        null 	                    false 	                    false 	                        false
    0 	                        NaN 	                    false 	                    false 	                        false
    "foo" 	                    NaN 	                    false 	                    false 	                        false
    NaN 	                    NaN 	                    false 	                    false 	                        true
*/
/*------------------------------------------------------*/
/*
    ----------Quando usar Object.is ao invés de três iguais----------
    Além da forma como trata NaN, geralmente, a única vez que comportamento especial do Object.is em direção a zeros é provável que seja interessante é na
    busca de determinados regimes de meta-programação, especialmente em relação descritores de propriedade quando é desejável para o seu trabalho para espelhar
    algumas das características de Object.defineProperty. Se o seu caso de uso não exige isso, sugere-se a evitar Object.is e usar === em vez disso. Mesmo se suas
    exigências envolver com comparações entre dois valores NaN avaliar para true, geralmente é mais fácil para caso especial o NaN checar (usando o isNaN método
    disponível a partir de versões anteriores do ECMAScript) do que está a resolver como cálculos circundantes podem afetar o sinal de todos os zeros que você
    encontra em sua comparação.
    Aqui está uma lista exaustiva de métodos e operadores integrados que pode causar uma distinção entre -0 e +0 a manifestar-se em seu código:
    - (negação unário)
        É óbvio que negando 0 produz -0. Mas a abstração de uma expressão pode causar -0 a fluência em quanto você não percebe isso. Por exemplo, considere:
            let stoppingForce = obj.mass * -obj.velocity
        If obj.velocity is 0 (ou calcula para 0), um -0 é introduzido naquele lugar e propaga-se em stoppingForce.
    Math.atan2
    Math.ceil
    Math.pow
    Math.round
        É possível que um -0 para ser introduzido em uma expressão como um valor de retorno desses métodos, em alguns casos, mesmo quando nenhum -0 exista como
        um dos parâmetros. Por exemplo, usando Math.pow para levantar -Infinity para o poder de qualquer, expoente ímpar negativo avaliada como -0. Consulte a
        documentação para os métodos individuais.
    
    Math.floor
    Math.max
    Math.min
    Math.sin
    Math.sqrt
    Math.tan
        É possível obter um -0 valor de retorno para fora destes métodos em alguns casos em que um -0 existe como um dos parâmetros. Por exemplo, Math.min(-0, +0)
        resulte em -0. Consulte a documentação para os métodos individuais.
    ~
    <<
    >>
        Cada um destes operadores usa o algoritmo ToInt32 internamente. Uma vez que existe apenas uma representação para 0 no tipo integer de 32 bits interno, -0 não vai
        sobreviver a uma ida e volta após uma operação inversa. Por exemplo, tanto Object.is(~~(-0), -0) e Object.is(-0 << 2 >> 2, -0) avaliar como false.
    Baseando-se em Object.is quando a sinalização de zeros não é levado em conta podem ser perigosos. Claro que, quando a intenção é fazer a distinção entre -0 e +0, que
    faz exatamente o que é desejado.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/