/* ----------Operadores Lógicos---------- */
console.log('----------Operadores Lógicos----------');
/*
    ----------Resumo----------
    Operadores lógicos são tipicamente usados com valores Booleanos (lógicos). Quando eles o são, retornam um valor booleano. Porém, os operadores && e || de
    fato retornam o valor de um dos operandos especificos, então se esses operadores são usados com valores não booleanos, eles podem retornar um valor não booleano.
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Os operadores lógicos são descritos na tabela abaixo:
    Operador 	        Utilização 	            Descrição
    Logical AND (&&) 	expr1 && expr2 	        Retorna expr1 se essa pode ser convertido para falso; senão, retorna expr2. Dessa forma, quando usado para valores
    Booleanos, && retorna verdadeiro se ambos os operandos forem verdadeiro ; senão, retorna falso.
    Logical OR (||) 	expr1 || expr2 	        Retorna expr1 se essa pode ser convertido para verdadeiro; senão, retorna expr2. Dessa forma, quando usado para valores
    Booleanos, || retorna verdadeiro se qualquer dos operandos for verdadeiro; se ambos são falso, retorna falso.
    Logical NOT (!) 	!expr 	                Retorna falsose o seu operando pode ser convertido para verdadeiro; senão, retorna verdadeiro.

    Se um valor pode ser convertido para verdadeiro, este valor é chamado de truthy. Se um valor pode ser convertido para falso, este valor é chamado de falsy.
    Exemplos de expressões que podem ser convertidas para falso são:
        -null;
        -NaN;
        -0;
        -string vazia (""); 
        -undefined.
    Mesmo que os operadores && and || possam ser utilizados com operandos que não são valores Booleanos, eles ainda podem ser considerados como operadores booleanos
    visto que seus valores de saída sempre podem ser convertidos em valores booleanos.

    -----Avaliação de Curto-Circuito (Short-Circuit)-----
    Como as expressões lógicas são avaliadas da esquerda pra direita, elas são testadas para possível avaliação de "curto-circuito" ("short-circuit") utilizando
    as seguintes regras:

    falso && (qualquer coisa)  é avaliado como falso através de curto-circuito.
    true || (qualquer coisa) é avaliado como verdadeiro através de curto-circuito.

    As regras de lógica garantem que essas avaliações estejam sempre corretas. Repare que a porção qualquer coisa das expressões acima não é avaliada,
    logo qualquer problema oriundo de tê-lo feito não é consumado. Note também  que a parte qualquer coisa das expressões acima pode ser qualquer expressão
    lógica unitária (conforme é indicado pelos parênteses).

    Por exemplo, as duas funções a seguir são equivalentes.
        function shortCircuitEvaluation() {  
            // logical OR (||)
            doSomething() || doSomethingElse();
            // logical AND (&&)
            doSomething() && doSomethingElse();
        }

        function equivalentEvaluation() {
            // logical OR (||)
            var orFlag = doSomething();
            if (!orFlag) {
                doSomethingElse();
            }
            // logical AND (&&)
            var andFlag = doSomething();
            if (andFlag) {
                doSomethingElse();
            }
        }
    
    Contudo, as expressões a seguir não são equivalentes, devido a procedência do operador, e reforçam a importância de que o operador do lado direito
    (right hand) seja uma única expressão (agrupada com o uso de parênteses, caso seja necessário).
        false && true || true       // retorna true
        false && (true || true)     // retorna falso

    -----AND Lógico (&&)-----
    O código a seguir demonstra exemplos do operador && (AND lógico).
*/
// a1 = true  && true       // t && t retorna true
// a2 = true  && false      // t && f retorna false
// a3 = false && true       // f && t retorna false
// a4 = false && (3 == 4)   // f && f retorna false
// a5 = 'Cat' && 'Dog'      // t && t retorna "Dog"
// a6 = false && 'Cat'      // f && t retorna false
// a7 = 'Cat' && false      // t && f retorna false
// a8 = ''    && false      // f && f retorna ""
// a9 = false && ''         // f && t retorna false
/*
    -----OR Lógico (||)Section-----
    O código a seguir demonstra exemplos do operador || (OR lógico).
*/
// o1 = true  || true       // t || t retorna true
// o2 = false || true       // f || t retorna true
// o3 = true  || false      // t || f retorna true
// o4 = false || (3 == 4)   // f || f retorna false
// o5 = 'Cat' || 'Dog'      // t || t retorna "Cat"
// o6 = false || 'Cat'      // f || t retorna "Cat"
// o7 = 'Cat' || false      // t || f retorna "Cat"
// o8 = ''    || false      // f || f retorna false
// o9 = false || ''         // f || f retorna ""
/*
    -----NOT Logico (!)Section-----
    O código a seguir demonstra exemplos do operador ! (NOT lógico) .
*/
// n1 = !true               // !t returns false
// n2 = !false              // !f returns true
// n3 = !'Cat'              // !t returns false
/*
    -----Regras de conversãoSection-----
    -----Convertendo AND para OR-----
    A operação a seguir, envolvendo Booleanos:
        bCondition1 && bCondition2
    é sempre igual a:
        !(!bCondition1 || !bCondition2)

    -----Convertendo OR to AND-----
    A operação a seguir, envolvendo Booleanos:
        bCondition1 || bCondition2
    é sempre igual a:
        !(!bCondition1 && !bCondition2)

    -----Convertendo entre dois NOT-----
    A seguinte operação envolvendo Booleanos:
        !!bCondition
    é sempre igual a:
        bCondition

    -----Removendo parenteses aninhados-----
    Como as expressões lógicas são avaliadas da esquerda pra direita, é sempre possível remover os parênteses de uma expressão complexa seguindo algumas regras:

    -----Removendo AND aninhado-----
    A seguinte operação composta envolvendo Booleanos:
        bCondition1 || (bCondition2 && bCondition3)
    é igual a :
        bCondition1 || bCondition2 && bCondition3

    -----Removendo OR aninhado-----
    A operação composta a seguir, envolvendo Booleanos:
        bCondition1 && (bCondition2 || bCondition3)
    é sempre igual a:
        !(!bCondition1 || !bCondition2 && !bCondition3)
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/