/* ----------Expressões Regulares---------- */
console.log('----------Expressões Regulares----------');
/*
    ----------Criando uma Expressão Regular----------
    Há duas maneiras de construir uma expressão regular:
    Usando uma expressão literal, que consiste em um padrão fechado entre barras, como o exemplo a seguir:
    var re = /ab+c/;

    As expressões regulares na forma literal são compiladas quando o script é carregado. Esta forma de construção possui melhor performace quando a expressão regular
    utilizada é uma constante, ou seja, não muda durante a execução.
    Ou chamando o construtor do objeto RegExp:
    var re = new RegExp("ab+c");

    Usando o construtor, a compilação da expressão regular é realizada em tempo de execução. Use o construtor quando souber que o padrão da expressão
    regular irá mudar ou quando o padrão for desconhecido, oriundo de outra fonte, uma entrada de usuário por exemplo.
*/
/*------------------------------------------------------*/
/*
    ----------Padrão de escrita de uma expressão regular----------
    Uma expressão regular padrão é composta por um conjunto de caracteres simples, como /abc/, ou uma combinação de caracteres simples e especiais, como
*/
// /ab*c/ ou*/
// /Capitulo (\d+)\.\d*/.
/*
    O último exemplo contém parênteses, que são usados como um mecanismo de armazenamento. A seleção feita por essa parte da expressão é
    armazenada para uso posterior, como descrito em: Using Parenthesized Substring Matches.

    -----Uso de Padrões Simples-----
    Padrões simples são construídos utilizando os caracteres que você deseja selecionar. Por exemplo, o padrão /abc/ seleciona combinações de caracteres em strings
    apenas quando os caracteres 'abc' forem encontrados juntos e na ordem especificada. Esse padrão será encontrado com sucesso nas strings "Olá, você conhece o abc?"
    e "Os mais recentes aviões evoluíram do slabcraft.". Porém, o padrão não será encontrado no texto "Grab crab" pois apesar de conter os mesmos caractes do padrão,
    estes não aparecem na ordem especificada.

    -----Uso dos Caracteres Especiais-----
    Quando for necessário buscar algo além de um padrão direto, como quando for necessário encontrar uma ou mais ocorrências da letra 'b', ou encontrar um caracter de
    espaço, o padrão deverá utilizar caracteres especiais. Por exemplo, o padrão /ab*c/ selecionará qualquer combinação de caracteres que contenha o caractere 'a'
    seguido de zero ou mais caracteres 'b' (o caractere * seleciona zero ou mais ocorrências do item que o precede), seguido do caractere 'c'. Se aplicada ao texto
    'cbbabbbbcdebc', essa expressão regular selecionará as letras grifadas no texto.
    A tabela abaixo fornece uma lista completa dos caracteres especiais que podem ser utilizados nas expressões regulares, com sua respectiva descrição. Para testar
    os exemplos de expressão regular você pode usar o regExr.
*/
// Caracteres especiais utilizados em expressões regulares.
// Caractere	        Descrição
// \	                Aplicado conforme as seguintes regras:
//                      Uma barra invertida que preceda um caractere não especial significa que o caractere seguinte é especial e não deve ser interpretado de forma literal.
//                      Por exemplo, o caractere 'b' quando não precedido de uma barra invertida significará uma ocorrência do próprio caractere 'b' minúsculo, porém se
//                      precedido da barra invertida '\b' ele passará a significar a ocorrência do caractere especial fronteira do caractere.
//                      Quando a barra invertida preceder um caractere especial isso significará que o próximo caractere deve ser interpretado de forma literal.
//                      Por exemplo o padrão /a*/, que selecionará a ocorrência de zero ou mais caracteres 'a' quando utilizado sem a \ para escape. Por outro lado no
//                      padrão /a\*/ o asterisco deixa de ter seu significado especial, pois a '\' de escape fará com que o '*' seja interpretado de forma literal,
//                      passando o padrão a selecionar o caractere 'a' seguido do caractere '*'.
//                      Quando utilizar o construtor RegExp("padrao"), não se esqueça de fazer o escape do caractere \, já que esse caractere é também utilizado como
//                      caractere de escape em strings.

