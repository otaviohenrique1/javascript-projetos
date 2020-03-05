class TabelaHTML {
    static criaEstruturaTabela(classe, id) {
        let table = document.createElement('table');
        table.classList.add(classe);
        table.setAttribute('id', id);
        return table;
    }

    static criaEstruturaTr(classe) {
        let tr = document.createElement('tr');
        tr.classList.add(classe);
        return tr;
    }

    static criaEstruturaThead(classe) {
        let thead = document.createElement('thead');
        thead.classList.add(classe);
        return thead;
    }

    static criaEstruturaTbody(classe) {
        let tbody = document.createElement('tbody');
        tbody.classList.add(classe);
        return tbody;
    }

    static criaEstruturaTrComVariosElementos(classe, quantidadeElementos, elemento, listaClasse = [], listaId = [], elementoDadoLista = []) {
        let tr = document.createElement('tr');
        tr.classList.add(classe);
        for (let i = 0; i < quantidadeElementos; i++) {
            let elemento1 = document.createElement(elemento);
            for (let a in  listaClasse) {
                elemento1.classList.add(listaClasse[a]);
            }
            for (let b in listaId) {
                elemento1.setAttribute('id', listaId[b]);
            }
            for (let c in elementoDadoLista) {
                elemento1.textContent = elementoDadoLista[c];
            }
            tr.appendChild(elemento1);
        }
        return tr;
    }

    /*
    static criaEstruturaTrComVariosElementos(classe, quantidadeElementos, elemento, listaClasse = [], listaId = [], elementoDadoLista = []) {
        let tr = document.createElement('tr');
        tr.classList.add(classe);
        for (let i = 0; i < quantidadeElementos; i++) {
            let elemento1 = document.createElement(elemento);
            for (let a = 0; a < listaClasse.length; a++) {
                elemento1.classList.add(listaClasse[a]);
            }
            for (let b = 0; b < elementoDadoLista.length; b++) {
                elemento1.setAttribute('id', listaId[b]);
            }
            for (let c = 0; c < elementoDadoLista.length; c++) {
                elemento1.textContent = elementoDadoLista[c];
            }
            tr.appendChild(elemento1);
        }
        return tr;
    }
    */

    static criaEstruturaTh(classe, dadoTh) {
        let th = document.createElement('th');
        th.classList.add(classe);
        th.textContent = dadoTh;
        return th;
    }

    static criaEstruturaTd(classe, id, dadoTd) {
        let td = document.createElement('td');
        td.classList.add(classe);
        td.setAttribute('id', id);
        td.textContent = dadoTd;
        return td;
    }
    
    static montaTabela(classeTable, idTable, classeThead, classeTbody, classeTrComTh, classeTrComTd, classeTh, dadoTh, classeTd, idTd, dadoTd) {
        let table = TabelaHTML.criaEstruturaTabela(classeTable, idTable);
        let trComTh = TabelaHTML.criaEstruturaTr(classeTrComTh);
        let trComTd = TabelaHTML.criaEstruturaTr(classeTrComTd);
        let thead = TabelaHTML.criaEstruturaThead(classeThead);
        let tbody = TabelaHTML.criaEstruturaTbody(classeTbody);
        let th = TabelaHTML.criaEstruturaTh(classeTh, dadoTh);
        let td = TabelaHTML.criaEstruturaTd(classeTd, idTd, dadoTd);

        trComTh.appendChild(th);
        trComTd.appendChild(td);

        thead.appendChild(trComTh);
        tbody.appendChild(trComTd);

        table.appendChild(thead);
        table.appendChild(tbody);

        return table;
    }
}

/*
let classeTable = 'tabela-produtos';
let idTable = 'tabela';
let classeThead = 'area-header-tabela';
let classeTbody = 'area-conteudo-tabela';
let classeTrComTh = 'header-tabela';
let classeTrComTd = 'conteudo-tabela';
let classeTh = 'titulo';
let dadoTh = 'Nome';
let classeTd = 'nome-produto';
let idTd = 'nome';
let dadoTd = 'Leite';
let tabela = TabelaHTML.montaTabela(classeTable, idTable, classeThead, classeTbody, classeTrComTh, classeTrComTd, classeTh, dadoTh, classeTd, idTd, dadoTd)
console.log(tabela);

let listaClasseTd = {
    classe1: 'nome-produto',
    classe2: 'codigo-produto',
    classe3: 'quantidade-produto'
};

let listaListaIdTd = {
    id1: 'nome',
    id2: 'codigo',
    id3: 'quantidade'
};

let listaElementoDadoListaTd = {
    nome: 'Leite',
    codigo: '1234567890',
    quantidade: '12'
};

let trComVariosTh = TabelaHTML.criaEstruturaTrComVariosElementos('classe', 3, 'td', listaClasseTd, listaListaIdTd, listaElementoDadoListaTd);
console.log(trComVariosTh);

let listaClasseTd = {
    classe: 'nome-produto',
    classe: 'codigo-produto',
    classe: 'quantidade-produto'
};

let listaListaIdTd = {
    id: 'nome',
    id: 'codigo',
    id: 'quantidade'
};

let listaElementoDadoListaTd = {
    dado: 'Leite',
    dado: '1234567890',
    dado: '12'
};

let trComVariosTh = TabelaHTML.criaEstruturaTrComVariosElementos('classe', 3, 'td', listaClasseTd, listaListaIdTd, listaElementoDadoListaTd);
console.log(trComVariosTh);
*/