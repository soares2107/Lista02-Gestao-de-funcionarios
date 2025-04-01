class Funcionario {
  constructor(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  getNome() { return this.nome; }
  setNome(nome) { this.nome = nome; }

  getIdade() { return this.idade; }
  setIdade(idade) { this.idade = idade; }

  getCargo() { return this.cargo; }
  setCargo(cargo) { this.cargo = cargo; }

  getSalario() { return this.salario; }
  setSalario(salario) { this.salario = salario; }

  toString() {
    return `${this.nome}, ${this.idade} anos, ${this.cargo}, R$ ${this.salario}`;
  }
}

const funcionarios = [];
const form = document.getElementById('form-funcionario');
const tabelaBody = document.querySelector('#tabela-funcionarios tbody');
const indiceEdicao = document.getElementById('indice-edicao');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const salario = parseFloat(document.getElementById('salario').value);
  const indice = parseInt(indiceEdicao.value);

  if (indice >= 0) {
    let funcionario = funcionarios[indice];
    funcionario.setNome(nome);
    funcionario.setIdade(idade);
    funcionario.setCargo(cargo);
    funcionario.setSalario(salario);
    indiceEdicao.value = -1;
  } else {
    const novoFuncionario = new Funcionario(nome, idade, cargo, salario);
    funcionarios.push(novoFuncionario);
  }

  form.reset();
  atualizarTabela();
});

function atualizarTabela() {
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
}

function editarFuncionario(index) {
  const f = funcionarios[index];
  document.getElementById('nome').value = f.getNome();
  document.getElementById('idade').value = f.getIdade();
  document.getElementById('cargo').value = f.getCargo();
  document.getElementById('salario').value = f.getSalario();
  indiceEdicao.value = index;
}

function excluirFuncionario(index) {
  funcionarios.splice(index, 1);
  atualizarTabela();
}
