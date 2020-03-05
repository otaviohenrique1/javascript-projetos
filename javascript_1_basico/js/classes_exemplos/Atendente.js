class Atendente extends Funcionario {
    constructor(nome, dataNascimento, rg, cpf, endereco, bairro, cidade, estado, pais, nacionalidade,
        cargo, salario, login, senha, nivelAcessoSistema, horarioEntrada, horarioSaida, cargaHoraria) {
        super(nome, dataNascimento, rg, cpf, endereco, bairro, cidade, estado, pais, nacionalidade,
            cargo, salario, login, senha, nivelAcessoSistema, horarioEntrada, horarioSaida, cargaHoraria);
    }
}

/*
var atendente = new Atendente("nome", "dataNascimento", "rg", "cpf", "endereco", "bairro", "cidade", "estado", "pais", "nacionalidade",
    "cargo", "salario", "login", "senha", "nivelAcessoSistema", "horarioEntrada", "horarioSaida", "cargaHoraria");
*/