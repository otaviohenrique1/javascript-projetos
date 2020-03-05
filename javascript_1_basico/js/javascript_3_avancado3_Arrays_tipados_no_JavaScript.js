/* ----------Arrays tipados no JavaScript---------- */
console.log('----------Arrays tipados no JavaScript----------');
/*
    ----------Arrays tipados no JavaScript----------
    Os arrays tipados do Javascript são objetos parecidos com arrays convencionais, e fornecem um mecanismo para lidar com dados binários em sua forma "bruta".
    Como você já deve saber, objetos do tipo Array aumentam e encolhem dinamicamente, e podem conter qualquer tipo de valor possível no Javascript.
    Os interpretadores Javascript realizam otimizações para que estes arrays sejam rápidos de se manipular. Todavia, à medida em que as aplicações web
    tornam-se mais e mais poderosas, adicionando recursos como manipulação de áudio e vídeo, acesso a dados brutos utilizando WebSockets, e assim por diante,
    tornou-se claro que há momentos em que seria útil ao código Javascript ser capaz de manipular dados binários "brutos" em arrays tipados, de forma rápida e fácil.
    Entretanto, os arrays tipados não devem ser confundidos com arrays convencionais, já que invocar o método Array.isArray() em um array tipado retornará false.
    Além disso, nem todos os métodos disponíveis para arrays normais são suportados pelos arrays tipados (ex. push e pop).
*/
/*------------------------------------------------------*/
/*
    ----------Buffers e views: a arquitetura dos arrays tipados----------
    Para alcançar a máxima flexibilidade e eficiência, os arrays tipados do Javascript dividem sua implementação entre buffers e views. Um buffer
    (implementado pelo objeto ArrayBuffer) é um objeto que representa um fragmento (chunk) de dados; Não possui formato para ser discutido, e não oferece
    mecanismos para acessar seu conteúdo. Para acessar os dados contidos em um buffer, você precisa utilizar uma view. Uma view fornece um contexto — isto é,
    um tipo de dado, o deslocamento inicial, e o número de elementos — que transforma estes dados em um array tipado.

    -----ArrayBuffer-----
    O ArrayBuffer é um tipo de dado que é utilizado para representar um buffer genérico de dados binários, com comprimento fixo. Você não pode manipular
    diretamente o conteúdo de um ArrayBuffer; ao invés, você cria uma view de array tipado ou um objeto do tipo DataView, que representa o buffer em um formato
    específico, e os utiliza para ler e escrever no conteúdo do buffer.

    -----Views de arrays tipados-----
    As views de arrays tipados possuem nomes auto descritivos e fornecem exibições para todos os tipos numéricos habituais, como Int8, Uint32, Float64
    e assim por diante. Há uma view de array tipado especial, a view Uint8ClampedArray. Ela comporta os valores entre 0 e 255. Isto é útil no processamento
    de dados do Canvas, por exemplo.
    Type 	                Size in bytes 	    Description 	                            Web IDL type 	            Equivalent C type
    Int8Array 	            1 	                8-bit two's complement signed integer 	    byte 	                    int8_t
    Uint8Array 	            1 	                8-bit unsigned integer 	                    octet 	                    uint8_t
    Uint8ClampedArray 	    1 	                8-bit unsigned integer (clamped) 	        octet 	                    uint8_t
    Int16Array 	            2 	                16-bit two's complement signed integer 	    short 	                    int16_t
    Uint16Array 	        2 	                16-bit unsigned integer 	                unsigned short 	            uint16_t
    Int32Array 	            4 	                32-bit two's complement signed integer 	    long 	                    int32_t
    Uint32Array 	        4 	                32-bit unsigned integer 	                unsigned long 	            uint32_t
    Float32Array 	        4 	                32-bit IEEE floating point number 	        unrestricted float 	        float
    Float64Array 	        8 	                64-bit IEEE floating point number 	        unrestricted double 	    double

    -----DataView-----
    O objeto do tipo DataView é uma interface de baixo nível que fornece uma API no estilo getter/setter para ler e escrever dados arbitrários ao buffer.
    Isto é útil quando se está lidando com diferentes tipos de dados, por exemplo. As views de arrays tipados estão em ordem de bytes nativa (veja Endianness)
    da sua plataforma. Com uma DataView você é capaz de controlar a ordem dos bytes. Esta ordem é big-endian por padrão e pode ser alterada para little-endian
    através dos métodos getters e setters citados anteriormente.
*/
/*------------------------------------------------------*/
/*
    ----------Web APIs que utilizam arrays tipados----------
    FileReader.prototype.readAsArrayBuffer() -> O método FileReader.prototype.readAsArrayBuffer() inicia a leitura do conteúdo de um objeto
    do tipo Blob ou FIle especificado.
    XMLHttpRequest.prototype.send() -> O método send() das instâncias de XMLHttpRequest agora suportam arrays tipados e objetos do tipo ArrayBuffer como argumento.
    ImageData.data -> É objeto do tipo Uint8ClampedArray que representa uma matriz unidimensional que contém dados na ordem RGBA,
    com valores numéricos entre 0 e 255 inclusive. 
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    -----Utilizando views com buffers-----
    Primeiramente, nós precisamos criar um buffer, com um tamanho fixo de 16 bytes neste caso:
        var buffer = new ArrayBuffer(16);
    Neste ponto, nós temos um fragmento de memória cujos bytes estão todos pré-inicializados em 0. Não há muito que possamos fazer com isto, no entanto.
    Nós podemos confirmar que possuem de fato 16 bytes de comprimento, e isso é tudo sobre ele:
        if (buffer.byteLength === 16) {
            console.log('Sim, são 16 bytes.');
        } else {
            console.log('Ah não, o tamanho não está certo!');
        }
    Antes de realmente começarmos a trabalhar com este buffer, precisamos criar uma view. Vamos criar uma view que trata os dados neste buffer
    como um array de inteiros assinados de 32 bits:
        var int32View = new Int32Array(buffer);
    Agora nós podemos acessar os campos neste array assim como em um array convencional:
        for (var i = 0; i < int32View.length; i++) {
            int32View[i] = i * 2;
        }
    Isto preenche as 4 posições do array (4 posições com 4 bytes cada uma, produzindo um total de 16 bytes) com os valores 0, 2, 4 e 6.
    Multiplas views dos mesmos dadosSection
    As coisas começar a ficar realmente interessantes quando você considera que é possível criar múltiplas views para os mesmos dados.
    Por exemplo, dado o código acima, nós podemos continuar desta forma:
        var int16View = new Int16Array(buffer);
        for (var i = 0; i < int16View.length; i++) {
            console.log('Posição ' + i + ': ' + int16View[i]);
        }
    Aqui nós criamos uma view de inteiros de 16 bits que compartilha o mesmo buffer que a view de 32 bits existente, e emitimos todos os valores no buffer
    como inteiros de 16 bits. Agora nós obtemos a saída 0, 0, 2, 0, 4, 0, 6, 0.
    Você pode ir um pouco mais longe, no entanto. Considere isto:
        int16View[0] = 32;
        console.log('Entra 0 na matriz de 32 bits agora é ' + int32View[0]);
    A saída disso é "Entrada 0 na matriz de 32 bits agora é 32". Em outras palavras, as duas matrizes são, na verdade, apenas vistas no mesmo buffer de dados,
    tratando-as como formatos diferentes. Você pode fazer isso com qualquer tipo de visualização.
    Trabalhando com Estruturas de Dados ComplexasSection
    Ao combinar um único buffer com várias exibições de diferentes tipos, iniciando em diferentes deslocamentos no buffer, você pode interagir com objetos de
    dados contendo vários tipos de dados. Isso permite, por exemplo, interagir com estruturas de dados complexas de WebGL, arquivos de dados ou estruturas C
    que você precisa usar ao usar js-ctypes.
    Considere esta estrutura em C:
        struct someStruct {
            unsigned long id;
            char username[16];
            float amountDue;
        };
    Você pode acessar um buffer contendo dados neste formato assim:
        var buffer = new ArrayBuffer(24);
        // ... leia os dados no buffer ...
        var idView = new Uint32Array(buffer, 0, 1);
        var usernameView = new Uint8Array(buffer, 4, 16);
        var amountDueView = new Float32Array(buffer, 20, 1);
    Então você pode acessar, por exemplo, o devido valor com amountDueView[0].
    Nota: O alinhamento da estrutura de dados em uma estrutura em C depende da plataforma. Tome precauções e considerações para essas diferenças de preenchumento.
    Conversão para arrays normaisSection
    Depois de processar uma array tipada, às vezes é útil convertê-la de volta em uma array normal para se beneficiar do Array prototype. Isso pode ser feito
    usando Array.from, ou usando o seguinte código onde Array.from não é suportado.
        var typedArray = new Uint8Array([1, 2, 3, 4]),
            normalArray = Array.prototype.slice.call(typedArray);
        normalArray.length === 4;
        normalArray.constructor === Array;
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/