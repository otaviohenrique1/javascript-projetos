/* ----------RegExp---------- */
console.log('----------RegExp----------');
/*
    ----------Sumário----------
    O construtor RegExp cria um objeto de expressão regular para corresponder texto com um padrão.
    Para uma introdução à expressões regulares, leia o capítulo de Expressões Regulares no Guia de JavaScript.
*/
/*------------------------------------------------------*/
/*
    ----------Construtor----------
    Notações literais e de construtores são possíveis:
        /padrão/flags
        new RegExp(padrão[, flags])

    -----Parâmetros-----
    padrão -> O texto da expressão regular.
    flags -> Se especificado, flags (marcadores) podem ter qualquer combinação dos seguintes valores:
        g -> corresponder globalmente
        i -> ignorar maiúsc./minúsc.
        m -> multilinha; trata caracteres de início e fim (^ e $) ao operar por múltiplas linhas (ou seja, corresponder o início ou fim de cada linha (delimitado por \n ou \r), e não apenas o começo ou fim de toda a string de entrada)
        u -> unicode; trata o padrão como uma sequência de código unicode
        y -> aderente; corresponde apenas pelo index indicado pela propriedade lastIndex dessa expressão regular na string alvo (e não tenta corresponder de qualquer indexes posteriores).
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    Há dois modos de criar um objeto RegExp: uma notação literal e um construtor. Para indicar strings, os parâmetros para a notação literal não usam aspas, enquanto os parâmetros para a função do construtor usam. Então, as seguintes expressões criam a mesma expressão regular:
        /ab+c/i;
        new RegExp('ab+c', 'i');
    A notação literal compila a expressão regular em tempo de execução. Use a notação literal quando a expressão regular permanecerá constante. Por exemplo, se você usar a notação literal para construir a expressão regular usada em um loop, a expressão regular não será recompilada a cada iteração
    O construtor do objeto da expressão regular, por exemplo, new RegExp('ab+c'), fornece uma compilação em tempo de execução da expressão regular. Use a função construtora quando você sabe que o padrão da expressão regular será mudado, ou você não sabe o padrão e o está recebendo de outra fonte, como uma entrada do usuário.
    Começando com ECMAScript 6, new RegExp(/ab+c/, 'i'), deixou de lançar um TypeError ("can't supply flags quando constructing one RegExp from another") quando o primeiro argumento é um RegExp e o segundo argumento flags está presente. Uma nova RegExp dos argumentos é criada ao invés disso.
    Quando se usa a função construtora, as regras de escapar em uma string (preceder caracteres especiais com \ quando incluídos na string) são necessárias. Por exemplo, as declarações a seguir são equivalentes:
        var re = /\w+/;
        var re = new RegExp('\\w+');
*/
/*------------------------------------------------------*/
/*
    ----------Significado dos caracteres especiais nas expressões regulares----------
    -Classes de Caracteres
    -Conjuntos de Caracteres
    -Limites
    -Agrupamentos e back references
    -Quantificadores
*/
// Classes de Caracteres
// Caractere 	    Significado
// . 	            (O ponto) corresponde um único caracter qualquer exceto os caracteres de nova linha: \n, \r, \u2028 ou \u2029.
//                 Note que a flag multilinha m não muda o comportamento do ponto. Então para corresponder um padrão por múltiplas linhas,
//                 o conjunto de caracteres [^] pode ser usado, que corresponderá qualquer caractere, incluindo novas linhas.
//                 Por exemplo, /.y/ corresponde "my" e "ay", mas não "yes", em "yes make my day".
// \d              Corresponde um caractere de dígito no alfabeto basic Latin. Equivalente a [0-9].
//                 Por exemplo, /\d/ ou /[0-9]/ corresponde "2" em "B2 é o número da suíte".
// \D 	            Corresponde qualquer caractere que não é um dígito no alfabeto basic Latin. Equivalente a [^0-9].
//                 Por exemplo, /\D/ ou /[^0-9]/ corresponde "B" em "B2 é o suite number".
// \w 	            Corresponde qualquer caractere alfanumérico do alfabeto basic Latin, incluindo o underline. Equivalente a [A-Za-z0-9_].
//                 Por exemplo, /\w/ corresponde "a" em "apple", "5" em "$5.28", e "3" em "3D".
// \W 	            Corresponde qualquer caractere que não é um alfanumérico do alfabeto basic Latin. Equivalente a [^A-Za-z0-9_].
//                 Por exemplo, /\W/ ou /[^A-Za-z0-9_]/ corresponde "%" em "50%".
// \s 	            Corresponde um único caractere de espaço em branco, incluindo espaço, tabulação (tab), quebra de página, nova linha (LF) e outros espaços Unicode.
//                 Equivalente a [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000].
//                 Por exemplo, /\s\w*/ corresponde " bar" em "foo bar".
// \S 	            Corresponde um único caractere que não seja um espaço em branco.
//                 Equivalente a [^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000].
//                 Por exemplo, /\S\w*/ corresponde "foo" em "foo bar".
// \t 	            Corresponde uma tabulação.
// \r 	            Corresponde uma quebra de linha.
// \n 	            Corresponde uma nova linha.
// \v 	            Corresponde uma tabulação vertical.
// \f 	            Corresponde uma quebra de página.
// [\b] 	        Corresponde um caracter backspace. (Não confundir com \b)
// \0 	            Corresponde um caractere NUL. Não coloque outro dígito seguinte a esse.
// \cX 	        Onde X é uma letra de A - Z. Corresponde um caractere de controle em uma string.
//                 Por exemplo, /\cM/ corresponde control-M em uma string.
// \xhh 	        Corresponde o caractere com o código hh (dois dígitos hexadecimais).
// \uhhhh 	        Corresponde o caractere com o valor Unicode hhhh (quatro dígitos hexadecimais).
// \ 	            Para caracteres que são geralmente tratados literalmente, indica que o próximo caractere é especial e não deve ser interpretado literalmente.
//                 Por exemplo, /b/ corresponde o caractere "b". Colocando uma barra invertida antes do "b", ou seja, usando /\b/, o caractere se torna especial,
//                 significando corresponder o limite de uma palavra.
//                 ou
//                 Para caracteres que são geralmente tratados especialmente, indica que o próximo caractere não é especial e deve ser interpretado literalmente.
//                 Por exemplo, "*" é um caractere especial que significa 0 ou mais ocorrências do caractere precedente devem ser correspondidas;
//                 por exemplo, /a*/ significa corresponder 0 ou mais "a"s. Para corresponder * literalmente, preceda-o com uma barra invertida; por exemplo,
//                 /a\*/ corresponde "a*".