// ^	                Corresponde ao início do texto. Se a flag multilinhas é setada para  true, também se aplica imediatamente após um caractere de quebra de linha.
//                      Por exemplo, /^A/ não corresponde ao 'A' em "Um Alvo", mas corresponde ao 'A' em "Alvo Encontrado".
//                      Este caractere tem um significado diferente quando aparece como o primeiro caractere  em um conjunto padrão de caracteres. Veja conjunto de
//                      caracteres negados ou complementados para detalhes e mais exemplos.

// $	                Corresponde ao final do texto. Se a flag multilinhas é setada para true, também se aplica imediatamente antes de um caractere de quebra de linha.
//                      Por exemplo, /r$/ não corresponde ao 'r' em "corre", mas acha correspondência em "correr".

// *	                Corresponde a expressão que o precede repetida 0 ou mais vezes. Equivalente a {0,}
//                      Por exemplo, /bo*/ acha uma correspondência para 'boooo' em "Scoob doo" e 'b' em "A bird warbled", mas nenhuma em "A goat grunted".

// +	                Corresponde a expressão que o precedete repetido 1 ou mais vezes. Equivalente a {1,}.
//                      Por exemplo, /a+/ acha correspondência para o 'a' em "candy" e todos os "as" em "caaaaaaandy", mas nâo encontra em "cndy".

// ?                    Corresponde a expressão que o precede repetido 0 ou 1 vez. Equivalente à {0,1}.
//                      Por exemplo, /e?le?/ encontra o 'el' em "angel" e o 'le' em "angle" e também o 'l' em "oslo".
//                      Se usado imediatamente após qualquer um dos quantificadores *, +, ? ou {}, faz o quantificador não guloso (combinando o número mínimo de vezes),
//                      como um oposto para o padrão que é guloso (combinar o número máximo possível).
//                      Por exemplo, aplicando/\d+/ em "123abc" encontra "123". Mas aplicando /\d+?/, apenas "1" será encontrado.
//                      Também usado em declarações lookahead, descritas sob x(?=y) e x(?!y)logo abaixo na tabela.

// .	                (O ponto decimal) corresponde com qualquer caracter, exceto o caracter de nova linha.
//                      Por exemplo, /.n/ acha correspondência para o 'an' e 'on' em "nove dias restantes para onze de agosto.", mas não encontra 'no' em 'nove'.

// (x)	                Pesquisa correspondência com o caractere 'x'  e memoriza-o, como a o exemplo a seguir mostra.  Os parênteses são chamados parênteses de captura.
//                      Por exemplo,  o '(foo)' e '(bar)' no padrão /(foo) (bar) \1 \2/ encontra e memoriza a primeira das duas palavras na string "foo bar foo bar".
//                      O \1 e \2 no padrão combina as duas últimas palavras da string. Note que \1, \2, \n são utilizados na parte correspondente do regex. 

// (?:x)	            Pesquisa correspondência com o caractere 'x' porém não o memoriza. Os parênteses são chamados de parênteses de não-captura e permitem que você
//                      defina uma subexpressão para operadores de expressão regular trabalhar com eles. Considere essa expressão de exemplo  /(?:foo){1,2}/.
//                      Se a expressão era /foo{1,2}/, o {1,2} poderia ser aplicado apenas para o último 'o' em 'foo'. Com os parênteses de não-captura,
//                      o {1,2} é aplicado para toda a palavra 'foo'.

// x(?=y)	            Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y'. Isso é chamado de lookahead.
//                      Por exemplo, /Jack(?=Sprat)/ busca 'Jack' apenas se é seguido por 'Sprat'. /Jack(?=Sprat|Frost)/ busca 'Jack' apenas se ele é seguido por 'Sprat'
//                      ou 'Frost'. No entanto,  'Sprat' nem 'Frost' faz parte do resultado retornado.

