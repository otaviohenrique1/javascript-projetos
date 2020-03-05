/* ----------Trabalhando com objetos---------- */
console.log('----------Trabalhando com objetos----------');
/*
    ----------Visão geral de objetos----------
    Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados com objetos na vida real. O conceito de objetos em JavaScript
    pode ser entendido com objetos tangíveis da vida real.
    Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades.
    Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

    ----------Objetos e propriedades----------
    Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto.
    Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos.
    As propriedades de um objeto definem as características do objeto. Você acessa as propriedades de um objeto com uma simples notação de ponto:
    nomeDoObjeto.nomeDaPropriedade
    Como as variáveis em JavaScript, o nome do objeto (que poderia ser uma variável normal) e um nome de propriedade diferem em maiúsculas/minúsculas
    (por exemplo, cor e Cor são propriedades diferentes). Você pode definir uma propriedade atribuindo um valor a ela. Por exemplo, vamos criar um objeto
    chamado meuCarro e dar a ele propriedades chamadas fabricacao, modelo, e ano, conforme mostrado a seguir:
*/
    // var meuCarro = new Object();
    // meuCarro.fabricacao = "Ford";
    // meuCarro.modelo = "Mustang";
    // meuCarro.ano = 1969;
/*
    Propriedades não definidas de um objeto são undefined (and not null).
*/
    // meuCarro.semPropriedade;
/*
    Propriedades de objetos em JavaScript podem também ser acessadas ou alteradas usando-se notação de colchetes. Objetos são às vezes chamados de arrays associativos,
    uma vez que cada propriedade é associada com um valor de string que pode ser usado para acessá-la. Então, por exemplo, você poderia acessar as propriedades do objeto
    meuCarro como se segue:
*/
    // meuCarro["fabricacao"] = "Ford";
    // meuCarro["modelo"] = "Mustang";
    // meuCarro["ano"] = 1969;
/*
    Um nome de propriedade de um objeto pode ser qualquer string JavaScript válida, ou qualquer coisa que possa ser convertida em uma string,
    incluindo uma string vazia. No entanto, qualquer nome e propriedade que não é um identificador JavaScript válido (por exemplo, um nome de propriedade
    que tem um espaço ou um hífen, ou que começa com um número) só pode ser acessado(a) usando-se a notação de colchetes. Essa notação é também muito útil
    quando nomes de propriedades devem ser determinados dinamicamente (quando o nome da propriedade não é determinado até o momento de execução).
    Exemplos são mostrados a seguir:
*/
    // var meuObj = new Object(),
    //     str = "minhaString",
    //     aleat = Math.random(),
    //     obj = new Object();
    // meuObj.tipo               = "Sintaxe de ponto";
    // meuObj["data de criacao"] = "String com espaco";
    // meuObj[str]               = "valor de String";
    // meuObj[aleat]             = "Numero Aleatorio";
    // meuObj[obj]               = "Objeto";
    // meuObj[""]                = "Mesmo uma string vazia";
    // console.log(meuObj);
/*
    Você pode também acessar propriedades usando um valor de string que está armazenado em uma variável:
*/
    // var nomeDaPropriedade = "fabricacao";
    // meuCarro[nomeDaPropriedade] = "Ford";
    // nomeDaPropriedade = "modelo";
    // meuCarro[nomeDaPropriedade] = "Mustang";
/*
    Você pode usar a notação de colchetes com o comando for...in para iterar por todas as propriedades enumeráveis de um objeto. Para ilustrar como isso funciona,
    a seguinte função mostra as propriedades de um objeto quando você passa o objeto e o nome do objeto como argumentos para a função:
*/
    // function mostrarProps(obj, nomeDoObj) {
    //     var resultado = "";
    //     for (var i in obj) {
    //         if (obj.hasOwnProperty(i)) {
    //             resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    //         }
    //     }
    //     return resultado;
    // }
/*
    Então, a chamada de função mostrarProps(meuCarro, "meuCarro") retornaria o seguinte:
*/
    // meuCarro.fabricacao = Ford
    // meuCarro.modelo = Mustang
    // meuCarro.ano = 1969