// Conjuntos de Caracteres
// Caractere 	    Significado
// [xyz] 	        Um conjunto de caracteres. Corresponde qualquer um dos caracteres cercados. Você pode especificar uma extensão de caracteres usando um hífen.
//                 Por exemplo, [abcd] é o mesmo que [a-d]. Eles correspondem o "b" em "banco" e o "c" em "cortar".
// [^xyz] 	        Um conjunto de caracteres negativo ou complementado. Isto é, corresponde qualquer coisa que não esteja cercada nos colchetes.
//                 Você pode especificar uma extensão de caracteres usando um hífen.
//                 Por exemplo, [^abc] é o mesmo que [^a-c]. Eles inicialmente correspondem "n" em "banco" e "o" em "cortar".

// Limites
// Caractere 	    Significado
// ^ 	            Corresponde o início de uma entrada. Se a flag multilinha é utilizada, também corresponde imediatamente após um caractere de quebra de linha.
//                 Por exemplo, /^A/ não corresponde o "A" em "an A", mas corresponde o primeiro "A" em "An A".
// $               Corresponde o fim de uma entrada. Se a flag multilinha é utilizada, também corresponde imediatamente antes de um caractere de quebra de linha.
//                 Por exemplo, /o$/ não corresponde o "o" em "cantor", mas corresponde em "canto".
// \b 	            Corresponde um limite de palavra de largura zero, como entre uma letra e um espaço. (Não confundir com [\b])
//                 Por exemplo, /\bno/ corresponde o "no" em "de noite"; /ly\b/ corresponde o "ly" em "possibly yesterday".
// \B 	            Corresponde um limite de uma não palavra de largura zero, como entre duas letras ou entre dois espaços.
//                 Por exemplo, /\Bte/ corresponde "te" em "de noite", e /on\B/ corresponde "on" em "possivelmente ontem".

// Agrupamentos e back references
// Caractere 	    Significado
// (x) 	        Corresponde x e memoriza a correspondência. Esses são chamados parênteses de captura.
//                 Por exemplo, /(foo)/ corresponde e memoriza "foo" em "foo bar". A substring correspondida pode ser chamada novamente dos elementos
//                 do array resultante [1], ..., [n] ou das propriedades predefinidas do objeto RegExp $1, ..., $9.
//                 Grupos de captura têm uma falta na performance. Se você não necessita que a substring correspondida seja chamada novamente, prefira parênteses
//                 de não-captura (veja mais abaixo).
// \n 	            Onde n é um inteiro positivo. A back reference to o last substring matching o n parenthetical no expressão regular (counting left parentheses).
//                 Por exemplo, /apple(,)\sorange\1/ corresponde "apple, orange," em "apple, orange, cherry, peach". Um exemplo mais completo está a seguir nesta tabela.
// (?:x) 	        Corresponde x mas não memoriza a correspondência. Esses são chamados parênteses de não-captura. A substring correspondida não pode ser chamada novamente
//                 dos elementos do array resultante [1], ..., [n] ou das propriedades predefinidas do objeto RegExp $1, ..., $9.