// x(?!y)	            Pesquisa correspondência em 'x' apenas se 'x' não é seguido por 'y'. Isso é chamado negação lookahead.
//                      Por exemplo, /\d+(?!\.)/ encontra um número apenas se ele não for seguido por um ponto decimal. A expressão regular /\d+(?!\.)/.exec("3.141")
//                      encontra '141' mas não '3.141'.

// x|y	                Pesquisa correspondência em 'x' ou 'y'.
//                      Por exemplo, /verde|vermelha/ encontra 'verde' em "maçã verde" e 'vermelha' em "maçã vermelha."

// {n}	                Pesquisa n ocorrências correspondentes ao caracter precedido. Onde, n deve ser um inteiro positivo.
//                      Por exemplo, /a{2}/ não encontra o 'a' em "candy," mas encontra-o se houver a quantidade de a's informarda em "caandy,"  e os dois primeiros a's
//                      em "caaandy."

// {n,m}	            Pesquisa a n menor correspondência e a m maior correspondência do caractere precedido. Quando n ou m é zero, ele poderá ser omitido. Onde,
//                      n e m devem ser inteiros positivo.
//                      Por exemplo, /a{1,3}/ não encontra nada em "cndy",  mas encontra o 'a' em "candy", encontra os dois primeiros
//                      a's em "caandy,"  e encontra os três primeiros a's em "caaaaaaandy". Observe que, ao fazer a correspondência de "caaaaaaandy",
//                      serão encontrados apenas os "aaa", mesmo que a string tenha mais a's.

// [xyz]	            Um conjunto de caracteres. Pesquisa correspondência para qualquer um dos caracteres entre colchetes. Você pode especificar um intervalo de caracteres
//                      usando hífen. Caracteres especiais (como o ponto (.) e o asterisco(*)) não tem significado algum quando está dentro de um conjunto de caracteres.
//                      Não necessita utiliza escape neles. Mas, se utilizar escape também irá funcionar.
//                      Por exemplo, [abcd] é o mesmo que [a-d]. Com a expressão será encontrado o 'b' em "beijo" e o 'c' em "chop".
//                      A expressão /[a-z.]+/ e /[\w.]+/ ambos encontraram as letras que formam "test.i.ng".

// [^xyz]	            Um conjunto de caracteres negados ou complementados. Isto é, combina com qualquer coisa que não esteja listado entre os colchetes.
//                      Você pode especificar um intervalo de caracteres usando hífen. Tudo que funciona no conjunto de caracteres (apresentado acima) também funciona aqui.
//                      Por exemplo, [^abc] é o mesmo que [^a-c]. Com a expressão será encontrado inicialmente p 'e' em "beijo" e 'h' em "chop."

// [\b]	                Pesquisa correspondência com espaço em branco (U+0008). É preciso utilizar os colchetes se você quer encontrar um espaço em branco.
//                      (Não confunda-o com \b.)

// \b	                Pesquisa correspondência em uma fronteira de caractere. Uma fronteira de caractere corresponde a posição onde um caractere/palavra
//                      não é seguido ou antecedido por outro caractere/palavrar. Isto é, em fronteira de caractere não pode haver nenhum caractere ou espaço,
//                      seu tamanho deve ser vazio. (não confunda-o com [\b].)

//                      Exemplos:
//                      /\bmoo/ encontra a substring 'moo' em "moon" ;
//                      /oo\b/ não encontra o 'oo' em "moon",  devido o 'oo' ser seguido por 'n' que é um caractere;
//                      /oon\b/  encontra a substring 'oon' em "moon",  devido 'oon' ser o fim da string, ou seja, não é seguido por nenhum caractere;
//                      /\w\b\w/ não encontrará nada, pois o caractere nunca será seguido por um não caractere e um caractere.