/*------------------------------------------------------*/
/*
    ----------Objetos: tudo----------
    Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined - são tratados como objetos. Eles podem receber propriedades
    (propriedades atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.
*/
/*------------------------------------------------------*/
/*
    ----------Enumerando todas as propriedades de um objeto----------
    Começando com a ECMAScript 5, há três formas nativas de se listar (ou "caminhar por") as propriedades de um objeto:
        -for...in loops -> Esse método caminha por todas as propriedades enumeráveis de um objeto e sua cadeia de protótipos
        -Object.keys(o) -> Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios de um objeto o (mas não na cadeia de protótipos).
        -Object.getOwnPropertyNames(o) -> Esse método retorna um array contendo todos os nomes de propriedades próprios (enumeráveis ou não) de um objeto o.
    Antes, na ECMAScript 5, não existia uma forma nativa de se listar todas as propriedades de um objeto. No entanto, isso pode ser feito com a seguinte função:
*/
    // function listarTodasAsPropriedades(o){     
    // 	var objectoASerInspecionado;     
    // 	var resultado = [];
    // 	for(objectoASerInspecionado = o; objectoASerInspecionado !== null; objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)){  
    // 		resultado = resultado.concat(Object.getOwnPropertyNames(objectoASerInspecionado));  
    // 	}
    // 	return resultado; 
    // }
/*
    Isso pode ser útil para revelar propriedades "escondidadas" (propriedades na cadeia de protótipos que não são acessíveis através do objeto,
    porque outra propriedade possui o mesmo nome anteriormente na cadeia de protótipos). A listagem de propriedades acessíveis só pode ser facilmente
    feita através da remoção de valores duplicados no array.
*/
/*------------------------------------------------------*/
/*
    ----------Criando novos objetos----------
    JavaScript possui um número de objetos pré-definidos. Além disso, você pode criar seus próprios objetos. Você pode criar um objeto usando um objeto inicializador.
    Alternativamente, você pode primeiro criar uma função construtora e depois instanciar um objeto usando aquela função e o operador new.

    -----Usando inicializadores de objeto-----
    Além de criar objetos usando uma função construtora, você pode criar objetos usando um inicializador de objeto. O uso de inicializadores de objeto
    é às vezes conhecido como criar objetos com notação literal. O termo "inicializador de objeto" é consistente com a terminologia usada por C++.
    A sintaxe para um objeto usando-se um inicializador de objeto é:
*/
    // var obj = { propriedade_1:   valor_1,   // propriedade_# pode ser um identificador...
    //     2:            valor_2,   // ou um numero...
    //     // ...,
    //     "propriedade n": valor_n }; // ou uma string
/*
    onde obj é o nome do novo objeto, cada propriedade_i é um identificador (um nome, um número, ou uma string literal), e cada valor_i é uma expressão
    cujo valor é atribuído à propriedade_i. O obj e a atribuição são opcionais; se você não precisa fazer referência a esse objeto em nenhum outro local,
    você não precisa atribuí-lo a uma variável. (Note que você pode precisar colocar o objeto literal entre parentêses se o objeto aparece onde um comando
    é esperado, de modo a não confundir o literal com uma declaração de bloco.)
    Se um objeto é criado com um inicializador de objeto em um script de alto nível, JavaScript interpreta o objeto a cada vez que avalia uma expressão
    contendo o objeto literal. Além disso, um inicializador usado em uma função é criado toda vez que a função é chamada.
    O seguinte comando cria um objeto e o atribui à variável x somente se a expressão cond é verdadeira.
*/
    // if (cond) var x = {hi: "there"};
/*
    O seguinte exemplo cria minhaHonda com três propriedades. Note que a propriedade motor é também um objeto com suas próprias propriedades.
*/
    // var minhaHonda = {cor: "vermelho", rodas: 4, motor: {cilindros: 4, tamanho: 2.2}};
