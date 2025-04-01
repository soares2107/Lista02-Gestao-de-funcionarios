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