//                      Nota:  O mecanismo de expressão regular no JavaScript define um conjunto específico de caracteres para serem caracteres "palavras".
//                      Qualquer caractere que não esteja neste conjunto é considerado uma quebra de palavra. Este conjunto de caractere é bastante limitado:
//                      consiste apenas no alfabeto romano tanto maiúsculo como minúsculo, digítos decimais, e o caractere sublinhado. Caracteres acentuados,
//                      tal como "é" ou "ã" são, infelizmente, tratados como palavras quebradas.

// \B	                Pesquisa correspondência  que não seja em uma fronteira de caractere. Para a correspondência é associada uma posição onde o caractere anterior
//                      e o próximo tem as mesmas características: ambos são caractere/palavra, ou ambos não sejam caractere/palavra. O início e o fim de uma
//                      string não considerados como não caractere/palavra.
//                      Por exemplo, /\B../ encontra correspondente 'oo' em  "boolean", e /y\B./ encontra correspondente 'ye' em "possibly yesterday."

// \cX	                Onde X é um caractere pertencente ao conjunto A-Z. Encontra correspondência de um caractere de controle em uma string.
//                      Por exemplo, /\cM/ encontra correspondente control-M (U+000D) em uma string.

// \d	                Encontra correspondência com um número. Equivalente a [0-9].
//                      Por exemplo,  /\d/ ou /[0-9]/ encontra correspondente '8' em "Dróide BB8".

// \D	                Encontra correspondência com um caractere que não seja número. Equivalente a [^0-9].
//                      Por exemplo,  /\D/ ou /[^0-9]/ matches 'C' em "C3 está ativada."

// \f	                Encontra correspondência com um caractere de escape avanço de página (U+000C).

// \n	                Encontra correspondência com um caractere de escape quebra de linha (U+000A).

// \r	                Encontra correspondência com um caractere de escape retorno de carro (U+000D).

// \s	                Encontra correspondência com um único caractere de espaço em branco, espaço, tabulação, avanço de página, quebra de linha. Equivalente a
//                      [ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000].
//                      Por exemplo, /\s\w*/ encontra correspondente ' bar' em "foo bar."

// \S	                Encontra correspondência em um único caractere que não seja espaço em branco. Equivalente a
//                      [^ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000].
//                      Por exemplo, /\S\w*/ encontra correspondente 'foo' em "foo bar."

// \t	                Encontra correspondência em uma tabulação (U+0009).

// \v	                Encontra correspondência em uma tabulação vertical (U+000B).

// \w	                Encontra correspondência em qual caractere alfanumérico incluindo underline. Equivalente a [A-Za-z0-9_].
//                      Por exemplo, /\w/ encontra correspondente  'a' em "apple," '5' em "$5.28," e '3' em "3D."

// \W	                Encontra correspondência em um não caractere. Equivalente a [^A-Za-z0-9_].
//                      Por exemplo, /\W/ ou /[^A-Za-z0-9_]/ encontra correspondente '%' em "50%."

// \num                 Onde num é um inteiro positivo. Faz referência a substring pertencente à um grupo, um grupo é definido entre parênteses. Grupos são numerados de 1 até 9.
//                      Por exemplo, /(muito) (cacique) pra \2 \1/ encontra 'muito cacique pra cacique muito' em 'Na aldeia tem muito cacique pra cacique muito.'

// \0	                Encontra correspondência em um caractere NULL (U+0000). Não adicione outro número após o zero, pois \0<digitos> é um escape para número ictal.

// \xhh	                Encontra correspondência com o código hh (dois valores hexadecimal).

// \uhhhh	            Encontra correspondência com o código hhh (três valores hexadecimal).

// \u{hhhh}	            (funciona apenas com a flag u) Encontra correspondência com o valor Unicode hhhh (dígitos hexadecimais).