/*
    Você pode também usar inicializadores de objeto para criar arrays. Veja arrays literais.

    -----Usando uma função construtora-----
    Alternativamente, você pode criar um objeto com estes dois passos:
        -Defina o tipo de objeto escrevendo uma função construtora. Há uma forte convenção, e com boa razão, de se usar uma letra inicial maiúscula.
        -Crie uma instância do objeto com new.
    Para definir um tipo de objeto, crie uma função para o tipo de objeto que especifique seu nome, suas propriedades e seus métodos. Por exemplo,
    suponha que você queira xcriar um tipo objeto para carros. Você quer que esse tipo de objeto seja chamado carro, e você quer ele tenha propriedades de marca,
    modelo, e ano. Para fazer isto, você escreveria a seguinte função:
*/
    // function Carro(marca, modelo, ano) {
    //     this.marca = marca;
    //     this.modelo = modelo;
    //     this.ano = ano;
    // }
/*
    Note o uso de this para atribuir valores às propriedades do objeto com base nos valores passados para a função.
    Agora você pode criar um objeto chamado meucarro como se segue:
*/
    // var meucarro = new Carro("Eagle", "Talon TSi", 1993);
/*
    Esse comando cria meucarro e atribui a ele valores especificados para suas propriedade. Então o valor de meucarro.marca é a string "Eagle",
    meucarro.ano é o inteiro 1993, e assim por diante.
    Você pode criar qualquer número de objetos carro com o uso de new. Exemplo,
*/
    // var carroDeKen = new Carro("Nissan", "300ZX", 1992);
    // var carroDeVPG = new Carro("Mazda", "Miata", 1990);
/*
    Um objeto pode ter uma propriedade que por si só também é um objeto. Por exemplo, suponha que você define um objeto chamado pessoa como se segue:
*/
    // function Pessoa(nome, idade, sexo) {
    //     this.nome = nome;
    //     this.idade = idade;
    //     this.sexo = sexo;
    // }
/*
    e então você instancia dois novos objetos pessoa da seguinte forma:
*/
    // var jose = new Pessoa("Jose Silva", 33, "M");
    // var paulo = new Pessoa("Paulo Santos", 39, "M");
/*
    Então, você pode reescrever a definição de carro de modo a incluir uma propriedade dono que recebe um objeto pessoa, como se segue:
*/
    // function Car(marca, modelo, ano, dono) {
    //     this.marca = marca;
    //     this.modelo = modelo;
    //     this.ano = ano;
    //     this.dono = dono;
    // }
/*
    Para instanciar os novos objetos, você então usa o seguinte:
*/
    // var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
    // var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);
/*
    Perceba que ao invés de passar uma string literal ou um valor inteiro na hora de criar os novos objetos, os comandos acima passam
    os objetos jose e paulo como os argumentos para os donos. Então se você quiser descobrir o nome do dono de carro2, você pode acessar a seguinte propriedade:
*/
    // carro2.dono
/*
    Note que você pode sempre adicionar uma propriedade a um objeto definido anteriormente. Por exemplo, o comando
*/
    // carro1.cor = "preto";
/*
    adiciona uma propriedade cor ao carro1, e dá a ele o valor "preto." No entanto, isso não afeta nenhum outro objeto. Para adicionar a nova propriedade
    a todos os objetos do mesmo tipo, você deve adicionar a propriedade na definição do tipo de objeto carro.

    -----Usando o método Object.create-----
    Objetos podem também ser criados usando-se o método Object.create(). Esse método pode ser muito útil, pois permite que você escolha o objeto protótipo
    para o objeto que você quer criar, sem a necessidade de se definir uma função construtora.
*/
    // Encapsulamento das propriedades e métodos de Animal
    // var Animal = {
    //     tipo: "Invertebrados", // Propriedades de valores padrão
    //     qualTipo : function() {  // Método que ira mostrar o tipo de Animal
    //         console.log(this.tipo);
    //     }
    // }
    // Cria um novo tipo de animal chamado animal1
    // var animal1 = Object.create(Animal);
    // animal1.qualTipo(); // Saída:Invertebrados
    // Cria um novo tipo de animal chamado Peixes
    // var peixe = Object.create(Animal);
    // peixe.tipo = "Peixes";
    // fish.qualTipo(); // Saída: Peixes
