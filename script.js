class Funcionario {
  constructor(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  getNome = () => this.nome;
  setNome = nome => this.nome = nome;

  getIdade = () => this.idade;
  setIdade = idade => this.idade = idade;

  getCargo = () => this.cargo;
  setCargo = cargo => this.cargo = cargo;

  getSalario = () => this.salario;
  setSalario = salario => this.salario = salario;

  toString = () => `${this.nome}, ${this.idade} anos, ${this.cargo}, R$ ${this.salario}`;
}

const funcionarios = [];
const form = document.getElementById('form-funcionario');
const tabelaBody = document.querySelector('#tabela-funcionarios tbody');
const indiceEdicao = document.getElementById('indice-edicao');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const salario = parseFloat(document.getElementById('salario').value);
  const indice = parseInt(indiceEdicao.value);

  if (indice >= 0) {
    let f = funcionarios[indice];
    f.setNome(nome);
    f.setIdade(idade);
    f.setCargo(cargo);
    f.setSalario(salario);
    indiceEdicao.value = -1;
  } else {
    funcionarios.push(new Funcionario(nome, idade, cargo, salario));
  }

  form.reset();
  atualizarTabela();
});

const atualizarTabela = () => {
  tabelaBody.innerHTML = '';

  funcionarios.forEach((f, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${f.getNome()}</td>
      <td>${f.getIdade()}</td>
      <td>${f.getCargo()}</td>
      <td>${f.getSalario().toFixed(2)}</td>
      <td>
        <button onclick="editarFuncionario(${index})">Editar</button>
        <button onclick="excluirFuncionario(${index})">Excluir</button>
      </td>
    `;
    tabelaBody.appendChild(row);
  });
};

const editarFuncionario = (index) => {
  const f = funcionarios[index];
  document.getElementById('nome').value = f.getNome();
  document.getElementById('idade').value = f.getIdade();
  document.getElementById('cargo').value = f.getCargo();
  document.getElementById('salario').value = f.getSalario();
  indiceEdicao.value = index;
};

const excluirFuncionario = (index) => {
  funcionarios.splice(index, 1);
  atualizarTabela();
};

// Busca por nome (case insensitive)
const buscarPorNome = nome =>
  funcionarios.find(f => f.getNome().toLowerCase() === nome.toLowerCase());

// Busca por cargo (case insensitive)
const buscarPorCargo = cargo =>
  funcionarios.filter(f => f.getCargo().toLowerCase() === cargo.toLowerCase());

const output = document.getElementById('relatorio-output');

// Relatório 1: Salários > R$ 5000
const listarSalariosAltos = () => {
const lista = funcionarios
  .filter(f => f.getSalario() > 5000)
  .map(f => f.toString());

output.innerHTML = lista.length > 0
  ? `<strong>Funcionários com salário > R$ 5000:</strong><br>${lista.join('<br>')}`
  : "Nenhum funcionário com salário acima de R$ 5000.";
};

// Relatório 2: Média Salarial
const mostrarMediaSalarial = () => {
if (funcionarios.length === 0) {
  output.innerHTML = "Não há funcionários cadastrados.";
  return;
}

const total = funcionarios.reduce((acc, f) => acc + f.getSalario(), 0);
const media = total / funcionarios.length;

output.innerHTML = `<strong>Média Salarial:</strong> R$ ${media.toFixed(2)}`;
};

// Relatório 3: Cargos únicos (sem repetição)
const listarCargosUnicos = () => {
const contagem = {};

// Conta quantas vezes cada cargo aparece
funcionarios.forEach(f => {
  const cargo = f.getCargo();
  contagem[cargo] = (contagem[cargo] || 0) + 1;
});

// Filtra apenas os cargos com contagem 1
const unicos = Object.keys(contagem).filter(cargo => contagem[cargo] === 1);

output.innerHTML = unicos.length > 0
  ? `<strong>Cargos únicos (ocupados por uma única pessoa):</strong> ${unicos.join(', ')}`
  : "Nenhum cargo é exclusivo de um único funcionário.";
};


// Relatório 4: Nomes em maiúsculo
const listarNomesMaiusculos = () => {
const nomes = funcionarios.map(f => f.getNome().toUpperCase());

output.innerHTML = `<strong>Nomes em maiúsculo:</strong><br>${nomes.join('<br>')}`;
};