/*
    -----Usando Parênteses-----
    Usar parênteses em volta de qualquer parte de uma expressão regular faz com que essa parte seja lembrada para ser usada depois, como descrito em  Usando as Substrings entre Parênteses na Expressão Regular.
*/
// Por Exemplo, o padrão /Capitulo (\d+)\.\d*/ ilustra caracteres adicionais escapados e especiais e indica que parte do padrão deve ser lembrado.
// Corresponde precisamente aos caracteres 'Capitulo ' seguidos por um ou mais caracteres numéricos (\d significa qualquer caracter numérico e + significa 1 ou mais vezes),
// seguidos por um ponto decimal (que é um caracter especial; preceder com um \ significa que o padrão deve buscar pelo caracter literal '.'), seguido por qualquer caracter
// numérico 0 ou mais vezes (\d significa caracter numérico, * significa 0 ou mais vezes). Além disso, os parenteses são usados para relembrar os primeiros caracteres
// numéricos correspondentes.
// Esse padrão é encontrado em "Abra o capitulo 4.3, parágrafo 6" o '4' é relembrado. O padrão não é encontrado em "Capitulo 3 e 4", porque essa string não tem um período
// após o '3'.
// Para encontrar uma substring sem que a correspondência seja relembrada, dentro dos parênteses inicie o padrão com ?:. Por exemplo, (?:\d+) corresponde a um ou mais
// caracteres numéricos mas não relembra os caracteres correspondentes.
/*------------------------------------------------------*/
/*
    ----------Trabalhando com expressões regulares----------
    Expressões Regulares são usadas com os metodos  test e exec do objeto RegExp e com os metodos match, replace, search, e split do objeto String.
    Estes metodos são explicados em detalhe em JavaScript Reference.

    Tabela 4.2 Metodos que usam Expressões regulares
    Metodo	        Descrição
    exec	        Um método RegExp  que execute uma pesquisa por uma correspondência em uma string. Retorna um array de informações.
    test	        Um método RegExp que testa uma correspondência em uma string. Retorna true ou false.
    match	        Um método String que executa uma pesquisa por uma correspondência em uma string. Retorna uma array de informações ou null caso não haja uma correspondência.
    search	        Um método String que testa uma correspondência em uma string. Retorna o indice da correspondência ou -1 se o teste falhar.
    replace	        Um método String que executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondênte por uma substring de substituição.
    split	        Um método String  que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings.

    Quando você quer saber se um padrão é encontrado em uma string, use o método test ou search; para mais informações (mas execução mais lenta) use o método exec ou match.
    Se você usar exec ou match e se houver correspondência, estes métodos retornam um array e atualizam as propriedades do objeto da expressão regular associada
    e também do objeto da expressão regular predfinada RegExp. Se não houver corespondência, o método exec retorna null (convertido para false).
    No seguinte exemplo, o script usa o método exec para encontrar uma correspondência em uma string.
*/
    // var myRe = /d(b+)d/g;
    // var myArray = myRe.exec("cdbbdbsbz");
/*
    Se você não precisa acessar as propriedades da expressão regular, uma alternativa de criar myArray é com esse script:
*/
    // var myArray = /d(b+)d/g.exec("cdbbdbsbz");
/*
    Se você quiser construir a expressão regular a partir de uma string, outra alternativa é esse script:
*/
    // var myRe = new RegExp("d(b+)d", "g");
    // var myArray = myRe.exec("cdbbdbsbz");
