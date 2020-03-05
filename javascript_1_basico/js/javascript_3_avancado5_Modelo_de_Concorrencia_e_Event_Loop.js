/* ----------Modelo de Concorrência e Event Loop---------- */
console.log('----------Modelo de Concorrência e Event Loop----------');
/*
    ----------Modelo de Concorrência e Event Loop----------
    O JavaScript possui um modelo de concorrência baseado em um "event loop" (laço de eventos, em Português). Este modelo é bem diferente de outras linguagens,
    como C ou Java, por exemplo.
*/
/*------------------------------------------------------*/
/*
    ----------Conceitos de runtime (tempo de execução)----------
    Os próximos tópicos irão explicar teoricamente o modelo. Interpretadores modernos de JavaScript implementam e otimizam fortemente as semânticas descritas.
    
    -----Pilha (Stack)-----
    As chamadas de funções criam uma pilha de quadros.
        function foo(b){
            const a = 12;
            return a + b + 35;
        }
        function bar(x){
            const m = 4;
            return foo(m * x);
        }

    console.log(bar(21));

    Quando chamamos a função bar, o primeiro quadro é criado contendo o argumentos e as variáveis locais de bar. Quando a bar chama  foo, o segundo quadro é criado
    e é colocado no topo da pilha contendo os argumentos e a variáveis locais de foo. Quando foo retorna, o quadro do topo é removido da pilha
    (deixando apenas o quadro da chamada de bar). Quando bar retorna, a pilha fica vazia.

    -----Heap-----
    Os objetos são alocados na pilha, que é apenas um nome para denotar uma grande região (geralmente) não estruturada de memória.

    -----Fila (Queue)-----
    O runtime do JavaScript contém uma fila de mensagens, que é uma lista de mensagens a serem processadas. Para cada mensagem, é associada uma função.
    Quando a pilha está vazia, uma mensagem é removida da fila e é processada. O processamento consiste em chamar a função associada
    (criando assim um quadro inicial na pilha). O processamento das mensagens termina quando a pilha se torna vazia de novo.
*/
/*------------------------------------------------------*/
/*
    ----------Event loop----------
    O event loop tem esse nome pela forma que ele normalmente é implementado, geralmente é semelhante a:
        while(queue.waitForMessage()){
            queue.processNextMessage();
        }
    queue.waitForMessage espera, de maneira síncrona (simultânea), pela chegada de uma mensagem.

    -----"Run-to-completion"-----
    Cada mensagem é processada completamente antes de outra mensagem ser processada. Isso oferece um bom fundamento para quando você estiver pensando sobre
    o seu programa, incluindo o fato de que, independente de quando uma função é executada, ela não pode ser interrompida e irá executar completamente antes
    que outro código execute (e modifique dados que a função manipule). Isso é diferente do C, por exemplo, onde se a função estiver sendo executada em uma thread,
    ela pode ser interrompida a qualquer momento para executar outro código em outra thread.
    O lado negativo deste modelo é que se uma mensagem toma muito tempo para completar, a aplicação web fica indisponível para processar as interações do usuário,
    como cliques ou rolagens. O navegador mitiga este problema através do diálogo "um script está tomando muito tempo para executar". Uma boa prática a seguir
    é fazer o processamentos de mensagem breve, ou se possível, cortar uma mensagem em múltiplas mensagens.

    -----Adicionando mensagens-----
    Nos navegadores, as mensagens são adicionadas a qualquer momento que um evento ocorra, se este possuir um "listener". Caso não possua, o evento será perdido.
    Então clicar em um elemento que possui um evento de clique irá adicionar uma mensagem, igualmente como qualquer outro evento.
    Chamar setTimeout irá adicionar uma mensagem à fila, logo depois de passar o tempo, descrito  no segundo argumento dos parâmetros. Se não existir outra mensagem
    na fila, a mensagem será processada no mesmo momento; no entanto; se existir mensagens, a instrução setTimeout terá que esperar até que as outras mensagens sejam
    processadas. Por este motivo, o segundo argumento garante o tempo minimo e não o tempo exato.

    -----Intervalos de zero segundos-----
    Escrever setTimeout com intervalo de 0 (zero) milissegundos não significa, necessariamente, que o callback irá ser disparado após este intervalo. A execução depende
    do número de tarefas aguardando execução na fila. No exemplo abaixo, a mensagem ''Essa é só uma mensagem'' será escrita no console antes da mensagem no callback ser
    processada, isso acontece porque o intervalo definido na função indica o tempo mínimo necessário para que a aplicação processe a requisição,
    mas não é um tempo garantido. Basicamente, a função setTimeout precisa esperar até que todas as tarefas na fila completem antes, mesmo que você tenha
    especificado um tempo limite de 0 milissegundos em sua função setTimeout.
        console.log('Esse é o início');

        setTimeout(cb => {
            console.log('Essa é uma mensagem do callback');
        });

        console.log('Essa é só uma mensagem qualquer');

        setTimeout(cb1 => {
            console.log('Essa é uma mensagem do callback 1');
        }, 0);

        console.log('Esse é o fim');
    
    -----Múltiplos runtimes comunicando-se em conjunto-----
    Uma web worker ou um iframe com uma diferente origem (cross-origin) tem as suas próprias pilhas, heaps e filas de messagens. Dois runtimes distintos podem somente
    comunicar-se através do envio de messagens, via método postMessage. Este método adiciona uma mensagem para um outro runtime, se este escutar os eventos message.
*/
/*------------------------------------------------------*/
/*
    ----------Nunca bloqueia----------
    Uma propriedade muito interessante do modelo de "event loop" em JavaScript, e diferente de muitas outras linguagens, é que nunca bloqueia.
    A manipulação de I/O  é tipicamente realizada através de eventos e callbacks, então quando uma aplicação está esperando por uma consulta IndexedDB
    retornar ou uma requisição XHR retornar, este ainda pode processar outras coisas, como as ações do usuário.
    Exceções de legado existem, como por exemplo, alert ou XHR síncrono, mas é considerado uma boa prática evitá-los. Tome cuidado,  exceções a exceção existem
    (mas geralmente são, mais do que qualquer coisa, bugs de implementação).
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/