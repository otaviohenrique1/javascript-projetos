const botaoCadastrar = document.querySelector('#cadastrar');
const botaoLimpar = document.querySelector('#limpar');
const campoNomeVeiculo = document.querySelector('#campo-nome-veiculo');
const campoQuantidadeProduzida = document.querySelector('#campo-quantidade-produzida');
const campoPrecoUnidade = document.querySelector('#campo-preco-unidade');
const campoAnoIntroducao = document.querySelector('#campo-ano-introducao');
const campoPaisOrigem = document.querySelector('#campo-pais-origem');
const tabelaCorpo = document.querySelector('#tabela-corpo');

botaoCadastrar.addEventListener('click', () => {
    if (campoNomeVeiculo == "" || campoQuantidadeProduzida == "" || campoPrecoUnidade == "" ||
        campoAnoIntroducao == "" || campoPaisOrigem == "") {
        alert('Campos vazios');
    } else {
        alert('Veiculo cadastro');
        let nomeVeiculo = campoNomeVeiculo.value;
        let quantidadeProduzida = campoQuantidadeProduzida.value;
        let precoUnidade = campoPrecoUnidade.value;
        let anoIntroducao = campoAnoIntroducao.value;
        let paisOrigem = campoPaisOrigem.value;
        let trVeiculo = criaTr('linha-tabela-estilo', 'linha-tabela');
        let tdNomeVeiculo = criaTd('coluna-tabela-estilo', 'nome-veiculo', nomeVeiculo);
        let tdQuantidadeProduzida = criaTd('coluna-tabela-estilo', 'quantidade-produzida', quantidadeProduzida);
        let tdPrecoUnidade = criaTd('coluna-tabela-estilo', 'preco-unidade', precoUnidade);
        let tdAnoIntroducao = criaTd('coluna-tabela-estilo', 'ano-introducao', anoIntroducao);
        let tdPaisOrigem = criaTd('coluna-tabela-estilo', 'pais-origem', paisOrigem);
        trVeiculo.appendChild(tdNomeVeiculo);
        trVeiculo.appendChild(tdQuantidadeProduzida);
        trVeiculo.appendChild(tdPrecoUnidade);
        trVeiculo.appendChild(tdAnoIntroducao);
        trVeiculo.appendChild(tdPaisOrigem);
        tabelaCorpo.appendChild(trVeiculo);
    }
});

botaoLimpar.addEventListener('click', () => {
    campoNomeVeiculo.value = '';
    campoQuantidadeProduzida.value = '';
    campoPrecoUnidade.value = '';
    campoAnoIntroducao.value = '';
    campoPaisOrigem.value = '';
});

function criaTabela(classe, id) {
    let tabela = document.createElement("tr");
    tabela = document.setAttribute("class", classe);
    tabela = document.setAttribute("id", id);
    return tabela;
}

function criaTr(classe, id) {
    let tr = document.createElement("tr");
    tr = document.setAttribute("class", classe);
    tr = document.setAttribute("id", id);
    return tr;
}

function criaTd(classe, id, dado) {
    let td = document.createElement("tr");
    td = document.setAttribute("class", classe);
    td = document.setAttribute("id", id);
    td.value = dado;
    return td;
}

function criaTh(classe, id, dado) {
    let th = document.createElement("tr");
    th = document.setAttribute("class", classe);
    th = document.setAttribute("id", id);
    th.value = dado;
    return th;
}