/*
    Com esses scripts, a correspondência é encontrada o array é retornado e são atualizas as propriedades mostradas na tabela a seguir.

    Table 4.3 Resultados da execução de expressões regulares.
    Objeto	            Propriedade or indice	        Descrição	                                                                                    Nesse exemplo
    myArray	 	                                        A string correspondente e todas as substrings relembradas.	                                    ["dbbd", "bb"]
                        index	                        The 0-based index of the match in the input string.	                                            1
                        input	                        The original string.	                                                                        "cdbbdbsbz"
                        [0]	                            The last matched characters.	                                                                "dbbd"
    myRe	            lastIndex	                    The index at which to start the next match. (This property is set only if the regular
                                                        expression uses the g option, described in Advanced Searching With Flags.)	                    5
                        source	                        The text of the pattern. Updated at the time that the regular expression
                                                        is created, not executed.	                                                                    "d(b+)d"

    Como mostrado na segunda forma deste exemplo, você pode usar uma expressão regular criada com um inicializador de objeto sem atribuí-la à uma variável.
    Contudo, se você o fizer, toda ocorrência é uma nova expressão regular. Assim sendo, se você usar esta forma sem atribuí-la à uma variável, você não pode
    subsequentemente acessar as propriedades da expressão regular. Assumamos que tenha este script, por exemplo:
*/
    // var myRe = /d(b+)d/g;
    // var myArray = myRe.exec("cdbbdbsbz");
    // console.log("The value of lastIndex is " + myRe.lastIndex);
/*
    Este script mostra:
        The value of lastIndex is 5

    Contudo, se tem este script:
*/
    // var myArray = /d(b+)d/g.exec("cdbbdbsbz");
    // console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);
/*
    Ele mostra:
        The value of lastIndex is 0
    As ocorrências de /d(b+)d/g nas duas declarações são objetos expressões regulares diferentes e consequentemente têm diferentes valores para suas propriedades lastIndex.
    Se precisa acessar as propriedades de uma expressão regular criada com um inicializaor de objeto, você deve primeiro atribuí-la à uma variável.

    -----Usando as Substrings entre Parênteses na Expressão Regular-----
    Including parentheses in a regular expression pattern causes the corresponding submatch to be remembered. For example, /a(b)c/ matches the characters 'abc'
    and remembers 'b'. To recall these parenthesized substring matches, use the Array elements [1], ..., [n].
    O número de substring entre parênteses possíveis é ilimitado. A matriz retornada contém tudo o que foi encontrado. Os exemplos a seguir ilustram como
    usar parênteses entre parênteses.
    -Exemplo 1-
    The following script uses the replace() method to switch the words in the string. For the replacement text, the script uses the $1 and $2 in the replacement
    to denote the first and second parenthesized substring matches.
*/
    // var re = /(\w+)\s(\w+)/;
    // var str = "John Smith";
    // var newstr = str.replace(re, "$2, $1");
    // console.log(newstr);
/*
    Isto imprime "Smith, John".

    -----Pesquisa avançada com Flags-----
    Regular expressions have four optional flags that allow for global and case insensitive searching. To indicate a global search,
    use the g flag. To indicate a case-insensitive search, use the i flag. To indicate a multi-line search, use the m flag.
    To perform a "sticky" search, that matches starting at the current position in the target string, use the y flag.
    These flags can be used separately or together in any order, and are included as part of the regular expression.
        Firefox 3 note
        Support for the y flag was added in Firefox 3. The y flag fails if the match doesn't succeed at the current position
        in the target string.
    To include a flag with the regular expression, use this syntax:
*/
    // var re = /pattern/flags;
/*
    or
*/
    // var re = new RegExp("pattern", "flags");
/*
    Note that the flags are an integral part of a regular expression. They cannot be added or removed later.
    For example, re = /\w+\s/g creates a regular expression that looks for one or more characters followed by a space,
    and it looks for this combination throughout the string.
*/
    // var re = /\w+\s/g;
    // var str = "fee fi fo fum";
    // var myArray = str.match(re);
    // console.log(myArray);
/*
    This displays ["fee ", "fi ", "fo "]. In this example, you could replace the line:
*/
    // var re = /\w+\s/g;
/*
    with:
*/
    // var re = new RegExp("\\w+\\s", "g");
