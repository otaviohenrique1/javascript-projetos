/* ----------Closures---------- */
console.log('----------Closures----------');
/*
    ----------Closures----------
    Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
*/
/*------------------------------------------------------*/
/*
    ----------Escopo léxico----------
    Considere a função abaixo:
    function init() {
        var name = "Mozilla";
        function displayName() {
            alert(name);
        }
        displayName();
    }
    init();
    A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada
    (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName()
    não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.
    Rode o código e veja que isso funciona. Este é um exemplo de escopo léxico : em JavaScript, o escopo de uma variável é definido por sua localização
    dentro do código fonte (isto é aparentemente léxico ) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.
*/
/*------------------------------------------------------*/
/*
    ----------Closure----------
    Agora considere o seguinte exemplo:
    function makeFunc() {
        var name = "Mozilla";
        function displayName() {
            alert(name);
        }
        return displayName;
    }
    var myFunc = makeFunc();
    myFunc();

    Se você rodar este código o mesmo terá exatamente o mesmo efeito que o init() do exemplo anterior: a palavra "Mozilla" será mostrada na caixa de alerta.
    O que é diferente - e interessante - é o fato de que a função interna do displayName() foi retornada da função externa antes de ser executada.
    Pode parecer não muito intuitivo de que o código de fato funciona. Normalmente variáveis locais a uma função apenas existem pela duração da execução da mesma.
    Uma vez que makeFunc() terminou de executar, é razoável esperar que a variável name não será mais necessária. Dado que o código ainda funciona como o esperado,
    este não é o caso.
    A solução para tal problema é que a função myFunc tournou-se uma closure. Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas
    coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a
    função foi criada. Neste caso, myFunc é a closure que incorpora tanto a função displayName quanto a palavra Mozilla que existia quando a closure foi criada.
    Aqui temos um exemplo um pouco mais interessante, a função makeAdder:
        function makeAdder(x) {
            return function(y) {
                return x + y;
            };
        }
        var add5 = makeAdder(5);
        var add10 = makeAdder(10);
        print(add5(2));  // 7
        print(add10(2)); // 12
    
    Neste exemplo definimos a função makeAdder(x) que toma um único argumento x e retorno uma nova função. A função retornada toma então um único argumento, y,
    e retorna então a soma de x e de y.
    Na essência o makeAdder trata-se de uma função fábrica - irá construir outras funções que podem adicionar um determinado valor específico a seu argumento.
    No exemplo acima usamos a fábrica de funções para criar duas novas funções - uma que adiciona 5 ao argumento, e outra que adiciona 10.
    Ambas as funções add5 e add10 são closures. Compartilham o mesmo corpo de definição de função mas armazenam diferentes ambientes. No ambiente da add5,
    por exemplo, x equivale a 5, enquanto na add10 o valor de x é 10.
*/
/*------------------------------------------------------*/
/*
    ----------Closures na prática----------
    Esta é a teoria — mas closures são realmente úteis? Vamos considerar suas aplicações práticas. Uma closure deixa você associar dados (do ambiente) com uma
    função que trabalha estes dados. Isto está diretamente ligado com programação orientada a objetos, onde objetos nos permitem associar dados
    (as propriedades do objeto) utilizando um ou mais métodos.
    Consequentemente, você pode utilizar uma closure em qualquer lugar onde você normalmente utilizaria um objeto de único método.
    Situações onde você poderia utilizar isto são comuns em ambientes web. Muitos códigos escrito em JavaScript para web são baseados em eventos - nós definimos
    algum comportamento e então, o atribuimos a um evento que será disparado pelo usuário (quando uma tecla for pressionada, por exemplo). Nosso código normalmente
    é utilizado como callback: uma função que será executada como resposta ao evento.
    Aqui temos um exemplo prático: suponha que queremos adicionar alguns botões para ajustar o tamanho do texto de uma página. Um jeito de fazer seria especificar
    o tamanho da fonte no elemento body e então definir o tamanho dos outros elementos da página (os cabeçalhos, por exemplo) utilizando a unidade relativa em:
        body {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 12px;
        }
        h1 {
            font-size: 1.5em;
        }
        h2 {
            font-size: 1.2em;
        }

    Nossos botões interativos de tamanho de texto podem alterar a propriedade font-size do elemento body, e os ajustes serão refletidos em outros elementos
    graças à unidade relativa.
    O código JavaScript:
        function makeSizer(size) {
            return function() {
                document.body.style.fontSize = size + 'px';
            };
        }

        var size12 = makeSizer(12);
        var size14 = makeSizer(14);
        var size16 = makeSizer(16);

    size12, size14 e size16 agora são funções que devem redimensionar o texto do elemento body para 12.14 e 16 pixels respectivamente. Nós podemos designá-las
    a botões (neste caso, links) como feito a seguir:
        document.getElementById('size-12').onclick = size12;
        document.getElementById('size-14').onclick = size14;
        document.getElementById('size-16').onclick = size16;
        <a href="#" id="size-12">12</a>
        <a href="#" id="size-14">14</a>
        <a href="#" id="size-16">16</a>
*/
/*------------------------------------------------------*/
/*
    ----------Emulando métodos privados com closures----------
    Linguagens como Java oferecem a habilidade de declarar métodos privados, o que significa que eles só poderão ser chamados por outros métodos na mesma classe.
    O JavaScript não oferece uma maneira nativa de fazer isso, mas é possível emular métodos privados usando closures. Métodos privados não são somente úteis para
    restringir acesso ao código: eles também oferecem uma maneira eficaz de gerenciar seu namespace global, evitando que métodos não essenciais baguncem a interface
    pública do seu código.
    Veja como definir algumas funções públicas que acessam funções e variáveis privadas, usando closures que também é conhecido como module pattern:
        var Counter = (function() {
            var privateCounter = 0;
            function changeBy(val) {
                privateCounter += val;
            }
            return {
                increment: function() {
                    changeBy(1);
                },
                decrement: function() {
                    changeBy(-1);
                },
                value: function() {
                    return privateCounter;
                }
            }   
        })();
        alert(Counter.value()); // Alerts 0
        Counter.increment();
        Counter.increment();
        alert(Counter.value()); // Alerts 2
        Counter.decrement();
        alert(Counter.value()); // Alerts 1
    Tem muita coisa acontecendo aqui. Nos exemplos anteriores cada closure teve o seu próprio ambiente; aqui nós criamos um ambiente único que é compartilhado
    por três funções: Counter.increment, Counter.decrement e Counter.value.
    O ambiente compartilhado é criado no corpo de uma função anônima, da qual é executada assim que é definida. O ambiente contém dois itens privados: uma variável
    chamada privateCounter e uma função chamada changeBy. Nenhum desses itens privados podem ser acessados diretamente de fora da função anônima. Ao invés disso,
    eles devem ser acessados pelas três funções públicas que são retornadas.
    Aquelas três funções públicas são closures que compartilham o mesmo ambiente. Graças ao escopo léxico do JavaScript, cada uma delas tem acesso a variável
    privateCounter variable e à função changeBy.
    Você perceberá que estamos definindo uma função anônima que cria um contador , e então o executamos imediatamente e atribuímos o resultado à variável Counter.
    Poderíamos armazenar essa função em uma variável separada e usá-la para criar diversos contadores.
        var makeCounter = function() {
            var privateCounter = 0;
            function changeBy(val) {
                privateCounter += val;
            }
            return {
                increment: function() {
                    changeBy(1);
                },
                decrement: function() {
                    changeBy(-1);
                },
                value: function() {
                    return privateCounter;
                }
            }  
        };

        var Counter1 = makeCounter();
        var Counter2 = makeCounter();
        alert(Counter1.value()); // Alerts 0
        Counter1.increment();
        Counter1.increment();
        alert(Counter1.value()); // Alerts 2
        Counter1.decrement();
        alert(Counter1.value()); // Alerts 1
        alert(Counter2.value()); // Alerts 0
    Observe como cada um dos contadores mantém a sua independencia em relação ao outro. Seu ambiente durante a execução da função makeCounter() é diferente
    á cada vez que ocorre. A variável privateCounter contém uma instância diferente a cada vez.
    Usar closures desta maneira oferece uma série de benefícios que estão normalmente associados a programação orientada a objetos, em particular encapsulamento
    e ocultação de dados.
*/
/*------------------------------------------------------*/
/*
    ----------Criando closures dentro de loops: Um erro comum----------
    Antes da introdução da palavra chave let no JavaScript 1.7, um problema comum ocorria com closures quando eram criadas dentro de um loop. Considere o exemplo:
        <p id="help">Helpful notes will appear here</p>
        <p>E-mail: <input type="text" id="email" name="email"></p>
        <p>Name: <input type="text" id="name" name="name"></p>
        <p>Age: <input type="text" id="age" name="age"></p>
        function showHelp(help) {
            document.getElementById('help').innerHTML = help;
        }

        function setupHelp() {
            var helpText = [
                {'id': 'email', 'help': 'Your e-mail address'},
                {'id': 'name', 'help': 'Your full name'},
                {'id': 'age', 'help': 'Your age (you must be over 16)'}
            ];
            for (var i = 0; i < helpText.length; i++) {
                var item = helpText[i];
                document.getElementById(item.id).onfocus = function() {
                    showHelp(item.help);
                }
            }
        }
        setupHelp();
    O array helpText define três dicas úteis, cada uma associada ao ID de um input no documento. O loop percorre essas definições, atrelando um evento onfocus para
    cada um que mostra o método de ajuda associado.
    Se você tentar executar esse código, Você verá que não vai funcionar como esperado. Não importa em qual campo ocorre o focus, a mensagem sobre a sua idade
    será mostrada.
    O motivo disto é que as funções atreladas ao onfocus são closures; elas consistem na definição da função e do ambiente capturado do escopo da função setupHelp.
    Três closures foram criados, mas todos eles compartilham o mesmo ambiente. No momento em que os callbacks do onfocus são executados, o loop segue seu curso e
    então a variável item (compartilhada por todos os três closures) fica apontando para a última entrada na lista helpText.
    Uma solução seria neste caso usar mais closures: em particular, usar uma fábrica de funções como descrito anteriormente:
        function showHelp(help) {
            document.getElementById('help').innerHTML = help;
        }
        function makeHelpCallback(help) {
            return function() {
                showHelp(help);
            };
        }
        function setupHelp() {
            var helpText = [
                {'id': 'email', 'help': 'Your e-mail address'},
                {'id': 'name', 'help': 'Your full name'},
                {'id': 'age', 'help': 'Your age (you must be over 16)'}
            ];
            for (var i = 0; i < helpText.length; i++) {
                var item = helpText[i];
                document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
            }
        }
        setupHelp();
    Isto funciona conforme o esperado. Ao invés dos callbacks compartilharem o mesmo ambiente, a função makeHelpCallback cria um novo ambiente para cada um no
    qual help se refere à string correspondente do array helpText.
*/
/*------------------------------------------------------*/
/*
    ----------Considerações de performance----------
    Não é sábio criar funções dentro de outras funções se os closures não forem necessários para uma tarefa em particular pois ele afetará a performance do
    script de forma bem negativa tanto em velocidade de processamenteo quanto em consumo de memória.
    Por exemplo, ao criar uma nova classe/objeto, os métodos deveriam normalmente estar associados ao protótipo do objeto do que definido no construtor.
    O motivo disso é que sempre que o construtor for chamado os métodos serão reatribuídos (isto é, para cada criação de objeto).
    Considere o seguinte exemplo pouco prático porém demonstrativo:
        function MyObject(name, message) {
            this.name = name.toString();
            this.message = message.toString();
            this.getName = function() {
                return this.name;
            };

            this.getMessage = function() {
                return this.message;
            };
        }
    O código anterior não aproveita os benefícios dos closures e portanto poderia ser reformulado assim:
        function MyObject(name, message) {
            this.name = name.toString();
            this.message = message.toString();
        }
        MyObject.prototype = {
            getName: function() {
                return this.name;
            },
            getMessage: function() {
                return this.message;
            }
        };
    Ou assim:
        function MyObject(name, message) {
            this.name = name.toString();
            this.message = message.toString();
        }
        MyObject.prototype.getName = function() {
            return this.name;
        };
        MyObject.prototype.getMessage = function() {
            return this.message;
        };
    No dois exemplos anteriores, o protótipo herdado pode ser compartilhado por todos os objetos e as definições de métodos não precisam ocorrer sempre
    que o objeto for criado. Veja Detalhes do modelo de objeto para mais detalhes.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/