function criaTeclado() {
    for (let key in botoes) {
        var botao = document.createElement('button');
        var tecladoDiv = document.querySelector('.teclado');
        // botao.classList.add(botoes[key].classe);
        botao.setAttribute('id', botoes[key].classe);
        botao.classList.add('botao');
        botao.textContent = botoes[key].caractere;
        tecladoDiv.appendChild(botao);
    }
}