/*
    -----Herança-----
    Todos os objetos em JavaScript herdam de pelo menos um outro objeto. O objeto "pai" é conhecido como o protótipo, e as propriedades herdadas podem
    ser encontradas no objeto prototype do construtor.
*/
/*------------------------------------------------------*/
/*
    ----------Definindo métodos----------
    Um método é uma função associada a um objeto, ou, simplesmente, um método é uma propriedade de um objeto que é uma função. Métodos são definidos da
    forma que as funções normais são definidas, exceto que eles tenham que ser atribuídos como propriedade de um objeto. São exemplos:
*/
    // nomeDoObjeto.nomedometodo = nome_da_funcao;
    // var meuObjeto = {
    //     meuMetodo: function(parametros) {
            // ...faça algo
    //     }
    // };
/*
    Onde nomeDoObjeto é um objeto existente, nomedometodo é o nome que você atribuiu ao método, e nome_da_funcao é o nome da função.
    Em seguida, você pode chamar o método no contexto do objeto da seguinte forma:
*/
    // objeto.nomedometodo(parametros);
/*
    Você pode definir métodos para um tipo de objeto incluindo uma definição de metodo na função construtora do objeto. Por exemplo, você poderia definir
    uma função que iria formatar e mostrar as propriedades do objeto carro previamente definido; por exemplo,
*/
    // function mostreCarro() {
    //     var resultado = "Um belo " + this.ano + " " + this.fabricacao + " " + this.modelo;
    //     pretty_print(resultado);
    // }
/*
    onde pretty_print é uma função que mostra uma linha horizontal e uma string. Observe o uso de this para referenciar o objeto ao qual o método pertence.
    Você pode fazer desta função um método de carro, adicionando seu estado à definição do objeto.
*/
    // this.mostreCarro = mostreCarro;
/*
    Assim, a definição completa de carro seria agora, parecida com essa:
*/
    // function Carro(fabricacao, modelo, ano, proprietario) {
    //     this.fabricacao = fabricacao;
    //     this.modelo = modelo;
    //     this.ano = ano;
    //     this.proprietario = proprietario;
    //     this.mostreCarro = mostreCarro;
    // }
/*
    Então você pode chamar o método mostreCarro para cada objeto seguinte:
*/
    // carro1.mostreCarro();
    // carro2.mostreCarro();
/*------------------------------------------------------*/
/*
    ----------Usando this para referências de objetosSection----------
    JavaScript tem uma palavra-chave especial, this, que você pode usar dentro de um método para referenciar o objeto corrente. Por exemplo,
    suponha que você tenha uma função chamada validate que valida o valor da propriedade de um objeto, dado o objeto e os valores altos e baixos:
*/
    // function validate(obj, lowval, hival) {
    //     if ((obj.value < lowval) || (obj.value > hival)){
    //         alert("Valor inválido!");
    //     }
    // }