/*
    and get the same result.
    The m flag is used to specify that a multiline input string should be treated as multiple lines. If the m flag is
    used, ^ and $ match at the start or end of any line within the input string instead of the start or end of the entire string.
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    Os exemplos que se seguem mostram mais usos expressões regulares.
    -----Alterando o pedido em uma string de entrada-----
    O exemplo a seguir demonstra a formação de uma expressão regular e o use de  string.split() e string.split().
    The following example illustrates the formation of regular expressions and the use of string.split() and string.replace().
    Ele limpa uma string de entrada formatada com nomes (primeiro nome primeiro) separados por espaço em branco, tabulações e exatamente um ponto e virula.
    Por fim, inverte  a ordem do nome (sobrenome primeiro) e ordena a list
*/
    // The name string contains multiple spaces and tabs,
    // and may have multiple spaces between first and last names.
    // var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";
    // var output = ["---------- Original String\n", names + "\n"];
    // Prepare two regular expression patterns and array storage.
    // Split the string into array elements.

    // pattern: possible white space then semicolon then possible white space
    // var pattern = /\s*;\s*/;

    // Break the string into pieces separated by the pattern above and
    // store the pieces in an array called nameList
    // var nameList = names.split(pattern);

    // new pattern: one or more characters then spaces then characters.
    // Use parentheses to "memorize" portions of the pattern.
    // The memorized portions are referred to later.
    // pattern = /(\w+)\s+(\w+)/;

    // New array for holding names being processed.
    // var bySurnameList = [];

    // Display the name array and populate the new array
    // with comma-separated names, last first.
    //
    // The replace method removes anything matching the pattern
    // and replaces it with the memorized string—second memorized portion
    // followed by comma space followed by first memorized portion.
    //
    // The variables $1 and $2 refer to the portions
    // memorized while matching the pattern.

    // output.push("---------- After Split by Regular Expression");

    // var i, len;
    // for (i = 0, len = nameList.length; i < len; i++){
    //   output.push(nameList[i]);
    //   bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
    // }

    // Display the new array.
    // output.push("---------- Names Reversed");
    // for (i = 0, len = bySurnameList.length; i < len; i++){
    //   output.push(bySurnameList[i]);
    // }

    // Sort by last name, then display the sorted array.
    // bySurnameList.sort();
    // output.push("---------- Sorted");
    // for (i = 0, len = bySurnameList.length; i < len; i++){
    //   output.push(bySurnameList[i]);
    // }
    // output.push("---------- End");
    // console.log(output.join("\n"));

/*
    -----Usando caracteres especiais para verificar entradas-----
    In the following example, the user is expected to enter a phone number. When the user presses the "Check" button, the script checks the validity of the number.
    If the number is valid (matches the character sequence specified by the regular expression), the script shows a message thanking the user and confirming the number.
    If the number is invalid, the script informs the user that the phone number is not valid at all.
    The regular expression looks for zero or one open parenthesis \(?, followed by three digits \d{3}, followed by zero or one close parenthesis \)?, followed by one dash,
    forward slash, or decimal point and when found, remember the character ([-\/\.]), followed by three digits \d{3}, followed by the remembered match of a dash, forward
    slash, or decimal point \1, followed by four digits \d{4}.
    The Change event activated when the user presses Enter sets the value of RegExp.input.

    <!DOCTYPE html>
    <html>  
    <head>  
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">  
        <meta http-equiv="Content-Script-Type" content="text/javascript">  
        <script type="text/javascript">  
        var re = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;  
        function testInfo(phoneInput){  
            var OK = re.exec(phoneInput.value);  
            if (!OK)  
            window.alert(RegExp.input + " Não é um número de telefone com código de área!");  
            else
            window.alert("Obrigado, o seu número de telefone é " + OK[0]);  
        }  
        </script>  
    </head>  
    <body>  
        <p>Informe o seu número de telefone (com código de área) e então clique em "Check".
            <br>O formato esperado é ###-###-####.</p>
        <form action="#">  
        <input id="phone"><button onclick="testInfo(document.getElementById('phone'));">Check</button>
        </form>  
    </body>  
    </html>
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/