// Quantificadores
// Caractere 	    Significado
// x* 	            Corresponde o item precedente x zero ou mais vezes.
//                 Por exemplo, /assusto*/ corresponde "assustoooo" em "Um fantasma assustoooou" e "assust" em "Não me assustei", mas nada em "Um bode grunhiu".
// x+ 	            Corresponde o item precedente x uma ou mais vezes. Equivalente a {1,}.
//                 Por exemplo, /a+/ corresponde o "o" em "doce" e todos os "o"s em "doooooooce".
// x*?
// x+? 	        Corresponde o item precedente x like * e + from above, however o match é o smallest possible match.
//                 Por exemplo, /".*?"/ corresponde '"foo"' em '"foo" "bar"' e não corresponde '"foo" "bar"' como without o ? behind o *.
// x? 	            Corresponde o item precedente x nenhuma ou uma vez.
//                 Por exemplo, /e?le?/ corresponde o "el" em "angel" e o "le" em "angle."
//                 If used imediatamente after qualquer dos quantifiers *, +, ?, ou {}, makes o quantifier non-greedy (matching o minimum number of vezes),
//                 como opposed to o default, which é greedy (matching o maximum number of vezes).
//                 Also used em lookahead assertions, described under (?=), (?!), e (?:) em this table.
// x(?=y) 	        Corresponde x apenas se x é seguido por y. Por exemplo, /Jack(?=Sprat)/ corresponde "Jack" apenas se for seguido por
//                 "Sprat". /Jack(?=Sprat|Frost)/ corresponde "Jack" apenas se for seguido por "Sprat" ou "Frost". Porém, nem "Sprat" nem "Frost" são partes
//                 do resultado da correspondência.
// x(?!y) 	        Corresponde x apenas se x não é seguido por y. Por exemplo, /\d+(?!\.)/ corresponde um número apenas se não for seguido por um ponto.
//                 /\d+(?!\.)/.exec('3.141') corresponde "141", mas não "3.141".
// x|y 	        Corresponde ou x ou y.
//                 Por exemplo, /verde|vermelha/ corresponde "verde" em "maçã verde" e "vermelha" em "maçã vermelha".
// x{n} 	        Onde n é um positive inteiro. Corresponde exactly n ocorrências do item precedente x.
//                 Por exemplo, /a{2}/ não corresponde o "a" em "candy", mas it corresponde todos os "a"'s em "caandy", e o first two "a"'s em "caaandy".
// x{n,} 	        Onde n é a positive inteiro. Corresponde at least n ocorrências do item precedente x.
//                 Por exemplo, /a{2,}/ não corresponde o "a" em "candy", mas corresponde all do a's em "caandy" e em "caaaaaaandy".
// x{n,m} 	        Onde n e m são positive integers. Corresponde at least n e at most m ocorrências do item precedente x.
//                 Por exemplo, /a{1,3}/ corresponde nothing em "cndy", o "a" em "candy", o two "a"'s em "caandy", e o first three "a"'s em "caaaaaaandy".
//                 Notice que quando matching "caaaaaaandy", o match é "aaa", even though o original string had mais "a"'s em it.
/*------------------------------------------------------*/
/*
    ----------Propriedades----------
        RegExp.prototype -> Permite a adição de propriedades a todos os objetos.
        RegExp.length -> O valor of RegExp.length é 2.
        Properties inherited from Function:
            arity, caller, constructor, length, name
*/
/*------------------------------------------------------*/
/*
    ----------Métodos----------
    O objeto global RegExp não possui métodos próprios, no entanto, herda alguns métodos através da cadeia de prototype.
        Methods inherited from Function:
            apply, call, toSource, toString
*/
/*------------------------------------------------------*/
/*
    ----------RegExp prototype objects e instances----------
    -----Propriedades-----
    See also deprecated RegExp properties.
    Note that several of the RegExp properties have both long and short (Perl-like) names. Both names always refer to the same value. Perl is the programming language from which JavaScript modeled its regular expressions.
    RegExp.prototype.constructor -> Specifies the function that creates an object's prototype.
    RegExp.prototype.flags -> A string that contains the flags of the RegExp object.
    RegExp.prototype.global -> Whether to test the regular expression against all possible matches in a string, or only against the first.
    RegExp.prototype.ignoreCase -> Whether to ignore case while attempting a match in a string.
    RegExp.prototype.multiline -> Whether or not to search in strings across multiple lines.
    RegExp.prototype.source -> The text of the pattern.
    RegExp.prototype.sticky -> Whether or not the search is sticky.
    RegExp.prototype.unicode -> Whether or not Unicode features are enabled.

    -----Métodos-----
    RegExp.prototype.compile() -> (Re-)compiles a regular expression during execution of a script.
    RegExp.prototype.exec() -> Executes a search for a match in its string parameter.
    RegExp.prototype.test() -> Tests for a match in its string parameter.
    RegExp.prototype[@@match]() -> Performs match to given string and returns match result.
    RegExp.prototype[@@replace]() -> Replaces matches in given string with new substring.
    RegExp.prototype[@@search]() -> Searches the match in given string and returns the index the pattern found in the string.
    RegExp.prototype[@@split]() -> Splits given string into an array by separating the string into substring.
    RegExp.prototype.toSource() -> Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method.
    RegExp.prototype.toString() -> Returns a string representing the specified object. Overrides the Object.prototype.toString() method. 
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    -----Exemplo: Using a expressão regular para mudar o fomato dos dados-----
        O seguinte script usa o método replace() da instância de String para casar o nome no format nome sobrenome e produzir no formato sobrenome, nome. No texto substituto, o script usa $1 e $2 para indicar os respectivos parênteses de casamento no padrão da expressão regular.
        var re = /(\w+)\s(\w+)/;
        var str = 'John Smith';
        var newstr = str.replace(re, '$2, $1');
        console.log(newstr);
    Isto retorna "Smith, John".

    -----Exemplo: Usando expressões regulares para quebrar linhas com diferentes fins de linha/quebras de linha-----
    O default line ending varies depending on o platform (Unix, Windows, etc.). O line splitting provided em this exemplo works on all platforms.
        var text = 'Um texto\nE mais um pouco\r\nE ainda mais\rEsse é o fim';
        var lines = text.split(/\r\n|\r|\n/);
        console.log(lines) // prints [ 'Um texto', 'E mais um pouco', 'E ainda mais', 'Esse é o fim' ]
    Note que o order do patterns no expressão regular matters.

    -----Exemplo: Using expressão regular on multiple lines-----
        var s = 'Please yes\nmake my day!';
        s.match(/yes.*day/);
        // Returns null
        s.match(/yes[^]*day/);
        // Returns 'yes\nmake my day'
    
    -----Exemplo: Using a expressão regular com o "sticky" flag-----
    This exemplo demonstrates how one could use o sticky flag on expressões regulares to match individual lines of multiline input.
        var text = 'First line\nSecond line';
        var regex = /(\S+) line\n?/y;
        var match = regex.exec(text);
        console.log(match[1]);        // prints 'First'
        console.log(regex.lastIndex); // prints '11'
        var match2 = regex.exec(text);
        console.log(match2[1]);       // prints 'Second'
        console.log(regex.lastIndex); // prints '22'
        var match3 = regex.exec(text);
        console.log(match3 === null); // prints 'true'
    One can test at run-time whether o sticky flag é supported, using try { … } catch { … }. Para this, either an eval(…) expression ou o RegExp(regex-string, flags-string) syntax must be used (since o /regex/flags notation é processed at compile-time, so throws an exception before o catch block é encountered). Por exemplo:
        var supports_sticky;
        try { RegExp('', 'y'); supports_sticky = true; }
        catch(e) { supports_sticky = false; }
        console.log(supports_sticky); // prints 'true'
    
    -----Exemplo: Expressão regular e Unicode caracteres-----
    As mentioned above, \w ou \W only corresponde ASCII based caracteres; por exemplo, "a" to "z", "A" to "Z", "0" to "9" e "_". To match caracteres from other languages such como Cyrillic ou Hebrew, use \uhhhh, onde "hhhh" é o caractere's Unicode valor em hexadecimal. This exemplo demonstrates how one can separate out Unicode caracteres from uma palavra.
        var text = 'Образец text на русском языке';
        var regex = /[\u0400-\u04FF]+/g;
        var match = regex.exec(text);
        console.log(match[0]);        // prints 'Образец'
        console.log(regex.lastIndex); // prints '7'
        var match2 = regex.exec(text);
        console.log(match2[0]);       // prints 'на' [não print 'text']
        console.log(regex.lastIndex); // prints '15'
        // e assim vai
    Here's an external resource para getting o complete Unicode block range para different scripts: Regexp-unicode-block.

    -----Exemplo: Extracting subdomain name from URL-----
        var url = 'http://xxx.domain.com';
        console.log(/[^.]+/.exec(url)[0].substr(7)); // prints 'xxx'
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/