/*
    Então, você poderia chamar validate no manipulador de evento onchange em cada elemento do formulário, usando this para passar o elemento, como no exemplo a seguir:
    <input type="text" name="age" size="3" onChange="validate(this, 18, 99)">
    No geral, this referencia o objeto chamando um método.
    Quando combinado com a propriedade form , this pode referenciar a forma original do objeto atual. No exemplo seguinte, o formulário myForm contém um
    objeto Text e um botão. Quando o usuário clica no botão, o valor do objeto Text é definido como nome do formulário. O manipulador de eventos onclick
    do botão usa this.form para referenciar a forma original, myForm.
    <form name="myForm">
    <p><label>Nome do form:<input type="text" name="text1" value="Beluga"></label>
    <p><input name="button1" type="button" value="Mostre o Nome do Form"
        onclick="this.form.text1.value = this.form.name">
    </p>
    </form>
*/
/*------------------------------------------------------*/
/*
    ----------Definindo getters e setters----------
    Um getter é um método que obtém o valor de uma propriedade específica. Um setter é um método que define o valor de uma propriedade específica.
    Você pode definir getters e setters em qualquer objeto de núcleo pré-definido ou objeto definido pelo usuário que suporta a adição de novas propriedades.
    A sintaxe para definir getters e setters usa a sintaxe literal do objeto.
    O código a seguir ilustra como getters e setters podem funcionar para um objeto o definido pelo usuário.
*/
    // var o = {
    //     a: 7,
    //     get b() { 
    //         return this.a + 1;
    //     },
    //     set c(x) {
    //         this.a = x / 2
    //     }
    // };
    // console.log(o.a); // 7
    // console.log(o.b); // 8
    // o.c = 50;
    // console.log(o.a); // 25
/*
    As propriedades do objeto o são:
        -o.a — um número
        -o.b — um getter que retorna o.a + 1
        -o.c — um setter que define o valor de o.a pela metade do valor definindo para o.c
    Observe que nomes de função de getters e setters definidos em um objeto literal usando "[gs]et property()" (ao contrário de __define[GS]etter__ )
    não são os próprios nomes dos getters, embora a sintaxe [gs]et propertyName(){ } possa  induzir ao erro e você pensar de outra forma.
    Para nomear uma função getter ou setter usando a sintaxe "[gs]et property()", define explicitamente um função nomeada programaticamente usando
    Object.defineProperty (ou o legado fallback Object.prototype.__defineGetter__).
    O código a seguir ilustra como getters e setters podem extender o protótipo Date para adicionar a propriedade ano para todas as instâncias de classes
    Date pré-definidas. Ele usa os métodos getFullYear e setFullYear existentes da classe Date para suportar o getter e setter da propriedade ano.
    Estes estados definem um getter e setter para a propriedade ano:
*/
    // var d = Date.prototype;
    // Object.defineProperty(d, "year", {
    //     get: function() { return this.getFullYear() },
    //     set: function(y) { this.setFullYear(y) }
    // });
/*
    Estes estados usam o getter e setter em um objeto Date:
*/
    // var now = new Date();
    // console.log(now.year); // 2000
    // now.year = 2001; // 987617605170
    // console.log(now);
    // Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001
/*
    A principio, getters e setters podem ser ou
        -definidos usando objetos inicializadores, ou
        -adicionar posteriormente para qualquer objeto a qualquer tempo usando um método getter ou setter adicionado
    Ao definir getters e setters usando objetos inicializadores tudo o que você precisa fazer é prefixar um método getter com get e um método setter com set.
    Claro, o método getter não deve esperar um parâmetro, enquanto o método setter espera exatamente um parâmetro (novo valor para definir). Por exemplo:
*/
    // var o = {
    //     a: 7,
    //     get b() { return this.a + 1; },
    //     set c(x) { this.a = x / 2; }
    // };
/*
    Getters e setters podem também ser adicionado em um objeto a qualquer hora depois da criação usando o método Object.defineProperties.
    O primeiro parâmetro deste método é o objeto no qual você quer definir o getter ou setter. O segundo parâmetro é um objeto cujos nomes
    das propriedades são os nomes getter ou setter, e cujo valores das propriedades são objetos para definição de funções getter ou setter.
    Aqui está um exemplo que define o mesmo getter e setter usado no exemplo anterior:
*/
    // var o = { a:0 }
    // Object.defineProperties(o, {
    //     "b": { get: function () { return this.a + 1; } },
    //     "c": { set: function (x) { this.a = x / 2; } }
    // });
    // o.c = 10 // Roda o setter, que associa 10 / 2 (5) para a propriedade 'a'
    // console.log(o.b) // Roda o getter, que yields a + 1 ou 6
