/* --------------------Math-------------------- */
console.log('----------Math----------');
/*
    Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Ao contrário de outros objetos globais, Math não é um construtor.
    Todas as propriedades e métodos de Math são estáticos. Você pode
    referenciar a constante PI como Math.PI e você pode chamar a função
    de seno como Math.sin(x), onde x  é o argumento do método. Constantes
    são definidas com a precisão total de números reais em JavaScript.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades----------
    console.log('Resultado: ' + Math.E); //Constante de Euler e base dos logaritmos naturais, aproximadamente 2.718.
    console.log('Resultado: ' + Math.LN2); //Logaritmo natural de 2, aproximadamente 0.693.
    console.log('Resultado: ' + Math.LN10); //Logaritmo natural de 10, aproximadamente 2.303.
    console.log('Resultado: ' + Math.LOG2E); //Logaritmo de E na base 2, aproximadamente 1.443.
    console.log('Resultado: ' + Math.LOG10E); //Logaritmo de E na base 10, aproximadamente 0.434.
    console.log('Resultado: ' + Math.PI); //Relação entre a circunferência de um círculo e o seu diâmetro, aproximadamente 3.14159.
    console.log('Resultado: ' + Math.SQRT1_2); //Raiz quadrada de 1/2; Equivale a 1 dividido pela raiz quadrada de 2, aproximadamente 0.707.
    console.log('Resultado: ' + Math.SQRT2); //Raiz quadrada de 2, aproximadamente 1.414.
    Properties inherited from Object:
        constructor, __parent__, __proto__
*/
/*------------------------------------------------------*/
/*
    ----------Métodos----------
    Note que as funções trigonométricas (sin(), cos(), tan(), asin(), acos(), atan(), atan2())
    recebem ou retornam ângulos em radianos. Divida por (Math.PI/180) para converter radianos
    em graus, ou multiplique por esse valor para fazer a conversão inversa.
    console.log('Resultado: ' + Math.abs(-2)); //Retorna o módulo, ou valor absoluto, de um número (|x|), Sintaxe -> var abs = Math.abs(x);.
    console.log('Resultado: ' + Math.acos(-1)); //Retorna o arco-coseno de um número (arccosx), Sintaxe -> Math.acos(x).
    console.log('Resultado: ' + Math.acosh(2)); //Retorna o arco-coseno hiperbólico de um número, Sintaxe -> Math.acosh(x).
    console.log('Resultado: ' + Math.asin(0.5)); //Retorna o arco-seno de um número (arcsinx), Sintaxe -> Math.asin(x).
    console.log('Resultado: ' + Math.asinh(1)); //Retorna o arco-seno hiperbólico de um número, Sintaxe -> Math.asinh(x).
    console.log('Resultado: ' + Math.atan(1)); //Retorna o arco-tangente de um número (arctanx), Sintaxe -> Math.atan(x).
    console.log('Resultado: ' + Math.atanh(0.5)); //Retorna o arco-tangente hiperbólico de um número (arctanx), Sintaxe -> Math.atanh(x).
    console.log('Resultado: ' + Math.atan2(90, 15)); //Retorna o arco-tangente do quociente de seus argumentos, Sintaxe -> Math.atan2(y, x).
    console.log('Resultado: ' + Math.cbrt(2)); // Retorna a raiz cúbica de um número (x raiz 3), Sintaxe -> Math.cbrt(x).
    console.log('Resultado: ' + Math.ceil(7.004)); //Retorna o menor inteiro que é maior ou igual a um número, Sintaxe -> Math.ceil(x) .
    console.log('Resultado: ' + Math.cos(1)); //Retorna o coseno de um número (cosx), Sintaxe -> Math.cos(x).
    console.log('Resultado: ' + Math.cosh(-1)); //Retorna o coseno hiperbólico de um número, Sintaxe -> Math.cosh(x).
    console.log('Resultado: ' + Math.exp(1)); //Retorna ex, onde x é o argumento, e e é a constante de Euler (2.718...), a base do logaritmo natural, Sintaxe -> Math.exp(x).
    console.log('Resultado: ' + Math.expm1(1)); //Retorna ex-1, Sintaxe -> Math.expm1(x).
    console.log('Resultado: ' + Math.floor(45.95)); //Retorna o maior inteiro que é menor ou igual a um número, Sintaxe -> Math.floor(x) .
    console.log('Resultado: ' + Math.fround(1.5)); //Retorna a mais próxima representação de ponto flutuante de precisão-única de um número, Sintaxe -> var singleFloat = Math.fround(doubleFloat);.
    console.log('Resultado: ' + Math.hypot(3, 4, 5)); //Retorna a raiz quadrada da soma dos quadrados dos argumentos, Sintaxe -> Math.hypot([value1[, value2[, ...]]]).
    console.log('Resultado: ' + Math.imul(2, 4)); //Retorna o resultado de uma multiplicação de inteiro de 32-bit, Sintaxe -> var product = Math.imul(a, b);.
    console.log('Resultado: ' + Math.log(10)); //Retorna o logaritmo natural (logex ou lnx) de um número, Sintaxe -> Math.log(x).
    console.log('Resultado: ' + Math.log1p(1)); //Retorna o logaritmo natural de 1 + x (loge(1+x) ou ln(1+x)) de um número, Sintaxe -> Math.log1p(x).
    console.log('Resultado: ' + Math.log10(2)); //Retorna o logaritmo de x na base 10 (log10x), Sintaxe -> Math.log10(x).
    console.log('Resultado: ' + Math.log2(3)); //Retorna o logaritmo de x na base 2 (log2x), Sintaxe -> Math.log2(x).
    console.log('Resultado: ' + Math.max(10, 20)); //Retorna o maior dentre os parâmetros recebidos, Sintaxe -> Math.max([valor1[,valor2, ...]]).
    console.log('Resultado: ' + Math.min(10, -20)); //Retorna o menor dentre os parâmetros recebidos, Sintaxe -> Math.min([valor1[, valor2[, ...]]]).
    console.log('Resultado: ' + Math.pow(7, 2)); //Retorna a base x elevada à potência y do expoente, ou seja, x elevado y, Sintaxe -> Math.pow(base, expoente).
    console.log('Resultado: ' + Math.random()); //Retorna um número pseudo-aleatório entre 0 e 1, Sintaxe -> Math.random().
    console.log('Resultado: ' + Math.round(20.49)); //Retorna o valor arrendodado de x, para o valor inteiro mais próximo, Sintaxe -> Math.round(x).
    console.log('Resultado: ' + Math.sign(3)); //Retorna o sinal de x, indicando se é positivo, negativo ou zero, Sintaxe -> Math.sign(x).
    console.log('Resultado: ' + Math.sin(0)); //Retorna o seno de um número (sinx), Sintaxe -> Math.sin(x).
    console.log('Resultado: ' + Math.sinh(0)); //Retorna o seno hiperbólico de um número (sinhx), Sintaxe -> Math.sinh(x).
    console.log('Resultado: ' + Math.sqrt(9)); //Retorna a raiz quadrada positiva de um número (x), Sintaxe -> Math.sqrt(x).
    console.log('Resultado: ' + Math.tan(9)); //Retorna a tangente de um número (tanx), Sintaxe -> Math.tan(x).
    console.log('Resultado: ' + Math.tanh(0)); //Retorna a tangente hiperbólica de um número (tanhx), Sintaxe -> Math.tanh(x).
    console.log('Resultado: ' + Math.toSource()); //Retorna a string "Math".
    console.log('Resultado: ' + Math.trunc(13.37)); //Retorna a parte inteira de x, removendo quaisquer dígitos fracionários, Sintaxe -> Math.trunc(x).   
    Methods inherited from Object:
        __defineGetter__, __defineSetter__, hasOwnProperty, isPrototypeOf, __lookupGetter__, __lookupSetter__, __noSuchMethod__, propertyIsEnumerable, toSource, toLocaleString, toString, unwatch, valueOf, watch
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/