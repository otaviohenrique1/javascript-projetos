const botaoCadastrar = document.querySelector('#cadastrar');
botaoCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    let formulario = document.querySelector('#formulario');
    let dadosProduto = pegaDadosFormulario(formulario);

    let erros = validaFormulario(dadosProduto);
    if(erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }

    adicionaProdutoTabela(dadosProduto);
    
    formulario.reset();
    var mensagensErro = document.querySelector("#area-erros-validacao");
    mensagensErro.innerHTML = "";
});

function pegaDadosFormulario(formulario) {
    let dadosProduto = {
        nome: formulario.nome.value,
        codigo: CodigoProduto.geraCodigo(),
        quantidade: formulario.quantidade.value,
        preco: formulario.preco.value,
        marca: formulario.marca.value
    };
    return dadosProduto;
}

function validaFormulario(dados) {
    let validaNome = dados.nome == '' || dados.nome.length <= 0;
    let validaQuantidade = dados.quantidade == '' || dados.quantidade.length <= 0;
    let validaPreco = dados.preco == '' || dados.preco.length <= 0;
    let validaMarca = dados.marca == '' || dados.marca.length <= 0;
    let erros = [];
    if (validaNome) {
        erros.push('Campo nome vazio');
    }

    if (validaQuantidade) {
        erros.push('Campo quantidade vazio');
    }

    if (validaPreco) {
        erros.push('Campo preço vazio');
    }

    if (validaMarca) {
        erros.push('Campo marca vazio');
    }

    return erros;
}

function exibeMensagensErro(erros) {
    let ul = document.querySelector('#area-erros-validacao');
    ul.innerHTML = '';
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function criaTdProduto(id, dado) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.setAttribute('id', id);
    return td;
}

function criaBotaoTdProduto(id, texto) {
    let td = document.createElement('td');
    td.setAttribute('id', id);
    let botaoTd = document.createElement('button');
    botaoTd.setAttribute('id', id);
    botaoTd.textContent = texto;
    td.appendChild(botaoTd);
    return td;
}

function criaTrProduto(id, dado) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', id);
    tr.appendChild(criaTdProduto('nome-produto', dado.nome));
    tr.appendChild(criaTdProduto('codigo-produto', dado.codigo));
    tr.appendChild(criaTdProduto('quantidade-produto', dado.quantidade));
    tr.appendChild(criaTdProduto('preco-produto', dado.preco));
    tr.appendChild(criaTdProduto('marca-produto', dado.marca));
    return tr;
}

function adicionaProdutoTabela(dados) {
    let tabelaProdutos = document.querySelector('#tabela-produtos');
    let tr = criaTrProduto('produto', dados);
    tabelaProdutos.appendChild(tr);
}