/*
    Escolher qual das duas formas depende do seu estilo de programação e tarefa na mão. Se você já vai para o inicializador de objeto ao
    definir um protótipo, provavelmente a maior parte do tempo escolherá a primeira forma. Esta forma é mais compacta e natural.
    No entanto, se você precisar adicionar getters e setters mais tarde - porque você não escreveu o protótipo ou objeto particular - então
    a segunda forma é a única possível. A segunda forma provavelmente melhor representa a natureza dinâmica do JavaScript - mas pode tornar
    o código difícil de ler e entender.
*/
/*------------------------------------------------------*/
/*
    ----------Removendo propriedadesSection----------
    Você pode remover uma propriedade não herdada usando o operador delete. O código a seguir mostra como remover uma propriedade.
*/
    //Criando um novo objeto, myobj, com duas propriedades, a e b.
    // var myobj = new Object;
    // myobj.a = 5;
    // myobj.b = 12;
    //Removendo a propriedade a, deixando myobj com apenas a propriedade b.
    // delete myobj.a;
    // console.log ("a" in myobj) // yields "false"
/*
    Você também pode usar delete para remover uma variável global se a var keyword não estiver sendo usada para declarar a variável:
*/
    // g = 17;
    // delete g;
/*------------------------------------------------------*/
/*
    ----------Comparando ObjetosSection----------
    Em JavaScript, objetos são um tipo de referência. Dois objetos distintos nunca são iguais, mesmo que tenham as mesmas propriedades.
    Apenas comparando o mesmo objeto de referência com ele mesmo produz verdadeiro.
*/
    // Duas variáveis, dois objetos distintos com as mesmas propriedades
    // var fruit = {name: "apple"};
    // var fruitbear = {name: "apple"};
    // fruit == fruitbear // return false
    // fruit === fruitbear // return false
    // Duas variáveis, um único objeto
    // var fruit = {name: "apple"};
    // var fruitbear = fruit;  // assign fruit object reference to fruitbear
    // Here fruit and fruitbear are pointing to same object
    // fruit == fruitbear // return true
    // fruit === fruitbear // return true
