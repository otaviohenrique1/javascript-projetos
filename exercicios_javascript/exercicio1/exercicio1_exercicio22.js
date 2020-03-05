function comparaData(dataNascimento) {
    let dataAtual = '2018';
    let idade = dataAtual - dataNascimento;
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}