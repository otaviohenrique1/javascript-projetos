/* --------------------Date-------------------- */
console.log('----------Date----------');
/*
    ----------Resumo----------
    Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados
    no valor de tempo que é o número de milisegundos desde 1 de Janeiro de 1970 (UTC).
*/
/*------------------------------------------------------*/
/*
    ----------Construtor----------
    new Date();
    new Date(valor);
    new Date(dataString);
    new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

    Note: Note que objetos JavaScript Date só podem ser instanciados chamando JavaScript Date como um construtor: chamá-lo como uma
    função regular (ou seja, sem o operador new) irá retornar uma string ao invés de um objeto Date; ao contrário de outros tipos de
    objetos JavaScript, objetos JavaScript Date não têm sintaxe literal.

    -----Parâmetros para o constructor Date-----
    Nota: Quando Date for chamado como um construtor com mais de um argumento, se os valores forem maiores do que seu limite lógico
    (e.g. se 13 for fornecido como um valor para mês ou 70 for o valor para minuto), o valor adjacente será ajustado. E.g. new Date(2013, 13, 1)
    é equivalente a new Date(2014, 1, 1), ambos criam uma data para 2014-02-01 (note que o mês começa em 0). Similarmente para outros
    valores: new Date(2013, 2, 1, 0, 70) é equivalente a new Date(2013, 2, 1, 1, 10), pois ambos criam uma data para 2013-03-01T01:10:00.
    
    value -> Um valor inteiro representando o número de milisegundos desde 1 de Janeiro de 1970 00:00:00 UTC (Era Unix ou Marco Zero).
    dataString -> Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método Date.parse()
    (IETF-compliant RFC 2822 timestamps e também uma versão da ISO8601).
    year -> Um valor inteiro que representa o ano. Valores de 0 a 99 correspondem aos anos de 1900 a 1999. Veja o exemplo abaixo.
    month -> Um valor inteiro que representa o mês, começando com 0 para Janeiro até 11 para Dezembro.
    day -> Um valor inteiro que representa o dia do mês.
    hour -> Um valor inteiro que representa a hora do dia.
    minute -> Um valor inteiro que representa o segmento de um minuto de tempo.
    second -> Um valor inteiro que representa o segmento de segundo do tempo.
    millisecond -> Um valor inteiro que representa o segmento de milisegundo do tempo.
*/
/*------------------------------------------------------*/
/*
    ----------Descrição----------
    -Se nenhum argumento for fornecido, o construtor criará um objeto JavaScript Date com a data e hora corrente de acordo com as configurações do sistema.
    -Se ao menos 2 argumentos forem fornecidos, os argumentos ausentes serão configurados como 1 (se o dia estiver ausente) ou 0 para todos os outros.
    -A data do JavaScript é baseada no valor de tempo em milisegundos desde a meia noite de 01 de Janeiro de 1970, UTC. Um dia corresponde a 86.400,000 milisegundos.
    O intervalo do objeto Date no JavaScript é de -100.000,000 dias a 100.000,000 dias relativo a 01 de Janeiro de 1970, UTC.
    -O objeto Date no JavaScript tem um comportamento uniforme nas plataformas. O valor do tempo pode ser transmitido entre sistemas para representar o mesmo instante
    no tempo e se for usado para criar um objeto de data local, ele refletirá o tempo local equivalente.
    -O objeto Date JavaScript suporta vários métodos UTC (universal), assim como métodos de tempo locais. UTC, também conhecido como Tempo Médio de
    Greenwich (Greenwich Mean Time, GMT), refere-se ao tempo como definido pelo Padrão de Tempo Mundial (World Time Standard). O tempo local é o tempo conhecido
    pelo computador onde o JavaScript é executado.
    -Invocar o objeto Date no JavaScript como uma função (i.e., sem o operador new) retornatá uma string representando a data e hora corrente.
*/
/*------------------------------------------------------*/
/*
    ----------Propriedades----------
    Date.prototype -> Permite adicionar propriedades a um objeto javaScript Date.
    Date.length -> O valor de Date.length é 7. Esse é o número de argumentos manipulados pelo construtor.
    Properties inherited from Function:
        arity, caller, constructor, length, name

*/
/*------------------------------------------------------*/
/*
    ----------Métodos----------
    Date.now() //Retorna o valor numérico correspondente ao tempo corrente - o número de milisegundos passados desde 1 de Janeiro de 1970 00:00:00 UTC,
    Sintaxe -> var timeInMs = Date.now();.
    Date.parse() //Analisa uma string que representa uma data e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00, hora local,
    Sintaxe -> Chamada direta: Date.parse(dateString), Chamada implícita: new Date(dateString).

    -----Date.parse()-----
    IPOdate.setTime(Date.parse('Aug 9, 1995'));
    Date.parse('Aug 9, 1995');
    Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');
    Date.parse('Wed, 09 Aug 1995 00:00:00');
    Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
    Date.parse('Thu, 01 Jan 1970 00:00:00');
    Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');
    
    Date.UTC() //Aceita os mesmos parâmetros como a forma mais longa do construtor (i.e. 2 até 7) e retorna o número de milisegundos desde
    1 de Janeiro, 1970, 00:00:00 UTC, Sintaxe -> Date.UTC(ano, mês[, dia[, hora[, minuto[, segundo[, milisegundo]]]]]).
    var dataUniversal = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
*/
/*------------------------------------------------------*/
/*
    ----------Instâncias JavaScript de Date----------
    Todas as instâncias Date são herdadas de Date.prototype. O objeto protótipo do construtor Date pode ser modificado para afetar todas as instâncias de Date.

    -----Métodos-----
    -----Getter-----
    let tempo1 = new Date();
    
    -Date.prototype.getDate() -> Returns the day of the month (1-31) for the specified date according to local time, Sintaxe -> dateObj.getDate().
    let diaDoMes = tempo1.getDate();
    console.log('Dia do mes: ' + diaDoMes);
    
    -Date.prototype.getDay() -> Returns the day of the week (0-6) for the specified date according to local time, Sintaxe -> dateObj.getDay().
    let diaDaSemana = tempo1.getDay();
    console.log('Dia do semana: ' + diaDaSemana);
    
    -Date.prototype.getFullYear() -> Returns the year (4 digits for 4-digit years) of the specified date according to local time, Sintaxe -> dateObj.getFullYear().
    let anoCompleto = tempo1.getFullYear();
    console.log('Ano completo: ' + anoCompleto);
    
    -Date.prototype.getHours() -> Returns the hour (0-23) in the specified date according to local time, Sintaxe -> dateObj.getHours().
    let hora = tempo1.getHours();
    console.log('Hora: ' + hora);
    
    -Date.prototype.getMilliseconds() -> Returns the milliseconds (0-999) in the specified date according to local time, Sintaxe -> dateObj.getMilliseconds().
    let millisegundos = tempo1.getMilliseconds();
    console.log('Millisegundos: ' + millisegundos);
    
    -Date.prototype.getMinutes() -> Returns the minutes (0-59) in the specified date according to local time, Sintaxe -> dateObj.getMinutes().
    let minuto = tempo1.getMinutes();
    console.log('Minuto: ' + minuto);
    
    -Date.prototype.getMonth() -> Returns the month (0-11) in the specified date according to local time, Sintaxe -> dateObj.getMonth().
    let mes = tempo1.getMonth();
    console.log('Mes: ' + mes);
    
    -Date.prototype.getSeconds() -> Returns the seconds (0-59) in the specified date according to local time, Sintaxe -> dateObj.getSeconds().
    let segundo = tempo1.getSeconds();
    console.log('Segundo: ' + segundo);
    
    -Date.prototype.getTime() -> Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC
    (negative for prior times), Sintaxe -> dateObj.getTime().
    let time = tempo1.getTime();
    console.log('Tempo: ' + time);
    
    -Date.prototype.getTimezoneOffset() -> Returns the time-zone offset in minutes for the current locale, Sintaxe -> dateObj.getTimezoneOffset().
    let timezoneOffset = tempo1.getTimezoneOffset();
    console.log('Timezone: ' + timezoneOffset);
    
    -Date.prototype.getUTCDate() -> Returns the day (date) of the month (1-31) in the specified date according to universal time, Sintaxe -> dateObj.getUTCDate().
    let diaDoMesUTC = tempo1.getUTCDate();
    console.log('Dia do mes UTC: ' + diaDoMesUTC);
    
    -Date.prototype.getUTCDay() -> Returns the day of the week (0-6) in the specified date according to universal time, Sintaxe -> dateObj.getUTCDay().
    let diaDaSemanaUTC = tempo1.getUTCDay();
    console.log('Dia da semana UTC: ' + diaDaSemanaUTC);
    
    -Date.prototype.getUTCFullYear() -> Returns the year (4 digits for 4-digit years) in the specified date according to universal time,
    Sintaxe -> dateObj.getUTCFullYear().
    let anoCompletoUTC = tempo1.getUTCFullYear();
    console.log('Ano completo UTC: ' + anoCompletoUTC);
    
    -Date.prototype.getUTCHours() -> Returns the hours (0-23) in the specified date according to universal time, Sintaxe -> dateObj.getUTCHours().
    let horaUTC = tempo1.getUTCHours();
    console.log('Hora UTC: ' + horaUTC);
    
    -Date.prototype.getUTCMilliseconds() -> Returns the milliseconds (0-999) in the specified date according to universal time, Sintaxe -> dateObj.getUTCMilliseconds().
    let millisegundosUTC = tempo1.getUTCMilliseconds();
    console.log('Millisegundos UTC: ' + millisegundosUTC);
    
    -Date.prototype.getUTCMinutes() -> Returns the minutes (0-59) in the specified date according to universal time, Sintaxe -> dateObj.getUTCMinutes().
    let minutoUTC = tempo1.getUTCMinutes();
    console.log('Minuto UTC: ' + minutoUTC);
    
    -Date.prototype.getUTCMonth() -> Returns the month (0-11) in the specified date according to universal time,Sintaxe -> dateObj.getUTCMonth().
    let mesUTC = tempo1.getUTCMonth();
    console.log('Mes UTC: ' + mesUTC);
    
    -Date.prototype.getUTCSeconds() -> Returns the seconds (0-59) in the specified date according to universal time, Sintaxe -> dateObj.getUTCSeconds().
    let segundoUTC = tempo1.getUTCSeconds();
    console.log('Segundo UTC: ' + segundoUTC);
    
    -Date.prototype.getYear() -> Returns the year (usually 2-3 digits) in the specified date according to local time. Use getFullYear() instead,
    Sintaxe -> dateObj.getYear().
    let anoSimples = tempo1.getYear();
    console.log('Ano simples: ' + anoSimples);

    -----Setter-----
    let tempo2 = new Date();
    
    -Date.prototype.setDate() -> Sets the day of the month for a specified date according to local time, Sintaxe -> dateObj.setDate(dayValue).
    tempo2.setDate(25);
    console.log('Dia do mes: ' + tempo2.getDate());
    
    -Date.prototype.setFullYear() -> Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time,
    Sintaxe -> dateObj.setFullYear(yearValue[, monthValue[, dateValue]]).
    tempo2.setFullYear(2018);
    console.log('Ano completo: ' + tempo2.getFullYear());
    
    -Date.prototype.setHours() -> Sets the hours for a specified date according to local time,
    Sintaxe -> dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]]),  Versões anteriores ao JavaScript 1.3 -> dateObj.setHours(hoursValue).
    tempo2.setHours(15);
    console.log('Hora: ' + tempo2.getHours());
    
    -Date.prototype.setMilliseconds() -> Sets the milliseconds for a specified date according to local time, Sintaxe -> dateObj.setMilliseconds(millisecondsValue).
    tempo2.setMilliseconds(100);
    console.log('Millisegundos: ' + tempo2.getMilliseconds());
    
    -Date.prototype.setMinutes() -> Sets the minutes for a specified date according to local time,
    Sintaxe -> dateObj.setMinutes(minutesValue[, secondsValue[, msValue]]), Versões anteriores ao JavaScript 1.3 -> dateObj.setMinutes(minutesValue).
    tempo2.setMinutes(45);
    console.log('Minutos: ' + tempo2.getMinutes());
    
    -Date.prototype.setMonth() -> Sets the month for a specified date according to local time, Sintaxe -> dateObj.setMonth(monthValue[, dayValue]),
    Versões anteriores ao JavaScript 1.3 -> dateObj.setMonth(monthValue).
    tempo2.setMonth(6);
    console.log('Mes: ' + tempo2.getMonth());
    
    -Date.prototype.setSeconds() -> Sets the seconds for a specified date according to local time, Sintaxe -> dateObj.setSeconds(secondsValue[, msValue]),
    Versões anteriores ao JavaScript 1.3 -> dateObj.setSeconds(secondsValue).
    tempo2.setSeconds(30);
    console.log('Segundo: ' + tempo2.getSeconds());
    
    -Date.prototype.setTime() -> Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC,
    allowing for negative numbers for times prior, Sintaxe -> dateObj.setTime(timeValue).
    let tempo3 = new Date('July 20, 2018');
    tempo2.setTime(tempo3);
    console.log('Tempo: ' + tempo2.getTime());
    
    -Date.prototype.setUTCDate() -> Sets the day of the month for a specified date according to universal time, Sintaxe -> dateObj.setUTCDate(dayValue).
    tempo2.setUTCDate(30);
    console.log('Dia do mes UTC: ' + tempo2.getUTCDate());
    
    -Date.prototype.setUTCFullYear() -> Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time,
    Sintaxe -> dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]]).
    tempo2.setUTCFullYear(2018);
    console.log('Ano completo UTC: ' + tempo2.getUTCFullYear());
    
    -Date.prototype.setUTCHours() -> Sets the hour for a specified date according to universal time,
    Sintaxe -> dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]]).
    tempo2.setUTCHours(15);
    console.log('Hora UTC: ' + tempo2.setUTCHours());
    
    -Date.prototype.setUTCMilliseconds() -> Sets the milliseconds for a specified date according to universal time,
    Sintaxe -> dateObj.setUTCMilliseconds(millisecondsValue).
    tempo2.setUTCMilliseconds(100);
    console.log('Millisegundos UTC: ' + tempo2.getUTCMilliseconds());
    
    -Date.prototype.setUTCMinutes() -> Sets the minutes for a specified date according to universal time,
    Sintaxe -> dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]]).
    tempo2.setUTCMinutes(45);
    console.log('Minutos UTC: ' + tempo2.getUTCMinutes());
    
    -Date.prototype.setUTCMonth() -> Sets the month for a specified date according to universal time,
    Sintaxe -> dateObj.setUTCMonth(monthValue[, dayValue]).
    tempo2.setUTCMonth(6);
    console.log('Mes UTC: ' + tempo2.getUTCMonth());
    
    -Date.prototype.setUTCSeconds() -> Sets the seconds for a specified date according to universal time,
    Sintaxe -> dateObj.setUTCSeconds(secondsValue[, msValue]).
    tempo2.setUTCSeconds(30);
    console.log('Segundo: ' + tempo2.getUTCSeconds());
    
    -Date.prototype.setYear()  -> Sets the year (usually 2-3 digits) for a specified date according to local time. Use setFullYear() instead,
    Sintaxe -> dateObj.setYear(yearValue).
    tempo2.setYear(2018);
    console.log('Ano simples UTC: ' + tempo2.getUTCYear());

    -----Conversion getter-----
    let tempo4 = new Date(2018, 5, 28, 14, 39, 7); 
    -Date.prototype.toDateString() -> Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018, Sintaxe -> dateObj.toDateString()'
    console.log(tempo4.toString());
    console.log(tempo4.toDateString());
    
    -Date.prototype.toISOString() -> Converts a date to a string following the ISO 8601 Extended Format, Sintaxe -> dateObj.toISOString().
    console.log(tempo4.toISOString());
    
    -Date.prototype.toJSON() -> Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify(), Sintaxe -> dateObj.toJSON().
    let jsonDate = (new Date()).toJSON();
    let tempo5 = new Date(jsonDate);
    console.log(jsonDate);
    
    -Date.prototype.toGMTString() -> Returns a string representing the Date based on the GMT (UT) time zone. Use toUTCString() instead, Sintaxe -> dateObj.toGMTString().
    let tempo6 = new Date();
    var str = tempo6.toGMTString();
    console.log(str);
    
    -Date.prototype.toLocaleDateString() -> Returns a string with a locality sensitive representation of the date portion of this date based on system settings, Sintaxe -> dateObj.toLocaleDateString([locales [, options]]).
    
    -----toLocaleDateString()-----
    var tempo7 = new Date(Date.UTC(2018, 11, 12, 3, 0, 0));
    console.log(tempo7.toLocaleDateString());
    
    -Date.prototype.toLocaleFormat() -> Converts a date to a string, using a format string, Sintaxe -> dateObj.toLocaleFormat(formatString).
    
    -Date.prototype.toLocaleString() -> Returns a string with a locality sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method, Sintaxe -> dateObj.toLocaleString([locales[, options]]).
    var tempo8 = new Date(Date.UTC(2018, 11, 12, 3, 0, 0));
    console.log(tempo8.toLocaleString());
    
    -Date.prototype.toLocaleTimeString() -> Returns a string with a locality sensitive representation of the time portion of this date based on system settings, Sintaxe -> dateObj.toLocaleTimeString([locales[, options]]).
    var tempo9 = new Date(Date.UTC(2018, 11, 12, 3, 0, 0));
    console.log(tempo8.toLocaleTimeString());
    
    -Date.prototype.toSource() -> Returns a string representing the source for an equivalent Date object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method, Sintaxe -> dateObj.toSource(), Date.toSource().
    
    -Date.prototype.toString() -> Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method, Sintaxe -> dateObj.toString().
    var tempo10 = new Date();
    var x = tempo10.toString();
    
    -Date.prototype.toTimeString() -> Returns the "time" portion of the Date as a human-readable string, Sintaxe -> dateObj.toString().
    var tempo11 = new Date(2018, 6, 28, 14, 39, 7);
    console.log(tempo11.toString());
    console.log(tempo11.toTimeString());
    
    -Date.prototype.toUTCString() -> Converts a date to a string using the UTC timezone, Sintaxe -> dateObj.toUTCString().
    var n_1 = new Date('Wed, 14 Jun 2018 00:00:00 PDT');
    var UTCstring = n_1.toUTCString();
    
    -Date.prototype.valueOf() -> Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method, Sintaxe -> dateObj.valueOf().
    var n_2 = new Date(56, 6, 17);
    var myVar = n_2.valueOf();
*/
/*------------------------------------------------------*/
/*
    ----------Exemplos----------
    -----Várias formas de se criar um objeto Date-----
    Os seguintes exemplos mostram várias formas de se criar datas em JavaScript: 
    Nota: a conversão de strings com o construtor de Date (Date.parse é equivalente ao contrutor) é fortemente desencorajada devido às inconsistências e diferenças dos navegadores.
    var n_1 = new Date();
    var birthday = new Date("December 17, 1995 03:24:00");
    var birthday = new Date("1995-12-17T03:24:00");
    var birthday = new Date(1995,11,17);
    var birthday = new Date(1995,11,17,3,24,0);

    -----Anos com dois dígitos mapeados para 1900 - 1999-----
    Para criar e obter datas entre os anos 0 e 99 os métodos Date.prototype.setFullYear() e Date.prototype.getFullYear() devem ser usados.
    
    var data = new Date(98, 1); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)
    // Métodos em desuso, 98 mapeia para 1998 aqui também
    data.setYear(98);           // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)
    
    data.setFullYear(98);       // Sab Fev 01 0098 00:00:00 GMT+0000 (BST)

    -----Calculando o tempo decorrido-----
    Os seguintes exemplos mostram como determinar o tempo decorrido entre duas datas no JavaScript em milissegundos.
    Devido aos tamanhos diferentes dos dias (devido à mudança do horário de verão), meses e dias, expressar o tempo decorrido em unidades maiores que horas, minutos e segundos requer analisar os problemas e deve ser cuidadosamente investigado antes de se tentar utilizar.
    // usando objetos Date
    var inicio = Date.now();
    
    // o evento para o tempo vai aqui:
    facaAlgoPorUmLongoTempo();
    var fim = Date.now();
    var decorrido = fim - inicio; // tempo decorrido em milisegundos
    // utilizando métodos embutidos
    var inicio = new Date();
    
    // o evento para o tempo vai aqui:
    facaAlgoPorUmLongoTempo();
    var fim = new Date();
    var decorrido = fim.getTime() - inicio.getTime(); // tempo decorrido em milisegundos
    // para testar uma função e obter o seu retorno
    function imprimirTempoDecorrido(fTeste) {
        var nHoraInicial = Date.now(), 
            vRetorno = fTeste(),
            nHoraFinal = Date.now();
    
        alert("Tempo decorrido: " + String(nHoraFinal - nHoraInicial) + " milisegundos");
        return vRetorno;
    }
    retornoDaSuaFuncao = imprimirTempoDecorrido(suaFuncao);
    Nota: Em navegadores que suportam a API de Desempenho Web (Web Performance API) com o recurso de tempo de alta resolução, Performance.now() pode fornecer medidas de tempo decorrido mais confiáveis e precisas do que Date.now().
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/