/*------------------------------------------------------*/
    // let meuCarro = new Object();
    // meuCarro.fabricacao = 'Ford';
    // meuCarro.modelo = 'Mustang';
    // meuCarro.ano = 1969;
    // meuCarro['fabricacao'] = 'Ford';
    // meuCarro['modelo'] = 'Mustang';
    // meuCarro['ano'] = 1969;
    // let objeto1 = new Object(),
    //     stringExemplo = 'exemploDeString',
    //     numeroAleatorio = Math.random(),
    //     objeto2 = new Object();
    // objeto1.tipo = "Sintaxe de ponto";
    // objeto1['data de criacao'] = "String com espaco";
    // objeto1[stringExemplo] = "valor de String";
    // objeto1[numeroAleatorio] = "Numero Aleatorio";
    // objeto1[objeto2] = "Objeto";
    // objeto1[''] = "Mesmo uma string vazia";
    // var nomeDaPropriedade = "fabricacao";
    // meuCarro[nomeDaPropriedade] = "Ford";
    // nomeDaPropriedade = "modelo";
    // meuCarro[nomeDaPropriedade] = "Mustang";
    // function mostrarProps(obj, nomeDoObj) {
    //     var resultado = "";
    //     for (var i in obj) {
    //         if (obj.hasOwnProperty(i)) {
    //             resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    //         }
    //     }
    //     return resultado;
    // }
    // mostrarProps(meuCarro, "meuCarro");
    // function listarTodasAsPropriedades(o){     
    // 	var objectoASerInspecionado;     
    // 	var resultado = [];
    // 	for(objectoASerInspecionado = o; objectoASerInspecionado !== null; objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)){  
    // 		resultado = resultado.concat(Object.getOwnPropertyNames(objectoASerInspecionado));  
    // 	}
    // 	return resultado; 
    // }
    // if (cond) var x = {hi: "there"};
    // var minhaHonda = {cor: "vermelho", rodas: 4, motor: {cilindros: 4, tamanho: 2.2}};
    // function Carro1(marca, modelo, ano) {
    //     this.marca = marca;
    //     this.modelo = modelo;
    //     this.ano = ano;
    // }
    // var meucarro = new Carro1("Eagle", "Talon TSi", 1993);
    // var carroDeKen = new Carro1("Nissan", "300ZX", 1992);
    // var carroDeVPG = new Carro1("Mazda", "Miata", 1990);
    // function Pessoa(nome, idade, sexo) {
    //     this.nome = nome;
    //     this.idade = idade;
    //     this.sexo = sexo;
    // }
    // var jose = new Pessoa("Jose Silva", 33, "M");
    // var paulo = new Pessoa("Paulo Santos", 39, "M");

    // function Carro2(marca, modelo, ano, dono) {
    //     this.marca = marca;
    //     this.modelo = modelo;
    //     this.ano = ano;
    //     this.dono = dono;
    // }
    // var carro1 = new Carro2("Eagle", "Talon TSi", 1993, jose);
    // var carro2 = new Carro2("Nissan", "300ZX", 1992, paulo);
    // carro2.dono;
    // carro1.cor = "preto";
    // var Animal = {
    //     tipo: "Invertebrados", // Propriedades de valores padrão
    //     qualTipo : function() {  // Método que ira mostrar o tipo de Animal
    //         console.log(this.tipo);
    //     }
    // }
    // var animal1 = Object.create(Animal);
    // animal1.qualTipo();
    // var peixe = Object.create(Animal);
    // peixe.tipo = "Peixes";
    // fish.qualTipo();
    // Carro.prototype.cor = null;
    // carro1.cor = "preto";
    // nomeDoObjeto.nomedometodo = nome_da_funcao;
    // var meuObjeto = {
    //     meuMetodo: function(parametros) {
    //         return parametros;
    //     }
    // };
    // function mostreCarro() {
    //     var resultado = "Um belo " + this.ano + " " + this.fabricacao + " " + this.modelo;
    //     pretty_print(resultado);
    // }
    // this.mostreCarro = mostreCarro;
    // function Carro3(fabricacao, modelo, ano, proprietario) {
    //     this.fabricacao = fabricacao;
    //     this.modelo = modelo;
    //     this.ano = ano;
    //     this.proprietario = proprietario;
    //     this.mostreCarro = mostreCarro;
    // }
    // carro1.mostreCarro();
    // carro2.mostreCarro();
    // function validate(obj, lowval, hival) {
    //     if ((obj.value < lowval) || (obj.value > hival))
    //         alert("Valor inválido!");
    // }
    // var o = {
    //     a: 7,
    //     get b() { 
    //         return this.a + 1;
    //     },
    //     set c(x) {
    //         this.a = x / 2;
    //     }
    // };
    // console.log(o.a);
    // console.log(o.b);
    // o.c = 50;
    // console.log(o.a);
    // var d = Date.prototype;
    // Object.defineProperty(d, "year", {
    //     get: function() { return this.getFullYear() },
    //     set: function(y) { this.setFullYear(y) }
    // });
    // var now = new Date();
    // console.log(now.year);
    // now.year = 2001;
    // console.log(now);
    // var o = {
    //     a: 7,
    //     get b() { return this.a + 1; },
    //     set c(x) { this.a = x / 2; }
    // };
    // var o = { a:0 }
    // Object.defineProperties(o, {
    //     "b": { get: function () { return this.a + 1; } },
    //     "c": { set: function (x) { this.a = x / 2; } }
    // });
    // o.c = 10;
    // console.log(o.b);
    // var myobj = new Object;
    // myobj.a = 5;
    // myobj.b = 12;
    // delete myobj.a;
    // console.log ("a" in myobj);
    // g = 17;
    // delete g;
    // var fruit = {name: "apple"};
    // var fruitbear = {name: "apple"};
    // fruit == fruitbear;
    // fruit === fruitbear;
    // var fruit = {name: "apple"};
    // var fruitbear = fruit;
    // fruit == fruitbear;
    // fruit === fruitbear;
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/